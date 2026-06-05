const DEFAULT_BROWSER_MODEL = "Xenova/all-MiniLM-L6-v2";

const DEFAULT_TRANSFORMERS_URLS = [
  "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2",
  "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js",
  "https://unpkg.com/@xenova/transformers@2.17.2"
];

let featureExtractor = null;
let modelStatus = "idle";
let modelError = null;
let modelName = DEFAULT_BROWSER_MODEL;
let transformersUrls = [...DEFAULT_TRANSFORMERS_URLS];
let loadedFromUrl = null;
let pipelineOptions = {
  // Your vocabulary embeddings were precomputed with sentence-transformers.
  // Transformers.js otherwise prefers quantized ONNX models, which can produce
  // slightly different vectors. This keeps the browser side closer to the
  // Python embeddings, at the cost of a larger first model download.
  quantized: false
};

export function getEmbeddingStatus() {
  return {
    status: modelStatus,
    error: normalizeError(modelError),
    modelName,
    transformersUrls,
    loadedFromUrl,
    pipelineOptions
  };
}

export async function initEmbeddingService(options = {}) {
  modelName = options.modelName || modelName;

  if (options.transformersUrl) {
    transformersUrls = [options.transformersUrl];
  } else if (Array.isArray(options.transformersUrls) && options.transformersUrls.length) {
    transformersUrls = options.transformersUrls;
  }

  pipelineOptions = {
    ...pipelineOptions,
    ...(options.pipelineOptions || {})
  };

  if (featureExtractor) {
    modelStatus = "ready";
    return getEmbeddingStatus();
  }

  modelStatus = "loading";
  modelError = null;
  loadedFromUrl = null;

  const errors = [];

  for (const url of transformersUrls) {
    try {
      const transformers = await import(/* @vite-ignore */ url);

      if (!transformers?.pipeline) {
        throw new Error(`Transformers module loaded from ${url}, but no pipeline export was found.`);
      }

      featureExtractor = await transformers.pipeline(
        "feature-extraction",
        modelName,
        pipelineOptions
      );

      modelStatus = "ready";
      loadedFromUrl = url;
      modelError = null;
      return getEmbeddingStatus();
    } catch (error) {
      errors.push(`${url}: ${normalizeError(error)}`);
    }
  }

  modelStatus = "error";
  modelError = new Error(errors.join(" | "));
  throw modelError;
}

export async function embedText(text) {
  if (!featureExtractor) {
    await initEmbeddingService();
  }

  const output = await featureExtractor(String(text || ""), {
    pooling: "mean",
    normalize: true
  });

  return Array.from(output.data).map(Number);
}

export async function embedTextWithRetry(text, options = {}) {
  const retryLimit = options.retryLimit ?? 2;
  const baseDelayMs = options.baseDelayMs ?? 250;
  let lastError = null;

  for (let attempt = 0; attempt <= retryLimit; attempt += 1) {
    try {
      return await embedText(text);
    } catch (error) {
      lastError = error;
      // A failed first load should not permanently poison the next attempt.
      // Clear the partial pipeline reference, but leave the status/error for UI/debugging.
      featureExtractor = null;
      if (attempt < retryLimit) {
        await wait(baseDelayMs * (attempt + 1));
      }
    }
  }

  throw lastError;
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function normalizeError(error) {
  if (!error) return null;
  if (typeof error === "string") return error;
  if (error.message) return error.message;
  return String(error);
}
