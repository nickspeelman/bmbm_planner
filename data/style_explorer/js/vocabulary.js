// js/vocabulary.js
// Generated from scored_style_terms.csv by the vocabulary build notebook.
// Do not hand-edit this file. Regenerate it from the notebook.

window.STYLE_VOCABULARY_PAYLOAD = {
  "schemaVersion": "0.2.0",
  "generatedAt": "2026-06-01T18:23:03.533541+00:00",
  "sourceFile": "scored_style_terms.csv",
  "dimensions": [
    {
      "id": "delicate_bold",
      "scoreColumn": "delicate_bold_score_norm",
      "label": "Delicate ↔ Bold",
      "negativePole": "Delicate",
      "positivePole": "Bold"
    },
    {
      "id": "classic_unexpected",
      "scoreColumn": "classic_unexpected_score_norm",
      "label": "Classic ↔ Unexpected",
      "negativePole": "Classic",
      "positivePole": "Unexpected"
    },
    {
      "id": "minimal_ornate",
      "scoreColumn": "minimal_ornate_score_norm",
      "label": "Minimal ↔ Ornate",
      "negativePole": "Minimal",
      "positivePole": "Ornate"
    },
    {
      "id": "soft_sharp",
      "scoreColumn": "soft_sharp_score_norm",
      "label": "Soft ↔ Sharp",
      "negativePole": "Soft",
      "positivePole": "Sharp"
    },
    {
      "id": "romantic_edgy",
      "scoreColumn": "romantic_edgy_score_norm",
      "label": "Romantic ↔ Edgy",
      "negativePole": "Romantic",
      "positivePole": "Edgy"
    },
    {
      "id": "organic_geometric",
      "scoreColumn": "organic_geometric_score_norm",
      "label": "Organic ↔ Geometric",
      "negativePole": "Organic",
      "positivePole": "Geometric"
    },
    {
      "id": "playful_refined",
      "scoreColumn": "playful_refined_score_norm",
      "label": "Playful ↔ Refined",
      "negativePole": "Playful",
      "positivePole": "Refined"
    },
    {
      "id": "everyday_special_occasion",
      "scoreColumn": "everyday_special_occasion_score_norm",
      "label": "Everyday ↔ Special Occasion",
      "negativePole": "Everyday",
      "positivePole": "Special Occasion"
    },
    {
      "id": "lowkey_statement",
      "scoreColumn": "lowkey_statement_score_norm",
      "label": "Low-key ↔ Statement",
      "negativePole": "Low-key",
      "positivePole": "Statement"
    },
    {
      "id": "grounded_ethereal",
      "scoreColumn": "grounded_ethereal_score_norm",
      "label": "Grounded ↔ Ethereal",
      "negativePole": "Grounded",
      "positivePole": "Ethereal"
    }
  ],
  "badFitLogic": {
    "sourcePool": "badFitEligible",
    "description": "Bad-fit choices use the same vocabulary as the initial screen. At runtime, remove terms the client already selected positively. These terms are not negative; they mean wrong direction for me.",
    "excludePositiveSelectionsAtRuntime": true,
    "requiresTooPhrases": false
  },
  "pools": {
    "initialScreen": [
      {
        "id": "unconventional",
        "term": "Unconventional",
        "cleanTerm": "unconventional",
        "dedupeKey": "unconventional",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 14,
        "scores": {
          "delicate_bold": 0.2391,
          "classic_unexpected": 1.0,
          "minimal_ornate": -0.2912,
          "soft_sharp": -0.038,
          "romantic_edgy": 0.6352,
          "organic_geometric": -0.3774,
          "playful_refined": -0.2326,
          "everyday_special_occasion": -0.0139,
          "lowkey_statement": -0.1039,
          "grounded_ethereal": 0.1095
        },
        "metrics": {
          "vectorStrength": 1.3291,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3289
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "confident",
        "term": "Confident",
        "cleanTerm": "confident",
        "dedupeKey": "confident",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.8006,
          "classic_unexpected": -0.0335,
          "minimal_ornate": -0.2924,
          "soft_sharp": -0.0819,
          "romantic_edgy": 0.0326,
          "organic_geometric": 0.0677,
          "playful_refined": 0.155,
          "everyday_special_occasion": -0.0098,
          "lowkey_statement": -0.0741,
          "grounded_ethereal": -0.2836
        },
        "metrics": {
          "vectorStrength": 0.9219,
          "maxAbsScore": 0.8006,
          "focusRatio": 0.4372
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.8006
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dainty",
        "term": "Dainty",
        "cleanTerm": "dainty",
        "dedupeKey": "dainty",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -1.0,
          "classic_unexpected": -0.3011,
          "minimal_ornate": 0.0934,
          "soft_sharp": -0.1358,
          "romantic_edgy": -0.5311,
          "organic_geometric": -0.1515,
          "playful_refined": 0.0213,
          "everyday_special_occasion": -0.0588,
          "lowkey_statement": -0.544,
          "grounded_ethereal": 0.0356
        },
        "metrics": {
          "vectorStrength": 1.313,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3481
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "effortless",
        "term": "Effortless",
        "cleanTerm": "effortless",
        "dedupeKey": "effortless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0419,
          "classic_unexpected": -0.2431,
          "minimal_ornate": -0.5779,
          "soft_sharp": -0.52,
          "romantic_edgy": -0.1811,
          "organic_geometric": -0.3444,
          "playful_refined": 0.1399,
          "everyday_special_occasion": -0.9737,
          "lowkey_statement": -0.3234,
          "grounded_ethereal": 0.1835
        },
        "metrics": {
          "vectorStrength": 1.3865,
          "maxAbsScore": 0.9737,
          "focusRatio": 0.2759
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.9737
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "celebration",
        "term": "Celebration",
        "cleanTerm": "celebration",
        "dedupeKey": "celebration",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2405,
          "classic_unexpected": -0.1496,
          "minimal_ornate": 0.0652,
          "soft_sharp": -0.0857,
          "romantic_edgy": -0.1287,
          "organic_geometric": 0.107,
          "playful_refined": -0.0466,
          "everyday_special_occasion": 0.899,
          "lowkey_statement": 0.3974,
          "grounded_ethereal": 0.1412
        },
        "metrics": {
          "vectorStrength": 1.0526,
          "maxAbsScore": 0.899,
          "focusRatio": 0.3976
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "celestial",
        "term": "Celestial",
        "cleanTerm": "celestial",
        "dedupeKey": "celestial",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0973,
          "classic_unexpected": -0.2465,
          "minimal_ornate": 0.1047,
          "soft_sharp": -0.395,
          "romantic_edgy": -0.241,
          "organic_geometric": -0.1812,
          "playful_refined": 0.0504,
          "everyday_special_occasion": 0.2288,
          "lowkey_statement": 0.0213,
          "grounded_ethereal": 0.9696
        },
        "metrics": {
          "vectorStrength": 1.1505,
          "maxAbsScore": 0.9696,
          "focusRatio": 0.3824
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.9696
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "rooted",
        "term": "Rooted",
        "cleanTerm": "rooted",
        "dedupeKey": "rooted",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.2845,
          "classic_unexpected": -0.1335,
          "minimal_ornate": -0.1133,
          "soft_sharp": 0.0433,
          "romantic_edgy": 0.1811,
          "organic_geometric": -0.3351,
          "playful_refined": 0.3483,
          "everyday_special_occasion": 0.2206,
          "lowkey_statement": 0.1761,
          "grounded_ethereal": -0.9409
        },
        "metrics": {
          "vectorStrength": 1.1597,
          "maxAbsScore": 0.9409,
          "focusRatio": 0.3389
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.9409
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "subtle",
        "term": "Subtle",
        "cleanTerm": "subtle",
        "dedupeKey": "subtle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.5733,
          "classic_unexpected": 0.2733,
          "minimal_ornate": -0.1745,
          "soft_sharp": -0.2359,
          "romantic_edgy": -0.2799,
          "organic_geometric": -0.233,
          "playful_refined": 0.2751,
          "everyday_special_occasion": -0.1215,
          "lowkey_statement": -0.894,
          "grounded_ethereal": 0.0685
        },
        "metrics": {
          "vectorStrength": 1.2314,
          "maxAbsScore": 0.894,
          "focusRatio": 0.2857
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.894
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "standout",
        "term": "Standout",
        "cleanTerm": "standout",
        "dedupeKey": "standout",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.5226,
          "classic_unexpected": -0.0716,
          "minimal_ornate": -0.252,
          "soft_sharp": 0.226,
          "romantic_edgy": 0.3407,
          "organic_geometric": 0.2489,
          "playful_refined": 0.386,
          "everyday_special_occasion": 0.4426,
          "lowkey_statement": 1.0,
          "grounded_ethereal": -0.0073
        },
        "metrics": {
          "vectorStrength": 1.3842,
          "maxAbsScore": 1.0,
          "focusRatio": 0.2859
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "simple",
        "term": "Simple",
        "cleanTerm": "simple",
        "dedupeKey": "simple",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1609,
          "classic_unexpected": -0.3606,
          "minimal_ornate": -0.9988,
          "soft_sharp": -0.4072,
          "romantic_edgy": -0.2299,
          "organic_geometric": 0.0478,
          "playful_refined": 0.1642,
          "everyday_special_occasion": -0.2729,
          "lowkey_statement": -0.3002,
          "grounded_ethereal": -0.258
        },
        "metrics": {
          "vectorStrength": 1.2777,
          "maxAbsScore": 0.9988,
          "focusRatio": 0.3121
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.9988
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "decorative",
        "term": "Decorative",
        "cleanTerm": "decorative",
        "dedupeKey": "decorative",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0332,
          "classic_unexpected": -0.1901,
          "minimal_ornate": 0.9504,
          "soft_sharp": 0.0254,
          "romantic_edgy": -0.3442,
          "organic_geometric": 0.2453,
          "playful_refined": 0.1068,
          "everyday_special_occasion": 0.4871,
          "lowkey_statement": -0.0308,
          "grounded_ethereal": 0.1475
        },
        "metrics": {
          "vectorStrength": 1.1795,
          "maxAbsScore": 0.9504,
          "focusRatio": 0.3711
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9504
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "structured",
        "term": "Structured",
        "cleanTerm": "structured",
        "dedupeKey": "structured",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0213,
          "classic_unexpected": -0.5073,
          "minimal_ornate": -0.171,
          "soft_sharp": -0.2464,
          "romantic_edgy": -0.0554,
          "organic_geometric": 0.7599,
          "playful_refined": 0.5588,
          "everyday_special_occasion": 0.2064,
          "lowkey_statement": -0.0719,
          "grounded_ethereal": -0.172
        },
        "metrics": {
          "vectorStrength": 1.148,
          "maxAbsScore": 0.7599,
          "focusRatio": 0.2743
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.7599
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "botanical",
        "term": "Botanical",
        "cleanTerm": "botanical",
        "dedupeKey": "botanical",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0077,
          "classic_unexpected": -0.0438,
          "minimal_ornate": 0.1598,
          "soft_sharp": -0.2745,
          "romantic_edgy": -0.0932,
          "organic_geometric": -0.9501,
          "playful_refined": 0.1645,
          "everyday_special_occasion": 0.0872,
          "lowkey_statement": -0.1114,
          "grounded_ethereal": -0.0899
        },
        "metrics": {
          "vectorStrength": 1.0341,
          "maxAbsScore": 0.9501,
          "focusRatio": 0.4793
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.9501
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "quirky",
        "term": "Quirky",
        "cleanTerm": "quirky",
        "dedupeKey": "quirky",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1087,
          "classic_unexpected": 0.6909,
          "minimal_ornate": 0.0192,
          "soft_sharp": 0.1649,
          "romantic_edgy": 0.1892,
          "organic_geometric": -0.2932,
          "playful_refined": -0.969,
          "everyday_special_occasion": 0.069,
          "lowkey_statement": -0.2657,
          "grounded_ethereal": -0.1049
        },
        "metrics": {
          "vectorStrength": 1.2899,
          "maxAbsScore": 0.969,
          "focusRatio": 0.3371
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.969
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "polished",
        "term": "Polished",
        "cleanTerm": "polished",
        "dedupeKey": "polished",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0414,
          "classic_unexpected": -0.8438,
          "minimal_ornate": -0.1786,
          "soft_sharp": 0.1464,
          "romantic_edgy": -0.2588,
          "organic_geometric": 0.3184,
          "playful_refined": 1.0,
          "everyday_special_occasion": 0.0039,
          "lowkey_statement": -0.0972,
          "grounded_ethereal": -0.1834
        },
        "metrics": {
          "vectorStrength": 1.4066,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3255
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "sophisticated",
        "term": "Sophisticated",
        "cleanTerm": "sophisticated",
        "dedupeKey": "sophisticated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.0438,
          "classic_unexpected": -0.2009,
          "minimal_ornate": 0.1415,
          "soft_sharp": 0.0126,
          "romantic_edgy": -0.0839,
          "organic_geometric": 0.0882,
          "playful_refined": 0.9361,
          "everyday_special_occasion": 0.1799,
          "lowkey_statement": -0.3567,
          "grounded_ethereal": 0.0247
        },
        "metrics": {
          "vectorStrength": 1.0554,
          "maxAbsScore": 0.9361,
          "focusRatio": 0.4526
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.9361
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "tough",
        "term": "Tough",
        "cleanTerm": "tough",
        "dedupeKey": "tough",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.2917,
          "classic_unexpected": 0.0502,
          "minimal_ornate": -0.2408,
          "soft_sharp": -0.0696,
          "romantic_edgy": 0.7899,
          "organic_geometric": -0.1644,
          "playful_refined": 0.1175,
          "everyday_special_occasion": -0.114,
          "lowkey_statement": -0.1532,
          "grounded_ethereal": -0.2612
        },
        "metrics": {
          "vectorStrength": 0.9591,
          "maxAbsScore": 0.7899,
          "focusRatio": 0.3507
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dreamy",
        "term": "Dreamy",
        "cleanTerm": "dreamy",
        "dedupeKey": "dreamy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1622,
          "classic_unexpected": -0.1043,
          "minimal_ornate": 0.095,
          "soft_sharp": -0.5944,
          "romantic_edgy": -0.9503,
          "organic_geometric": -0.2775,
          "playful_refined": -0.2161,
          "everyday_special_occasion": -0.0667,
          "lowkey_statement": -0.3953,
          "grounded_ethereal": 0.5374
        },
        "metrics": {
          "vectorStrength": 1.3696,
          "maxAbsScore": 0.9503,
          "focusRatio": 0.2796
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9503
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "spike",
        "term": "Spike",
        "cleanTerm": "spike",
        "dedupeKey": "spike",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1873,
          "classic_unexpected": 0.1151,
          "minimal_ornate": -0.0117,
          "soft_sharp": 0.7798,
          "romantic_edgy": 0.3515,
          "organic_geometric": -0.0154,
          "playful_refined": 0.0635,
          "everyday_special_occasion": 0.2424,
          "lowkey_statement": 0.3029,
          "grounded_ethereal": -0.3236
        },
        "metrics": {
          "vectorStrength": 1.0196,
          "maxAbsScore": 0.7798,
          "focusRatio": 0.3259
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.7798
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "gentle",
        "term": "Gentle",
        "cleanTerm": "gentle",
        "dedupeKey": "gentle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3499,
          "classic_unexpected": -0.2537,
          "minimal_ornate": -0.5867,
          "soft_sharp": -0.9486,
          "romantic_edgy": -0.5475,
          "organic_geometric": -0.3634,
          "playful_refined": 0.1978,
          "everyday_special_occasion": -0.4005,
          "lowkey_statement": -0.8523,
          "grounded_ethereal": -0.3366
        },
        "metrics": {
          "vectorStrength": 1.7035,
          "maxAbsScore": 0.9486,
          "focusRatio": 0.1961
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.9486
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      }
    ],
    "badFitEligible": [
      {
        "id": "classic",
        "term": "Classic",
        "cleanTerm": "classic",
        "dedupeKey": "classic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2118,
          "classic_unexpected": -0.8032,
          "minimal_ornate": -0.4848,
          "soft_sharp": -0.2181,
          "romantic_edgy": -0.1528,
          "organic_geometric": 0.2517,
          "playful_refined": 0.3047,
          "everyday_special_occasion": 0.1391,
          "lowkey_statement": 0.2023,
          "grounded_ethereal": 0.0204
        },
        "metrics": {
          "vectorStrength": 1.1013,
          "maxAbsScore": 0.8032,
          "focusRatio": 0.288
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.8032
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unorthodox",
        "term": "Unorthodox",
        "cleanTerm": "unorthodox",
        "dedupeKey": "unorthodox",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1579,
          "classic_unexpected": 0.871,
          "minimal_ornate": -0.3214,
          "soft_sharp": 0.2057,
          "romantic_edgy": 0.7275,
          "organic_geometric": -0.2381,
          "playful_refined": -0.1277,
          "everyday_special_occasion": 0.0183,
          "lowkey_statement": -0.0906,
          "grounded_ethereal": -0.0349
        },
        "metrics": {
          "vectorStrength": 1.2414,
          "maxAbsScore": 0.871,
          "focusRatio": 0.3118
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.871
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": false,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "impactful",
        "term": "Impactful",
        "cleanTerm": "impactful",
        "dedupeKey": "impactful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.6838,
          "classic_unexpected": 0.2368,
          "minimal_ornate": 0.0731,
          "soft_sharp": 0.0305,
          "romantic_edgy": 0.1627,
          "organic_geometric": -0.0867,
          "playful_refined": -0.0986,
          "everyday_special_occasion": 0.0805,
          "lowkey_statement": 0.3134,
          "grounded_ethereal": -0.0114
        },
        "metrics": {
          "vectorStrength": 0.8237,
          "maxAbsScore": 0.6838,
          "focusRatio": 0.3847
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6838
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "delicate",
        "term": "Delicate",
        "cleanTerm": "delicate",
        "dedupeKey": "delicate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.6663,
          "classic_unexpected": -0.3264,
          "minimal_ornate": 0.2676,
          "soft_sharp": -0.3264,
          "romantic_edgy": -0.5147,
          "organic_geometric": -0.1909,
          "playful_refined": 0.3455,
          "everyday_special_occasion": -0.0033,
          "lowkey_statement": -0.6405,
          "grounded_ethereal": 0.07
        },
        "metrics": {
          "vectorStrength": 1.2508,
          "maxAbsScore": 0.6663,
          "focusRatio": 0.1988
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.6663
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "weightless",
        "term": "Weightless",
        "cleanTerm": "weightless",
        "dedupeKey": "weightless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.172,
          "classic_unexpected": -0.1578,
          "minimal_ornate": -0.5732,
          "soft_sharp": -0.3783,
          "romantic_edgy": -0.0447,
          "organic_geometric": -0.0418,
          "playful_refined": -0.018,
          "everyday_special_occasion": -0.6724,
          "lowkey_statement": -0.2891,
          "grounded_ethereal": 0.374
        },
        "metrics": {
          "vectorStrength": 1.0981,
          "maxAbsScore": 0.6724,
          "focusRatio": 0.2471
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.6724
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "memorable",
        "term": "Memorable",
        "cleanTerm": "memorable",
        "dedupeKey": "memorable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.556,
          "classic_unexpected": -0.092,
          "minimal_ornate": -0.1238,
          "soft_sharp": -0.1404,
          "romantic_edgy": -0.3051,
          "organic_geometric": -0.044,
          "playful_refined": -0.1031,
          "everyday_special_occasion": 0.5962,
          "lowkey_statement": 0.271,
          "grounded_ethereal": 0.0445
        },
        "metrics": {
          "vectorStrength": 0.9429,
          "maxAbsScore": 0.5962,
          "focusRatio": 0.2619
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5962
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "moonlit",
        "term": "Moonlit",
        "cleanTerm": "moonlit",
        "dedupeKey": "moonlit",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.2145,
          "classic_unexpected": -0.2405,
          "minimal_ornate": -0.0086,
          "soft_sharp": -0.4012,
          "romantic_edgy": -0.4386,
          "organic_geometric": -0.1795,
          "playful_refined": 0.0797,
          "everyday_special_occasion": 0.2113,
          "lowkey_statement": -0.1565,
          "grounded_ethereal": 1.0
        },
        "metrics": {
          "vectorStrength": 1.251,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3413
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "roots",
        "term": "Roots",
        "cleanTerm": "roots",
        "dedupeKey": "roots",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.0765,
          "classic_unexpected": -0.0781,
          "minimal_ornate": -0.2293,
          "soft_sharp": -0.1045,
          "romantic_edgy": 0.2692,
          "organic_geometric": -0.3322,
          "playful_refined": 0.1165,
          "everyday_special_occasion": -0.0332,
          "lowkey_statement": 0.2035,
          "grounded_ethereal": -0.8619
        },
        "metrics": {
          "vectorStrength": 1.0282,
          "maxAbsScore": 0.8619,
          "focusRatio": 0.3739
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.8619
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "showcasing",
        "term": "Showcasing",
        "cleanTerm": "showcasing",
        "dedupeKey": "showcasing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.3584,
          "classic_unexpected": -0.03,
          "minimal_ornate": 0.076,
          "soft_sharp": 0.045,
          "romantic_edgy": 0.0303,
          "organic_geometric": 0.3533,
          "playful_refined": 0.2119,
          "everyday_special_occasion": 0.4233,
          "lowkey_statement": 0.6534,
          "grounded_ethereal": 0.0922
        },
        "metrics": {
          "vectorStrength": 0.9604,
          "maxAbsScore": 0.6534,
          "focusRatio": 0.2874
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.6534
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "calm",
        "term": "Calm",
        "cleanTerm": "calm",
        "dedupeKey": "calm",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.0819,
          "classic_unexpected": -0.1899,
          "minimal_ornate": -0.7842,
          "soft_sharp": -0.5901,
          "romantic_edgy": -0.261,
          "organic_geometric": -0.1739,
          "playful_refined": 0.1593,
          "everyday_special_occasion": -0.3153,
          "lowkey_statement": -0.7472,
          "grounded_ethereal": -0.6518
        },
        "metrics": {
          "vectorStrength": 1.4873,
          "maxAbsScore": 0.7842,
          "focusRatio": 0.1983
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.7842
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "minimal",
        "term": "Minimal",
        "cleanTerm": "minimal",
        "dedupeKey": "minimal",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.5288,
          "classic_unexpected": -0.022,
          "minimal_ornate": -0.6308,
          "soft_sharp": -0.1755,
          "romantic_edgy": 0.0733,
          "organic_geometric": 0.0966,
          "playful_refined": 0.1874,
          "everyday_special_occasion": -0.0077,
          "lowkey_statement": -0.4859,
          "grounded_ethereal": 0.0121
        },
        "metrics": {
          "vectorStrength": 0.9975,
          "maxAbsScore": 0.6308,
          "focusRatio": 0.2841
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.6308
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "ornate",
        "term": "Ornate",
        "cleanTerm": "ornate",
        "dedupeKey": "ornate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0181,
          "classic_unexpected": -0.338,
          "minimal_ornate": 0.9972,
          "soft_sharp": 0.0205,
          "romantic_edgy": -0.1918,
          "organic_geometric": 0.136,
          "playful_refined": 0.5521,
          "everyday_special_occasion": 0.4798,
          "lowkey_statement": -0.018,
          "grounded_ethereal": 0.2597
        },
        "metrics": {
          "vectorStrength": 1.3295,
          "maxAbsScore": 0.9972,
          "focusRatio": 0.3312
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9972
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "framework",
        "term": "Framework",
        "cleanTerm": "framework",
        "dedupeKey": "framework",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0103,
          "classic_unexpected": -0.2583,
          "minimal_ornate": -0.1782,
          "soft_sharp": -0.2303,
          "romantic_edgy": 0.2141,
          "organic_geometric": 0.4971,
          "playful_refined": 0.217,
          "everyday_special_occasion": 0.0657,
          "lowkey_statement": 0.1714,
          "grounded_ethereal": -0.0839
        },
        "metrics": {
          "vectorStrength": 0.7297,
          "maxAbsScore": 0.4971,
          "focusRatio": 0.2581
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.4971
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "unused"
        }
      },
      {
        "id": "natural",
        "term": "Natural",
        "cleanTerm": "natural",
        "dedupeKey": "natural",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.0942,
          "classic_unexpected": -0.0934,
          "minimal_ornate": -0.3506,
          "soft_sharp": -0.3787,
          "romantic_edgy": -0.0678,
          "organic_geometric": -1.0,
          "playful_refined": 0.1034,
          "everyday_special_occasion": -0.4195,
          "lowkey_statement": -0.2721,
          "grounded_ethereal": -0.3684
        },
        "metrics": {
          "vectorStrength": 1.2981,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3177
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "whimsical",
        "term": "Whimsical",
        "cleanTerm": "whimsical",
        "dedupeKey": "whimsical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.2468,
          "classic_unexpected": 0.2782,
          "minimal_ornate": 0.225,
          "soft_sharp": -0.2108,
          "romantic_edgy": -0.3744,
          "organic_geometric": -0.3653,
          "playful_refined": -0.9708,
          "everyday_special_occasion": -0.0687,
          "lowkey_statement": -0.3536,
          "grounded_ethereal": 0.3024
        },
        "metrics": {
          "vectorStrength": 1.2925,
          "maxAbsScore": 0.9708,
          "focusRatio": 0.2859
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.9708
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "elevated",
        "term": "Elevated",
        "cleanTerm": "elevated",
        "dedupeKey": "elevated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4275,
          "classic_unexpected": 0.0365,
          "minimal_ornate": 0.0316,
          "soft_sharp": 0.0228,
          "romantic_edgy": 0.0058,
          "organic_geometric": 0.0598,
          "playful_refined": 0.8031,
          "everyday_special_occasion": 0.4442,
          "lowkey_statement": -0.0584,
          "grounded_ethereal": 0.0348
        },
        "metrics": {
          "vectorStrength": 1.0179,
          "maxAbsScore": 0.8031,
          "focusRatio": 0.4173
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.8031
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fierce",
        "term": "Fierce",
        "cleanTerm": "fierce",
        "dedupeKey": "fierce",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3621,
          "classic_unexpected": 0.0047,
          "minimal_ornate": 0.0427,
          "soft_sharp": 0.0361,
          "romantic_edgy": 0.8049,
          "organic_geometric": -0.2966,
          "playful_refined": -0.0551,
          "everyday_special_occasion": 0.014,
          "lowkey_statement": 0.0131,
          "grounded_ethereal": -0.0109
        },
        "metrics": {
          "vectorStrength": 0.9347,
          "maxAbsScore": 0.8049,
          "focusRatio": 0.4907
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.8049
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sweet",
        "term": "Sweet",
        "cleanTerm": "sweet",
        "dedupeKey": "sweet",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1628,
          "classic_unexpected": -0.1159,
          "minimal_ornate": -0.2525,
          "soft_sharp": -0.3579,
          "romantic_edgy": -0.9206,
          "organic_geometric": -0.2608,
          "playful_refined": 0.0138,
          "everyday_special_occasion": 0.1695,
          "lowkey_statement": -0.2477,
          "grounded_ethereal": -0.1999
        },
        "metrics": {
          "vectorStrength": 1.1303,
          "maxAbsScore": 0.9206,
          "focusRatio": 0.3408
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9206
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "crisp",
        "term": "Crisp",
        "cleanTerm": "crisp",
        "dedupeKey": "crisp",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1863,
          "classic_unexpected": -0.0459,
          "minimal_ornate": -0.3098,
          "soft_sharp": 0.582,
          "romantic_edgy": 0.0657,
          "organic_geometric": 0.0343,
          "playful_refined": 0.0516,
          "everyday_special_occasion": 0.0405,
          "lowkey_statement": -0.0883,
          "grounded_ethereal": -0.363
        },
        "metrics": {
          "vectorStrength": 0.7879,
          "maxAbsScore": 0.582,
          "focusRatio": 0.3293
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.582
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluid",
        "term": "Fluid",
        "cleanTerm": "fluid",
        "dedupeKey": "fluid",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0996,
          "classic_unexpected": -0.1417,
          "minimal_ornate": -0.2076,
          "soft_sharp": -0.8584,
          "romantic_edgy": -0.3105,
          "organic_geometric": -0.2573,
          "playful_refined": 0.0988,
          "everyday_special_occasion": -0.3865,
          "lowkey_statement": -0.4588,
          "grounded_ethereal": 0.2447
        },
        "metrics": {
          "vectorStrength": 1.1841,
          "maxAbsScore": 0.8584,
          "focusRatio": 0.2802
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.8584
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      }
    ],
    "adaptiveRound": [
      {
        "id": "easy_going",
        "term": "Easy-Going",
        "cleanTerm": "easy-going",
        "dedupeKey": "easy-going",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0179,
          "classic_unexpected": 0.008,
          "minimal_ornate": -0.606,
          "soft_sharp": -0.8359,
          "romantic_edgy": -0.2698,
          "organic_geometric": -0.3595,
          "playful_refined": -0.2395,
          "everyday_special_occasion": -1.0,
          "lowkey_statement": -0.8143,
          "grounded_ethereal": -0.0549
        },
        "metrics": {
          "vectorStrength": 1.7297,
          "maxAbsScore": 1.0,
          "focusRatio": 0.2378
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "gentle",
        "term": "Gentle",
        "cleanTerm": "gentle",
        "dedupeKey": "gentle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3499,
          "classic_unexpected": -0.2537,
          "minimal_ornate": -0.5867,
          "soft_sharp": -0.9486,
          "romantic_edgy": -0.5475,
          "organic_geometric": -0.3634,
          "playful_refined": 0.1978,
          "everyday_special_occasion": -0.4005,
          "lowkey_statement": -0.8523,
          "grounded_ethereal": -0.3366
        },
        "metrics": {
          "vectorStrength": 1.7035,
          "maxAbsScore": 0.9486,
          "focusRatio": 0.1961
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.9486
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "smooth",
        "term": "Smooth",
        "cleanTerm": "smooth",
        "dedupeKey": "smooth",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1705,
          "classic_unexpected": -0.4405,
          "minimal_ornate": -0.6529,
          "soft_sharp": -0.7314,
          "romantic_edgy": -0.5357,
          "organic_geometric": -0.0609,
          "playful_refined": 0.5193,
          "everyday_special_occasion": -0.5148,
          "lowkey_statement": -0.4999,
          "grounded_ethereal": -0.1056
        },
        "metrics": {
          "vectorStrength": 1.5069,
          "maxAbsScore": 0.7314,
          "focusRatio": 0.1728
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7314
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "calm",
        "term": "Calm",
        "cleanTerm": "calm",
        "dedupeKey": "calm",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.0819,
          "classic_unexpected": -0.1899,
          "minimal_ornate": -0.7842,
          "soft_sharp": -0.5901,
          "romantic_edgy": -0.261,
          "organic_geometric": -0.1739,
          "playful_refined": 0.1593,
          "everyday_special_occasion": -0.3153,
          "lowkey_statement": -0.7472,
          "grounded_ethereal": -0.6518
        },
        "metrics": {
          "vectorStrength": 1.4873,
          "maxAbsScore": 0.7842,
          "focusRatio": 0.1983
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.7842
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "unfussy",
        "term": "Unfussy",
        "cleanTerm": "unfussy",
        "dedupeKey": "unfussy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1835,
          "classic_unexpected": -0.2169,
          "minimal_ornate": -0.8162,
          "soft_sharp": -0.4603,
          "romantic_edgy": -0.1203,
          "organic_geometric": -0.1599,
          "playful_refined": 0.003,
          "everyday_special_occasion": -0.7597,
          "lowkey_statement": -0.7306,
          "grounded_ethereal": -0.1946
        },
        "metrics": {
          "vectorStrength": 1.4654,
          "maxAbsScore": 0.8162,
          "focusRatio": 0.2239
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.8162
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "polished",
        "term": "Polished",
        "cleanTerm": "polished",
        "dedupeKey": "polished",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0414,
          "classic_unexpected": -0.8438,
          "minimal_ornate": -0.1786,
          "soft_sharp": 0.1464,
          "romantic_edgy": -0.2588,
          "organic_geometric": 0.3184,
          "playful_refined": 1.0,
          "everyday_special_occasion": 0.0039,
          "lowkey_statement": -0.0972,
          "grounded_ethereal": -0.1834
        },
        "metrics": {
          "vectorStrength": 1.4066,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3255
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "effortless",
        "term": "Effortless",
        "cleanTerm": "effortless",
        "dedupeKey": "effortless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0419,
          "classic_unexpected": -0.2431,
          "minimal_ornate": -0.5779,
          "soft_sharp": -0.52,
          "romantic_edgy": -0.1811,
          "organic_geometric": -0.3444,
          "playful_refined": 0.1399,
          "everyday_special_occasion": -0.9737,
          "lowkey_statement": -0.3234,
          "grounded_ethereal": 0.1835
        },
        "metrics": {
          "vectorStrength": 1.3865,
          "maxAbsScore": 0.9737,
          "focusRatio": 0.2759
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.9737
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "standout",
        "term": "Standout",
        "cleanTerm": "standout",
        "dedupeKey": "standout",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.5226,
          "classic_unexpected": -0.0716,
          "minimal_ornate": -0.252,
          "soft_sharp": 0.226,
          "romantic_edgy": 0.3407,
          "organic_geometric": 0.2489,
          "playful_refined": 0.386,
          "everyday_special_occasion": 0.4426,
          "lowkey_statement": 1.0,
          "grounded_ethereal": -0.0073
        },
        "metrics": {
          "vectorStrength": 1.3842,
          "maxAbsScore": 1.0,
          "focusRatio": 0.2859
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dreamy",
        "term": "Dreamy",
        "cleanTerm": "dreamy",
        "dedupeKey": "dreamy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1622,
          "classic_unexpected": -0.1043,
          "minimal_ornate": 0.095,
          "soft_sharp": -0.5944,
          "romantic_edgy": -0.9503,
          "organic_geometric": -0.2775,
          "playful_refined": -0.2161,
          "everyday_special_occasion": -0.0667,
          "lowkey_statement": -0.3953,
          "grounded_ethereal": 0.5374
        },
        "metrics": {
          "vectorStrength": 1.3696,
          "maxAbsScore": 0.9503,
          "focusRatio": 0.2796
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9503
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "fairy_like",
        "term": "Fairy-Like",
        "cleanTerm": "fairy-like",
        "dedupeKey": "fairy-like",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.4287,
          "classic_unexpected": -0.1395,
          "minimal_ornate": 0.2133,
          "soft_sharp": -0.5709,
          "romantic_edgy": -0.4679,
          "organic_geometric": -0.4688,
          "playful_refined": -0.3926,
          "everyday_special_occasion": -0.0181,
          "lowkey_statement": -0.3602,
          "grounded_ethereal": 0.7274
        },
        "metrics": {
          "vectorStrength": 1.3515,
          "maxAbsScore": 0.7274,
          "focusRatio": 0.1921
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7274
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "ornate",
        "term": "Ornate",
        "cleanTerm": "ornate",
        "dedupeKey": "ornate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0181,
          "classic_unexpected": -0.338,
          "minimal_ornate": 0.9972,
          "soft_sharp": 0.0205,
          "romantic_edgy": -0.1918,
          "organic_geometric": 0.136,
          "playful_refined": 0.5521,
          "everyday_special_occasion": 0.4798,
          "lowkey_statement": -0.018,
          "grounded_ethereal": 0.2597
        },
        "metrics": {
          "vectorStrength": 1.3295,
          "maxAbsScore": 0.9972,
          "focusRatio": 0.3312
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9972
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unconventional",
        "term": "Unconventional",
        "cleanTerm": "unconventional",
        "dedupeKey": "unconventional",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 14,
        "scores": {
          "delicate_bold": 0.2391,
          "classic_unexpected": 1.0,
          "minimal_ornate": -0.2912,
          "soft_sharp": -0.038,
          "romantic_edgy": 0.6352,
          "organic_geometric": -0.3774,
          "playful_refined": -0.2326,
          "everyday_special_occasion": -0.0139,
          "lowkey_statement": -0.1039,
          "grounded_ethereal": 0.1095
        },
        "metrics": {
          "vectorStrength": 1.3291,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3289
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dainty",
        "term": "Dainty",
        "cleanTerm": "dainty",
        "dedupeKey": "dainty",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -1.0,
          "classic_unexpected": -0.3011,
          "minimal_ornate": 0.0934,
          "soft_sharp": -0.1358,
          "romantic_edgy": -0.5311,
          "organic_geometric": -0.1515,
          "playful_refined": 0.0213,
          "everyday_special_occasion": -0.0588,
          "lowkey_statement": -0.544,
          "grounded_ethereal": 0.0356
        },
        "metrics": {
          "vectorStrength": 1.313,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3481
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "unassuming",
        "term": "Unassuming",
        "cleanTerm": "unassuming",
        "dedupeKey": "unassuming",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0635,
          "classic_unexpected": 0.4221,
          "minimal_ornate": -0.7984,
          "soft_sharp": -0.4591,
          "romantic_edgy": -0.0993,
          "organic_geometric": -0.3096,
          "playful_refined": -0.0797,
          "everyday_special_occasion": -0.3986,
          "lowkey_statement": -0.6211,
          "grounded_ethereal": -0.1689
        },
        "metrics": {
          "vectorStrength": 1.3099,
          "maxAbsScore": 0.7984,
          "focusRatio": 0.2334
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.7984
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "natural",
        "term": "Natural",
        "cleanTerm": "natural",
        "dedupeKey": "natural",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.0942,
          "classic_unexpected": -0.0934,
          "minimal_ornate": -0.3506,
          "soft_sharp": -0.3787,
          "romantic_edgy": -0.0678,
          "organic_geometric": -1.0,
          "playful_refined": 0.1034,
          "everyday_special_occasion": -0.4195,
          "lowkey_statement": -0.2721,
          "grounded_ethereal": -0.3684
        },
        "metrics": {
          "vectorStrength": 1.2981,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3177
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "quirky",
        "term": "Quirky",
        "cleanTerm": "quirky",
        "dedupeKey": "quirky",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1087,
          "classic_unexpected": 0.6909,
          "minimal_ornate": 0.0192,
          "soft_sharp": 0.1649,
          "romantic_edgy": 0.1892,
          "organic_geometric": -0.2932,
          "playful_refined": -0.969,
          "everyday_special_occasion": 0.069,
          "lowkey_statement": -0.2657,
          "grounded_ethereal": -0.1049
        },
        "metrics": {
          "vectorStrength": 1.2899,
          "maxAbsScore": 0.969,
          "focusRatio": 0.3371
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.969
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "earthy",
        "term": "Earthy",
        "cleanTerm": "earthy",
        "dedupeKey": "earthy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.003,
          "classic_unexpected": 0.0342,
          "minimal_ornate": -0.1408,
          "soft_sharp": -0.2117,
          "romantic_edgy": -0.0597,
          "organic_geometric": -0.9481,
          "playful_refined": -0.0071,
          "everyday_special_occasion": -0.1725,
          "lowkey_statement": -0.3872,
          "grounded_ethereal": -0.7098
        },
        "metrics": {
          "vectorStrength": 1.2852,
          "maxAbsScore": 0.9481,
          "focusRatio": 0.3545
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.9481
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "graceful",
        "term": "Graceful",
        "cleanTerm": "graceful",
        "dedupeKey": "graceful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0386,
          "classic_unexpected": -0.4969,
          "minimal_ornate": -0.2189,
          "soft_sharp": -0.5588,
          "romantic_edgy": -0.7343,
          "organic_geometric": -0.1653,
          "playful_refined": 0.538,
          "everyday_special_occasion": -0.1788,
          "lowkey_statement": -0.3601,
          "grounded_ethereal": 0.1545
        },
        "metrics": {
          "vectorStrength": 1.2846,
          "maxAbsScore": 0.7343,
          "focusRatio": 0.2132
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7343
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "rebellious",
        "term": "Rebellious",
        "cleanTerm": "rebellious",
        "dedupeKey": "rebellious",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4099,
          "classic_unexpected": 0.5041,
          "minimal_ornate": 0.0395,
          "soft_sharp": 0.0119,
          "romantic_edgy": 1.0,
          "organic_geometric": -0.3644,
          "playful_refined": -0.2413,
          "everyday_special_occasion": -0.0546,
          "lowkey_statement": -0.1461,
          "grounded_ethereal": 0.0184
        },
        "metrics": {
          "vectorStrength": 1.2804,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3584
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "simple",
        "term": "Simple",
        "cleanTerm": "simple",
        "dedupeKey": "simple",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1609,
          "classic_unexpected": -0.3606,
          "minimal_ornate": -0.9988,
          "soft_sharp": -0.4072,
          "romantic_edgy": -0.2299,
          "organic_geometric": 0.0478,
          "playful_refined": 0.1642,
          "everyday_special_occasion": -0.2729,
          "lowkey_statement": -0.3002,
          "grounded_ethereal": -0.258
        },
        "metrics": {
          "vectorStrength": 1.2777,
          "maxAbsScore": 0.9988,
          "focusRatio": 0.3121
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.9988
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "subdued",
        "term": "Subdued",
        "cleanTerm": "subdued",
        "dedupeKey": "subdued",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1841,
          "classic_unexpected": 0.0855,
          "minimal_ornate": -0.5802,
          "soft_sharp": -0.5122,
          "romantic_edgy": -0.088,
          "organic_geometric": -0.1835,
          "playful_refined": 0.4022,
          "everyday_special_occasion": -0.063,
          "lowkey_statement": -0.8558,
          "grounded_ethereal": -0.1242
        },
        "metrics": {
          "vectorStrength": 1.263,
          "maxAbsScore": 0.8558,
          "focusRatio": 0.278
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.8558
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "warm",
        "term": "Warm",
        "cleanTerm": "warm",
        "dedupeKey": "warm",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.0134,
          "classic_unexpected": -0.1731,
          "minimal_ornate": -0.3512,
          "soft_sharp": -0.5784,
          "romantic_edgy": -0.4484,
          "organic_geometric": -0.1858,
          "playful_refined": -0.0157,
          "everyday_special_occasion": -0.0081,
          "lowkey_statement": -0.4174,
          "grounded_ethereal": -0.8201
        },
        "metrics": {
          "vectorStrength": 1.2533,
          "maxAbsScore": 0.8201,
          "focusRatio": 0.2723
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.8201
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "delicate",
        "term": "Delicate",
        "cleanTerm": "delicate",
        "dedupeKey": "delicate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.6663,
          "classic_unexpected": -0.3264,
          "minimal_ornate": 0.2676,
          "soft_sharp": -0.3264,
          "romantic_edgy": -0.5147,
          "organic_geometric": -0.1909,
          "playful_refined": 0.3455,
          "everyday_special_occasion": -0.0033,
          "lowkey_statement": -0.6405,
          "grounded_ethereal": 0.07
        },
        "metrics": {
          "vectorStrength": 1.2508,
          "maxAbsScore": 0.6663,
          "focusRatio": 0.1988
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.6663
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "minimalist",
        "term": "Minimalist",
        "cleanTerm": "minimalist",
        "dedupeKey": "minimalist",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.4145,
          "classic_unexpected": -0.3996,
          "minimal_ornate": -0.8434,
          "soft_sharp": -0.0857,
          "romantic_edgy": -0.0226,
          "organic_geometric": 0.2965,
          "playful_refined": 0.3036,
          "everyday_special_occasion": -0.4523,
          "lowkey_statement": -0.335,
          "grounded_ethereal": 0.0487
        },
        "metrics": {
          "vectorStrength": 1.245,
          "maxAbsScore": 0.8434,
          "focusRatio": 0.2634
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.8434
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "whimsy",
        "term": "Whimsy",
        "cleanTerm": "whimsy",
        "dedupeKey": "whimsy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.484,
          "classic_unexpected": 0.1081,
          "minimal_ornate": 0.0483,
          "soft_sharp": -0.1621,
          "romantic_edgy": -0.4209,
          "organic_geometric": -0.3231,
          "playful_refined": -0.9163,
          "everyday_special_occasion": -0.1771,
          "lowkey_statement": -0.3143,
          "grounded_ethereal": 0.0916
        },
        "metrics": {
          "vectorStrength": 1.2386,
          "maxAbsScore": 0.9163,
          "focusRatio": 0.3008
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.9163
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mischievous",
        "term": "Mischievous",
        "cleanTerm": "mischievous",
        "dedupeKey": "mischievous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.0111,
          "classic_unexpected": 0.6062,
          "minimal_ornate": -0.0866,
          "soft_sharp": -0.0574,
          "romantic_edgy": 0.3634,
          "organic_geometric": -0.4644,
          "playful_refined": -0.7874,
          "everyday_special_occasion": -0.0827,
          "lowkey_statement": -0.4024,
          "grounded_ethereal": 0.0595
        },
        "metrics": {
          "vectorStrength": 1.2323,
          "maxAbsScore": 0.7874,
          "focusRatio": 0.2695
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.7874
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "subtle",
        "term": "Subtle",
        "cleanTerm": "subtle",
        "dedupeKey": "subtle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.5733,
          "classic_unexpected": 0.2733,
          "minimal_ornate": -0.1745,
          "soft_sharp": -0.2359,
          "romantic_edgy": -0.2799,
          "organic_geometric": -0.233,
          "playful_refined": 0.2751,
          "everyday_special_occasion": -0.1215,
          "lowkey_statement": -0.894,
          "grounded_ethereal": 0.0685
        },
        "metrics": {
          "vectorStrength": 1.2314,
          "maxAbsScore": 0.894,
          "focusRatio": 0.2857
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.894
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "lush",
        "term": "Lush",
        "cleanTerm": "lush",
        "dedupeKey": "lush",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.2143,
          "classic_unexpected": -0.3506,
          "minimal_ornate": -0.1126,
          "soft_sharp": -0.7122,
          "romantic_edgy": -0.5903,
          "organic_geometric": -0.2635,
          "playful_refined": 0.1597,
          "everyday_special_occasion": -0.0631,
          "lowkey_statement": -0.5154,
          "grounded_ethereal": 0.3214
        },
        "metrics": {
          "vectorStrength": 1.2268,
          "maxAbsScore": 0.7122,
          "focusRatio": 0.2156
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7122
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "uncluttered",
        "term": "Uncluttered",
        "cleanTerm": "uncluttered",
        "dedupeKey": "uncluttered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.0599,
          "classic_unexpected": -0.2446,
          "minimal_ornate": -0.9186,
          "soft_sharp": -0.1957,
          "romantic_edgy": -0.1019,
          "organic_geometric": 0.2083,
          "playful_refined": 0.3778,
          "everyday_special_occasion": -0.195,
          "lowkey_statement": -0.4886,
          "grounded_ethereal": -0.1988
        },
        "metrics": {
          "vectorStrength": 1.2076,
          "maxAbsScore": 0.9186,
          "focusRatio": 0.3073
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.9186
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "timeless",
        "term": "Timeless",
        "cleanTerm": "timeless",
        "dedupeKey": "timeless",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0717,
          "classic_unexpected": -0.7866,
          "minimal_ornate": -0.566,
          "soft_sharp": -0.343,
          "romantic_edgy": -0.2074,
          "organic_geometric": -0.1668,
          "playful_refined": 0.0103,
          "everyday_special_occasion": -0.4453,
          "lowkey_statement": 0.0636,
          "grounded_ethereal": 0.3098
        },
        "metrics": {
          "vectorStrength": 1.1962,
          "maxAbsScore": 0.7866,
          "focusRatio": 0.2648
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.7866
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "ethereal",
        "term": "Ethereal",
        "cleanTerm": "ethereal",
        "dedupeKey": "ethereal",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2771,
          "classic_unexpected": -0.3322,
          "minimal_ornate": -0.1092,
          "soft_sharp": -0.4305,
          "romantic_edgy": -0.3661,
          "organic_geometric": -0.4108,
          "playful_refined": 0.0764,
          "everyday_special_occasion": -0.1603,
          "lowkey_statement": -0.4086,
          "grounded_ethereal": 0.7257
        },
        "metrics": {
          "vectorStrength": 1.1884,
          "maxAbsScore": 0.7257,
          "focusRatio": 0.2201
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7257
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "comfortable",
        "term": "Comfortable",
        "cleanTerm": "comfortable",
        "dedupeKey": "comfortable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.278,
          "classic_unexpected": -0.3298,
          "minimal_ornate": -0.4494,
          "soft_sharp": -0.4853,
          "romantic_edgy": -0.3695,
          "organic_geometric": -0.0896,
          "playful_refined": 0.1856,
          "everyday_special_occasion": -0.3804,
          "lowkey_statement": -0.5704,
          "grounded_ethereal": -0.3735
        },
        "metrics": {
          "vectorStrength": 1.1883,
          "maxAbsScore": 0.5704,
          "focusRatio": 0.1624
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.5704
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "elegant",
        "term": "Elegant",
        "cleanTerm": "elegant",
        "dedupeKey": "elegant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1875,
          "classic_unexpected": -0.6618,
          "minimal_ornate": 0.0249,
          "soft_sharp": -0.1612,
          "romantic_edgy": -0.4786,
          "organic_geometric": 0.1114,
          "playful_refined": 0.7013,
          "everyday_special_occasion": 0.1209,
          "lowkey_statement": -0.3375,
          "grounded_ethereal": 0.2091
        },
        "metrics": {
          "vectorStrength": 1.1854,
          "maxAbsScore": 0.7013,
          "focusRatio": 0.2342
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.7013
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "pristine",
        "term": "Pristine",
        "cleanTerm": "pristine",
        "dedupeKey": "pristine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.242,
          "classic_unexpected": -0.7334,
          "minimal_ornate": -0.6956,
          "soft_sharp": -0.1141,
          "romantic_edgy": -0.0785,
          "organic_geometric": -0.1889,
          "playful_refined": 0.4843,
          "everyday_special_occasion": -0.0899,
          "lowkey_statement": -0.1398,
          "grounded_ethereal": -0.0868
        },
        "metrics": {
          "vectorStrength": 1.1853,
          "maxAbsScore": 0.7334,
          "focusRatio": 0.257
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.7334
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluid",
        "term": "Fluid",
        "cleanTerm": "fluid",
        "dedupeKey": "fluid",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0996,
          "classic_unexpected": -0.1417,
          "minimal_ornate": -0.2076,
          "soft_sharp": -0.8584,
          "romantic_edgy": -0.3105,
          "organic_geometric": -0.2573,
          "playful_refined": 0.0988,
          "everyday_special_occasion": -0.3865,
          "lowkey_statement": -0.4588,
          "grounded_ethereal": 0.2447
        },
        "metrics": {
          "vectorStrength": 1.1841,
          "maxAbsScore": 0.8584,
          "focusRatio": 0.2802
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.8584
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "decorative",
        "term": "Decorative",
        "cleanTerm": "decorative",
        "dedupeKey": "decorative",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0332,
          "classic_unexpected": -0.1901,
          "minimal_ornate": 0.9504,
          "soft_sharp": 0.0254,
          "romantic_edgy": -0.3442,
          "organic_geometric": 0.2453,
          "playful_refined": 0.1068,
          "everyday_special_occasion": 0.4871,
          "lowkey_statement": -0.0308,
          "grounded_ethereal": 0.1475
        },
        "metrics": {
          "vectorStrength": 1.1795,
          "maxAbsScore": 0.9504,
          "focusRatio": 0.3711
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9504
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "unruly",
        "term": "Unruly",
        "cleanTerm": "unruly",
        "dedupeKey": "unruly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1855,
          "classic_unexpected": 0.5366,
          "minimal_ornate": -0.1744,
          "soft_sharp": -0.0081,
          "romantic_edgy": 0.7689,
          "organic_geometric": -0.4613,
          "playful_refined": -0.2813,
          "everyday_special_occasion": -0.1115,
          "lowkey_statement": -0.3262,
          "grounded_ethereal": -0.1591
        },
        "metrics": {
          "vectorStrength": 1.1748,
          "maxAbsScore": 0.7689,
          "focusRatio": 0.2552
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7689
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "caressing",
        "term": "Caressing",
        "cleanTerm": "caressing",
        "dedupeKey": "caressing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.3085,
          "classic_unexpected": -0.0774,
          "minimal_ornate": 0.0372,
          "soft_sharp": -0.7358,
          "romantic_edgy": -0.6862,
          "organic_geometric": -0.2694,
          "playful_refined": 0.0058,
          "everyday_special_occasion": -0.0266,
          "lowkey_statement": -0.4104,
          "grounded_ethereal": -0.1001
        },
        "metrics": {
          "vectorStrength": 1.169,
          "maxAbsScore": 0.7358,
          "focusRatio": 0.2769
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7358
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "understated",
        "term": "Understated",
        "cleanTerm": "understated",
        "dedupeKey": "understated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.1635,
          "classic_unexpected": 0.0754,
          "minimal_ornate": -0.759,
          "soft_sharp": -0.2228,
          "romantic_edgy": -0.316,
          "organic_geometric": -0.0284,
          "playful_refined": 0.3906,
          "everyday_special_occasion": -0.2048,
          "lowkey_statement": -0.6225,
          "grounded_ethereal": -0.1204
        },
        "metrics": {
          "vectorStrength": 1.1641,
          "maxAbsScore": 0.759,
          "focusRatio": 0.2614
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.759
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "rooted",
        "term": "Rooted",
        "cleanTerm": "rooted",
        "dedupeKey": "rooted",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.2845,
          "classic_unexpected": -0.1335,
          "minimal_ornate": -0.1133,
          "soft_sharp": 0.0433,
          "romantic_edgy": 0.1811,
          "organic_geometric": -0.3351,
          "playful_refined": 0.3483,
          "everyday_special_occasion": 0.2206,
          "lowkey_statement": 0.1761,
          "grounded_ethereal": -0.9409
        },
        "metrics": {
          "vectorStrength": 1.1597,
          "maxAbsScore": 0.9409,
          "focusRatio": 0.3389
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.9409
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "otherworldly",
        "term": "Otherworldly",
        "cleanTerm": "otherworldly",
        "dedupeKey": "otherworldly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": 0.0987,
          "classic_unexpected": 0.1809,
          "minimal_ornate": 0.0833,
          "soft_sharp": -0.3265,
          "romantic_edgy": 0.2203,
          "organic_geometric": -0.5209,
          "playful_refined": -0.0998,
          "everyday_special_occasion": -0.029,
          "lowkey_statement": -0.1508,
          "grounded_ethereal": 0.9126
        },
        "metrics": {
          "vectorStrength": 1.1586,
          "maxAbsScore": 0.9126,
          "focusRatio": 0.348
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.9126
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "friendly",
        "term": "Friendly",
        "cleanTerm": "friendly",
        "dedupeKey": "friendly",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0195,
          "classic_unexpected": -0.0537,
          "minimal_ornate": -0.5832,
          "soft_sharp": -0.5899,
          "romantic_edgy": -0.2685,
          "organic_geometric": -0.1463,
          "playful_refined": -0.29,
          "everyday_special_occasion": -0.2175,
          "lowkey_statement": -0.496,
          "grounded_ethereal": -0.4116
        },
        "metrics": {
          "vectorStrength": 1.154,
          "maxAbsScore": 0.5899,
          "focusRatio": 0.1918
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5899
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "ornamentation",
        "term": "Ornamentation",
        "cleanTerm": "ornamentation",
        "dedupeKey": "ornamentation",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": -0.1996,
          "classic_unexpected": -0.3211,
          "minimal_ornate": 0.9481,
          "soft_sharp": 0.0714,
          "romantic_edgy": -0.1388,
          "organic_geometric": 0.2661,
          "playful_refined": 0.138,
          "everyday_special_occasion": 0.3277,
          "lowkey_statement": 0.1679,
          "grounded_ethereal": 0.1905
        },
        "metrics": {
          "vectorStrength": 1.1524,
          "maxAbsScore": 0.9481,
          "focusRatio": 0.3424
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9481
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "celestial",
        "term": "Celestial",
        "cleanTerm": "celestial",
        "dedupeKey": "celestial",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0973,
          "classic_unexpected": -0.2465,
          "minimal_ornate": 0.1047,
          "soft_sharp": -0.395,
          "romantic_edgy": -0.241,
          "organic_geometric": -0.1812,
          "playful_refined": 0.0504,
          "everyday_special_occasion": 0.2288,
          "lowkey_statement": 0.0213,
          "grounded_ethereal": 0.9696
        },
        "metrics": {
          "vectorStrength": 1.1505,
          "maxAbsScore": 0.9696,
          "focusRatio": 0.3824
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.9696
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "structured",
        "term": "Structured",
        "cleanTerm": "structured",
        "dedupeKey": "structured",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0213,
          "classic_unexpected": -0.5073,
          "minimal_ornate": -0.171,
          "soft_sharp": -0.2464,
          "romantic_edgy": -0.0554,
          "organic_geometric": 0.7599,
          "playful_refined": 0.5588,
          "everyday_special_occasion": 0.2064,
          "lowkey_statement": -0.0719,
          "grounded_ethereal": -0.172
        },
        "metrics": {
          "vectorStrength": 1.148,
          "maxAbsScore": 0.7599,
          "focusRatio": 0.2743
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.7599
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "floating",
        "term": "Floating",
        "cleanTerm": "floating",
        "dedupeKey": "floating",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.0341,
          "classic_unexpected": -0.1045,
          "minimal_ornate": -0.1403,
          "soft_sharp": -0.6361,
          "romantic_edgy": -0.1806,
          "organic_geometric": -0.0097,
          "playful_refined": 0.1821,
          "everyday_special_occasion": -0.2707,
          "lowkey_statement": -0.0934,
          "grounded_ethereal": 0.8373
        },
        "metrics": {
          "vectorStrength": 1.1337,
          "maxAbsScore": 0.8373,
          "focusRatio": 0.3364
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.8373
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sweet",
        "term": "Sweet",
        "cleanTerm": "sweet",
        "dedupeKey": "sweet",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1628,
          "classic_unexpected": -0.1159,
          "minimal_ornate": -0.2525,
          "soft_sharp": -0.3579,
          "romantic_edgy": -0.9206,
          "organic_geometric": -0.2608,
          "playful_refined": 0.0138,
          "everyday_special_occasion": 0.1695,
          "lowkey_statement": -0.2477,
          "grounded_ethereal": -0.1999
        },
        "metrics": {
          "vectorStrength": 1.1303,
          "maxAbsScore": 0.9206,
          "focusRatio": 0.3408
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9206
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "intricate",
        "term": "Intricate",
        "cleanTerm": "intricate",
        "dedupeKey": "intricate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.2201,
          "classic_unexpected": -0.06,
          "minimal_ornate": 0.9215,
          "soft_sharp": -0.0089,
          "romantic_edgy": 0.0554,
          "organic_geometric": 0.1298,
          "playful_refined": 0.359,
          "everyday_special_occasion": 0.1698,
          "lowkey_statement": -0.4253,
          "grounded_ethereal": 0.1182
        },
        "metrics": {
          "vectorStrength": 1.1286,
          "maxAbsScore": 0.9215,
          "focusRatio": 0.3734
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9215
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "distinguished",
        "term": "Distinguished",
        "cleanTerm": "distinguished",
        "dedupeKey": "distinguished",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.3838,
          "classic_unexpected": -0.3286,
          "minimal_ornate": 0.2614,
          "soft_sharp": -0.0191,
          "romantic_edgy": -0.0107,
          "organic_geometric": 0.2179,
          "playful_refined": 0.6622,
          "everyday_special_occasion": 0.5938,
          "lowkey_statement": 0.2451,
          "grounded_ethereal": 0.1941
        },
        "metrics": {
          "vectorStrength": 1.1227,
          "maxAbsScore": 0.6622,
          "focusRatio": 0.227
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6622
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "luxuriant",
        "term": "Luxuriant",
        "cleanTerm": "luxuriant",
        "dedupeKey": "luxuriant",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0099,
          "classic_unexpected": -0.3259,
          "minimal_ornate": 0.5525,
          "soft_sharp": -0.519,
          "romantic_edgy": -0.3818,
          "organic_geometric": -0.1818,
          "playful_refined": 0.2654,
          "everyday_special_occasion": 0.0122,
          "lowkey_statement": -0.3579,
          "grounded_ethereal": 0.4418
        },
        "metrics": {
          "vectorStrength": 1.1197,
          "maxAbsScore": 0.5525,
          "focusRatio": 0.1813
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5525
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sleek",
        "term": "Sleek",
        "cleanTerm": "sleek",
        "dedupeKey": "sleek",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0719,
          "classic_unexpected": -0.3952,
          "minimal_ornate": -0.6735,
          "soft_sharp": 0.1335,
          "romantic_edgy": -0.1644,
          "organic_geometric": 0.1235,
          "playful_refined": 0.5432,
          "everyday_special_occasion": -0.3849,
          "lowkey_statement": -0.3594,
          "grounded_ethereal": -0.0555
        },
        "metrics": {
          "vectorStrength": 1.1183,
          "maxAbsScore": 0.6735,
          "focusRatio": 0.2319
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.6735
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "classic",
        "term": "Classic",
        "cleanTerm": "classic",
        "dedupeKey": "classic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2118,
          "classic_unexpected": -0.8032,
          "minimal_ornate": -0.4848,
          "soft_sharp": -0.2181,
          "romantic_edgy": -0.1528,
          "organic_geometric": 0.2517,
          "playful_refined": 0.3047,
          "everyday_special_occasion": 0.1391,
          "lowkey_statement": 0.2023,
          "grounded_ethereal": 0.0204
        },
        "metrics": {
          "vectorStrength": 1.1013,
          "maxAbsScore": 0.8032,
          "focusRatio": 0.288
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.8032
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "refined",
        "term": "Refined",
        "cleanTerm": "refined",
        "dedupeKey": "refined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.2837,
          "classic_unexpected": -0.4243,
          "minimal_ornate": -0.0804,
          "soft_sharp": 0.0393,
          "romantic_edgy": -0.0143,
          "organic_geometric": -0.0953,
          "playful_refined": 0.8101,
          "everyday_special_occasion": 0.125,
          "lowkey_statement": -0.4466,
          "grounded_ethereal": -0.2411
        },
        "metrics": {
          "vectorStrength": 1.0988,
          "maxAbsScore": 0.8101,
          "focusRatio": 0.3164
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.8101
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nuanced",
        "term": "Nuanced",
        "cleanTerm": "nuanced",
        "dedupeKey": "nuanced",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.4463,
          "classic_unexpected": -0.0141,
          "minimal_ornate": 0.2416,
          "soft_sharp": -0.0052,
          "romantic_edgy": -0.3425,
          "organic_geometric": -0.1626,
          "playful_refined": 0.5329,
          "everyday_special_occasion": 0.129,
          "lowkey_statement": -0.6889,
          "grounded_ethereal": -0.1706
        },
        "metrics": {
          "vectorStrength": 1.0981,
          "maxAbsScore": 0.6889,
          "focusRatio": 0.252
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.6889
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "weightless",
        "term": "Weightless",
        "cleanTerm": "weightless",
        "dedupeKey": "weightless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.172,
          "classic_unexpected": -0.1578,
          "minimal_ornate": -0.5732,
          "soft_sharp": -0.3783,
          "romantic_edgy": -0.0447,
          "organic_geometric": -0.0418,
          "playful_refined": -0.018,
          "everyday_special_occasion": -0.6724,
          "lowkey_statement": -0.2891,
          "grounded_ethereal": 0.374
        },
        "metrics": {
          "vectorStrength": 1.0981,
          "maxAbsScore": 0.6724,
          "focusRatio": 0.2471
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.6724
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "startling",
        "term": "Startling",
        "cleanTerm": "startling",
        "dedupeKey": "startling",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.4602,
          "classic_unexpected": 0.7929,
          "minimal_ornate": -0.1739,
          "soft_sharp": 0.094,
          "romantic_edgy": 0.1729,
          "organic_geometric": -0.1858,
          "playful_refined": -0.1373,
          "everyday_special_occasion": 0.3554,
          "lowkey_statement": 0.2455,
          "grounded_ethereal": -0.1252
        },
        "metrics": {
          "vectorStrength": 1.0794,
          "maxAbsScore": 0.7929,
          "focusRatio": 0.2891
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.7929
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "romantic",
        "term": "Romantic",
        "cleanTerm": "romantic",
        "dedupeKey": "romantic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.0377,
          "classic_unexpected": -0.2195,
          "minimal_ornate": 0.1382,
          "soft_sharp": -0.5113,
          "romantic_edgy": -0.7413,
          "organic_geometric": -0.1924,
          "playful_refined": -0.1647,
          "everyday_special_occasion": 0.293,
          "lowkey_statement": -0.317,
          "grounded_ethereal": 0.1835
        },
        "metrics": {
          "vectorStrength": 1.0788,
          "maxAbsScore": 0.7413,
          "focusRatio": 0.2649
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7413
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nurturing",
        "term": "Nurturing",
        "cleanTerm": "nurturing",
        "dedupeKey": "nurturing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1334,
          "classic_unexpected": -0.0648,
          "minimal_ornate": -0.0754,
          "soft_sharp": -0.6637,
          "romantic_edgy": -0.364,
          "organic_geometric": -0.3819,
          "playful_refined": -0.0097,
          "everyday_special_occasion": -0.0471,
          "lowkey_statement": -0.3919,
          "grounded_ethereal": -0.5028
        },
        "metrics": {
          "vectorStrength": 1.0748,
          "maxAbsScore": 0.6637,
          "focusRatio": 0.2519
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6637
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "defiant",
        "term": "Defiant",
        "cleanTerm": "defiant",
        "dedupeKey": "defiant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.538,
          "classic_unexpected": 0.3974,
          "minimal_ornate": -0.0776,
          "soft_sharp": 0.0721,
          "romantic_edgy": 0.7865,
          "organic_geometric": -0.1614,
          "playful_refined": -0.1422,
          "everyday_special_occasion": -0.0908,
          "lowkey_statement": 0.1065,
          "grounded_ethereal": -0.069
        },
        "metrics": {
          "vectorStrength": 1.0714,
          "maxAbsScore": 0.7865,
          "focusRatio": 0.3221
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7865
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "angelic",
        "term": "Angelic",
        "cleanTerm": "angelic",
        "dedupeKey": "angelic",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.0891,
          "classic_unexpected": -0.1912,
          "minimal_ornate": 0.0068,
          "soft_sharp": -0.4225,
          "romantic_edgy": -0.465,
          "organic_geometric": -0.2025,
          "playful_refined": 0.0479,
          "everyday_special_occasion": 0.1128,
          "lowkey_statement": -0.2725,
          "grounded_ethereal": 0.7516
        },
        "metrics": {
          "vectorStrength": 1.0652,
          "maxAbsScore": 0.7516,
          "focusRatio": 0.2934
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7516
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": false,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cheerful",
        "term": "Cheerful",
        "cleanTerm": "cheerful",
        "dedupeKey": "cheerful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2655,
          "classic_unexpected": 0.056,
          "minimal_ornate": -0.0936,
          "soft_sharp": -0.3436,
          "romantic_edgy": -0.4519,
          "organic_geometric": -0.1347,
          "playful_refined": -0.789,
          "everyday_special_occasion": 0.0353,
          "lowkey_statement": -0.279,
          "grounded_ethereal": 0.0314
        },
        "metrics": {
          "vectorStrength": 1.0608,
          "maxAbsScore": 0.789,
          "focusRatio": 0.3181
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.789
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "bare",
        "term": "Bare",
        "cleanTerm": "bare",
        "dedupeKey": "bare",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.1353,
          "classic_unexpected": -0.0216,
          "minimal_ornate": -0.4093,
          "soft_sharp": -0.6527,
          "romantic_edgy": 0.0451,
          "organic_geometric": -0.3707,
          "playful_refined": 0.0927,
          "everyday_special_occasion": -0.3313,
          "lowkey_statement": -0.496,
          "grounded_ethereal": 0.0172
        },
        "metrics": {
          "vectorStrength": 1.0566,
          "maxAbsScore": 0.6527,
          "focusRatio": 0.2538
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6527
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sophisticated",
        "term": "Sophisticated",
        "cleanTerm": "sophisticated",
        "dedupeKey": "sophisticated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.0438,
          "classic_unexpected": -0.2009,
          "minimal_ornate": 0.1415,
          "soft_sharp": 0.0126,
          "romantic_edgy": -0.0839,
          "organic_geometric": 0.0882,
          "playful_refined": 0.9361,
          "everyday_special_occasion": 0.1799,
          "lowkey_statement": -0.3567,
          "grounded_ethereal": 0.0247
        },
        "metrics": {
          "vectorStrength": 1.0554,
          "maxAbsScore": 0.9361,
          "focusRatio": 0.4526
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.9361
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "celebration",
        "term": "Celebration",
        "cleanTerm": "celebration",
        "dedupeKey": "celebration",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2405,
          "classic_unexpected": -0.1496,
          "minimal_ornate": 0.0652,
          "soft_sharp": -0.0857,
          "romantic_edgy": -0.1287,
          "organic_geometric": 0.107,
          "playful_refined": -0.0466,
          "everyday_special_occasion": 0.899,
          "lowkey_statement": 0.3974,
          "grounded_ethereal": 0.1412
        },
        "metrics": {
          "vectorStrength": 1.0526,
          "maxAbsScore": 0.899,
          "focusRatio": 0.3976
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "untamed",
        "term": "Untamed",
        "cleanTerm": "untamed",
        "dedupeKey": "untamed",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2443,
          "classic_unexpected": 0.2578,
          "minimal_ornate": -0.3271,
          "soft_sharp": -0.1373,
          "romantic_edgy": 0.5166,
          "organic_geometric": -0.705,
          "playful_refined": 0.0253,
          "everyday_special_occasion": -0.1235,
          "lowkey_statement": -0.0766,
          "grounded_ethereal": -0.2503
        },
        "metrics": {
          "vectorStrength": 1.049,
          "maxAbsScore": 0.705,
          "focusRatio": 0.2647
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "pleasant",
        "term": "Pleasant",
        "cleanTerm": "pleasant",
        "dedupeKey": "pleasant",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0701,
          "classic_unexpected": -0.1958,
          "minimal_ornate": -0.153,
          "soft_sharp": -0.5653,
          "romantic_edgy": -0.6688,
          "organic_geometric": -0.1954,
          "playful_refined": 0.1054,
          "everyday_special_occasion": 0.1985,
          "lowkey_statement": -0.3721,
          "grounded_ethereal": -0.1748
        },
        "metrics": {
          "vectorStrength": 1.0447,
          "maxAbsScore": 0.6688,
          "focusRatio": 0.2478
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.6688
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "harmonious",
        "term": "Harmonious",
        "cleanTerm": "harmonious",
        "dedupeKey": "harmonious",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.2224,
          "classic_unexpected": -0.3024,
          "minimal_ornate": -0.2152,
          "soft_sharp": -0.6037,
          "romantic_edgy": -0.536,
          "organic_geometric": -0.1128,
          "playful_refined": -0.0078,
          "everyday_special_occasion": -0.152,
          "lowkey_statement": -0.4513,
          "grounded_ethereal": 0.0224
        },
        "metrics": {
          "vectorStrength": 1.0388,
          "maxAbsScore": 0.6037,
          "focusRatio": 0.2299
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6037
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "pure",
        "term": "Pure",
        "cleanTerm": "pure",
        "dedupeKey": "pure",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0751,
          "classic_unexpected": -0.5763,
          "minimal_ornate": -0.5908,
          "soft_sharp": -0.2928,
          "romantic_edgy": -0.0835,
          "organic_geometric": -0.3835,
          "playful_refined": 0.1897,
          "everyday_special_occasion": -0.2348,
          "lowkey_statement": -0.2119,
          "grounded_ethereal": -0.1119
        },
        "metrics": {
          "vectorStrength": 1.0368,
          "maxAbsScore": 0.5908,
          "focusRatio": 0.2148
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5908
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "botanical",
        "term": "Botanical",
        "cleanTerm": "botanical",
        "dedupeKey": "botanical",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0077,
          "classic_unexpected": -0.0438,
          "minimal_ornate": 0.1598,
          "soft_sharp": -0.2745,
          "romantic_edgy": -0.0932,
          "organic_geometric": -0.9501,
          "playful_refined": 0.1645,
          "everyday_special_occasion": 0.0872,
          "lowkey_statement": -0.1114,
          "grounded_ethereal": -0.0899
        },
        "metrics": {
          "vectorStrength": 1.0341,
          "maxAbsScore": 0.9501,
          "focusRatio": 0.4793
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.9501
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "serenity",
        "term": "Serenity",
        "cleanTerm": "serenity",
        "dedupeKey": "serenity",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.1339,
          "classic_unexpected": -0.3246,
          "minimal_ornate": -0.5999,
          "soft_sharp": -0.4469,
          "romantic_edgy": -0.3608,
          "organic_geometric": -0.1185,
          "playful_refined": 0.0985,
          "everyday_special_occasion": -0.2132,
          "lowkey_statement": -0.4229,
          "grounded_ethereal": 0.0642
        },
        "metrics": {
          "vectorStrength": 1.0321,
          "maxAbsScore": 0.5999,
          "focusRatio": 0.2155
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5999
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "roots",
        "term": "Roots",
        "cleanTerm": "roots",
        "dedupeKey": "roots",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.0765,
          "classic_unexpected": -0.0781,
          "minimal_ornate": -0.2293,
          "soft_sharp": -0.1045,
          "romantic_edgy": 0.2692,
          "organic_geometric": -0.3322,
          "playful_refined": 0.1165,
          "everyday_special_occasion": -0.0332,
          "lowkey_statement": 0.2035,
          "grounded_ethereal": -0.8619
        },
        "metrics": {
          "vectorStrength": 1.0282,
          "maxAbsScore": 0.8619,
          "focusRatio": 0.3739
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.8619
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "spike",
        "term": "Spike",
        "cleanTerm": "spike",
        "dedupeKey": "spike",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1873,
          "classic_unexpected": 0.1151,
          "minimal_ornate": -0.0117,
          "soft_sharp": 0.7798,
          "romantic_edgy": 0.3515,
          "organic_geometric": -0.0154,
          "playful_refined": 0.0635,
          "everyday_special_occasion": 0.2424,
          "lowkey_statement": 0.3029,
          "grounded_ethereal": -0.3236
        },
        "metrics": {
          "vectorStrength": 1.0196,
          "maxAbsScore": 0.7798,
          "focusRatio": 0.3259
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.7798
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "exquisite",
        "term": "Exquisite",
        "cleanTerm": "exquisite",
        "dedupeKey": "exquisite",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0809,
          "classic_unexpected": -0.2985,
          "minimal_ornate": 0.4611,
          "soft_sharp": 0.0648,
          "romantic_edgy": -0.1983,
          "organic_geometric": -0.0675,
          "playful_refined": 0.5992,
          "everyday_special_occasion": 0.4848,
          "lowkey_statement": 0.0391,
          "grounded_ethereal": 0.2908
        },
        "metrics": {
          "vectorStrength": 1.0181,
          "maxAbsScore": 0.5992,
          "focusRatio": 0.2318
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5992
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "elevated",
        "term": "Elevated",
        "cleanTerm": "elevated",
        "dedupeKey": "elevated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4275,
          "classic_unexpected": 0.0365,
          "minimal_ornate": 0.0316,
          "soft_sharp": 0.0228,
          "romantic_edgy": 0.0058,
          "organic_geometric": 0.0598,
          "playful_refined": 0.8031,
          "everyday_special_occasion": 0.4442,
          "lowkey_statement": -0.0584,
          "grounded_ethereal": 0.0348
        },
        "metrics": {
          "vectorStrength": 1.0179,
          "maxAbsScore": 0.8031,
          "focusRatio": 0.4173
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.8031
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "spunky",
        "term": "Spunky",
        "cleanTerm": "spunky",
        "dedupeKey": "spunky",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1449,
          "classic_unexpected": 0.3874,
          "minimal_ornate": -0.265,
          "soft_sharp": 0.2437,
          "romantic_edgy": 0.1726,
          "organic_geometric": -0.3103,
          "playful_refined": -0.6032,
          "everyday_special_occasion": -0.1831,
          "lowkey_statement": -0.2969,
          "grounded_ethereal": -0.3308
        },
        "metrics": {
          "vectorStrength": 1.0108,
          "maxAbsScore": 0.6032,
          "focusRatio": 0.2053
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6032
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sentimental",
        "term": "Sentimental",
        "cleanTerm": "sentimental",
        "dedupeKey": "sentimental",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1079,
          "classic_unexpected": -0.1288,
          "minimal_ornate": 0.0124,
          "soft_sharp": -0.3964,
          "romantic_edgy": -0.7733,
          "organic_geometric": -0.1976,
          "playful_refined": -0.2028,
          "everyday_special_occasion": 0.3026,
          "lowkey_statement": -0.1089,
          "grounded_ethereal": -0.2257
        },
        "metrics": {
          "vectorStrength": 1.009,
          "maxAbsScore": 0.7733,
          "focusRatio": 0.3148
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7733
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "happy",
        "term": "Happy",
        "cleanTerm": "happy",
        "dedupeKey": "happy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.2442,
          "classic_unexpected": -0.0687,
          "minimal_ornate": -0.2594,
          "soft_sharp": -0.5512,
          "romantic_edgy": -0.6227,
          "organic_geometric": -0.0906,
          "playful_refined": -0.2799,
          "everyday_special_occasion": 0.0891,
          "lowkey_statement": -0.2272,
          "grounded_ethereal": -0.2096
        },
        "metrics": {
          "vectorStrength": 1.0066,
          "maxAbsScore": 0.6227,
          "focusRatio": 0.2356
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.6227
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sublime",
        "term": "Sublime",
        "cleanTerm": "sublime",
        "dedupeKey": "sublime",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1801,
          "classic_unexpected": -0.125,
          "minimal_ornate": -0.3204,
          "soft_sharp": -0.4644,
          "romantic_edgy": -0.3793,
          "organic_geometric": -0.2452,
          "playful_refined": 0.3217,
          "everyday_special_occasion": 0.0054,
          "lowkey_statement": -0.306,
          "grounded_ethereal": 0.495
        },
        "metrics": {
          "vectorStrength": 1.0062,
          "maxAbsScore": 0.495,
          "focusRatio": 0.1741
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.495
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "striking",
        "term": "Striking",
        "cleanTerm": "striking",
        "dedupeKey": "striking",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4403,
          "classic_unexpected": 0.3436,
          "minimal_ornate": -0.0432,
          "soft_sharp": 0.3035,
          "romantic_edgy": 0.3882,
          "organic_geometric": 0.2231,
          "playful_refined": 0.0561,
          "everyday_special_occasion": 0.3215,
          "lowkey_statement": 0.5404,
          "grounded_ethereal": -0.0294
        },
        "metrics": {
          "vectorStrength": 1.0028,
          "maxAbsScore": 0.5404,
          "focusRatio": 0.2009
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5404
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "draped",
        "term": "Draped",
        "cleanTerm": "draped",
        "dedupeKey": "draped",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0093,
          "classic_unexpected": -0.3799,
          "minimal_ornate": 0.47,
          "soft_sharp": -0.3945,
          "romantic_edgy": -0.3429,
          "organic_geometric": 0.1386,
          "playful_refined": 0.5114,
          "everyday_special_occasion": 0.0683,
          "lowkey_statement": -0.1509,
          "grounded_ethereal": 0.2335
        },
        "metrics": {
          "vectorStrength": 1.0006,
          "maxAbsScore": 0.5114,
          "focusRatio": 0.1895
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5114
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "minimal",
        "term": "Minimal",
        "cleanTerm": "minimal",
        "dedupeKey": "minimal",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.5288,
          "classic_unexpected": -0.022,
          "minimal_ornate": -0.6308,
          "soft_sharp": -0.1755,
          "romantic_edgy": 0.0733,
          "organic_geometric": 0.0966,
          "playful_refined": 0.1874,
          "everyday_special_occasion": -0.0077,
          "lowkey_statement": -0.4859,
          "grounded_ethereal": 0.0121
        },
        "metrics": {
          "vectorStrength": 0.9975,
          "maxAbsScore": 0.6308,
          "focusRatio": 0.2841
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.6308
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "glamorous",
        "term": "Glamorous",
        "cleanTerm": "glamorous",
        "dedupeKey": "glamorous",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.2465,
          "classic_unexpected": -0.37,
          "minimal_ornate": 0.3417,
          "soft_sharp": -0.2468,
          "romantic_edgy": -0.4807,
          "organic_geometric": 0.0485,
          "playful_refined": 0.2771,
          "everyday_special_occasion": 0.2553,
          "lowkey_statement": 0.013,
          "grounded_ethereal": 0.4886
        },
        "metrics": {
          "vectorStrength": 0.9948,
          "maxAbsScore": 0.4886,
          "focusRatio": 0.1765
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4886
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "floral",
        "term": "Floral",
        "cleanTerm": "floral",
        "dedupeKey": "floral",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0155,
          "classic_unexpected": -0.1809,
          "minimal_ornate": 0.5425,
          "soft_sharp": -0.4508,
          "romantic_edgy": -0.4461,
          "organic_geometric": -0.3952,
          "playful_refined": 0.0588,
          "everyday_special_occasion": 0.1415,
          "lowkey_statement": -0.1574,
          "grounded_ethereal": 0.2308
        },
        "metrics": {
          "vectorStrength": 0.9936,
          "maxAbsScore": 0.5425,
          "focusRatio": 0.2071
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5425
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "elaborate",
        "term": "Elaborate",
        "cleanTerm": "elaborate",
        "dedupeKey": "elaborate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0908,
          "classic_unexpected": -0.1343,
          "minimal_ornate": 0.6337,
          "soft_sharp": 0.0575,
          "romantic_edgy": 0.0235,
          "organic_geometric": 0.2319,
          "playful_refined": 0.5971,
          "everyday_special_occasion": 0.3708,
          "lowkey_statement": -0.0855,
          "grounded_ethereal": -0.0137
        },
        "metrics": {
          "vectorStrength": 0.9935,
          "maxAbsScore": 0.6337,
          "focusRatio": 0.2831
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6337
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "joyful",
        "term": "Joyful",
        "cleanTerm": "joyful",
        "dedupeKey": "joyful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3118,
          "classic_unexpected": -0.0002,
          "minimal_ornate": 0.1647,
          "soft_sharp": -0.461,
          "romantic_edgy": -0.4297,
          "organic_geometric": -0.1833,
          "playful_refined": -0.5643,
          "everyday_special_occasion": 0.1847,
          "lowkey_statement": -0.2068,
          "grounded_ethereal": 0.1734
        },
        "metrics": {
          "vectorStrength": 0.9902,
          "maxAbsScore": 0.5643,
          "focusRatio": 0.2106
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5643
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "unrefined",
        "term": "Unrefined",
        "cleanTerm": "unrefined",
        "dedupeKey": "unrefined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1809,
          "classic_unexpected": 0.1007,
          "minimal_ornate": -0.3939,
          "soft_sharp": -0.0334,
          "romantic_edgy": 0.1787,
          "organic_geometric": -0.5252,
          "playful_refined": 0.387,
          "everyday_special_occasion": -0.2345,
          "lowkey_statement": -0.3714,
          "grounded_ethereal": -0.3604
        },
        "metrics": {
          "vectorStrength": 0.9897,
          "maxAbsScore": 0.5252,
          "focusRatio": 0.1899
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5252
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "groundbreaking",
        "term": "Groundbreaking",
        "cleanTerm": "groundbreaking",
        "dedupeKey": "groundbreaking",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 14,
        "scores": {
          "delicate_bold": 0.3481,
          "classic_unexpected": 0.406,
          "minimal_ornate": -0.2255,
          "soft_sharp": 0.0409,
          "romantic_edgy": 0.5161,
          "organic_geometric": -0.0914,
          "playful_refined": 0.0789,
          "everyday_special_occasion": 0.297,
          "lowkey_statement": 0.4602,
          "grounded_ethereal": -0.1522
        },
        "metrics": {
          "vectorStrength": 0.9709,
          "maxAbsScore": 0.5161,
          "focusRatio": 0.1973
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5161
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "dramatic",
        "term": "Dramatic",
        "cleanTerm": "dramatic",
        "dedupeKey": "dramatic",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.6627,
          "classic_unexpected": 0.2609,
          "minimal_ornate": 0.3514,
          "soft_sharp": 0.006,
          "romantic_edgy": 0.0149,
          "organic_geometric": -0.0321,
          "playful_refined": 0.0556,
          "everyday_special_occasion": 0.4979,
          "lowkey_statement": 0.1557,
          "grounded_ethereal": 0.1773
        },
        "metrics": {
          "vectorStrength": 0.9689,
          "maxAbsScore": 0.6627,
          "focusRatio": 0.2992
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6627
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "grounded",
        "term": "Grounded",
        "cleanTerm": "grounded",
        "dedupeKey": "grounded",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2195,
          "classic_unexpected": -0.0468,
          "minimal_ornate": -0.2928,
          "soft_sharp": -0.0547,
          "romantic_edgy": 0.0971,
          "organic_geometric": -0.1161,
          "playful_refined": 0.3788,
          "everyday_special_occasion": 0.0476,
          "lowkey_statement": 0.0703,
          "grounded_ethereal": -0.788
        },
        "metrics": {
          "vectorStrength": 0.9663,
          "maxAbsScore": 0.788,
          "focusRatio": 0.3732
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.788
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nonconformist",
        "term": "Nonconformist",
        "cleanTerm": "nonconformist",
        "dedupeKey": "nonconformist",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.1461,
          "classic_unexpected": 0.5012,
          "minimal_ornate": -0.3679,
          "soft_sharp": 0.0365,
          "romantic_edgy": 0.6803,
          "organic_geometric": -0.1218,
          "playful_refined": -0.1197,
          "everyday_special_occasion": -0.1573,
          "lowkey_statement": -0.0424,
          "grounded_ethereal": -0.051
        },
        "metrics": {
          "vectorStrength": 0.9645,
          "maxAbsScore": 0.6803,
          "focusRatio": 0.3059
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6803
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "daring",
        "term": "Daring",
        "cleanTerm": "daring",
        "dedupeKey": "daring",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3102,
          "classic_unexpected": 0.5374,
          "minimal_ornate": 0.0724,
          "soft_sharp": 0.1408,
          "romantic_edgy": 0.5323,
          "organic_geometric": -0.2083,
          "playful_refined": -0.2561,
          "everyday_special_occasion": 0.2634,
          "lowkey_statement": 0.2396,
          "grounded_ethereal": 0.0239
        },
        "metrics": {
          "vectorStrength": 0.9643,
          "maxAbsScore": 0.5374,
          "focusRatio": 0.208
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5374
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "exciting",
        "term": "Exciting",
        "cleanTerm": "exciting",
        "dedupeKey": "exciting",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.5547,
          "classic_unexpected": 0.5238,
          "minimal_ornate": 0.0942,
          "soft_sharp": -0.025,
          "romantic_edgy": 0.0539,
          "organic_geometric": -0.2019,
          "playful_refined": -0.2525,
          "everyday_special_occasion": 0.4761,
          "lowkey_statement": 0.0197,
          "grounded_ethereal": -0.0465
        },
        "metrics": {
          "vectorStrength": 0.9635,
          "maxAbsScore": 0.5547,
          "focusRatio": 0.2467
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5547
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unexpected",
        "term": "Unexpected",
        "cleanTerm": "unexpected",
        "dedupeKey": "unexpected",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0924,
          "classic_unexpected": 0.6978,
          "minimal_ornate": -0.4839,
          "soft_sharp": 0.0037,
          "romantic_edgy": 0.2516,
          "organic_geometric": -0.2379,
          "playful_refined": -0.1536,
          "everyday_special_occasion": 0.222,
          "lowkey_statement": 0.008,
          "grounded_ethereal": 0.0609
        },
        "metrics": {
          "vectorStrength": 0.9623,
          "maxAbsScore": 0.6978,
          "focusRatio": 0.3155
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.6978
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "showcasing",
        "term": "Showcasing",
        "cleanTerm": "showcasing",
        "dedupeKey": "showcasing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.3584,
          "classic_unexpected": -0.03,
          "minimal_ornate": 0.076,
          "soft_sharp": 0.045,
          "romantic_edgy": 0.0303,
          "organic_geometric": 0.3533,
          "playful_refined": 0.2119,
          "everyday_special_occasion": 0.4233,
          "lowkey_statement": 0.6534,
          "grounded_ethereal": 0.0922
        },
        "metrics": {
          "vectorStrength": 0.9604,
          "maxAbsScore": 0.6534,
          "focusRatio": 0.2874
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.6534
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "tough",
        "term": "Tough",
        "cleanTerm": "tough",
        "dedupeKey": "tough",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.2917,
          "classic_unexpected": 0.0502,
          "minimal_ornate": -0.2408,
          "soft_sharp": -0.0696,
          "romantic_edgy": 0.7899,
          "organic_geometric": -0.1644,
          "playful_refined": 0.1175,
          "everyday_special_occasion": -0.114,
          "lowkey_statement": -0.1532,
          "grounded_ethereal": -0.2612
        },
        "metrics": {
          "vectorStrength": 0.9591,
          "maxAbsScore": 0.7899,
          "focusRatio": 0.3507
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "playful",
        "term": "Playful",
        "cleanTerm": "playful",
        "dedupeKey": "playful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1181,
          "classic_unexpected": 0.2511,
          "minimal_ornate": -0.0085,
          "soft_sharp": -0.3453,
          "romantic_edgy": -0.0225,
          "organic_geometric": -0.3652,
          "playful_refined": -0.6094,
          "everyday_special_occasion": -0.1721,
          "lowkey_statement": -0.4308,
          "grounded_ethereal": -0.0171
        },
        "metrics": {
          "vectorStrength": 0.9577,
          "maxAbsScore": 0.6094,
          "focusRatio": 0.2604
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6094
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nestled",
        "term": "Nestled",
        "cleanTerm": "nestled",
        "dedupeKey": "nestled",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.3921,
          "classic_unexpected": -0.2699,
          "minimal_ornate": -0.0139,
          "soft_sharp": -0.2852,
          "romantic_edgy": -0.3599,
          "organic_geometric": -0.1022,
          "playful_refined": 0.2894,
          "everyday_special_occasion": 0.1915,
          "lowkey_statement": -0.4442,
          "grounded_ethereal": -0.3787
        },
        "metrics": {
          "vectorStrength": 0.9536,
          "maxAbsScore": 0.4442,
          "focusRatio": 0.1629
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4442
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "tender",
        "term": "Tender",
        "cleanTerm": "tender",
        "dedupeKey": "tender",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3331,
          "classic_unexpected": -0.155,
          "minimal_ornate": -0.1972,
          "soft_sharp": -0.6402,
          "romantic_edgy": -0.2442,
          "organic_geometric": -0.2121,
          "playful_refined": 0.1699,
          "everyday_special_occasion": 0.0583,
          "lowkey_statement": -0.3892,
          "grounded_ethereal": -0.1901
        },
        "metrics": {
          "vectorStrength": 0.953,
          "maxAbsScore": 0.6402,
          "focusRatio": 0.2472
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6402
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cherished",
        "term": "Cherished",
        "cleanTerm": "cherished",
        "dedupeKey": "cherished",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1022,
          "classic_unexpected": -0.5599,
          "minimal_ornate": 0.0518,
          "soft_sharp": -0.3084,
          "romantic_edgy": -0.5114,
          "organic_geometric": -0.1506,
          "playful_refined": 0.1222,
          "everyday_special_occasion": 0.3964,
          "lowkey_statement": -0.0415,
          "grounded_ethereal": -0.1497
        },
        "metrics": {
          "vectorStrength": 0.9499,
          "maxAbsScore": 0.5599,
          "focusRatio": 0.2339
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5599
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "outsider",
        "term": "Outsider",
        "cleanTerm": "outsider",
        "dedupeKey": "outsider",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1123,
          "classic_unexpected": 0.5988,
          "minimal_ornate": -0.1515,
          "soft_sharp": -0.0038,
          "romantic_edgy": 0.6166,
          "organic_geometric": -0.1532,
          "playful_refined": -0.1036,
          "everyday_special_occasion": 0.0475,
          "lowkey_statement": 0.1559,
          "grounded_ethereal": 0.2584
        },
        "metrics": {
          "vectorStrength": 0.9497,
          "maxAbsScore": 0.6166,
          "focusRatio": 0.2801
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6166
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sustainable",
        "term": "Sustainable",
        "cleanTerm": "sustainable",
        "dedupeKey": "sustainable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.3173,
          "classic_unexpected": -0.2534,
          "minimal_ornate": -0.4492,
          "soft_sharp": -0.386,
          "romantic_edgy": 0.0542,
          "organic_geometric": -0.3038,
          "playful_refined": 0.2589,
          "everyday_special_occasion": -0.3919,
          "lowkey_statement": -0.1888,
          "grounded_ethereal": -0.1825
        },
        "metrics": {
          "vectorStrength": 0.949,
          "maxAbsScore": 0.4492,
          "focusRatio": 0.1612
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4492
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "showy",
        "term": "Showy",
        "cleanTerm": "showy",
        "dedupeKey": "showy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.5926,
          "classic_unexpected": 0.1765,
          "minimal_ornate": 0.2934,
          "soft_sharp": 0.0908,
          "romantic_edgy": -0.1223,
          "organic_geometric": 0.1061,
          "playful_refined": 0.0732,
          "everyday_special_occasion": 0.4664,
          "lowkey_statement": 0.3914,
          "grounded_ethereal": 0.1329
        },
        "metrics": {
          "vectorStrength": 0.9469,
          "maxAbsScore": 0.5926,
          "focusRatio": 0.2423
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5926
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cultivated",
        "term": "Cultivated",
        "cleanTerm": "cultivated",
        "dedupeKey": "cultivated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0006,
          "classic_unexpected": -0.3224,
          "minimal_ornate": 0.1066,
          "soft_sharp": -0.1785,
          "romantic_edgy": -0.166,
          "organic_geometric": -0.3089,
          "playful_refined": 0.6029,
          "everyday_special_occasion": 0.0878,
          "lowkey_statement": -0.1911,
          "grounded_ethereal": -0.4623
        },
        "metrics": {
          "vectorStrength": 0.9442,
          "maxAbsScore": 0.6029,
          "focusRatio": 0.2484
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6029
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluttery",
        "term": "Fluttery",
        "cleanTerm": "fluttery",
        "dedupeKey": "fluttery",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.4257,
          "classic_unexpected": 0.0919,
          "minimal_ornate": 0.0378,
          "soft_sharp": -0.3601,
          "romantic_edgy": -0.3141,
          "organic_geometric": -0.3091,
          "playful_refined": -0.4256,
          "everyday_special_occasion": -0.1761,
          "lowkey_statement": -0.2398,
          "grounded_ethereal": 0.3247
        },
        "metrics": {
          "vectorStrength": 0.9434,
          "maxAbsScore": 0.4257,
          "focusRatio": 0.1574
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.4257
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "memorable",
        "term": "Memorable",
        "cleanTerm": "memorable",
        "dedupeKey": "memorable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.556,
          "classic_unexpected": -0.092,
          "minimal_ornate": -0.1238,
          "soft_sharp": -0.1404,
          "romantic_edgy": -0.3051,
          "organic_geometric": -0.044,
          "playful_refined": -0.1031,
          "everyday_special_occasion": 0.5962,
          "lowkey_statement": 0.271,
          "grounded_ethereal": 0.0445
        },
        "metrics": {
          "vectorStrength": 0.9429,
          "maxAbsScore": 0.5962,
          "focusRatio": 0.2619
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5962
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "enchanting",
        "term": "Enchanting",
        "cleanTerm": "enchanting",
        "dedupeKey": "enchanting",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0451,
          "classic_unexpected": -0.0326,
          "minimal_ornate": 0.3999,
          "soft_sharp": -0.3442,
          "romantic_edgy": -0.491,
          "organic_geometric": -0.3946,
          "playful_refined": -0.2879,
          "everyday_special_occasion": 0.1997,
          "lowkey_statement": -0.0804,
          "grounded_ethereal": 0.2834
        },
        "metrics": {
          "vectorStrength": 0.9422,
          "maxAbsScore": 0.491,
          "focusRatio": 0.1919
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.491
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "streamlined",
        "term": "Streamlined",
        "cleanTerm": "streamlined",
        "dedupeKey": "streamlined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.041,
          "classic_unexpected": -0.4188,
          "minimal_ornate": -0.4717,
          "soft_sharp": -0.1808,
          "romantic_edgy": -0.0064,
          "organic_geometric": 0.3484,
          "playful_refined": 0.5476,
          "everyday_special_occasion": 0.1195,
          "lowkey_statement": -0.0968,
          "grounded_ethereal": -0.0349
        },
        "metrics": {
          "vectorStrength": 0.9373,
          "maxAbsScore": 0.5476,
          "focusRatio": 0.2417
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5476
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "treasured",
        "term": "Treasured",
        "cleanTerm": "treasured",
        "dedupeKey": "treasured",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0243,
          "classic_unexpected": -0.5194,
          "minimal_ornate": 0.1998,
          "soft_sharp": -0.1443,
          "romantic_edgy": -0.4084,
          "organic_geometric": -0.1704,
          "playful_refined": 0.2647,
          "everyday_special_occasion": 0.5241,
          "lowkey_statement": 0.0019,
          "grounded_ethereal": 0.0569
        },
        "metrics": {
          "vectorStrength": 0.9354,
          "maxAbsScore": 0.5241,
          "focusRatio": 0.2265
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5241
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fierce",
        "term": "Fierce",
        "cleanTerm": "fierce",
        "dedupeKey": "fierce",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3621,
          "classic_unexpected": 0.0047,
          "minimal_ornate": 0.0427,
          "soft_sharp": 0.0361,
          "romantic_edgy": 0.8049,
          "organic_geometric": -0.2966,
          "playful_refined": -0.0551,
          "everyday_special_occasion": 0.014,
          "lowkey_statement": 0.0131,
          "grounded_ethereal": -0.0109
        },
        "metrics": {
          "vectorStrength": 0.9347,
          "maxAbsScore": 0.8049,
          "focusRatio": 0.4907
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.8049
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fearless",
        "term": "Fearless",
        "cleanTerm": "fearless",
        "dedupeKey": "fearless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.3387,
          "classic_unexpected": 0.0684,
          "minimal_ornate": -0.4963,
          "soft_sharp": -0.1997,
          "romantic_edgy": 0.4757,
          "organic_geometric": -0.3103,
          "playful_refined": -0.126,
          "everyday_special_occasion": -0.2921,
          "lowkey_statement": 0.0516,
          "grounded_ethereal": 0.1994
        },
        "metrics": {
          "vectorStrength": 0.9337,
          "maxAbsScore": 0.4963,
          "focusRatio": 0.194
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4963
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fantastical",
        "term": "Fantastical",
        "cleanTerm": "fantastical",
        "dedupeKey": "fantastical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.069,
          "classic_unexpected": 0.0083,
          "minimal_ornate": 0.2513,
          "soft_sharp": -0.2669,
          "romantic_edgy": -0.0889,
          "organic_geometric": -0.2485,
          "playful_refined": -0.2059,
          "everyday_special_occasion": 0.2035,
          "lowkey_statement": 0.0798,
          "grounded_ethereal": 0.7551
        },
        "metrics": {
          "vectorStrength": 0.9323,
          "maxAbsScore": 0.7551,
          "focusRatio": 0.3468
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7551
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "frolic",
        "term": "Frolic",
        "cleanTerm": "frolic",
        "dedupeKey": "frolic",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.0381,
          "classic_unexpected": 0.2429,
          "minimal_ornate": 0.096,
          "soft_sharp": -0.2841,
          "romantic_edgy": 0.0947,
          "organic_geometric": -0.3522,
          "playful_refined": -0.727,
          "everyday_special_occasion": -0.1559,
          "lowkey_statement": -0.156,
          "grounded_ethereal": 0.0889
        },
        "metrics": {
          "vectorStrength": 0.932,
          "maxAbsScore": 0.727,
          "focusRatio": 0.3252
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.727
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "tapestry",
        "term": "Tapestry",
        "cleanTerm": "tapestry",
        "dedupeKey": "tapestry",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2303,
          "classic_unexpected": -0.4134,
          "minimal_ornate": 0.6289,
          "soft_sharp": -0.2654,
          "romantic_edgy": -0.167,
          "organic_geometric": 0.1266,
          "playful_refined": 0.1657,
          "everyday_special_occasion": 0.0326,
          "lowkey_statement": 0.2031,
          "grounded_ethereal": 0.2543
        },
        "metrics": {
          "vectorStrength": 0.9318,
          "maxAbsScore": 0.6289,
          "focusRatio": 0.2528
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6289
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unstoppable",
        "term": "Unstoppable",
        "cleanTerm": "unstoppable",
        "dedupeKey": "unstoppable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.4769,
          "classic_unexpected": 0.1334,
          "minimal_ornate": -0.4174,
          "soft_sharp": 0.0054,
          "romantic_edgy": 0.5092,
          "organic_geometric": -0.2251,
          "playful_refined": -0.062,
          "everyday_special_occasion": -0.1829,
          "lowkey_statement": 0.2941,
          "grounded_ethereal": 0.1136
        },
        "metrics": {
          "vectorStrength": 0.9307,
          "maxAbsScore": 0.5092,
          "focusRatio": 0.2104
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5092
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "cozy",
        "term": "Cozy",
        "cleanTerm": "cozy",
        "dedupeKey": "cozy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0987,
          "classic_unexpected": -0.1979,
          "minimal_ornate": -0.1996,
          "soft_sharp": -0.3098,
          "romantic_edgy": -0.3854,
          "organic_geometric": -0.1905,
          "playful_refined": -0.3035,
          "everyday_special_occasion": -0.0439,
          "lowkey_statement": -0.5251,
          "grounded_ethereal": -0.3499
        },
        "metrics": {
          "vectorStrength": 0.9283,
          "maxAbsScore": 0.5251,
          "focusRatio": 0.2016
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.5251
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "distinctive",
        "term": "Distinctive",
        "cleanTerm": "distinctive",
        "dedupeKey": "distinctive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2889,
          "classic_unexpected": -0.0784,
          "minimal_ornate": 0.3034,
          "soft_sharp": 0.3251,
          "romantic_edgy": 0.188,
          "organic_geometric": 0.1457,
          "playful_refined": 0.0764,
          "everyday_special_occasion": 0.4851,
          "lowkey_statement": 0.5168,
          "grounded_ethereal": -0.0266
        },
        "metrics": {
          "vectorStrength": 0.9235,
          "maxAbsScore": 0.5168,
          "focusRatio": 0.2123
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5168
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "confident",
        "term": "Confident",
        "cleanTerm": "confident",
        "dedupeKey": "confident",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.8006,
          "classic_unexpected": -0.0335,
          "minimal_ornate": -0.2924,
          "soft_sharp": -0.0819,
          "romantic_edgy": 0.0326,
          "organic_geometric": 0.0677,
          "playful_refined": 0.155,
          "everyday_special_occasion": -0.0098,
          "lowkey_statement": -0.0741,
          "grounded_ethereal": -0.2836
        },
        "metrics": {
          "vectorStrength": 0.9219,
          "maxAbsScore": 0.8006,
          "focusRatio": 0.4372
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.8006
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "remarkable",
        "term": "Remarkable",
        "cleanTerm": "remarkable",
        "dedupeKey": "remarkable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.5422,
          "classic_unexpected": 0.3464,
          "minimal_ornate": -0.0364,
          "soft_sharp": -0.0637,
          "romantic_edgy": 0.0531,
          "organic_geometric": -0.085,
          "playful_refined": 0.0485,
          "everyday_special_occasion": 0.4473,
          "lowkey_statement": 0.4128,
          "grounded_ethereal": 0.21
        },
        "metrics": {
          "vectorStrength": 0.92,
          "maxAbsScore": 0.5422,
          "focusRatio": 0.2415
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5422
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mournful",
        "term": "Mournful",
        "cleanTerm": "mournful",
        "dedupeKey": "mournful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2234,
          "classic_unexpected": -0.0944,
          "minimal_ornate": 0.2244,
          "soft_sharp": -0.4763,
          "romantic_edgy": -0.4009,
          "organic_geometric": -0.3164,
          "playful_refined": -0.1069,
          "everyday_special_occasion": 0.2907,
          "lowkey_statement": -0.2827,
          "grounded_ethereal": 0.2703
        },
        "metrics": {
          "vectorStrength": 0.9196,
          "maxAbsScore": 0.4763,
          "focusRatio": 0.1773
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.4763
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "whisper",
        "term": "Whisper",
        "cleanTerm": "whisper",
        "dedupeKey": "whisper",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.335,
          "classic_unexpected": 0.0151,
          "minimal_ornate": -0.5302,
          "soft_sharp": -0.3315,
          "romantic_edgy": -0.2131,
          "organic_geometric": -0.125,
          "playful_refined": -0.0082,
          "everyday_special_occasion": -0.1273,
          "lowkey_statement": -0.4974,
          "grounded_ethereal": 0.1243
        },
        "metrics": {
          "vectorStrength": 0.9184,
          "maxAbsScore": 0.5302,
          "focusRatio": 0.2298
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5302
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "assertive",
        "term": "Assertive",
        "cleanTerm": "assertive",
        "dedupeKey": "assertive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.6606,
          "classic_unexpected": 0.0028,
          "minimal_ornate": -0.4152,
          "soft_sharp": 0.0385,
          "romantic_edgy": 0.1773,
          "organic_geometric": 0.0869,
          "playful_refined": 0.2908,
          "everyday_special_occasion": 0.055,
          "lowkey_statement": 0.0648,
          "grounded_ethereal": -0.3199
        },
        "metrics": {
          "vectorStrength": 0.9184,
          "maxAbsScore": 0.6606,
          "focusRatio": 0.3128
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6606
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mature",
        "term": "Mature",
        "cleanTerm": "mature",
        "dedupeKey": "mature",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.144,
          "classic_unexpected": -0.3168,
          "minimal_ornate": -0.128,
          "soft_sharp": -0.2985,
          "romantic_edgy": -0.02,
          "organic_geometric": -0.1399,
          "playful_refined": 0.6469,
          "everyday_special_occasion": 0.2433,
          "lowkey_statement": -0.1967,
          "grounded_ethereal": -0.2829
        },
        "metrics": {
          "vectorStrength": 0.9181,
          "maxAbsScore": 0.6469,
          "focusRatio": 0.2677
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6469
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fanciful",
        "term": "Fanciful",
        "cleanTerm": "fanciful",
        "dedupeKey": "fanciful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2213,
          "classic_unexpected": -0.0381,
          "minimal_ornate": 0.4791,
          "soft_sharp": -0.1491,
          "romantic_edgy": -0.3762,
          "organic_geometric": -0.1512,
          "playful_refined": -0.228,
          "everyday_special_occasion": 0.2498,
          "lowkey_statement": -0.1615,
          "grounded_ethereal": 0.4818
        },
        "metrics": {
          "vectorStrength": 0.916,
          "maxAbsScore": 0.4818,
          "focusRatio": 0.19
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4818
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "flora",
        "term": "Flora",
        "cleanTerm": "flora",
        "dedupeKey": "flora",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1435,
          "classic_unexpected": -0.1808,
          "minimal_ornate": 0.2036,
          "soft_sharp": -0.5936,
          "romantic_edgy": -0.1684,
          "organic_geometric": -0.5334,
          "playful_refined": -0.043,
          "everyday_special_occasion": -0.1529,
          "lowkey_statement": -0.2223,
          "grounded_ethereal": 0.0384
        },
        "metrics": {
          "vectorStrength": 0.9144,
          "maxAbsScore": 0.5936,
          "focusRatio": 0.2604
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5936
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "everlasting",
        "term": "Everlasting",
        "cleanTerm": "everlasting",
        "dedupeKey": "everlasting",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1953,
          "classic_unexpected": -0.5517,
          "minimal_ornate": -0.0525,
          "soft_sharp": -0.3233,
          "romantic_edgy": -0.014,
          "organic_geometric": -0.3152,
          "playful_refined": 0.1161,
          "everyday_special_occasion": -0.1843,
          "lowkey_statement": 0.1425,
          "grounded_ethereal": 0.459
        },
        "metrics": {
          "vectorStrength": 0.9098,
          "maxAbsScore": 0.5517,
          "focusRatio": 0.2344
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5517
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "soulful",
        "term": "Soulful",
        "cleanTerm": "soulful",
        "dedupeKey": "soulful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.0323,
          "classic_unexpected": -0.0937,
          "minimal_ornate": -0.1457,
          "soft_sharp": -0.5061,
          "romantic_edgy": -0.5005,
          "organic_geometric": -0.4167,
          "playful_refined": 0.0264,
          "everyday_special_occasion": -0.0502,
          "lowkey_statement": -0.3157,
          "grounded_ethereal": 0.0728
        },
        "metrics": {
          "vectorStrength": 0.9052,
          "maxAbsScore": 0.5061,
          "focusRatio": 0.2343
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5061
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fuzzy",
        "term": "Fuzzy",
        "cleanTerm": "fuzzy",
        "dedupeKey": "fuzzy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.2006,
          "classic_unexpected": 0.101,
          "minimal_ornate": -0.0647,
          "soft_sharp": -0.4248,
          "romantic_edgy": -0.1866,
          "organic_geometric": -0.3121,
          "playful_refined": -0.0906,
          "everyday_special_occasion": -0.2202,
          "lowkey_statement": -0.6116,
          "grounded_ethereal": -0.1383
        },
        "metrics": {
          "vectorStrength": 0.904,
          "maxAbsScore": 0.6116,
          "focusRatio": 0.2602
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.6116
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intricacy",
        "term": "Intricacy",
        "cleanTerm": "intricacy",
        "dedupeKey": "intricacy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.3823,
          "classic_unexpected": -0.0348,
          "minimal_ornate": 0.6218,
          "soft_sharp": 0.2213,
          "romantic_edgy": 0.1605,
          "organic_geometric": 0.1231,
          "playful_refined": 0.2653,
          "everyday_special_occasion": 0.1155,
          "lowkey_statement": -0.3248,
          "grounded_ethereal": -0.0456
        },
        "metrics": {
          "vectorStrength": 0.9028,
          "maxAbsScore": 0.6218,
          "focusRatio": 0.271
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6218
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "starlight",
        "term": "Starlight",
        "cleanTerm": "starlight",
        "dedupeKey": "starlight",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.196,
          "classic_unexpected": -0.2809,
          "minimal_ornate": -0.2597,
          "soft_sharp": -0.0825,
          "romantic_edgy": -0.1723,
          "organic_geometric": 0.0858,
          "playful_refined": -0.168,
          "everyday_special_occasion": 0.2545,
          "lowkey_statement": 0.3405,
          "grounded_ethereal": 0.6122
        },
        "metrics": {
          "vectorStrength": 0.9013,
          "maxAbsScore": 0.6122,
          "focusRatio": 0.2496
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.6122
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "giggly",
        "term": "Giggly",
        "cleanTerm": "giggly",
        "dedupeKey": "giggly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.0038,
          "classic_unexpected": 0.2639,
          "minimal_ornate": 0.0214,
          "soft_sharp": -0.2244,
          "romantic_edgy": -0.3617,
          "organic_geometric": -0.2909,
          "playful_refined": -0.6358,
          "everyday_special_occasion": -0.0088,
          "lowkey_statement": -0.2538,
          "grounded_ethereal": -0.0833
        },
        "metrics": {
          "vectorStrength": 0.9009,
          "maxAbsScore": 0.6358,
          "focusRatio": 0.296
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6358
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "intuitive",
        "term": "Intuitive",
        "cleanTerm": "intuitive",
        "dedupeKey": "intuitive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1213,
          "classic_unexpected": 0.2952,
          "minimal_ornate": -0.416,
          "soft_sharp": -0.2005,
          "romantic_edgy": -0.0571,
          "organic_geometric": -0.3255,
          "playful_refined": 0.0165,
          "everyday_special_occasion": -0.4555,
          "lowkey_statement": -0.3356,
          "grounded_ethereal": -0.258
        },
        "metrics": {
          "vectorStrength": 0.9007,
          "maxAbsScore": 0.4555,
          "focusRatio": 0.1836
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.4555
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "jovial",
        "term": "Jovial",
        "cleanTerm": "jovial",
        "dedupeKey": "jovial",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.219,
          "classic_unexpected": 0.192,
          "minimal_ornate": 0.1056,
          "soft_sharp": -0.4601,
          "romantic_edgy": -0.1041,
          "organic_geometric": -0.2705,
          "playful_refined": -0.5541,
          "everyday_special_occasion": -0.0535,
          "lowkey_statement": -0.3063,
          "grounded_ethereal": 0.1221
        },
        "metrics": {
          "vectorStrength": 0.9002,
          "maxAbsScore": 0.5541,
          "focusRatio": 0.2321
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5541
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "layered",
        "term": "Layered",
        "cleanTerm": "layered",
        "dedupeKey": "layered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.0317,
          "classic_unexpected": -0.2735,
          "minimal_ornate": 0.551,
          "soft_sharp": -0.2239,
          "romantic_edgy": -0.1431,
          "organic_geometric": 0.1822,
          "playful_refined": 0.492,
          "everyday_special_occasion": 0.028,
          "lowkey_statement": -0.2721,
          "grounded_ethereal": -0.03
        },
        "metrics": {
          "vectorStrength": 0.8949,
          "maxAbsScore": 0.551,
          "focusRatio": 0.2474
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.551
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "rugged",
        "term": "Rugged",
        "cleanTerm": "rugged",
        "dedupeKey": "rugged",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.241,
          "classic_unexpected": -0.1101,
          "minimal_ornate": -0.0814,
          "soft_sharp": 0.028,
          "romantic_edgy": 0.5474,
          "organic_geometric": -0.1091,
          "playful_refined": 0.2844,
          "everyday_special_occasion": -0.1573,
          "lowkey_statement": -0.2522,
          "grounded_ethereal": -0.4834
        },
        "metrics": {
          "vectorStrength": 0.89,
          "maxAbsScore": 0.5474,
          "focusRatio": 0.2386
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5474
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "charming",
        "term": "Charming",
        "cleanTerm": "charming",
        "dedupeKey": "charming",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0949,
          "classic_unexpected": -0.0036,
          "minimal_ornate": 0.1266,
          "soft_sharp": -0.2902,
          "romantic_edgy": -0.4324,
          "organic_geometric": -0.2401,
          "playful_refined": -0.6401,
          "everyday_special_occasion": 0.1005,
          "lowkey_statement": -0.0585,
          "grounded_ethereal": -0.0155
        },
        "metrics": {
          "vectorStrength": 0.8817,
          "maxAbsScore": 0.6401,
          "focusRatio": 0.3197
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6401
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "wild",
        "term": "Wild",
        "cleanTerm": "wild",
        "dedupeKey": "wild",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.2324,
          "classic_unexpected": 0.2751,
          "minimal_ornate": -0.2197,
          "soft_sharp": -0.1582,
          "romantic_edgy": 0.3981,
          "organic_geometric": -0.5839,
          "playful_refined": -0.2469,
          "everyday_special_occasion": -0.0742,
          "lowkey_statement": -0.0422,
          "grounded_ethereal": -0.0733
        },
        "metrics": {
          "vectorStrength": 0.8809,
          "maxAbsScore": 0.5839,
          "focusRatio": 0.2534
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5839
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "outspoken",
        "term": "Outspoken",
        "cleanTerm": "outspoken",
        "dedupeKey": "outspoken",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.5594,
          "classic_unexpected": 0.417,
          "minimal_ornate": -0.2567,
          "soft_sharp": -0.0072,
          "romantic_edgy": 0.344,
          "organic_geometric": -0.0785,
          "playful_refined": 0.2194,
          "everyday_special_occasion": 0.0803,
          "lowkey_statement": 0.1933,
          "grounded_ethereal": -0.0523
        },
        "metrics": {
          "vectorStrength": 0.8786,
          "maxAbsScore": 0.5594,
          "focusRatio": 0.2533
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5594
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "colorful",
        "term": "Colorful",
        "cleanTerm": "colorful",
        "dedupeKey": "colorful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4261,
          "classic_unexpected": 0.1196,
          "minimal_ornate": 0.534,
          "soft_sharp": -0.2599,
          "romantic_edgy": -0.2777,
          "organic_geometric": -0.1538,
          "playful_refined": -0.3157,
          "everyday_special_occasion": 0.0964,
          "lowkey_statement": 0.0048,
          "grounded_ethereal": 0.1032
        },
        "metrics": {
          "vectorStrength": 0.877,
          "maxAbsScore": 0.534,
          "focusRatio": 0.2331
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.534
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "legacy",
        "term": "Legacy",
        "cleanTerm": "legacy",
        "dedupeKey": "legacy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1731,
          "classic_unexpected": -0.5302,
          "minimal_ornate": -0.0538,
          "soft_sharp": -0.2886,
          "romantic_edgy": 0.0525,
          "organic_geometric": 0.1921,
          "playful_refined": 0.2362,
          "everyday_special_occasion": 0.2956,
          "lowkey_statement": 0.3396,
          "grounded_ethereal": 0.27
        },
        "metrics": {
          "vectorStrength": 0.8765,
          "maxAbsScore": 0.5302,
          "focusRatio": 0.218
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5302
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "adventurous",
        "term": "Adventurous",
        "cleanTerm": "adventurous",
        "dedupeKey": "adventurous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.3488,
          "classic_unexpected": 0.4705,
          "minimal_ornate": 0.1835,
          "soft_sharp": -0.0505,
          "romantic_edgy": 0.3266,
          "organic_geometric": -0.3578,
          "playful_refined": -0.3162,
          "everyday_special_occasion": 0.1423,
          "lowkey_statement": -0.0697,
          "grounded_ethereal": 0.1712
        },
        "metrics": {
          "vectorStrength": 0.8765,
          "maxAbsScore": 0.4705,
          "focusRatio": 0.193
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "durable",
        "term": "Durable",
        "cleanTerm": "durable",
        "dedupeKey": "durable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.3797,
          "classic_unexpected": -0.4713,
          "minimal_ornate": -0.0996,
          "soft_sharp": -0.2448,
          "romantic_edgy": 0.1578,
          "organic_geometric": -0.086,
          "playful_refined": 0.2548,
          "everyday_special_occasion": -0.4332,
          "lowkey_statement": -0.1562,
          "grounded_ethereal": -0.1494
        },
        "metrics": {
          "vectorStrength": 0.8762,
          "maxAbsScore": 0.4713,
          "focusRatio": 0.1937
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.4713
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "maverick",
        "term": "Maverick",
        "cleanTerm": "maverick",
        "dedupeKey": "maverick",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1406,
          "classic_unexpected": 0.3044,
          "minimal_ornate": -0.5038,
          "soft_sharp": 0.1392,
          "romantic_edgy": 0.5549,
          "organic_geometric": -0.1036,
          "playful_refined": -0.1524,
          "everyday_special_occasion": 0.089,
          "lowkey_statement": 0.1742,
          "grounded_ethereal": 0.0351
        },
        "metrics": {
          "vectorStrength": 0.8758,
          "maxAbsScore": 0.5549,
          "focusRatio": 0.2525
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5549
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mystical",
        "term": "Mystical",
        "cleanTerm": "mystical",
        "dedupeKey": "mystical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1173,
          "classic_unexpected": 0.0859,
          "minimal_ornate": 0.1392,
          "soft_sharp": -0.3453,
          "romantic_edgy": -0.1857,
          "organic_geometric": -0.3788,
          "playful_refined": -0.0627,
          "everyday_special_occasion": 0.1505,
          "lowkey_statement": -0.2445,
          "grounded_ethereal": 0.5839
        },
        "metrics": {
          "vectorStrength": 0.8746,
          "maxAbsScore": 0.5839,
          "focusRatio": 0.2546
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5839
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "lunar",
        "term": "Lunar",
        "cleanTerm": "lunar",
        "dedupeKey": "lunar",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.04,
          "classic_unexpected": -0.0899,
          "minimal_ornate": -0.0639,
          "soft_sharp": -0.3736,
          "romantic_edgy": -0.1313,
          "organic_geometric": -0.2587,
          "playful_refined": 0.0106,
          "everyday_special_occasion": -0.0139,
          "lowkey_statement": -0.0797,
          "grounded_ethereal": 0.7195
        },
        "metrics": {
          "vectorStrength": 0.8729,
          "maxAbsScore": 0.7195,
          "focusRatio": 0.404
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7195
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "feathery",
        "term": "Feathery",
        "cleanTerm": "feathery",
        "dedupeKey": "feathery",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2815,
          "classic_unexpected": -0.1996,
          "minimal_ornate": 0.2969,
          "soft_sharp": -0.2323,
          "romantic_edgy": -0.3055,
          "organic_geometric": -0.4025,
          "playful_refined": 0.0635,
          "everyday_special_occasion": -0.1035,
          "lowkey_statement": -0.4209,
          "grounded_ethereal": 0.2066
        },
        "metrics": {
          "vectorStrength": 0.8667,
          "maxAbsScore": 0.4209,
          "focusRatio": 0.1675
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4209
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intriguing",
        "term": "Intriguing",
        "cleanTerm": "intriguing",
        "dedupeKey": "intriguing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.254,
          "classic_unexpected": 0.5888,
          "minimal_ornate": 0.3761,
          "soft_sharp": 0.0604,
          "romantic_edgy": 0.0631,
          "organic_geometric": -0.2273,
          "playful_refined": -0.3148,
          "everyday_special_occasion": 0.184,
          "lowkey_statement": -0.0232,
          "grounded_ethereal": 0.0657
        },
        "metrics": {
          "vectorStrength": 0.866,
          "maxAbsScore": 0.5888,
          "focusRatio": 0.2729
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5888
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "engineered",
        "term": "Engineered",
        "cleanTerm": "engineered",
        "dedupeKey": "engineered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1908,
          "classic_unexpected": -0.288,
          "minimal_ornate": 0.2573,
          "soft_sharp": 0.2055,
          "romantic_edgy": 0.2303,
          "organic_geometric": 0.1902,
          "playful_refined": 0.6043,
          "everyday_special_occasion": 0.2307,
          "lowkey_statement": -0.0411,
          "grounded_ethereal": -0.1061
        },
        "metrics": {
          "vectorStrength": 0.8651,
          "maxAbsScore": 0.6043,
          "focusRatio": 0.2578
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6043
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "precise",
        "term": "Precise",
        "cleanTerm": "precise",
        "dedupeKey": "precise",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1075,
          "classic_unexpected": -0.2678,
          "minimal_ornate": -0.0899,
          "soft_sharp": 0.5155,
          "romantic_edgy": 0.1114,
          "organic_geometric": 0.0603,
          "playful_refined": 0.4741,
          "everyday_special_occasion": 0.1609,
          "lowkey_statement": -0.2917,
          "grounded_ethereal": -0.1859
        },
        "metrics": {
          "vectorStrength": 0.8623,
          "maxAbsScore": 0.5155,
          "focusRatio": 0.2276
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.5155
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "uncanny",
        "term": "Uncanny",
        "cleanTerm": "uncanny",
        "dedupeKey": "uncanny",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1447,
          "classic_unexpected": 0.4575,
          "minimal_ornate": -0.2764,
          "soft_sharp": 0.0031,
          "romantic_edgy": 0.1607,
          "organic_geometric": -0.3862,
          "playful_refined": -0.3535,
          "everyday_special_occasion": -0.1426,
          "lowkey_statement": -0.229,
          "grounded_ethereal": 0.2285
        },
        "metrics": {
          "vectorStrength": 0.8554,
          "maxAbsScore": 0.4575,
          "focusRatio": 0.192
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4575
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "labyrinthine",
        "term": "Labyrinthine",
        "cleanTerm": "labyrinthine",
        "dedupeKey": "labyrinthine",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": -0.2826,
          "classic_unexpected": -0.0243,
          "minimal_ornate": 0.2635,
          "soft_sharp": -0.4072,
          "romantic_edgy": 0.1155,
          "organic_geometric": -0.1246,
          "playful_refined": -0.0028,
          "everyday_special_occasion": -0.1662,
          "lowkey_statement": -0.4062,
          "grounded_ethereal": 0.4381
        },
        "metrics": {
          "vectorStrength": 0.8538,
          "maxAbsScore": 0.4381,
          "focusRatio": 0.1964
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4381
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "dreamscape",
        "term": "Dreamscape",
        "cleanTerm": "dreamscape",
        "dedupeKey": "dreamscape",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.1919,
          "classic_unexpected": -0.0634,
          "minimal_ornate": 0.1103,
          "soft_sharp": -0.3782,
          "romantic_edgy": -0.4654,
          "organic_geometric": -0.0834,
          "playful_refined": -0.1869,
          "everyday_special_occasion": 0.0646,
          "lowkey_statement": -0.0059,
          "grounded_ethereal": 0.516
        },
        "metrics": {
          "vectorStrength": 0.8515,
          "maxAbsScore": 0.516,
          "focusRatio": 0.2498
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.516
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "tactile",
        "term": "Tactile",
        "cleanTerm": "tactile",
        "dedupeKey": "tactile",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.2326,
          "classic_unexpected": -0.0055,
          "minimal_ornate": -0.0833,
          "soft_sharp": -0.3109,
          "romantic_edgy": -0.2595,
          "organic_geometric": -0.3832,
          "playful_refined": 0.1592,
          "everyday_special_occasion": -0.262,
          "lowkey_statement": -0.3886,
          "grounded_ethereal": -0.3256
        },
        "metrics": {
          "vectorStrength": 0.8502,
          "maxAbsScore": 0.3886,
          "focusRatio": 0.1612
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.3886
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "petals",
        "term": "Petals",
        "cleanTerm": "petals",
        "dedupeKey": "petals",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3931,
          "classic_unexpected": -0.2331,
          "minimal_ornate": 0.2888,
          "soft_sharp": -0.2602,
          "romantic_edgy": -0.401,
          "organic_geometric": -0.343,
          "playful_refined": 0.2296,
          "everyday_special_occasion": 0.1086,
          "lowkey_statement": -0.0073,
          "grounded_ethereal": 0.133
        },
        "metrics": {
          "vectorStrength": 0.8489,
          "maxAbsScore": 0.401,
          "focusRatio": 0.1673
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.401
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "meadow",
        "term": "Meadow",
        "cleanTerm": "meadow",
        "dedupeKey": "meadow",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.202,
          "classic_unexpected": -0.1209,
          "minimal_ornate": -0.1697,
          "soft_sharp": -0.4383,
          "romantic_edgy": -0.3431,
          "organic_geometric": -0.5036,
          "playful_refined": 0.0466,
          "everyday_special_occasion": -0.0259,
          "lowkey_statement": -0.2413,
          "grounded_ethereal": -0.0912
        },
        "metrics": {
          "vectorStrength": 0.8468,
          "maxAbsScore": 0.5036,
          "focusRatio": 0.2308
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5036
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "opulent",
        "term": "Opulent",
        "cleanTerm": "opulent",
        "dedupeKey": "opulent",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2601,
          "classic_unexpected": -0.1787,
          "minimal_ornate": 0.4134,
          "soft_sharp": -0.3611,
          "romantic_edgy": -0.0989,
          "organic_geometric": -0.0826,
          "playful_refined": 0.407,
          "everyday_special_occasion": 0.0779,
          "lowkey_statement": -0.1765,
          "grounded_ethereal": 0.3073
        },
        "metrics": {
          "vectorStrength": 0.8455,
          "maxAbsScore": 0.4134,
          "focusRatio": 0.1749
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.4134
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "finesse",
        "term": "Finesse",
        "cleanTerm": "finesse",
        "dedupeKey": "finesse",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.6372,
          "classic_unexpected": -0.1658,
          "minimal_ornate": -0.1232,
          "soft_sharp": 0.0283,
          "romantic_edgy": -0.1394,
          "organic_geometric": -0.0153,
          "playful_refined": 0.3458,
          "everyday_special_occasion": -0.0537,
          "lowkey_statement": -0.34,
          "grounded_ethereal": 0.0492
        },
        "metrics": {
          "vectorStrength": 0.8424,
          "maxAbsScore": 0.6372,
          "focusRatio": 0.3357
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.6372
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "blossoming",
        "term": "Blossoming",
        "cleanTerm": "blossoming",
        "dedupeKey": "blossoming",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0728,
          "classic_unexpected": 0.1079,
          "minimal_ornate": 0.2873,
          "soft_sharp": -0.4239,
          "romantic_edgy": -0.3292,
          "organic_geometric": -0.486,
          "playful_refined": 0.1131,
          "everyday_special_occasion": 0.2344,
          "lowkey_statement": 0.0993,
          "grounded_ethereal": -0.0298
        },
        "metrics": {
          "vectorStrength": 0.838,
          "maxAbsScore": 0.486,
          "focusRatio": 0.2226
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.486
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "loud",
        "term": "Loud",
        "cleanTerm": "loud",
        "dedupeKey": "loud",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.3007,
          "classic_unexpected": 0.248,
          "minimal_ornate": -0.2485,
          "soft_sharp": -0.5649,
          "romantic_edgy": -0.1495,
          "organic_geometric": -0.0225,
          "playful_refined": 0.0086,
          "everyday_special_occasion": -0.0668,
          "lowkey_statement": -0.3637,
          "grounded_ethereal": 0.0813
        },
        "metrics": {
          "vectorStrength": 0.8362,
          "maxAbsScore": 0.5649,
          "focusRatio": 0.275
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5649
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sunshine",
        "term": "Sunshine",
        "cleanTerm": "sunshine",
        "dedupeKey": "sunshine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.1093,
          "classic_unexpected": 0.067,
          "minimal_ornate": -0.4583,
          "soft_sharp": -0.3859,
          "romantic_edgy": -0.3634,
          "organic_geometric": -0.17,
          "playful_refined": -0.3478,
          "everyday_special_occasion": -0.1736,
          "lowkey_statement": -0.0504,
          "grounded_ethereal": -0.0452
        },
        "metrics": {
          "vectorStrength": 0.8319,
          "maxAbsScore": 0.4583,
          "focusRatio": 0.2111
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4583
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "festive",
        "term": "Festive",
        "cleanTerm": "festive",
        "dedupeKey": "festive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1661,
          "classic_unexpected": -0.208,
          "minimal_ornate": 0.4092,
          "soft_sharp": -0.0602,
          "romantic_edgy": -0.137,
          "organic_geometric": -0.0567,
          "playful_refined": -0.2158,
          "everyday_special_occasion": 0.5913,
          "lowkey_statement": -0.0846,
          "grounded_ethereal": 0.1415
        },
        "metrics": {
          "vectorStrength": 0.829,
          "maxAbsScore": 0.5913,
          "focusRatio": 0.2856
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5913
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "wildflowers",
        "term": "Wildflowers",
        "cleanTerm": "wildflowers",
        "dedupeKey": "wildflowers",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.1521,
          "classic_unexpected": 0.1703,
          "minimal_ornate": 0.0161,
          "soft_sharp": -0.3903,
          "romantic_edgy": -0.2961,
          "organic_geometric": -0.5972,
          "playful_refined": -0.1883,
          "everyday_special_occasion": -0.0372,
          "lowkey_statement": 0.0077,
          "grounded_ethereal": -0.033
        },
        "metrics": {
          "vectorStrength": 0.8289,
          "maxAbsScore": 0.5972,
          "focusRatio": 0.3163
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5972
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "balanced",
        "term": "Balanced",
        "cleanTerm": "balanced",
        "dedupeKey": "balanced",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0533,
          "classic_unexpected": -0.1236,
          "minimal_ornate": -0.5063,
          "soft_sharp": -0.3619,
          "romantic_edgy": -0.0339,
          "organic_geometric": 0.0219,
          "playful_refined": 0.3621,
          "everyday_special_occasion": -0.2552,
          "lowkey_statement": -0.2591,
          "grounded_ethereal": -0.1199
        },
        "metrics": {
          "vectorStrength": 0.8275,
          "maxAbsScore": 0.5063,
          "focusRatio": 0.2414
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5063
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "impactful",
        "term": "Impactful",
        "cleanTerm": "impactful",
        "dedupeKey": "impactful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.6838,
          "classic_unexpected": 0.2368,
          "minimal_ornate": 0.0731,
          "soft_sharp": 0.0305,
          "romantic_edgy": 0.1627,
          "organic_geometric": -0.0867,
          "playful_refined": -0.0986,
          "everyday_special_occasion": 0.0805,
          "lowkey_statement": 0.3134,
          "grounded_ethereal": -0.0114
        },
        "metrics": {
          "vectorStrength": 0.8237,
          "maxAbsScore": 0.6838,
          "focusRatio": 0.3847
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6838
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "woven",
        "term": "Woven",
        "cleanTerm": "woven",
        "dedupeKey": "woven",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0195,
          "classic_unexpected": -0.3802,
          "minimal_ornate": 0.4314,
          "soft_sharp": -0.2908,
          "romantic_edgy": -0.0994,
          "organic_geometric": 0.02,
          "playful_refined": 0.3627,
          "everyday_special_occasion": -0.2932,
          "lowkey_statement": -0.1841,
          "grounded_ethereal": -0.0175
        },
        "metrics": {
          "vectorStrength": 0.8231,
          "maxAbsScore": 0.4314,
          "focusRatio": 0.2055
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.4314
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "silly",
        "term": "Silly",
        "cleanTerm": "silly",
        "dedupeKey": "silly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1253,
          "classic_unexpected": 0.2773,
          "minimal_ornate": -0.2641,
          "soft_sharp": -0.1236,
          "romantic_edgy": -0.0362,
          "organic_geometric": -0.2525,
          "playful_refined": -0.5304,
          "everyday_special_occasion": 0.0052,
          "lowkey_statement": -0.3465,
          "grounded_ethereal": 0.1825
        },
        "metrics": {
          "vectorStrength": 0.823,
          "maxAbsScore": 0.5304,
          "focusRatio": 0.2474
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5304
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "transparent",
        "term": "Transparent",
        "cleanTerm": "transparent",
        "dedupeKey": "transparent",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.0074,
          "classic_unexpected": -0.3765,
          "minimal_ornate": -0.4724,
          "soft_sharp": -0.2777,
          "romantic_edgy": -0.1147,
          "organic_geometric": 0.2219,
          "playful_refined": 0.2622,
          "everyday_special_occasion": -0.18,
          "lowkey_statement": -0.1469,
          "grounded_ethereal": 0.218
        },
        "metrics": {
          "vectorStrength": 0.8214,
          "maxAbsScore": 0.4724,
          "focusRatio": 0.2074
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4724
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sunlit",
        "term": "Sunlit",
        "cleanTerm": "sunlit",
        "dedupeKey": "sunlit",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1118,
          "classic_unexpected": -0.0755,
          "minimal_ornate": -0.3534,
          "soft_sharp": -0.4209,
          "romantic_edgy": -0.4638,
          "organic_geometric": -0.1083,
          "playful_refined": -0.041,
          "everyday_special_occasion": -0.0643,
          "lowkey_statement": -0.1525,
          "grounded_ethereal": 0.3138
        },
        "metrics": {
          "vectorStrength": 0.8214,
          "maxAbsScore": 0.4638,
          "focusRatio": 0.2203
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.4638
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "noteworthy",
        "term": "Noteworthy",
        "cleanTerm": "noteworthy",
        "dedupeKey": "noteworthy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4339,
          "classic_unexpected": 0.2473,
          "minimal_ornate": -0.0195,
          "soft_sharp": 0.0974,
          "romantic_edgy": 0.1155,
          "organic_geometric": -0.1013,
          "playful_refined": 0.0372,
          "everyday_special_occasion": 0.3276,
          "lowkey_statement": 0.5298,
          "grounded_ethereal": 0.0171
        },
        "metrics": {
          "vectorStrength": 0.8201,
          "maxAbsScore": 0.5298,
          "focusRatio": 0.275
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5298
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "gutsy",
        "term": "Gutsy",
        "cleanTerm": "gutsy",
        "dedupeKey": "gutsy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.3145,
          "classic_unexpected": 0.2048,
          "minimal_ornate": -0.2458,
          "soft_sharp": -0.1518,
          "romantic_edgy": 0.4743,
          "organic_geometric": -0.3065,
          "playful_refined": -0.0932,
          "everyday_special_occasion": -0.0164,
          "lowkey_statement": 0.0525,
          "grounded_ethereal": -0.3416
        },
        "metrics": {
          "vectorStrength": 0.8195,
          "maxAbsScore": 0.4743,
          "focusRatio": 0.2154
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.4743
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "courageous",
        "term": "Courageous",
        "cleanTerm": "courageous",
        "dedupeKey": "courageous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4821,
          "classic_unexpected": 0.2118,
          "minimal_ornate": -0.199,
          "soft_sharp": -0.1836,
          "romantic_edgy": 0.4248,
          "organic_geometric": -0.3127,
          "playful_refined": -0.0905,
          "everyday_special_occasion": 0.1455,
          "lowkey_statement": 0.0682,
          "grounded_ethereal": 0.0703
        },
        "metrics": {
          "vectorStrength": 0.8171,
          "maxAbsScore": 0.4821,
          "focusRatio": 0.2203
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.4821
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "grunge",
        "term": "Grunge",
        "cleanTerm": "grunge",
        "dedupeKey": "grunge",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0767,
          "classic_unexpected": 0.1876,
          "minimal_ornate": -0.2762,
          "soft_sharp": -0.0081,
          "romantic_edgy": 0.4758,
          "organic_geometric": -0.1698,
          "playful_refined": 0.1424,
          "everyday_special_occasion": -0.1995,
          "lowkey_statement": -0.0288,
          "grounded_ethereal": -0.4728
        },
        "metrics": {
          "vectorStrength": 0.8106,
          "maxAbsScore": 0.4758,
          "focusRatio": 0.2335
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.4758
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "punk",
        "term": "Punk",
        "cleanTerm": "punk",
        "dedupeKey": "punk",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0577,
          "classic_unexpected": 0.0783,
          "minimal_ornate": -0.2723,
          "soft_sharp": 0.3016,
          "romantic_edgy": 0.6394,
          "organic_geometric": -0.0117,
          "playful_refined": -0.1275,
          "everyday_special_occasion": -0.0949,
          "lowkey_statement": -0.032,
          "grounded_ethereal": -0.2084
        },
        "metrics": {
          "vectorStrength": 0.8083,
          "maxAbsScore": 0.6394,
          "focusRatio": 0.3506
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6394
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "distinct",
        "term": "Distinct",
        "cleanTerm": "distinct",
        "dedupeKey": "distinct",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1457,
          "classic_unexpected": -0.1076,
          "minimal_ornate": -0.1289,
          "soft_sharp": 0.1418,
          "romantic_edgy": 0.2132,
          "organic_geometric": 0.1992,
          "playful_refined": 0.282,
          "everyday_special_occasion": 0.5776,
          "lowkey_statement": 0.2548,
          "grounded_ethereal": 0.075
        },
        "metrics": {
          "vectorStrength": 0.799,
          "maxAbsScore": 0.5776,
          "focusRatio": 0.2717
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5776
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "enchanted",
        "term": "Enchanted",
        "cleanTerm": "enchanted",
        "dedupeKey": "enchanted",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0332,
          "classic_unexpected": -0.1353,
          "minimal_ornate": 0.3575,
          "soft_sharp": -0.1523,
          "romantic_edgy": -0.3886,
          "organic_geometric": -0.376,
          "playful_refined": -0.0424,
          "everyday_special_occasion": 0.3591,
          "lowkey_statement": -0.0909,
          "grounded_ethereal": 0.1894
        },
        "metrics": {
          "vectorStrength": 0.7985,
          "maxAbsScore": 0.3886,
          "focusRatio": 0.1829
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.3886
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "accessible",
        "term": "Accessible",
        "cleanTerm": "accessible",
        "dedupeKey": "accessible",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.25,
          "classic_unexpected": -0.077,
          "minimal_ornate": -0.5043,
          "soft_sharp": -0.3767,
          "romantic_edgy": 0.1237,
          "organic_geometric": -0.049,
          "playful_refined": 0.3452,
          "everyday_special_occasion": -0.1426,
          "lowkey_statement": -0.104,
          "grounded_ethereal": 0.018
        },
        "metrics": {
          "vectorStrength": 0.7956,
          "maxAbsScore": 0.5043,
          "focusRatio": 0.2534
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5043
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "integrated",
        "term": "Integrated",
        "cleanTerm": "integrated",
        "dedupeKey": "integrated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.2008,
          "classic_unexpected": -0.3827,
          "minimal_ornate": 0.0204,
          "soft_sharp": -0.1078,
          "romantic_edgy": -0.0208,
          "organic_geometric": 0.2984,
          "playful_refined": 0.5519,
          "everyday_special_occasion": 0.0055,
          "lowkey_statement": -0.0317,
          "grounded_ethereal": -0.1733
        },
        "metrics": {
          "vectorStrength": 0.7899,
          "maxAbsScore": 0.5519,
          "focusRatio": 0.3078
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5519
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "limitless",
        "term": "Limitless",
        "cleanTerm": "limitless",
        "dedupeKey": "limitless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1861,
          "classic_unexpected": -0.104,
          "minimal_ornate": -0.3055,
          "soft_sharp": -0.3002,
          "romantic_edgy": 0.2492,
          "organic_geometric": -0.1352,
          "playful_refined": -0.0394,
          "everyday_special_occasion": -0.3256,
          "lowkey_statement": 0.0145,
          "grounded_ethereal": 0.4543
        },
        "metrics": {
          "vectorStrength": 0.7895,
          "maxAbsScore": 0.4543,
          "focusRatio": 0.2149
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4543
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "rough",
        "term": "Rough",
        "cleanTerm": "rough",
        "dedupeKey": "rough",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.0987,
          "classic_unexpected": 0.1331,
          "minimal_ornate": -0.1497,
          "soft_sharp": -0.2084,
          "romantic_edgy": 0.3689,
          "organic_geometric": -0.1926,
          "playful_refined": 0.0341,
          "everyday_special_occasion": -0.1849,
          "lowkey_statement": -0.2355,
          "grounded_ethereal": -0.5154
        },
        "metrics": {
          "vectorStrength": 0.7893,
          "maxAbsScore": 0.5154,
          "focusRatio": 0.243
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.5154
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "crisp",
        "term": "Crisp",
        "cleanTerm": "crisp",
        "dedupeKey": "crisp",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1863,
          "classic_unexpected": -0.0459,
          "minimal_ornate": -0.3098,
          "soft_sharp": 0.582,
          "romantic_edgy": 0.0657,
          "organic_geometric": 0.0343,
          "playful_refined": 0.0516,
          "everyday_special_occasion": 0.0405,
          "lowkey_statement": -0.0883,
          "grounded_ethereal": -0.363
        },
        "metrics": {
          "vectorStrength": 0.7879,
          "maxAbsScore": 0.582,
          "focusRatio": 0.3293
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.582
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "authentic",
        "term": "Authentic",
        "cleanTerm": "authentic",
        "dedupeKey": "authentic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.3921,
          "classic_unexpected": -0.3336,
          "minimal_ornate": -0.1068,
          "soft_sharp": -0.0978,
          "romantic_edgy": 0.0298,
          "organic_geometric": -0.3757,
          "playful_refined": 0.1108,
          "everyday_special_occasion": 0.0735,
          "lowkey_statement": 0.1124,
          "grounded_ethereal": -0.399
        },
        "metrics": {
          "vectorStrength": 0.7858,
          "maxAbsScore": 0.399,
          "focusRatio": 0.1964
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.399
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "pioneering",
        "term": "Pioneering",
        "cleanTerm": "pioneering",
        "dedupeKey": "pioneering",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1631,
          "classic_unexpected": 0.2951,
          "minimal_ornate": -0.1491,
          "soft_sharp": 0.1671,
          "romantic_edgy": 0.5386,
          "organic_geometric": -0.1098,
          "playful_refined": -0.1176,
          "everyday_special_occasion": 0.15,
          "lowkey_statement": 0.3322,
          "grounded_ethereal": 0.054
        },
        "metrics": {
          "vectorStrength": 0.7846,
          "maxAbsScore": 0.5386,
          "focusRatio": 0.2594
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5386
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "gritty",
        "term": "Gritty",
        "cleanTerm": "gritty",
        "dedupeKey": "gritty",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0053,
          "classic_unexpected": 0.051,
          "minimal_ornate": -0.0759,
          "soft_sharp": 0.2143,
          "romantic_edgy": 0.3992,
          "organic_geometric": -0.2131,
          "playful_refined": 0.0767,
          "everyday_special_occasion": -0.2116,
          "lowkey_statement": -0.1831,
          "grounded_ethereal": -0.5205
        },
        "metrics": {
          "vectorStrength": 0.7837,
          "maxAbsScore": 0.5205,
          "focusRatio": 0.2668
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.5205
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "exposed",
        "term": "Exposed",
        "cleanTerm": "exposed",
        "dedupeKey": "exposed",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.331,
          "classic_unexpected": 0.1248,
          "minimal_ornate": -0.1483,
          "soft_sharp": 0.1108,
          "romantic_edgy": 0.2216,
          "organic_geometric": 0.057,
          "playful_refined": 0.515,
          "everyday_special_occasion": 0.286,
          "lowkey_statement": 0.0969,
          "grounded_ethereal": -0.2117
        },
        "metrics": {
          "vectorStrength": 0.7829,
          "maxAbsScore": 0.515,
          "focusRatio": 0.2449
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.515
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "spark",
        "term": "Spark",
        "cleanTerm": "spark",
        "dedupeKey": "spark",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0534,
          "classic_unexpected": 0.094,
          "minimal_ornate": -0.1317,
          "soft_sharp": 0.3426,
          "romantic_edgy": -0.1293,
          "organic_geometric": 0.1282,
          "playful_refined": -0.2233,
          "everyday_special_occasion": 0.3107,
          "lowkey_statement": 0.4705,
          "grounded_ethereal": -0.2457
        },
        "metrics": {
          "vectorStrength": 0.7795,
          "maxAbsScore": 0.4705,
          "focusRatio": 0.221
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.4705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "poised",
        "term": "Poised",
        "cleanTerm": "poised",
        "dedupeKey": "poised",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1934,
          "classic_unexpected": -0.2741,
          "minimal_ornate": -0.3656,
          "soft_sharp": 0.1819,
          "romantic_edgy": -0.2014,
          "organic_geometric": 0.0008,
          "playful_refined": 0.4967,
          "everyday_special_occasion": 0.0244,
          "lowkey_statement": -0.0852,
          "grounded_ethereal": -0.1696
        },
        "metrics": {
          "vectorStrength": 0.7767,
          "maxAbsScore": 0.4967,
          "focusRatio": 0.2492
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.4967
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "original",
        "term": "Original",
        "cleanTerm": "original",
        "dedupeKey": "original",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1798,
          "classic_unexpected": -0.3824,
          "minimal_ornate": -0.4086,
          "soft_sharp": -0.1812,
          "romantic_edgy": 0.1594,
          "organic_geometric": -0.2696,
          "playful_refined": 0.1423,
          "everyday_special_occasion": 0.0009,
          "lowkey_statement": 0.1471,
          "grounded_ethereal": -0.2874
        },
        "metrics": {
          "vectorStrength": 0.7752,
          "maxAbsScore": 0.4086,
          "focusRatio": 0.1893
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4086
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "twinkle",
        "term": "Twinkle",
        "cleanTerm": "twinkle",
        "dedupeKey": "twinkle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.4478,
          "classic_unexpected": -0.0048,
          "minimal_ornate": -0.0307,
          "soft_sharp": 0.0453,
          "romantic_edgy": -0.3569,
          "organic_geometric": -0.0823,
          "playful_refined": -0.4668,
          "everyday_special_occasion": 0.1645,
          "lowkey_statement": -0.0674,
          "grounded_ethereal": 0.1135
        },
        "metrics": {
          "vectorStrength": 0.7747,
          "maxAbsScore": 0.4668,
          "focusRatio": 0.2623
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.4668
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "whitespace",
        "term": "Whitespace",
        "cleanTerm": "whitespace",
        "dedupeKey": "whitespace",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.186,
          "classic_unexpected": -0.1721,
          "minimal_ornate": -0.5704,
          "soft_sharp": -0.1171,
          "romantic_edgy": -0.0191,
          "organic_geometric": 0.4076,
          "playful_refined": 0.0258,
          "everyday_special_occasion": -0.1287,
          "lowkey_statement": 0.0308,
          "grounded_ethereal": 0.068
        },
        "metrics": {
          "vectorStrength": 0.7698,
          "maxAbsScore": 0.5704,
          "focusRatio": 0.3306
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5704
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "witty",
        "term": "Witty",
        "cleanTerm": "witty",
        "dedupeKey": "witty",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1271,
          "classic_unexpected": 0.2861,
          "minimal_ornate": 0.0317,
          "soft_sharp": -0.03,
          "romantic_edgy": -0.0395,
          "organic_geometric": -0.2666,
          "playful_refined": -0.6301,
          "everyday_special_occasion": -0.0803,
          "lowkey_statement": -0.1274,
          "grounded_ethereal": -0.0087
        },
        "metrics": {
          "vectorStrength": 0.7696,
          "maxAbsScore": 0.6301,
          "focusRatio": 0.3871
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6301
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "everyday",
        "term": "Everyday",
        "cleanTerm": "everyday",
        "dedupeKey": "everyday",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0126,
          "classic_unexpected": -0.2749,
          "minimal_ornate": -0.2953,
          "soft_sharp": -0.3056,
          "romantic_edgy": 0.0454,
          "organic_geometric": -0.2391,
          "playful_refined": 0.0031,
          "everyday_special_occasion": -0.5212,
          "lowkey_statement": -0.0368,
          "grounded_ethereal": 0.005
        },
        "metrics": {
          "vectorStrength": 0.7672,
          "maxAbsScore": 0.5212,
          "focusRatio": 0.2997
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.5212
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "flourished",
        "term": "Flourished",
        "cleanTerm": "flourished",
        "dedupeKey": "flourished",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0622,
          "classic_unexpected": -0.1886,
          "minimal_ornate": 0.5046,
          "soft_sharp": -0.2101,
          "romantic_edgy": -0.2415,
          "organic_geometric": -0.1742,
          "playful_refined": 0.1791,
          "everyday_special_occasion": 0.234,
          "lowkey_statement": 0.2175,
          "grounded_ethereal": -0.1615
        },
        "metrics": {
          "vectorStrength": 0.7663,
          "maxAbsScore": 0.5046,
          "focusRatio": 0.2322
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5046
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "edgy",
        "term": "Edgy",
        "cleanTerm": "edgy",
        "dedupeKey": "edgy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.1043,
          "classic_unexpected": 0.4982,
          "minimal_ornate": -0.0466,
          "soft_sharp": 0.3048,
          "romantic_edgy": 0.2104,
          "organic_geometric": -0.2989,
          "playful_refined": -0.0839,
          "everyday_special_occasion": 0.2332,
          "lowkey_statement": 0.0009,
          "grounded_ethereal": -0.1944
        },
        "metrics": {
          "vectorStrength": 0.7661,
          "maxAbsScore": 0.4982,
          "focusRatio": 0.2522
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4982
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "imaginative",
        "term": "Imaginative",
        "cleanTerm": "imaginative",
        "dedupeKey": "imaginative",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1729,
          "classic_unexpected": 0.3521,
          "minimal_ornate": 0.2476,
          "soft_sharp": -0.2332,
          "romantic_edgy": -0.1125,
          "organic_geometric": -0.221,
          "playful_refined": -0.2545,
          "everyday_special_occasion": 0.1916,
          "lowkey_statement": -0.1322,
          "grounded_ethereal": 0.3683
        },
        "metrics": {
          "vectorStrength": 0.7653,
          "maxAbsScore": 0.3683,
          "focusRatio": 0.1611
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.3683
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "stripped",
        "term": "Stripped",
        "cleanTerm": "stripped",
        "dedupeKey": "stripped",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.0375,
          "classic_unexpected": -0.2476,
          "minimal_ornate": -0.3292,
          "soft_sharp": 0.1021,
          "romantic_edgy": 0.1804,
          "organic_geometric": 0.2424,
          "playful_refined": 0.4721,
          "everyday_special_occasion": 0.0475,
          "lowkey_statement": -0.1205,
          "grounded_ethereal": -0.2698
        },
        "metrics": {
          "vectorStrength": 0.765,
          "maxAbsScore": 0.4721,
          "focusRatio": 0.2304
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.4721
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sky_bound",
        "term": "Sky-Bound",
        "cleanTerm": "sky-bound",
        "dedupeKey": "sky-bound",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1746,
          "classic_unexpected": -0.0092,
          "minimal_ornate": -0.2351,
          "soft_sharp": -0.1136,
          "romantic_edgy": -0.0082,
          "organic_geometric": -0.0435,
          "playful_refined": 0.1684,
          "everyday_special_occasion": 0.1634,
          "lowkey_statement": 0.3504,
          "grounded_ethereal": 0.5508
        },
        "metrics": {
          "vectorStrength": 0.7628,
          "maxAbsScore": 0.5508,
          "focusRatio": 0.3031
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5508
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "unfiltered",
        "term": "Unfiltered",
        "cleanTerm": "unfiltered",
        "dedupeKey": "unfiltered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0845,
          "classic_unexpected": 0.1416,
          "minimal_ornate": -0.4849,
          "soft_sharp": -0.1015,
          "romantic_edgy": 0.2615,
          "organic_geometric": -0.2661,
          "playful_refined": 0.1087,
          "everyday_special_occasion": -0.1757,
          "lowkey_statement": -0.2038,
          "grounded_ethereal": -0.2828
        },
        "metrics": {
          "vectorStrength": 0.759,
          "maxAbsScore": 0.4849,
          "focusRatio": 0.2297
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4849
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intimate",
        "term": "Intimate",
        "cleanTerm": "intimate",
        "dedupeKey": "intimate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2654,
          "classic_unexpected": -0.0682,
          "minimal_ornate": 0.0327,
          "soft_sharp": -0.3172,
          "romantic_edgy": -0.2549,
          "organic_geometric": -0.1977,
          "playful_refined": 0.0661,
          "everyday_special_occasion": 0.2157,
          "lowkey_statement": -0.4564,
          "grounded_ethereal": -0.1844
        },
        "metrics": {
          "vectorStrength": 0.7576,
          "maxAbsScore": 0.4564,
          "focusRatio": 0.2217
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4564
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "meticulous",
        "term": "Meticulous",
        "cleanTerm": "meticulous",
        "dedupeKey": "meticulous",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.2277,
          "classic_unexpected": -0.3988,
          "minimal_ornate": 0.0735,
          "soft_sharp": 0.0894,
          "romantic_edgy": -0.0406,
          "organic_geometric": 0.0992,
          "playful_refined": 0.462,
          "everyday_special_occasion": 0.1232,
          "lowkey_statement": -0.3267,
          "grounded_ethereal": 0.0161
        },
        "metrics": {
          "vectorStrength": 0.7559,
          "maxAbsScore": 0.462,
          "focusRatio": 0.2488
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.462
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sincerity",
        "term": "Sincerity",
        "cleanTerm": "sincerity",
        "dedupeKey": "sincerity",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0231,
          "classic_unexpected": -0.2444,
          "minimal_ornate": -0.5028,
          "soft_sharp": -0.1358,
          "romantic_edgy": -0.2059,
          "organic_geometric": -0.174,
          "playful_refined": -0.1757,
          "everyday_special_occasion": -0.1121,
          "lowkey_statement": 0.0276,
          "grounded_ethereal": -0.3457
        },
        "metrics": {
          "vectorStrength": 0.7536,
          "maxAbsScore": 0.5028,
          "focusRatio": 0.2583
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5028
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "flexible",
        "term": "Flexible",
        "cleanTerm": "flexible",
        "dedupeKey": "flexible",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0911,
          "classic_unexpected": -0.0316,
          "minimal_ornate": -0.2298,
          "soft_sharp": -0.2726,
          "romantic_edgy": 0.2029,
          "organic_geometric": 0.083,
          "playful_refined": 0.0973,
          "everyday_special_occasion": -0.4611,
          "lowkey_statement": -0.385,
          "grounded_ethereal": 0.0862
        },
        "metrics": {
          "vectorStrength": 0.7498,
          "maxAbsScore": 0.4611,
          "focusRatio": 0.2376
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.4611
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "jumpy",
        "term": "Jumpy",
        "cleanTerm": "jumpy",
        "dedupeKey": "jumpy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1174,
          "classic_unexpected": 0.5077,
          "minimal_ornate": -0.1943,
          "soft_sharp": 0.0749,
          "romantic_edgy": 0.1765,
          "organic_geometric": -0.2271,
          "playful_refined": -0.2856,
          "everyday_special_occasion": -0.1912,
          "lowkey_statement": -0.1665,
          "grounded_ethereal": -0.1351
        },
        "metrics": {
          "vectorStrength": 0.7495,
          "maxAbsScore": 0.5077,
          "focusRatio": 0.2445
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5077
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "heartstrings",
        "term": "Heartstrings",
        "cleanTerm": "heartstrings",
        "dedupeKey": "heartstrings",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": -0.2031,
          "classic_unexpected": -0.1881,
          "minimal_ornate": 0.0329,
          "soft_sharp": -0.258,
          "romantic_edgy": -0.5038,
          "organic_geometric": -0.1109,
          "playful_refined": -0.2336,
          "everyday_special_occasion": 0.2497,
          "lowkey_statement": 0.1847,
          "grounded_ethereal": 0.0115
        },
        "metrics": {
          "vectorStrength": 0.7493,
          "maxAbsScore": 0.5038,
          "focusRatio": 0.2549
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.5038
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "starstruck",
        "term": "Starstruck",
        "cleanTerm": "starstruck",
        "dedupeKey": "starstruck",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1104,
          "classic_unexpected": -0.1044,
          "minimal_ornate": -0.2049,
          "soft_sharp": 0.0362,
          "romantic_edgy": -0.0687,
          "organic_geometric": 0.0948,
          "playful_refined": -0.1213,
          "everyday_special_occasion": 0.2334,
          "lowkey_statement": 0.5118,
          "grounded_ethereal": 0.3787
        },
        "metrics": {
          "vectorStrength": 0.7448,
          "maxAbsScore": 0.5118,
          "focusRatio": 0.2745
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5118
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "memory",
        "term": "Memory",
        "cleanTerm": "memory",
        "dedupeKey": "memory",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1035,
          "classic_unexpected": -0.3532,
          "minimal_ornate": -0.4051,
          "soft_sharp": -0.3265,
          "romantic_edgy": -0.2033,
          "organic_geometric": 0.1854,
          "playful_refined": 0.1944,
          "everyday_special_occasion": 0.1532,
          "lowkey_statement": -0.0502,
          "grounded_ethereal": -0.0871
        },
        "metrics": {
          "vectorStrength": 0.7438,
          "maxAbsScore": 0.4051,
          "focusRatio": 0.1965
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4051
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "alluring",
        "term": "Alluring",
        "cleanTerm": "alluring",
        "dedupeKey": "alluring",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1919,
          "classic_unexpected": 0.1087,
          "minimal_ornate": 0.3249,
          "soft_sharp": -0.2687,
          "romantic_edgy": -0.3109,
          "organic_geometric": -0.3871,
          "playful_refined": -0.1652,
          "everyday_special_occasion": -0.0154,
          "lowkey_statement": -0.0917,
          "grounded_ethereal": 0.1831
        },
        "metrics": {
          "vectorStrength": 0.7365,
          "maxAbsScore": 0.3871,
          "focusRatio": 0.1891
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.3871
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "energized",
        "term": "Energized",
        "cleanTerm": "energized",
        "dedupeKey": "energized",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.4219,
          "classic_unexpected": 0.0379,
          "minimal_ornate": -0.0503,
          "soft_sharp": 0.0059,
          "romantic_edgy": -0.0237,
          "organic_geometric": -0.0392,
          "playful_refined": 0.0663,
          "everyday_special_occasion": 0.3237,
          "lowkey_statement": 0.137,
          "grounded_ethereal": -0.4758
        },
        "metrics": {
          "vectorStrength": 0.7338,
          "maxAbsScore": 0.4758,
          "focusRatio": 0.3009
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.4758
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "explorative",
        "term": "Explorative",
        "cleanTerm": "explorative",
        "dedupeKey": "explorative",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2288,
          "classic_unexpected": 0.5341,
          "minimal_ornate": 0.1103,
          "soft_sharp": -0.0632,
          "romantic_edgy": 0.2294,
          "organic_geometric": -0.2653,
          "playful_refined": -0.0826,
          "everyday_special_occasion": 0.1997,
          "lowkey_statement": -0.064,
          "grounded_ethereal": -0.0947
        },
        "metrics": {
          "vectorStrength": 0.7325,
          "maxAbsScore": 0.5341,
          "focusRatio": 0.2853
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5341
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "expressive",
        "term": "Expressive",
        "cleanTerm": "expressive",
        "dedupeKey": "expressive",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.3978,
          "classic_unexpected": 0.0954,
          "minimal_ornate": 0.3345,
          "soft_sharp": -0.1763,
          "romantic_edgy": -0.2576,
          "organic_geometric": -0.1778,
          "playful_refined": 0.0628,
          "everyday_special_occasion": 0.307,
          "lowkey_statement": -0.0417,
          "grounded_ethereal": -0.1075
        },
        "metrics": {
          "vectorStrength": 0.721,
          "maxAbsScore": 0.3978,
          "focusRatio": 0.2031
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.3978
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "enigmatic",
        "term": "Enigmatic",
        "cleanTerm": "enigmatic",
        "dedupeKey": "enigmatic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.144,
          "classic_unexpected": 0.3796,
          "minimal_ornate": 0.0345,
          "soft_sharp": -0.0907,
          "romantic_edgy": 0.105,
          "organic_geometric": -0.1958,
          "playful_refined": -0.1374,
          "everyday_special_occasion": 0.068,
          "lowkey_statement": -0.2471,
          "grounded_ethereal": 0.4415
        },
        "metrics": {
          "vectorStrength": 0.7093,
          "maxAbsScore": 0.4415,
          "focusRatio": 0.2395
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4415
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "symmetry",
        "term": "Symmetry",
        "cleanTerm": "symmetry",
        "dedupeKey": "symmetry",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0645,
          "classic_unexpected": -0.3454,
          "minimal_ornate": -0.3352,
          "soft_sharp": -0.1494,
          "romantic_edgy": -0.0313,
          "organic_geometric": 0.4124,
          "playful_refined": 0.1264,
          "everyday_special_occasion": -0.1857,
          "lowkey_statement": 0.1095,
          "grounded_ethereal": -0.0907
        },
        "metrics": {
          "vectorStrength": 0.707,
          "maxAbsScore": 0.4124,
          "focusRatio": 0.2228
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.4124
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "evolved",
        "term": "Evolved",
        "cleanTerm": "evolved",
        "dedupeKey": "evolved",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1187,
          "classic_unexpected": -0.1281,
          "minimal_ornate": 0.0164,
          "soft_sharp": 0.019,
          "romantic_edgy": 0.2465,
          "organic_geometric": -0.2607,
          "playful_refined": 0.5162,
          "everyday_special_occasion": 0.079,
          "lowkey_statement": -0.1095,
          "grounded_ethereal": -0.2338
        },
        "metrics": {
          "vectorStrength": 0.7066,
          "maxAbsScore": 0.5162,
          "focusRatio": 0.2988
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5162
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": false,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "growing",
        "term": "Growing",
        "cleanTerm": "growing",
        "dedupeKey": "growing",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1297,
          "classic_unexpected": 0.0886,
          "minimal_ornate": 0.1505,
          "soft_sharp": -0.2846,
          "romantic_edgy": 0.0152,
          "organic_geometric": -0.3251,
          "playful_refined": 0.2118,
          "everyday_special_occasion": 0.0774,
          "lowkey_statement": -0.0293,
          "grounded_ethereal": -0.418
        },
        "metrics": {
          "vectorStrength": 0.6787,
          "maxAbsScore": 0.418,
          "focusRatio": 0.2416
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.418
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "curated",
        "term": "Curated",
        "cleanTerm": "curated",
        "dedupeKey": "curated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.031,
          "classic_unexpected": -0.23,
          "minimal_ornate": -0.1085,
          "soft_sharp": -0.0564,
          "romantic_edgy": -0.0647,
          "organic_geometric": 0.0469,
          "playful_refined": 0.5067,
          "everyday_special_occasion": 0.2849,
          "lowkey_statement": -0.108,
          "grounded_ethereal": -0.1886
        },
        "metrics": {
          "vectorStrength": 0.6785,
          "maxAbsScore": 0.5067,
          "focusRatio": 0.3117
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5067
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "vibrant",
        "term": "Vibrant",
        "cleanTerm": "vibrant",
        "dedupeKey": "vibrant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.4415,
          "classic_unexpected": 0.1557,
          "minimal_ornate": 0.2211,
          "soft_sharp": -0.1558,
          "romantic_edgy": -0.1778,
          "organic_geometric": -0.1998,
          "playful_refined": -0.2261,
          "everyday_special_occasion": 0.1207,
          "lowkey_statement": 0.1014,
          "grounded_ethereal": -0.1095
        },
        "metrics": {
          "vectorStrength": 0.6722,
          "maxAbsScore": 0.4415,
          "focusRatio": 0.2312
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.4415
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "beaming",
        "term": "Beaming",
        "cleanTerm": "beaming",
        "dedupeKey": "beaming",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2761,
          "classic_unexpected": -0.0396,
          "minimal_ornate": 0.0545,
          "soft_sharp": -0.1758,
          "romantic_edgy": -0.4472,
          "organic_geometric": 0.0494,
          "playful_refined": -0.2019,
          "everyday_special_occasion": 0.2158,
          "lowkey_statement": 0.2086,
          "grounded_ethereal": 0.0492
        },
        "metrics": {
          "vectorStrength": 0.6688,
          "maxAbsScore": 0.4472,
          "focusRatio": 0.2603
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.4472
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "grid",
        "term": "Grid",
        "cleanTerm": "grid",
        "dedupeKey": "grid",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.128,
          "classic_unexpected": -0.0583,
          "minimal_ornate": 0.0911,
          "soft_sharp": 0.0507,
          "romantic_edgy": 0.0895,
          "organic_geometric": 0.5203,
          "playful_refined": 0.1694,
          "everyday_special_occasion": -0.0208,
          "lowkey_statement": 0.3219,
          "grounded_ethereal": 0.0259
        },
        "metrics": {
          "vectorStrength": 0.6654,
          "maxAbsScore": 0.5203,
          "focusRatio": 0.3525
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.5203
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": false,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fresh",
        "term": "Fresh",
        "cleanTerm": "fresh",
        "dedupeKey": "fresh",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0008,
          "classic_unexpected": 0.0798,
          "minimal_ornate": -0.4203,
          "soft_sharp": -0.1481,
          "romantic_edgy": -0.1327,
          "organic_geometric": -0.3594,
          "playful_refined": -0.0393,
          "everyday_special_occasion": -0.028,
          "lowkey_statement": -0.13,
          "grounded_ethereal": -0.2675
        },
        "metrics": {
          "vectorStrength": 0.6652,
          "maxAbsScore": 0.4203,
          "focusRatio": 0.2617
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4203
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "shine",
        "term": "Shine",
        "cleanTerm": "shine",
        "dedupeKey": "shine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0659,
          "classic_unexpected": -0.2208,
          "minimal_ornate": -0.2813,
          "soft_sharp": -0.1503,
          "romantic_edgy": -0.453,
          "organic_geometric": 0.1061,
          "playful_refined": -0.1333,
          "everyday_special_occasion": 0.0428,
          "lowkey_statement": 0.1501,
          "grounded_ethereal": 0.1609
        },
        "metrics": {
          "vectorStrength": 0.6628,
          "maxAbsScore": 0.453,
          "focusRatio": 0.2567
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.453
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "freedom",
        "term": "Freedom",
        "cleanTerm": "freedom",
        "dedupeKey": "freedom",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1153,
          "classic_unexpected": -0.1091,
          "minimal_ornate": -0.4331,
          "soft_sharp": -0.2502,
          "romantic_edgy": 0.3287,
          "organic_geometric": -0.1048,
          "playful_refined": -0.0381,
          "everyday_special_occasion": -0.1698,
          "lowkey_statement": -0.0215,
          "grounded_ethereal": -0.0401
        },
        "metrics": {
          "vectorStrength": 0.6532,
          "maxAbsScore": 0.4331,
          "focusRatio": 0.2689
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4331
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "illusion",
        "term": "Illusion",
        "cleanTerm": "illusion",
        "dedupeKey": "illusion",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0056,
          "classic_unexpected": 0.1855,
          "minimal_ornate": -0.1055,
          "soft_sharp": -0.0944,
          "romantic_edgy": 0.1286,
          "organic_geometric": 0.0627,
          "playful_refined": -0.087,
          "everyday_special_occasion": -0.0127,
          "lowkey_statement": 0.0404,
          "grounded_ethereal": 0.5217
        },
        "metrics": {
          "vectorStrength": 0.597,
          "maxAbsScore": 0.5217,
          "focusRatio": 0.4193
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5217
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      }
    ],
    "opposingPairCandidates": {
      "Classic ↔ Unexpected": {
        "Classic": [
          {
            "id": "polished",
            "term": "Polished",
            "rank": 1,
            "poleScore": 0.8438,
            "focusRatio": 0.3255,
            "vectorStrength": 1.4066,
            "rankScore": 3.3681
          },
          {
            "id": "classic",
            "term": "Classic",
            "rank": 2,
            "poleScore": 0.8032,
            "focusRatio": 0.288,
            "vectorStrength": 1.1013,
            "rankScore": 3.0675
          },
          {
            "id": "timeless",
            "term": "Timeless",
            "rank": 3,
            "poleScore": 0.7866,
            "focusRatio": 0.2648,
            "vectorStrength": 1.1962,
            "rankScore": 3.0406
          },
          {
            "id": "pristine",
            "term": "Pristine",
            "rank": 4,
            "poleScore": 0.7334,
            "focusRatio": 0.257,
            "vectorStrength": 1.1853,
            "rankScore": 2.8968
          },
          {
            "id": "elegant",
            "term": "Elegant",
            "rank": 5,
            "poleScore": 0.6618,
            "focusRatio": 0.2342,
            "vectorStrength": 1.1854,
            "rankScore": 2.695
          },
          {
            "id": "structured",
            "term": "Structured",
            "rank": 6,
            "poleScore": 0.5073,
            "focusRatio": 0.2743,
            "vectorStrength": 1.148,
            "rankScore": 2.3555
          },
          {
            "id": "cherished",
            "term": "Cherished",
            "rank": 7,
            "poleScore": 0.5599,
            "focusRatio": 0.2339,
            "vectorStrength": 0.9499,
            "rankScore": 2.3282
          },
          {
            "id": "treasured",
            "term": "Treasured",
            "rank": 8,
            "poleScore": 0.5194,
            "focusRatio": 0.2265,
            "vectorStrength": 0.9354,
            "rankScore": 2.2133
          },
          {
            "id": "simple",
            "term": "Simple",
            "rank": 9,
            "poleScore": 0.3606,
            "focusRatio": 0.3121,
            "vectorStrength": 1.2777,
            "rankScore": 2.1292
          },
          {
            "id": "ornate",
            "term": "Ornate",
            "rank": 10,
            "poleScore": 0.338,
            "focusRatio": 0.3312,
            "vectorStrength": 1.3295,
            "rankScore": 2.1276
          },
          {
            "id": "everlasting",
            "term": "Everlasting",
            "rank": 11,
            "poleScore": 0.5517,
            "focusRatio": 0.2344,
            "vectorStrength": 0.9098,
            "rankScore": 2.0851
          },
          {
            "id": "dainty",
            "term": "Dainty",
            "rank": 12,
            "poleScore": 0.3011,
            "focusRatio": 0.3481,
            "vectorStrength": 1.313,
            "rankScore": 2.0546
          }
        ],
        "Unexpected": [
          {
            "id": "unconventional",
            "term": "Unconventional",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.3289,
            "vectorStrength": 1.3291,
            "rankScore": 3.4969
          },
          {
            "id": "unorthodox",
            "term": "Unorthodox",
            "rank": 2,
            "poleScore": 0.871,
            "focusRatio": 0.3118,
            "vectorStrength": 1.2414,
            "rankScore": 3.1277
          },
          {
            "id": "quirky",
            "term": "Quirky",
            "rank": 3,
            "poleScore": 0.6909,
            "focusRatio": 0.3371,
            "vectorStrength": 1.2899,
            "rankScore": 2.963
          },
          {
            "id": "startling",
            "term": "Startling",
            "rank": 4,
            "poleScore": 0.7929,
            "focusRatio": 0.2891,
            "vectorStrength": 1.0794,
            "rankScore": 2.8294
          },
          {
            "id": "unexpected",
            "term": "Unexpected",
            "rank": 5,
            "poleScore": 0.6978,
            "focusRatio": 0.3155,
            "vectorStrength": 0.9623,
            "rankScore": 2.5775
          },
          {
            "id": "kooky",
            "term": "Kooky",
            "rank": 6,
            "poleScore": 0.6403,
            "focusRatio": 0.2896,
            "vectorStrength": 1.1662,
            "rankScore": 2.5151
          },
          {
            "id": "mischievous",
            "term": "Mischievous",
            "rank": 7,
            "poleScore": 0.6062,
            "focusRatio": 0.2695,
            "vectorStrength": 1.2323,
            "rankScore": 2.4265
          },
          {
            "id": "rebellious",
            "term": "Rebellious",
            "rank": 8,
            "poleScore": 0.5041,
            "focusRatio": 0.3584,
            "vectorStrength": 1.2804,
            "rankScore": 2.3317
          },
          {
            "id": "outsider",
            "term": "Outsider",
            "rank": 9,
            "poleScore": 0.5988,
            "focusRatio": 0.2801,
            "vectorStrength": 0.9497,
            "rankScore": 2.2882
          },
          {
            "id": "unruly",
            "term": "Unruly",
            "rank": 10,
            "poleScore": 0.5366,
            "focusRatio": 0.2552,
            "vectorStrength": 1.1748,
            "rankScore": 2.2206
          },
          {
            "id": "intriguing",
            "term": "Intriguing",
            "rank": 11,
            "poleScore": 0.5888,
            "focusRatio": 0.2729,
            "vectorStrength": 0.866,
            "rankScore": 2.2082
          },
          {
            "id": "defiant",
            "term": "Defiant",
            "rank": 12,
            "poleScore": 0.3974,
            "focusRatio": 0.3221,
            "vectorStrength": 1.0714,
            "rankScore": 2.1265
          }
        ]
      },
      "Delicate ↔ Bold": {
        "Bold": [
          {
            "id": "confident",
            "term": "Confident",
            "rank": 1,
            "poleScore": 0.8006,
            "focusRatio": 0.4372,
            "vectorStrength": 0.9219,
            "rankScore": 3.1764
          },
          {
            "id": "impactful",
            "term": "Impactful",
            "rank": 2,
            "poleScore": 0.6838,
            "focusRatio": 0.3847,
            "vectorStrength": 0.8237,
            "rankScore": 2.5736
          },
          {
            "id": "standout",
            "term": "Standout",
            "rank": 3,
            "poleScore": 0.5226,
            "focusRatio": 0.2859,
            "vectorStrength": 1.3842,
            "rankScore": 2.5306
          },
          {
            "id": "dramatic",
            "term": "Dramatic",
            "rank": 4,
            "poleScore": 0.6627,
            "focusRatio": 0.2992,
            "vectorStrength": 0.9689,
            "rankScore": 2.4779
          },
          {
            "id": "assertive",
            "term": "Assertive",
            "rank": 5,
            "poleScore": 0.6606,
            "focusRatio": 0.3128,
            "vectorStrength": 0.9184,
            "rankScore": 2.4647
          },
          {
            "id": "defiant",
            "term": "Defiant",
            "rank": 6,
            "poleScore": 0.538,
            "focusRatio": 0.3221,
            "vectorStrength": 1.0714,
            "rankScore": 2.464
          },
          {
            "id": "memorable",
            "term": "Memorable",
            "rank": 7,
            "poleScore": 0.556,
            "focusRatio": 0.2619,
            "vectorStrength": 0.9429,
            "rankScore": 2.3546
          },
          {
            "id": "showy",
            "term": "Showy",
            "rank": 8,
            "poleScore": 0.5926,
            "focusRatio": 0.2423,
            "vectorStrength": 0.9469,
            "rankScore": 2.2248
          },
          {
            "id": "exciting",
            "term": "Exciting",
            "rank": 9,
            "poleScore": 0.5547,
            "focusRatio": 0.2467,
            "vectorStrength": 0.9635,
            "rankScore": 2.1423
          },
          {
            "id": "outspoken",
            "term": "Outspoken",
            "rank": 10,
            "poleScore": 0.5594,
            "focusRatio": 0.2533,
            "vectorStrength": 0.8786,
            "rankScore": 2.1186
          },
          {
            "id": "rebellious",
            "term": "Rebellious",
            "rank": 11,
            "poleScore": 0.4099,
            "focusRatio": 0.3584,
            "vectorStrength": 1.2804,
            "rankScore": 2.1057
          },
          {
            "id": "elevated",
            "term": "Elevated",
            "rank": 12,
            "poleScore": 0.4275,
            "focusRatio": 0.4173,
            "vectorStrength": 1.0179,
            "rankScore": 2.1032
          }
        ],
        "Delicate": [
          {
            "id": "dainty",
            "term": "Dainty",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.3481,
            "vectorStrength": 1.313,
            "rankScore": 3.7319
          },
          {
            "id": "subtle",
            "term": "Subtle",
            "rank": 2,
            "poleScore": 0.5733,
            "focusRatio": 0.2857,
            "vectorStrength": 1.2314,
            "rankScore": 2.5795
          },
          {
            "id": "finesse",
            "term": "Finesse",
            "rank": 3,
            "poleScore": 0.6372,
            "focusRatio": 0.3357,
            "vectorStrength": 0.8424,
            "rankScore": 2.4066
          },
          {
            "id": "whimsy",
            "term": "Whimsy",
            "rank": 4,
            "poleScore": 0.484,
            "focusRatio": 0.3008,
            "vectorStrength": 1.2386,
            "rankScore": 2.39
          },
          {
            "id": "minimal",
            "term": "Minimal",
            "rank": 5,
            "poleScore": 0.5288,
            "focusRatio": 0.2841,
            "vectorStrength": 0.9975,
            "rankScore": 2.3516
          },
          {
            "id": "refinement",
            "term": "Refinement",
            "rank": 6,
            "poleScore": 0.4665,
            "focusRatio": 0.2904,
            "vectorStrength": 1.0494,
            "rankScore": 2.0309
          },
          {
            "id": "minimalist",
            "term": "Minimalist",
            "rank": 7,
            "poleScore": 0.4145,
            "focusRatio": 0.2634,
            "vectorStrength": 1.245,
            "rankScore": 1.966
          },
          {
            "id": "nuanced",
            "term": "Nuanced",
            "rank": 8,
            "poleScore": 0.4463,
            "focusRatio": 0.252,
            "vectorStrength": 1.0981,
            "rankScore": 1.9591
          },
          {
            "id": "tender",
            "term": "Tender",
            "rank": 9,
            "poleScore": 0.3331,
            "focusRatio": 0.2472,
            "vectorStrength": 0.953,
            "rankScore": 1.8102
          },
          {
            "id": "intricate",
            "term": "Intricate",
            "rank": 10,
            "poleScore": 0.2201,
            "focusRatio": 0.3734,
            "vectorStrength": 1.1286,
            "rankScore": 1.7973
          },
          {
            "id": "ethereal",
            "term": "Ethereal",
            "rank": 11,
            "poleScore": 0.2771,
            "focusRatio": 0.2201,
            "vectorStrength": 1.1884,
            "rankScore": 1.7515
          },
          {
            "id": "intricacy",
            "term": "Intricacy",
            "rank": 12,
            "poleScore": 0.3823,
            "focusRatio": 0.271,
            "vectorStrength": 0.9028,
            "rankScore": 1.7302
          }
        ]
      },
      "Everyday ↔ Special Occasion": {
        "Everyday": [
          {
            "id": "easy_going",
            "term": "Easy-Going",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.2378,
            "vectorStrength": 1.7297,
            "rankScore": 3.5777
          },
          {
            "id": "effortless",
            "term": "Effortless",
            "rank": 2,
            "poleScore": 0.9737,
            "focusRatio": 0.2759,
            "vectorStrength": 1.3865,
            "rankScore": 3.3963
          },
          {
            "id": "unfussy",
            "term": "Unfussy",
            "rank": 3,
            "poleScore": 0.7597,
            "focusRatio": 0.2239,
            "vectorStrength": 1.4654,
            "rankScore": 2.8555
          },
          {
            "id": "laid_back",
            "term": "Laid-Back",
            "rank": 4,
            "poleScore": 0.6728,
            "focusRatio": 0.2496,
            "vectorStrength": 1.426,
            "rankScore": 2.6591
          },
          {
            "id": "weightless",
            "term": "Weightless",
            "rank": 5,
            "poleScore": 0.6724,
            "focusRatio": 0.2471,
            "vectorStrength": 1.0981,
            "rankScore": 2.4886
          },
          {
            "id": "fluidity",
            "term": "Fluidity",
            "rank": 6,
            "poleScore": 0.6316,
            "focusRatio": 0.2314,
            "vectorStrength": 1.1086,
            "rankScore": 2.3782
          },
          {
            "id": "natural",
            "term": "Natural",
            "rank": 7,
            "poleScore": 0.4195,
            "focusRatio": 0.3177,
            "vectorStrength": 1.2981,
            "rankScore": 2.2865
          },
          {
            "id": "uncomplicated",
            "term": "Uncomplicated",
            "rank": 8,
            "poleScore": 0.5472,
            "focusRatio": 0.2596,
            "vectorStrength": 1.2514,
            "rankScore": 2.2764
          },
          {
            "id": "nonchalant",
            "term": "Nonchalant",
            "rank": 9,
            "poleScore": 0.5607,
            "focusRatio": 0.253,
            "vectorStrength": 1.1405,
            "rankScore": 2.2501
          },
          {
            "id": "everyday",
            "term": "Everyday",
            "rank": 10,
            "poleScore": 0.5212,
            "focusRatio": 0.2997,
            "vectorStrength": 0.7672,
            "rankScore": 2.238
          },
          {
            "id": "timeless",
            "term": "Timeless",
            "rank": 11,
            "poleScore": 0.4453,
            "focusRatio": 0.2648,
            "vectorStrength": 1.1962,
            "rankScore": 2.2215
          },
          {
            "id": "minimalist",
            "term": "Minimalist",
            "rank": 12,
            "poleScore": 0.4523,
            "focusRatio": 0.2634,
            "vectorStrength": 1.245,
            "rankScore": 2.0567
          }
        ],
        "Special Occasion": [
          {
            "id": "celebration",
            "term": "Celebration",
            "rank": 1,
            "poleScore": 0.899,
            "focusRatio": 0.3976,
            "vectorStrength": 1.0526,
            "rankScore": 3.2185
          },
          {
            "id": "ornate",
            "term": "Ornate",
            "rank": 2,
            "poleScore": 0.4798,
            "focusRatio": 0.3312,
            "vectorStrength": 1.3295,
            "rankScore": 2.4679
          },
          {
            "id": "decorative",
            "term": "Decorative",
            "rank": 3,
            "poleScore": 0.4871,
            "focusRatio": 0.3711,
            "vectorStrength": 1.1795,
            "rankScore": 2.4584
          },
          {
            "id": "memorable",
            "term": "Memorable",
            "rank": 4,
            "poleScore": 0.5962,
            "focusRatio": 0.2619,
            "vectorStrength": 0.9429,
            "rankScore": 2.4511
          },
          {
            "id": "standout",
            "term": "Standout",
            "rank": 5,
            "poleScore": 0.4426,
            "focusRatio": 0.2859,
            "vectorStrength": 1.3842,
            "rankScore": 2.3386
          },
          {
            "id": "garnished",
            "term": "Garnished",
            "rank": 6,
            "poleScore": 0.5584,
            "focusRatio": 0.2562,
            "vectorStrength": 1.2771,
            "rankScore": 2.3195
          },
          {
            "id": "distinguished",
            "term": "Distinguished",
            "rank": 7,
            "poleScore": 0.5938,
            "focusRatio": 0.227,
            "vectorStrength": 1.1227,
            "rankScore": 2.2784
          },
          {
            "id": "treasured",
            "term": "Treasured",
            "rank": 8,
            "poleScore": 0.5241,
            "focusRatio": 0.2265,
            "vectorStrength": 0.9354,
            "rankScore": 2.2245
          },
          {
            "id": "festive",
            "term": "Festive",
            "rank": 9,
            "poleScore": 0.5913,
            "focusRatio": 0.2856,
            "vectorStrength": 0.829,
            "rankScore": 2.2195
          },
          {
            "id": "distinct",
            "term": "Distinct",
            "rank": 10,
            "poleScore": 0.5776,
            "focusRatio": 0.2717,
            "vectorStrength": 0.799,
            "rankScore": 2.1502
          },
          {
            "id": "elevated",
            "term": "Elevated",
            "rank": 11,
            "poleScore": 0.4442,
            "focusRatio": 0.4173,
            "vectorStrength": 1.0179,
            "rankScore": 2.1434
          },
          {
            "id": "dramatic",
            "term": "Dramatic",
            "rank": 12,
            "poleScore": 0.4979,
            "focusRatio": 0.2992,
            "vectorStrength": 0.9689,
            "rankScore": 2.0824
          }
        ]
      },
      "Grounded ↔ Ethereal": {
        "Ethereal": [
          {
            "id": "celestial",
            "term": "Celestial",
            "rank": 1,
            "poleScore": 0.9696,
            "focusRatio": 0.3824,
            "vectorStrength": 1.1505,
            "rankScore": 3.6196
          },
          {
            "id": "moonlit",
            "term": "Moonlit",
            "rank": 2,
            "poleScore": 1.0,
            "focusRatio": 0.3413,
            "vectorStrength": 1.251,
            "rankScore": 3.4892
          },
          {
            "id": "otherworldly",
            "term": "Otherworldly",
            "rank": 3,
            "poleScore": 0.9126,
            "focusRatio": 0.348,
            "vectorStrength": 1.1586,
            "rankScore": 3.2327
          },
          {
            "id": "floating",
            "term": "Floating",
            "rank": 4,
            "poleScore": 0.8373,
            "focusRatio": 0.3364,
            "vectorStrength": 1.1337,
            "rankScore": 3.0313
          },
          {
            "id": "luminous",
            "term": "Luminous",
            "rank": 5,
            "poleScore": 0.8057,
            "focusRatio": 0.3475,
            "vectorStrength": 1.0332,
            "rankScore": 2.9208
          },
          {
            "id": "lunar",
            "term": "Lunar",
            "rank": 6,
            "poleScore": 0.7195,
            "focusRatio": 0.404,
            "vectorStrength": 0.8729,
            "rankScore": 2.9189
          },
          {
            "id": "ethereal",
            "term": "Ethereal",
            "rank": 7,
            "poleScore": 0.7257,
            "focusRatio": 0.2201,
            "vectorStrength": 1.1884,
            "rankScore": 2.828
          },
          {
            "id": "heavenly",
            "term": "Heavenly",
            "rank": 8,
            "poleScore": 0.7924,
            "focusRatio": 0.2736,
            "vectorStrength": 1.1017,
            "rankScore": 2.8196
          },
          {
            "id": "fantastical",
            "term": "Fantastical",
            "rank": 9,
            "poleScore": 0.7551,
            "focusRatio": 0.3468,
            "vectorStrength": 0.9323,
            "rankScore": 2.7419
          },
          {
            "id": "angelic",
            "term": "Angelic",
            "rank": 10,
            "poleScore": 0.7516,
            "focusRatio": 0.2934,
            "vectorStrength": 1.0652,
            "rankScore": 2.7332
          },
          {
            "id": "dreamlike",
            "term": "Dreamlike",
            "rank": 11,
            "poleScore": 0.6384,
            "focusRatio": 0.2221,
            "vectorStrength": 1.1136,
            "rankScore": 2.5818
          },
          {
            "id": "dreamy",
            "term": "Dreamy",
            "rank": 12,
            "poleScore": 0.5374,
            "focusRatio": 0.2796,
            "vectorStrength": 1.3696,
            "rankScore": 2.554
          }
        ],
        "Grounded": [
          {
            "id": "rooted",
            "term": "Rooted",
            "rank": 1,
            "poleScore": 0.9409,
            "focusRatio": 0.3389,
            "vectorStrength": 1.1597,
            "rankScore": 3.3004
          },
          {
            "id": "warm",
            "term": "Warm",
            "rank": 2,
            "poleScore": 0.8201,
            "focusRatio": 0.2723,
            "vectorStrength": 1.2533,
            "rankScore": 3.168
          },
          {
            "id": "roots",
            "term": "Roots",
            "rank": 3,
            "poleScore": 0.8619,
            "focusRatio": 0.3739,
            "vectorStrength": 1.0282,
            "rankScore": 3.0962
          },
          {
            "id": "earthy",
            "term": "Earthy",
            "rank": 4,
            "poleScore": 0.7098,
            "focusRatio": 0.3545,
            "vectorStrength": 1.2852,
            "rankScore": 3.0305
          },
          {
            "id": "grounded",
            "term": "Grounded",
            "rank": 5,
            "poleScore": 0.788,
            "focusRatio": 0.3732,
            "vectorStrength": 0.9663,
            "rankScore": 2.8809
          },
          {
            "id": "natural",
            "term": "Natural",
            "rank": 6,
            "poleScore": 0.3684,
            "focusRatio": 0.3177,
            "vectorStrength": 1.2981,
            "rankScore": 2.1639
          },
          {
            "id": "rough",
            "term": "Rough",
            "rank": 7,
            "poleScore": 0.5154,
            "focusRatio": 0.243,
            "vectorStrength": 0.7893,
            "rankScore": 2.1618
          },
          {
            "id": "nurturing",
            "term": "Nurturing",
            "rank": 8,
            "poleScore": 0.5028,
            "focusRatio": 0.2519,
            "vectorStrength": 1.0748,
            "rankScore": 2.0788
          },
          {
            "id": "gritty",
            "term": "Gritty",
            "rank": 9,
            "poleScore": 0.5205,
            "focusRatio": 0.2668,
            "vectorStrength": 0.7837,
            "rankScore": 2.0027
          },
          {
            "id": "confident",
            "term": "Confident",
            "rank": 10,
            "poleScore": 0.2836,
            "focusRatio": 0.4372,
            "vectorStrength": 0.9219,
            "rankScore": 1.9356
          },
          {
            "id": "rugged",
            "term": "Rugged",
            "rank": 11,
            "poleScore": 0.4834,
            "focusRatio": 0.2386,
            "vectorStrength": 0.89,
            "rankScore": 1.9273
          },
          {
            "id": "cultivated",
            "term": "Cultivated",
            "rank": 12,
            "poleScore": 0.4623,
            "focusRatio": 0.2484,
            "vectorStrength": 0.9442,
            "rankScore": 1.9094
          }
        ]
      },
      "Low-key ↔ Statement": {
        "Low-key": [
          {
            "id": "subtle",
            "term": "Subtle",
            "rank": 1,
            "poleScore": 0.894,
            "focusRatio": 0.2857,
            "vectorStrength": 1.2314,
            "rankScore": 3.3492
          },
          {
            "id": "tranquil",
            "term": "Tranquil",
            "rank": 2,
            "poleScore": 0.9392,
            "focusRatio": 0.2305,
            "vectorStrength": 1.5541,
            "rankScore": 3.338
          },
          {
            "id": "laid_back",
            "term": "Laid-Back",
            "rank": 3,
            "poleScore": 0.8745,
            "focusRatio": 0.2496,
            "vectorStrength": 1.426,
            "rankScore": 3.1432
          },
          {
            "id": "easy_going",
            "term": "Easy-Going",
            "rank": 4,
            "poleScore": 0.8143,
            "focusRatio": 0.2378,
            "vectorStrength": 1.7297,
            "rankScore": 3.1321
          },
          {
            "id": "subdued",
            "term": "Subdued",
            "rank": 5,
            "poleScore": 0.8558,
            "focusRatio": 0.278,
            "vectorStrength": 1.263,
            "rankScore": 3.0606
          },
          {
            "id": "unfussy",
            "term": "Unfussy",
            "rank": 6,
            "poleScore": 0.7306,
            "focusRatio": 0.2239,
            "vectorStrength": 1.4654,
            "rankScore": 2.7856
          },
          {
            "id": "dainty",
            "term": "Dainty",
            "rank": 7,
            "poleScore": 0.544,
            "focusRatio": 0.3481,
            "vectorStrength": 1.313,
            "rankScore": 2.6375
          },
          {
            "id": "understated",
            "term": "Understated",
            "rank": 8,
            "poleScore": 0.6225,
            "focusRatio": 0.2614,
            "vectorStrength": 1.1641,
            "rankScore": 2.6201
          },
          {
            "id": "low_key",
            "term": "Low-Key",
            "rank": 9,
            "poleScore": 0.7141,
            "focusRatio": 0.2429,
            "vectorStrength": 1.1345,
            "rankScore": 2.6072
          },
          {
            "id": "nuanced",
            "term": "Nuanced",
            "rank": 10,
            "poleScore": 0.6889,
            "focusRatio": 0.252,
            "vectorStrength": 1.0981,
            "rankScore": 2.5412
          },
          {
            "id": "nonchalant",
            "term": "Nonchalant",
            "rank": 11,
            "poleScore": 0.6732,
            "focusRatio": 0.253,
            "vectorStrength": 1.1405,
            "rankScore": 2.52
          },
          {
            "id": "unassuming",
            "term": "Unassuming",
            "rank": 12,
            "poleScore": 0.6211,
            "focusRatio": 0.2334,
            "vectorStrength": 1.3099,
            "rankScore": 2.4524
          }
        ],
        "Statement": [
          {
            "id": "standout",
            "term": "Standout",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.2859,
            "vectorStrength": 1.3842,
            "rankScore": 3.6763
          },
          {
            "id": "showcasing",
            "term": "Showcasing",
            "rank": 2,
            "poleScore": 0.6534,
            "focusRatio": 0.2874,
            "vectorStrength": 0.9604,
            "rankScore": 2.4308
          },
          {
            "id": "noteworthy",
            "term": "Noteworthy",
            "rank": 3,
            "poleScore": 0.5298,
            "focusRatio": 0.275,
            "vectorStrength": 0.8201,
            "rankScore": 2.0466
          },
          {
            "id": "celebration",
            "term": "Celebration",
            "rank": 4,
            "poleScore": 0.3974,
            "focusRatio": 0.3976,
            "vectorStrength": 1.0526,
            "rankScore": 2.0147
          },
          {
            "id": "starstruck",
            "term": "Starstruck",
            "rank": 5,
            "poleScore": 0.5118,
            "focusRatio": 0.2745,
            "vectorStrength": 0.7448,
            "rankScore": 1.9651
          },
          {
            "id": "starlight",
            "term": "Starlight",
            "rank": 6,
            "poleScore": 0.3405,
            "focusRatio": 0.2496,
            "vectorStrength": 0.9013,
            "rankScore": 1.7993
          },
          {
            "id": "remarkable",
            "term": "Remarkable",
            "rank": 7,
            "poleScore": 0.4128,
            "focusRatio": 0.2415,
            "vectorStrength": 0.92,
            "rankScore": 1.7688
          },
          {
            "id": "starlit",
            "term": "Starlit",
            "rank": 8,
            "poleScore": 0.3085,
            "focusRatio": 0.2857,
            "vectorStrength": 0.8555,
            "rankScore": 1.7543
          },
          {
            "id": "showy",
            "term": "Showy",
            "rank": 9,
            "poleScore": 0.3914,
            "focusRatio": 0.2423,
            "vectorStrength": 0.9469,
            "rankScore": 1.7421
          },
          {
            "id": "impactful",
            "term": "Impactful",
            "rank": 10,
            "poleScore": 0.3134,
            "focusRatio": 0.3847,
            "vectorStrength": 0.8237,
            "rankScore": 1.6847
          },
          {
            "id": "spike",
            "term": "Spike",
            "rank": 11,
            "poleScore": 0.3029,
            "focusRatio": 0.3259,
            "vectorStrength": 1.0196,
            "rankScore": 1.6829
          },
          {
            "id": "memorable",
            "term": "Memorable",
            "rank": 12,
            "poleScore": 0.271,
            "focusRatio": 0.2619,
            "vectorStrength": 0.9429,
            "rankScore": 1.6706
          }
        ]
      },
      "Minimal ↔ Ornate": {
        "Minimal": [
          {
            "id": "simple",
            "term": "Simple",
            "rank": 1,
            "poleScore": 0.9988,
            "focusRatio": 0.3121,
            "vectorStrength": 1.2777,
            "rankScore": 3.6609
          },
          {
            "id": "uncluttered",
            "term": "Uncluttered",
            "rank": 2,
            "poleScore": 0.9186,
            "focusRatio": 0.3073,
            "vectorStrength": 1.2076,
            "rankScore": 3.2167
          },
          {
            "id": "minimalist",
            "term": "Minimalist",
            "rank": 3,
            "poleScore": 0.8434,
            "focusRatio": 0.2634,
            "vectorStrength": 1.245,
            "rankScore": 2.9955
          },
          {
            "id": "unfussy",
            "term": "Unfussy",
            "rank": 4,
            "poleScore": 0.8162,
            "focusRatio": 0.2239,
            "vectorStrength": 1.4654,
            "rankScore": 2.9911
          },
          {
            "id": "understated",
            "term": "Understated",
            "rank": 5,
            "poleScore": 0.759,
            "focusRatio": 0.2614,
            "vectorStrength": 1.1641,
            "rankScore": 2.9475
          },
          {
            "id": "unassuming",
            "term": "Unassuming",
            "rank": 6,
            "poleScore": 0.7984,
            "focusRatio": 0.2334,
            "vectorStrength": 1.3099,
            "rankScore": 2.8779
          },
          {
            "id": "uncomplicated",
            "term": "Uncomplicated",
            "rank": 7,
            "poleScore": 0.7896,
            "focusRatio": 0.2596,
            "vectorStrength": 1.2514,
            "rankScore": 2.8582
          },
          {
            "id": "pristine",
            "term": "Pristine",
            "rank": 8,
            "poleScore": 0.6956,
            "focusRatio": 0.257,
            "vectorStrength": 1.1853,
            "rankScore": 2.806
          },
          {
            "id": "tranquil",
            "term": "Tranquil",
            "rank": 9,
            "poleScore": 0.6868,
            "focusRatio": 0.2305,
            "vectorStrength": 1.5541,
            "rankScore": 2.7322
          },
          {
            "id": "sleek",
            "term": "Sleek",
            "rank": 10,
            "poleScore": 0.6735,
            "focusRatio": 0.2319,
            "vectorStrength": 1.1183,
            "rankScore": 2.6902
          },
          {
            "id": "easy_going",
            "term": "Easy-Going",
            "rank": 11,
            "poleScore": 0.606,
            "focusRatio": 0.2378,
            "vectorStrength": 1.7297,
            "rankScore": 2.6322
          },
          {
            "id": "minimal",
            "term": "Minimal",
            "rank": 12,
            "poleScore": 0.6308,
            "focusRatio": 0.2841,
            "vectorStrength": 0.9975,
            "rankScore": 2.5964
          }
        ],
        "Ornate": [
          {
            "id": "ornate",
            "term": "Ornate",
            "rank": 1,
            "poleScore": 0.9972,
            "focusRatio": 0.3312,
            "vectorStrength": 1.3295,
            "rankScore": 3.7097
          },
          {
            "id": "decorative",
            "term": "Decorative",
            "rank": 2,
            "poleScore": 0.9504,
            "focusRatio": 0.3711,
            "vectorStrength": 1.1795,
            "rankScore": 3.5701
          },
          {
            "id": "intricate",
            "term": "Intricate",
            "rank": 3,
            "poleScore": 0.9215,
            "focusRatio": 0.3734,
            "vectorStrength": 1.1286,
            "rankScore": 3.4805
          },
          {
            "id": "ornamentation",
            "term": "Ornamentation",
            "rank": 4,
            "poleScore": 0.9481,
            "focusRatio": 0.3424,
            "vectorStrength": 1.1524,
            "rankScore": 3.305
          },
          {
            "id": "garnished",
            "term": "Garnished",
            "rank": 5,
            "poleScore": 0.8149,
            "focusRatio": 0.2562,
            "vectorStrength": 1.2771,
            "rankScore": 2.9351
          },
          {
            "id": "elaborate",
            "term": "Elaborate",
            "rank": 6,
            "poleScore": 0.6337,
            "focusRatio": 0.2831,
            "vectorStrength": 0.9935,
            "rankScore": 2.596
          },
          {
            "id": "tapestry",
            "term": "Tapestry",
            "rank": 7,
            "poleScore": 0.6289,
            "focusRatio": 0.2528,
            "vectorStrength": 0.9318,
            "rankScore": 2.3133
          },
          {
            "id": "intricacy",
            "term": "Intricacy",
            "rank": 8,
            "poleScore": 0.6218,
            "focusRatio": 0.271,
            "vectorStrength": 0.9028,
            "rankScore": 2.3051
          },
          {
            "id": "colorful",
            "term": "Colorful",
            "rank": 9,
            "poleScore": 0.534,
            "focusRatio": 0.2331,
            "vectorStrength": 0.877,
            "rankScore": 2.2304
          },
          {
            "id": "sculptural",
            "term": "Sculptural",
            "rank": 10,
            "poleScore": 0.5029,
            "focusRatio": 0.3042,
            "vectorStrength": 0.6705,
            "rankScore": 2.1481
          },
          {
            "id": "layered",
            "term": "Layered",
            "rank": 11,
            "poleScore": 0.551,
            "focusRatio": 0.2474,
            "vectorStrength": 0.8949,
            "rankScore": 2.1021
          },
          {
            "id": "exquisite",
            "term": "Exquisite",
            "rank": 12,
            "poleScore": 0.4611,
            "focusRatio": 0.2318,
            "vectorStrength": 1.0181,
            "rankScore": 1.9223
          }
        ]
      },
      "Organic ↔ Geometric": {
        "Geometric": [
          {
            "id": "structured",
            "term": "Structured",
            "rank": 1,
            "poleScore": 0.7599,
            "focusRatio": 0.2743,
            "vectorStrength": 1.148,
            "rankScore": 2.9617
          },
          {
            "id": "polished",
            "term": "Polished",
            "rank": 2,
            "poleScore": 0.3184,
            "focusRatio": 0.3255,
            "vectorStrength": 1.4066,
            "rankScore": 2.1071
          },
          {
            "id": "grid",
            "term": "Grid",
            "rank": 3,
            "poleScore": 0.5203,
            "focusRatio": 0.3525,
            "vectorStrength": 0.6654,
            "rankScore": 2.0669
          },
          {
            "id": "decorative",
            "term": "Decorative",
            "rank": 4,
            "poleScore": 0.2453,
            "focusRatio": 0.3711,
            "vectorStrength": 1.1795,
            "rankScore": 1.8781
          },
          {
            "id": "standout",
            "term": "Standout",
            "rank": 5,
            "poleScore": 0.2489,
            "focusRatio": 0.2859,
            "vectorStrength": 1.3842,
            "rankScore": 1.8738
          },
          {
            "id": "whitespace",
            "term": "Whitespace",
            "rank": 6,
            "poleScore": 0.4076,
            "focusRatio": 0.3306,
            "vectorStrength": 0.7698,
            "rankScore": 1.8059
          },
          {
            "id": "classic",
            "term": "Classic",
            "rank": 7,
            "poleScore": 0.2517,
            "focusRatio": 0.288,
            "vectorStrength": 1.1013,
            "rankScore": 1.7439
          },
          {
            "id": "showcasing",
            "term": "Showcasing",
            "rank": 8,
            "poleScore": 0.3533,
            "focusRatio": 0.2874,
            "vectorStrength": 0.9604,
            "rankScore": 1.7104
          },
          {
            "id": "minimalist",
            "term": "Minimalist",
            "rank": 9,
            "poleScore": 0.2965,
            "focusRatio": 0.2634,
            "vectorStrength": 1.245,
            "rankScore": 1.6829
          },
          {
            "id": "ornamentation",
            "term": "Ornamentation",
            "rank": 10,
            "poleScore": 0.2661,
            "focusRatio": 0.3424,
            "vectorStrength": 1.1524,
            "rankScore": 1.6681
          },
          {
            "id": "ornate",
            "term": "Ornate",
            "rank": 11,
            "poleScore": 0.136,
            "focusRatio": 0.3312,
            "vectorStrength": 1.3295,
            "rankScore": 1.6428
          },
          {
            "id": "elaborate",
            "term": "Elaborate",
            "rank": 12,
            "poleScore": 0.2319,
            "focusRatio": 0.2831,
            "vectorStrength": 0.9935,
            "rankScore": 1.6315
          }
        ],
        "Organic": [
          {
            "id": "natural",
            "term": "Natural",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.3177,
            "vectorStrength": 1.2981,
            "rankScore": 3.6797
          },
          {
            "id": "botanical",
            "term": "Botanical",
            "rank": 2,
            "poleScore": 0.9501,
            "focusRatio": 0.4793,
            "vectorStrength": 1.0341,
            "rankScore": 3.6503
          },
          {
            "id": "earthy",
            "term": "Earthy",
            "rank": 3,
            "poleScore": 0.9481,
            "focusRatio": 0.3545,
            "vectorStrength": 1.2852,
            "rankScore": 3.6023
          },
          {
            "id": "herbal",
            "term": "Herbal",
            "rank": 4,
            "poleScore": 0.9202,
            "focusRatio": 0.3541,
            "vectorStrength": 1.168,
            "rankScore": 3.2763
          },
          {
            "id": "herbaceous",
            "term": "Herbaceous",
            "rank": 5,
            "poleScore": 0.7053,
            "focusRatio": 0.332,
            "vectorStrength": 0.9459,
            "rankScore": 2.6106
          },
          {
            "id": "untamed",
            "term": "Untamed",
            "rank": 6,
            "poleScore": 0.705,
            "focusRatio": 0.2647,
            "vectorStrength": 1.049,
            "rankScore": 2.5731
          },
          {
            "id": "wildflowers",
            "term": "Wildflowers",
            "rank": 7,
            "poleScore": 0.5972,
            "focusRatio": 0.3163,
            "vectorStrength": 0.8289,
            "rankScore": 2.4685
          },
          {
            "id": "wild",
            "term": "Wild",
            "rank": 8,
            "poleScore": 0.5839,
            "focusRatio": 0.2534,
            "vectorStrength": 0.8809,
            "rankScore": 2.3886
          },
          {
            "id": "otherworldly",
            "term": "Otherworldly",
            "rank": 9,
            "poleScore": 0.5209,
            "focusRatio": 0.348,
            "vectorStrength": 1.1586,
            "rankScore": 2.2926
          },
          {
            "id": "meadow",
            "term": "Meadow",
            "rank": 10,
            "poleScore": 0.5036,
            "focusRatio": 0.2308,
            "vectorStrength": 0.8468,
            "rankScore": 2.1432
          },
          {
            "id": "kooky",
            "term": "Kooky",
            "rank": 11,
            "poleScore": 0.4658,
            "focusRatio": 0.2896,
            "vectorStrength": 1.1662,
            "rankScore": 2.0964
          },
          {
            "id": "flora",
            "term": "Flora",
            "rank": 12,
            "poleScore": 0.5334,
            "focusRatio": 0.2604,
            "vectorStrength": 0.9144,
            "rankScore": 2.0919
          }
        ]
      },
      "Playful ↔ Refined": {
        "Playful": [
          {
            "id": "quirky",
            "term": "Quirky",
            "rank": 1,
            "poleScore": 0.969,
            "focusRatio": 0.3371,
            "vectorStrength": 1.2899,
            "rankScore": 3.6304
          },
          {
            "id": "whimsy",
            "term": "Whimsy",
            "rank": 2,
            "poleScore": 0.9163,
            "focusRatio": 0.3008,
            "vectorStrength": 1.2386,
            "rankScore": 3.4276
          },
          {
            "id": "whimsical",
            "term": "Whimsical",
            "rank": 3,
            "poleScore": 0.9708,
            "focusRatio": 0.2859,
            "vectorStrength": 1.2925,
            "rankScore": 3.3583
          },
          {
            "id": "mischievous",
            "term": "Mischievous",
            "rank": 4,
            "poleScore": 0.7874,
            "focusRatio": 0.2695,
            "vectorStrength": 1.2323,
            "rankScore": 2.8614
          },
          {
            "id": "cheerful",
            "term": "Cheerful",
            "rank": 5,
            "poleScore": 0.789,
            "focusRatio": 0.3181,
            "vectorStrength": 1.0608,
            "rankScore": 2.8533
          },
          {
            "id": "kooky",
            "term": "Kooky",
            "rank": 6,
            "poleScore": 0.7671,
            "focusRatio": 0.2896,
            "vectorStrength": 1.1662,
            "rankScore": 2.8195
          },
          {
            "id": "frolic",
            "term": "Frolic",
            "rank": 7,
            "poleScore": 0.727,
            "focusRatio": 0.3252,
            "vectorStrength": 0.932,
            "rankScore": 2.6541
          },
          {
            "id": "playful",
            "term": "Playful",
            "rank": 8,
            "poleScore": 0.6094,
            "focusRatio": 0.2604,
            "vectorStrength": 0.9577,
            "rankScore": 2.492
          },
          {
            "id": "witty",
            "term": "Witty",
            "rank": 9,
            "poleScore": 0.6301,
            "focusRatio": 0.3871,
            "vectorStrength": 0.7696,
            "rankScore": 2.429
          },
          {
            "id": "charming",
            "term": "Charming",
            "rank": 10,
            "poleScore": 0.6401,
            "focusRatio": 0.3197,
            "vectorStrength": 0.8817,
            "rankScore": 2.4087
          },
          {
            "id": "giggly",
            "term": "Giggly",
            "rank": 11,
            "poleScore": 0.6358,
            "focusRatio": 0.296,
            "vectorStrength": 0.9009,
            "rankScore": 2.379
          },
          {
            "id": "jovial",
            "term": "Jovial",
            "rank": 12,
            "poleScore": 0.5541,
            "focusRatio": 0.2321,
            "vectorStrength": 0.9002,
            "rankScore": 2.0929
          }
        ],
        "Refined": [
          {
            "id": "polished",
            "term": "Polished",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.3255,
            "vectorStrength": 1.4066,
            "rankScore": 3.743
          },
          {
            "id": "sophisticated",
            "term": "Sophisticated",
            "rank": 2,
            "poleScore": 0.9361,
            "focusRatio": 0.4526,
            "vectorStrength": 1.0554,
            "rankScore": 3.5821
          },
          {
            "id": "elevated",
            "term": "Elevated",
            "rank": 3,
            "poleScore": 0.8031,
            "focusRatio": 0.4173,
            "vectorStrength": 1.0179,
            "rankScore": 3.0047
          },
          {
            "id": "refined",
            "term": "Refined",
            "rank": 4,
            "poleScore": 0.8101,
            "focusRatio": 0.3164,
            "vectorStrength": 1.0988,
            "rankScore": 2.9227
          },
          {
            "id": "elegant",
            "term": "Elegant",
            "rank": 5,
            "poleScore": 0.7013,
            "focusRatio": 0.2342,
            "vectorStrength": 1.1854,
            "rankScore": 2.7897
          },
          {
            "id": "refinement",
            "term": "Refinement",
            "rank": 6,
            "poleScore": 0.7259,
            "focusRatio": 0.2904,
            "vectorStrength": 1.0494,
            "rankScore": 2.6534
          },
          {
            "id": "ornate",
            "term": "Ornate",
            "rank": 7,
            "poleScore": 0.5521,
            "focusRatio": 0.3312,
            "vectorStrength": 1.3295,
            "rankScore": 2.6415
          },
          {
            "id": "elaborate",
            "term": "Elaborate",
            "rank": 8,
            "poleScore": 0.5971,
            "focusRatio": 0.2831,
            "vectorStrength": 0.9935,
            "rankScore": 2.5081
          },
          {
            "id": "structured",
            "term": "Structured",
            "rank": 9,
            "poleScore": 0.5588,
            "focusRatio": 0.2743,
            "vectorStrength": 1.148,
            "rankScore": 2.4791
          },
          {
            "id": "distinguished",
            "term": "Distinguished",
            "rank": 10,
            "poleScore": 0.6622,
            "focusRatio": 0.227,
            "vectorStrength": 1.1227,
            "rankScore": 2.4425
          },
          {
            "id": "garnished",
            "term": "Garnished",
            "rank": 11,
            "poleScore": 0.597,
            "focusRatio": 0.2562,
            "vectorStrength": 1.2771,
            "rankScore": 2.412
          },
          {
            "id": "cultured",
            "term": "Cultured",
            "rank": 12,
            "poleScore": 0.6493,
            "focusRatio": 0.2708,
            "vectorStrength": 0.9123,
            "rankScore": 2.3777
          }
        ]
      },
      "Romantic ↔ Edgy": {
        "Edgy": [
          {
            "id": "rebellious",
            "term": "Rebellious",
            "rank": 1,
            "poleScore": 1.0,
            "focusRatio": 0.3584,
            "vectorStrength": 1.2804,
            "rankScore": 3.522
          },
          {
            "id": "fierce",
            "term": "Fierce",
            "rank": 2,
            "poleScore": 0.8049,
            "focusRatio": 0.4907,
            "vectorStrength": 0.9347,
            "rankScore": 3.0742
          },
          {
            "id": "defiant",
            "term": "Defiant",
            "rank": 3,
            "poleScore": 0.7865,
            "focusRatio": 0.3221,
            "vectorStrength": 1.0714,
            "rankScore": 3.0603
          },
          {
            "id": "tough",
            "term": "Tough",
            "rank": 4,
            "poleScore": 0.7899,
            "focusRatio": 0.3507,
            "vectorStrength": 0.9591,
            "rankScore": 3.0562
          },
          {
            "id": "unorthodox",
            "term": "Unorthodox",
            "rank": 5,
            "poleScore": 0.7275,
            "focusRatio": 0.3118,
            "vectorStrength": 1.2414,
            "rankScore": 2.7832
          },
          {
            "id": "unruly",
            "term": "Unruly",
            "rank": 6,
            "poleScore": 0.7689,
            "focusRatio": 0.2552,
            "vectorStrength": 1.1748,
            "rankScore": 2.778
          },
          {
            "id": "unconventional",
            "term": "Unconventional",
            "rank": 7,
            "poleScore": 0.6352,
            "focusRatio": 0.3289,
            "vectorStrength": 1.3291,
            "rankScore": 2.6215
          },
          {
            "id": "nonconformist",
            "term": "Nonconformist",
            "rank": 8,
            "poleScore": 0.6803,
            "focusRatio": 0.3059,
            "vectorStrength": 0.9645,
            "rankScore": 2.5171
          },
          {
            "id": "punk",
            "term": "Punk",
            "rank": 9,
            "poleScore": 0.6394,
            "focusRatio": 0.3506,
            "vectorStrength": 0.8083,
            "rankScore": 2.4215
          },
          {
            "id": "outsider",
            "term": "Outsider",
            "rank": 10,
            "poleScore": 0.6166,
            "focusRatio": 0.2801,
            "vectorStrength": 0.9497,
            "rankScore": 2.3309
          },
          {
            "id": "untamed",
            "term": "Untamed",
            "rank": 11,
            "poleScore": 0.5166,
            "focusRatio": 0.2647,
            "vectorStrength": 1.049,
            "rankScore": 2.1209
          },
          {
            "id": "maverick",
            "term": "Maverick",
            "rank": 12,
            "poleScore": 0.5549,
            "focusRatio": 0.2525,
            "vectorStrength": 0.8758,
            "rankScore": 2.1071
          }
        ],
        "Romantic": [
          {
            "id": "dreamy",
            "term": "Dreamy",
            "rank": 1,
            "poleScore": 0.9503,
            "focusRatio": 0.2796,
            "vectorStrength": 1.3696,
            "rankScore": 3.5448
          },
          {
            "id": "sweet",
            "term": "Sweet",
            "rank": 2,
            "poleScore": 0.9206,
            "focusRatio": 0.3408,
            "vectorStrength": 1.1303,
            "rankScore": 3.2418
          },
          {
            "id": "sentimental",
            "term": "Sentimental",
            "rank": 3,
            "poleScore": 0.7733,
            "focusRatio": 0.3148,
            "vectorStrength": 1.009,
            "rankScore": 2.979
          },
          {
            "id": "romantic",
            "term": "Romantic",
            "rank": 4,
            "poleScore": 0.7413,
            "focusRatio": 0.2649,
            "vectorStrength": 1.0788,
            "rankScore": 2.8733
          },
          {
            "id": "dainty",
            "term": "Dainty",
            "rank": 5,
            "poleScore": 0.5311,
            "focusRatio": 0.3481,
            "vectorStrength": 1.313,
            "rankScore": 2.6066
          },
          {
            "id": "caressing",
            "term": "Caressing",
            "rank": 6,
            "poleScore": 0.6862,
            "focusRatio": 0.2769,
            "vectorStrength": 1.169,
            "rankScore": 2.6009
          },
          {
            "id": "sweetness",
            "term": "Sweetness",
            "rank": 7,
            "poleScore": 0.7167,
            "focusRatio": 0.2627,
            "vectorStrength": 1.0343,
            "rankScore": 2.5869
          },
          {
            "id": "happy",
            "term": "Happy",
            "rank": 8,
            "poleScore": 0.6227,
            "focusRatio": 0.2356,
            "vectorStrength": 1.0066,
            "rankScore": 2.5177
          },
          {
            "id": "pleasant",
            "term": "Pleasant",
            "rank": 9,
            "poleScore": 0.6688,
            "focusRatio": 0.2478,
            "vectorStrength": 1.0447,
            "rankScore": 2.4584
          },
          {
            "id": "tranquil",
            "term": "Tranquil",
            "rank": 10,
            "poleScore": 0.5152,
            "focusRatio": 0.2305,
            "vectorStrength": 1.5541,
            "rankScore": 2.3201
          },
          {
            "id": "dreamlike",
            "term": "Dreamlike",
            "rank": 11,
            "poleScore": 0.5141,
            "focusRatio": 0.2221,
            "vectorStrength": 1.1136,
            "rankScore": 2.2836
          },
          {
            "id": "warm",
            "term": "Warm",
            "rank": 12,
            "poleScore": 0.4484,
            "focusRatio": 0.2723,
            "vectorStrength": 1.2533,
            "rankScore": 2.276
          }
        ]
      },
      "Soft ↔ Sharp": {
        "Sharp": [
          {
            "id": "spike",
            "term": "Spike",
            "rank": 1,
            "poleScore": 0.7798,
            "focusRatio": 0.3259,
            "vectorStrength": 1.0196,
            "rankScore": 2.8276
          },
          {
            "id": "crisp",
            "term": "Crisp",
            "rank": 2,
            "poleScore": 0.582,
            "focusRatio": 0.3293,
            "vectorStrength": 0.7879,
            "rankScore": 2.2417
          },
          {
            "id": "sharp",
            "term": "Sharp",
            "rank": 3,
            "poleScore": 0.5752,
            "focusRatio": 0.3541,
            "vectorStrength": 0.7428,
            "rankScore": 2.2377
          },
          {
            "id": "precise",
            "term": "Precise",
            "rank": 4,
            "poleScore": 0.5155,
            "focusRatio": 0.2276,
            "vectorStrength": 0.8623,
            "rankScore": 1.973
          },
          {
            "id": "standout",
            "term": "Standout",
            "rank": 5,
            "poleScore": 0.226,
            "focusRatio": 0.2859,
            "vectorStrength": 1.3842,
            "rankScore": 1.8188
          },
          {
            "id": "quirky",
            "term": "Quirky",
            "rank": 6,
            "poleScore": 0.1649,
            "focusRatio": 0.3371,
            "vectorStrength": 1.2899,
            "rankScore": 1.7006
          },
          {
            "id": "polished",
            "term": "Polished",
            "rank": 7,
            "poleScore": 0.1464,
            "focusRatio": 0.3255,
            "vectorStrength": 1.4066,
            "rankScore": 1.6943
          },
          {
            "id": "punk",
            "term": "Punk",
            "rank": 8,
            "poleScore": 0.3016,
            "focusRatio": 0.3506,
            "vectorStrength": 0.8083,
            "rankScore": 1.6108
          },
          {
            "id": "unorthodox",
            "term": "Unorthodox",
            "rank": 9,
            "poleScore": 0.2057,
            "focusRatio": 0.3118,
            "vectorStrength": 1.2414,
            "rankScore": 1.5309
          },
          {
            "id": "garnished",
            "term": "Garnished",
            "rank": 10,
            "poleScore": 0.2062,
            "focusRatio": 0.2562,
            "vectorStrength": 1.2771,
            "rankScore": 1.4741
          },
          {
            "id": "sleek",
            "term": "Sleek",
            "rank": 11,
            "poleScore": 0.1335,
            "focusRatio": 0.2319,
            "vectorStrength": 1.1183,
            "rankScore": 1.3941
          },
          {
            "id": "sophisticated",
            "term": "Sophisticated",
            "rank": 12,
            "poleScore": 0.0126,
            "focusRatio": 0.4526,
            "vectorStrength": 1.0554,
            "rankScore": 1.3657
          }
        ],
        "Soft": [
          {
            "id": "easy_going",
            "term": "Easy-Going",
            "rank": 1,
            "poleScore": 0.8359,
            "focusRatio": 0.2378,
            "vectorStrength": 1.7297,
            "rankScore": 3.1838
          },
          {
            "id": "fluid",
            "term": "Fluid",
            "rank": 2,
            "poleScore": 0.8584,
            "focusRatio": 0.2802,
            "vectorStrength": 1.1841,
            "rankScore": 3.0345
          },
          {
            "id": "tranquil",
            "term": "Tranquil",
            "rank": 3,
            "poleScore": 0.6924,
            "focusRatio": 0.2305,
            "vectorStrength": 1.5541,
            "rankScore": 2.7455
          },
          {
            "id": "caressing",
            "term": "Caressing",
            "rank": 4,
            "poleScore": 0.7358,
            "focusRatio": 0.2769,
            "vectorStrength": 1.169,
            "rankScore": 2.7199
          },
          {
            "id": "dreamy",
            "term": "Dreamy",
            "rank": 5,
            "poleScore": 0.5944,
            "focusRatio": 0.2796,
            "vectorStrength": 1.3696,
            "rankScore": 2.6907
          },
          {
            "id": "warm",
            "term": "Warm",
            "rank": 6,
            "poleScore": 0.5784,
            "focusRatio": 0.2723,
            "vectorStrength": 1.2533,
            "rankScore": 2.588
          },
          {
            "id": "floating",
            "term": "Floating",
            "rank": 7,
            "poleScore": 0.6361,
            "focusRatio": 0.3364,
            "vectorStrength": 1.1337,
            "rankScore": 2.5484
          },
          {
            "id": "tender",
            "term": "Tender",
            "rank": 8,
            "poleScore": 0.6402,
            "focusRatio": 0.2472,
            "vectorStrength": 0.953,
            "rankScore": 2.5472
          },
          {
            "id": "laid_back",
            "term": "Laid-Back",
            "rank": 9,
            "poleScore": 0.6035,
            "focusRatio": 0.2496,
            "vectorStrength": 1.426,
            "rankScore": 2.4928
          },
          {
            "id": "nurturing",
            "term": "Nurturing",
            "rank": 10,
            "poleScore": 0.6637,
            "focusRatio": 0.2519,
            "vectorStrength": 1.0748,
            "rankScore": 2.465
          },
          {
            "id": "fluidity",
            "term": "Fluidity",
            "rank": 11,
            "poleScore": 0.659,
            "focusRatio": 0.2314,
            "vectorStrength": 1.1086,
            "rankScore": 2.444
          },
          {
            "id": "bare",
            "term": "Bare",
            "rank": 12,
            "poleScore": 0.6527,
            "focusRatio": 0.2538,
            "vectorStrength": 1.0566,
            "rankScore": 2.4422
          }
        ]
      }
    },
    "synopsis": [
      {
        "id": "easy_going",
        "term": "Easy-Going",
        "cleanTerm": "easy-going",
        "dedupeKey": "easy-going",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0179,
          "classic_unexpected": 0.008,
          "minimal_ornate": -0.606,
          "soft_sharp": -0.8359,
          "romantic_edgy": -0.2698,
          "organic_geometric": -0.3595,
          "playful_refined": -0.2395,
          "everyday_special_occasion": -1.0,
          "lowkey_statement": -0.8143,
          "grounded_ethereal": -0.0549
        },
        "metrics": {
          "vectorStrength": 1.7297,
          "maxAbsScore": 1.0,
          "focusRatio": 0.2378
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "gentle",
        "term": "Gentle",
        "cleanTerm": "gentle",
        "dedupeKey": "gentle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3499,
          "classic_unexpected": -0.2537,
          "minimal_ornate": -0.5867,
          "soft_sharp": -0.9486,
          "romantic_edgy": -0.5475,
          "organic_geometric": -0.3634,
          "playful_refined": 0.1978,
          "everyday_special_occasion": -0.4005,
          "lowkey_statement": -0.8523,
          "grounded_ethereal": -0.3366
        },
        "metrics": {
          "vectorStrength": 1.7035,
          "maxAbsScore": 0.9486,
          "focusRatio": 0.1961
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.9486
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "smooth",
        "term": "Smooth",
        "cleanTerm": "smooth",
        "dedupeKey": "smooth",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1705,
          "classic_unexpected": -0.4405,
          "minimal_ornate": -0.6529,
          "soft_sharp": -0.7314,
          "romantic_edgy": -0.5357,
          "organic_geometric": -0.0609,
          "playful_refined": 0.5193,
          "everyday_special_occasion": -0.5148,
          "lowkey_statement": -0.4999,
          "grounded_ethereal": -0.1056
        },
        "metrics": {
          "vectorStrength": 1.5069,
          "maxAbsScore": 0.7314,
          "focusRatio": 0.1728
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7314
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "calm",
        "term": "Calm",
        "cleanTerm": "calm",
        "dedupeKey": "calm",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.0819,
          "classic_unexpected": -0.1899,
          "minimal_ornate": -0.7842,
          "soft_sharp": -0.5901,
          "romantic_edgy": -0.261,
          "organic_geometric": -0.1739,
          "playful_refined": 0.1593,
          "everyday_special_occasion": -0.3153,
          "lowkey_statement": -0.7472,
          "grounded_ethereal": -0.6518
        },
        "metrics": {
          "vectorStrength": 1.4873,
          "maxAbsScore": 0.7842,
          "focusRatio": 0.1983
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.7842
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "unfussy",
        "term": "Unfussy",
        "cleanTerm": "unfussy",
        "dedupeKey": "unfussy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1835,
          "classic_unexpected": -0.2169,
          "minimal_ornate": -0.8162,
          "soft_sharp": -0.4603,
          "romantic_edgy": -0.1203,
          "organic_geometric": -0.1599,
          "playful_refined": 0.003,
          "everyday_special_occasion": -0.7597,
          "lowkey_statement": -0.7306,
          "grounded_ethereal": -0.1946
        },
        "metrics": {
          "vectorStrength": 1.4654,
          "maxAbsScore": 0.8162,
          "focusRatio": 0.2239
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.8162
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "polished",
        "term": "Polished",
        "cleanTerm": "polished",
        "dedupeKey": "polished",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0414,
          "classic_unexpected": -0.8438,
          "minimal_ornate": -0.1786,
          "soft_sharp": 0.1464,
          "romantic_edgy": -0.2588,
          "organic_geometric": 0.3184,
          "playful_refined": 1.0,
          "everyday_special_occasion": 0.0039,
          "lowkey_statement": -0.0972,
          "grounded_ethereal": -0.1834
        },
        "metrics": {
          "vectorStrength": 1.4066,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3255
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "effortless",
        "term": "Effortless",
        "cleanTerm": "effortless",
        "dedupeKey": "effortless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0419,
          "classic_unexpected": -0.2431,
          "minimal_ornate": -0.5779,
          "soft_sharp": -0.52,
          "romantic_edgy": -0.1811,
          "organic_geometric": -0.3444,
          "playful_refined": 0.1399,
          "everyday_special_occasion": -0.9737,
          "lowkey_statement": -0.3234,
          "grounded_ethereal": 0.1835
        },
        "metrics": {
          "vectorStrength": 1.3865,
          "maxAbsScore": 0.9737,
          "focusRatio": 0.2759
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.9737
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "standout",
        "term": "Standout",
        "cleanTerm": "standout",
        "dedupeKey": "standout",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.5226,
          "classic_unexpected": -0.0716,
          "minimal_ornate": -0.252,
          "soft_sharp": 0.226,
          "romantic_edgy": 0.3407,
          "organic_geometric": 0.2489,
          "playful_refined": 0.386,
          "everyday_special_occasion": 0.4426,
          "lowkey_statement": 1.0,
          "grounded_ethereal": -0.0073
        },
        "metrics": {
          "vectorStrength": 1.3842,
          "maxAbsScore": 1.0,
          "focusRatio": 0.2859
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dreamy",
        "term": "Dreamy",
        "cleanTerm": "dreamy",
        "dedupeKey": "dreamy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1622,
          "classic_unexpected": -0.1043,
          "minimal_ornate": 0.095,
          "soft_sharp": -0.5944,
          "romantic_edgy": -0.9503,
          "organic_geometric": -0.2775,
          "playful_refined": -0.2161,
          "everyday_special_occasion": -0.0667,
          "lowkey_statement": -0.3953,
          "grounded_ethereal": 0.5374
        },
        "metrics": {
          "vectorStrength": 1.3696,
          "maxAbsScore": 0.9503,
          "focusRatio": 0.2796
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9503
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "fairy_like",
        "term": "Fairy-Like",
        "cleanTerm": "fairy-like",
        "dedupeKey": "fairy-like",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.4287,
          "classic_unexpected": -0.1395,
          "minimal_ornate": 0.2133,
          "soft_sharp": -0.5709,
          "romantic_edgy": -0.4679,
          "organic_geometric": -0.4688,
          "playful_refined": -0.3926,
          "everyday_special_occasion": -0.0181,
          "lowkey_statement": -0.3602,
          "grounded_ethereal": 0.7274
        },
        "metrics": {
          "vectorStrength": 1.3515,
          "maxAbsScore": 0.7274,
          "focusRatio": 0.1921
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7274
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "ornate",
        "term": "Ornate",
        "cleanTerm": "ornate",
        "dedupeKey": "ornate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0181,
          "classic_unexpected": -0.338,
          "minimal_ornate": 0.9972,
          "soft_sharp": 0.0205,
          "romantic_edgy": -0.1918,
          "organic_geometric": 0.136,
          "playful_refined": 0.5521,
          "everyday_special_occasion": 0.4798,
          "lowkey_statement": -0.018,
          "grounded_ethereal": 0.2597
        },
        "metrics": {
          "vectorStrength": 1.3295,
          "maxAbsScore": 0.9972,
          "focusRatio": 0.3312
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9972
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unconventional",
        "term": "Unconventional",
        "cleanTerm": "unconventional",
        "dedupeKey": "unconventional",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 14,
        "scores": {
          "delicate_bold": 0.2391,
          "classic_unexpected": 1.0,
          "minimal_ornate": -0.2912,
          "soft_sharp": -0.038,
          "romantic_edgy": 0.6352,
          "organic_geometric": -0.3774,
          "playful_refined": -0.2326,
          "everyday_special_occasion": -0.0139,
          "lowkey_statement": -0.1039,
          "grounded_ethereal": 0.1095
        },
        "metrics": {
          "vectorStrength": 1.3291,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3289
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "dainty",
        "term": "Dainty",
        "cleanTerm": "dainty",
        "dedupeKey": "dainty",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -1.0,
          "classic_unexpected": -0.3011,
          "minimal_ornate": 0.0934,
          "soft_sharp": -0.1358,
          "romantic_edgy": -0.5311,
          "organic_geometric": -0.1515,
          "playful_refined": 0.0213,
          "everyday_special_occasion": -0.0588,
          "lowkey_statement": -0.544,
          "grounded_ethereal": 0.0356
        },
        "metrics": {
          "vectorStrength": 1.313,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3481
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -1.0
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "unassuming",
        "term": "Unassuming",
        "cleanTerm": "unassuming",
        "dedupeKey": "unassuming",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0635,
          "classic_unexpected": 0.4221,
          "minimal_ornate": -0.7984,
          "soft_sharp": -0.4591,
          "romantic_edgy": -0.0993,
          "organic_geometric": -0.3096,
          "playful_refined": -0.0797,
          "everyday_special_occasion": -0.3986,
          "lowkey_statement": -0.6211,
          "grounded_ethereal": -0.1689
        },
        "metrics": {
          "vectorStrength": 1.3099,
          "maxAbsScore": 0.7984,
          "focusRatio": 0.2334
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.7984
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "natural",
        "term": "Natural",
        "cleanTerm": "natural",
        "dedupeKey": "natural",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.0942,
          "classic_unexpected": -0.0934,
          "minimal_ornate": -0.3506,
          "soft_sharp": -0.3787,
          "romantic_edgy": -0.0678,
          "organic_geometric": -1.0,
          "playful_refined": 0.1034,
          "everyday_special_occasion": -0.4195,
          "lowkey_statement": -0.2721,
          "grounded_ethereal": -0.3684
        },
        "metrics": {
          "vectorStrength": 1.2981,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3177
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "whimsical",
        "term": "Whimsical",
        "cleanTerm": "whimsical",
        "dedupeKey": "whimsical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.2468,
          "classic_unexpected": 0.2782,
          "minimal_ornate": 0.225,
          "soft_sharp": -0.2108,
          "romantic_edgy": -0.3744,
          "organic_geometric": -0.3653,
          "playful_refined": -0.9708,
          "everyday_special_occasion": -0.0687,
          "lowkey_statement": -0.3536,
          "grounded_ethereal": 0.3024
        },
        "metrics": {
          "vectorStrength": 1.2925,
          "maxAbsScore": 0.9708,
          "focusRatio": 0.2859
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.9708
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "quirky",
        "term": "Quirky",
        "cleanTerm": "quirky",
        "dedupeKey": "quirky",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1087,
          "classic_unexpected": 0.6909,
          "minimal_ornate": 0.0192,
          "soft_sharp": 0.1649,
          "romantic_edgy": 0.1892,
          "organic_geometric": -0.2932,
          "playful_refined": -0.969,
          "everyday_special_occasion": 0.069,
          "lowkey_statement": -0.2657,
          "grounded_ethereal": -0.1049
        },
        "metrics": {
          "vectorStrength": 1.2899,
          "maxAbsScore": 0.969,
          "focusRatio": 0.3371
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.969
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "earthy",
        "term": "Earthy",
        "cleanTerm": "earthy",
        "dedupeKey": "earthy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.003,
          "classic_unexpected": 0.0342,
          "minimal_ornate": -0.1408,
          "soft_sharp": -0.2117,
          "romantic_edgy": -0.0597,
          "organic_geometric": -0.9481,
          "playful_refined": -0.0071,
          "everyday_special_occasion": -0.1725,
          "lowkey_statement": -0.3872,
          "grounded_ethereal": -0.7098
        },
        "metrics": {
          "vectorStrength": 1.2852,
          "maxAbsScore": 0.9481,
          "focusRatio": 0.3545
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.9481
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "graceful",
        "term": "Graceful",
        "cleanTerm": "graceful",
        "dedupeKey": "graceful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0386,
          "classic_unexpected": -0.4969,
          "minimal_ornate": -0.2189,
          "soft_sharp": -0.5588,
          "romantic_edgy": -0.7343,
          "organic_geometric": -0.1653,
          "playful_refined": 0.538,
          "everyday_special_occasion": -0.1788,
          "lowkey_statement": -0.3601,
          "grounded_ethereal": 0.1545
        },
        "metrics": {
          "vectorStrength": 1.2846,
          "maxAbsScore": 0.7343,
          "focusRatio": 0.2132
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7343
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "rebellious",
        "term": "Rebellious",
        "cleanTerm": "rebellious",
        "dedupeKey": "rebellious",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4099,
          "classic_unexpected": 0.5041,
          "minimal_ornate": 0.0395,
          "soft_sharp": 0.0119,
          "romantic_edgy": 1.0,
          "organic_geometric": -0.3644,
          "playful_refined": -0.2413,
          "everyday_special_occasion": -0.0546,
          "lowkey_statement": -0.1461,
          "grounded_ethereal": 0.0184
        },
        "metrics": {
          "vectorStrength": 1.2804,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3584
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "simple",
        "term": "Simple",
        "cleanTerm": "simple",
        "dedupeKey": "simple",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1609,
          "classic_unexpected": -0.3606,
          "minimal_ornate": -0.9988,
          "soft_sharp": -0.4072,
          "romantic_edgy": -0.2299,
          "organic_geometric": 0.0478,
          "playful_refined": 0.1642,
          "everyday_special_occasion": -0.2729,
          "lowkey_statement": -0.3002,
          "grounded_ethereal": -0.258
        },
        "metrics": {
          "vectorStrength": 1.2777,
          "maxAbsScore": 0.9988,
          "focusRatio": 0.3121
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.9988
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "garnished",
        "term": "Garnished",
        "cleanTerm": "garnished",
        "dedupeKey": "garnished",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0202,
          "classic_unexpected": -0.3318,
          "minimal_ornate": 0.8149,
          "soft_sharp": 0.2062,
          "romantic_edgy": -0.2686,
          "organic_geometric": 0.181,
          "playful_refined": 0.597,
          "everyday_special_occasion": 0.5584,
          "lowkey_statement": 0.2021,
          "grounded_ethereal": -0.0004
        },
        "metrics": {
          "vectorStrength": 1.2771,
          "maxAbsScore": 0.8149,
          "focusRatio": 0.2562
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.8149
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "subdued",
        "term": "Subdued",
        "cleanTerm": "subdued",
        "dedupeKey": "subdued",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1841,
          "classic_unexpected": 0.0855,
          "minimal_ornate": -0.5802,
          "soft_sharp": -0.5122,
          "romantic_edgy": -0.088,
          "organic_geometric": -0.1835,
          "playful_refined": 0.4022,
          "everyday_special_occasion": -0.063,
          "lowkey_statement": -0.8558,
          "grounded_ethereal": -0.1242
        },
        "metrics": {
          "vectorStrength": 1.263,
          "maxAbsScore": 0.8558,
          "focusRatio": 0.278
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.8558
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "warm",
        "term": "Warm",
        "cleanTerm": "warm",
        "dedupeKey": "warm",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.0134,
          "classic_unexpected": -0.1731,
          "minimal_ornate": -0.3512,
          "soft_sharp": -0.5784,
          "romantic_edgy": -0.4484,
          "organic_geometric": -0.1858,
          "playful_refined": -0.0157,
          "everyday_special_occasion": -0.0081,
          "lowkey_statement": -0.4174,
          "grounded_ethereal": -0.8201
        },
        "metrics": {
          "vectorStrength": 1.2533,
          "maxAbsScore": 0.8201,
          "focusRatio": 0.2723
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.8201
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "moonlit",
        "term": "Moonlit",
        "cleanTerm": "moonlit",
        "dedupeKey": "moonlit",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.2145,
          "classic_unexpected": -0.2405,
          "minimal_ornate": -0.0086,
          "soft_sharp": -0.4012,
          "romantic_edgy": -0.4386,
          "organic_geometric": -0.1795,
          "playful_refined": 0.0797,
          "everyday_special_occasion": 0.2113,
          "lowkey_statement": -0.1565,
          "grounded_ethereal": 1.0
        },
        "metrics": {
          "vectorStrength": 1.251,
          "maxAbsScore": 1.0,
          "focusRatio": 0.3413
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 1.0
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "delicate",
        "term": "Delicate",
        "cleanTerm": "delicate",
        "dedupeKey": "delicate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.6663,
          "classic_unexpected": -0.3264,
          "minimal_ornate": 0.2676,
          "soft_sharp": -0.3264,
          "romantic_edgy": -0.5147,
          "organic_geometric": -0.1909,
          "playful_refined": 0.3455,
          "everyday_special_occasion": -0.0033,
          "lowkey_statement": -0.6405,
          "grounded_ethereal": 0.07
        },
        "metrics": {
          "vectorStrength": 1.2508,
          "maxAbsScore": 0.6663,
          "focusRatio": 0.1988
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.6663
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "minimalist",
        "term": "Minimalist",
        "cleanTerm": "minimalist",
        "dedupeKey": "minimalist",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.4145,
          "classic_unexpected": -0.3996,
          "minimal_ornate": -0.8434,
          "soft_sharp": -0.0857,
          "romantic_edgy": -0.0226,
          "organic_geometric": 0.2965,
          "playful_refined": 0.3036,
          "everyday_special_occasion": -0.4523,
          "lowkey_statement": -0.335,
          "grounded_ethereal": 0.0487
        },
        "metrics": {
          "vectorStrength": 1.245,
          "maxAbsScore": 0.8434,
          "focusRatio": 0.2634
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.8434
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "whimsy",
        "term": "Whimsy",
        "cleanTerm": "whimsy",
        "dedupeKey": "whimsy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.484,
          "classic_unexpected": 0.1081,
          "minimal_ornate": 0.0483,
          "soft_sharp": -0.1621,
          "romantic_edgy": -0.4209,
          "organic_geometric": -0.3231,
          "playful_refined": -0.9163,
          "everyday_special_occasion": -0.1771,
          "lowkey_statement": -0.3143,
          "grounded_ethereal": 0.0916
        },
        "metrics": {
          "vectorStrength": 1.2386,
          "maxAbsScore": 0.9163,
          "focusRatio": 0.3008
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.9163
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mischievous",
        "term": "Mischievous",
        "cleanTerm": "mischievous",
        "dedupeKey": "mischievous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.0111,
          "classic_unexpected": 0.6062,
          "minimal_ornate": -0.0866,
          "soft_sharp": -0.0574,
          "romantic_edgy": 0.3634,
          "organic_geometric": -0.4644,
          "playful_refined": -0.7874,
          "everyday_special_occasion": -0.0827,
          "lowkey_statement": -0.4024,
          "grounded_ethereal": 0.0595
        },
        "metrics": {
          "vectorStrength": 1.2323,
          "maxAbsScore": 0.7874,
          "focusRatio": 0.2695
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.7874
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "subtle",
        "term": "Subtle",
        "cleanTerm": "subtle",
        "dedupeKey": "subtle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.5733,
          "classic_unexpected": 0.2733,
          "minimal_ornate": -0.1745,
          "soft_sharp": -0.2359,
          "romantic_edgy": -0.2799,
          "organic_geometric": -0.233,
          "playful_refined": 0.2751,
          "everyday_special_occasion": -0.1215,
          "lowkey_statement": -0.894,
          "grounded_ethereal": 0.0685
        },
        "metrics": {
          "vectorStrength": 1.2314,
          "maxAbsScore": 0.894,
          "focusRatio": 0.2857
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.894
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "lush",
        "term": "Lush",
        "cleanTerm": "lush",
        "dedupeKey": "lush",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.2143,
          "classic_unexpected": -0.3506,
          "minimal_ornate": -0.1126,
          "soft_sharp": -0.7122,
          "romantic_edgy": -0.5903,
          "organic_geometric": -0.2635,
          "playful_refined": 0.1597,
          "everyday_special_occasion": -0.0631,
          "lowkey_statement": -0.5154,
          "grounded_ethereal": 0.3214
        },
        "metrics": {
          "vectorStrength": 1.2268,
          "maxAbsScore": 0.7122,
          "focusRatio": 0.2156
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7122
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "uncluttered",
        "term": "Uncluttered",
        "cleanTerm": "uncluttered",
        "dedupeKey": "uncluttered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.0599,
          "classic_unexpected": -0.2446,
          "minimal_ornate": -0.9186,
          "soft_sharp": -0.1957,
          "romantic_edgy": -0.1019,
          "organic_geometric": 0.2083,
          "playful_refined": 0.3778,
          "everyday_special_occasion": -0.195,
          "lowkey_statement": -0.4886,
          "grounded_ethereal": -0.1988
        },
        "metrics": {
          "vectorStrength": 1.2076,
          "maxAbsScore": 0.9186,
          "focusRatio": 0.3073
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.9186
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "timeless",
        "term": "Timeless",
        "cleanTerm": "timeless",
        "dedupeKey": "timeless",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0717,
          "classic_unexpected": -0.7866,
          "minimal_ornate": -0.566,
          "soft_sharp": -0.343,
          "romantic_edgy": -0.2074,
          "organic_geometric": -0.1668,
          "playful_refined": 0.0103,
          "everyday_special_occasion": -0.4453,
          "lowkey_statement": 0.0636,
          "grounded_ethereal": 0.3098
        },
        "metrics": {
          "vectorStrength": 1.1962,
          "maxAbsScore": 0.7866,
          "focusRatio": 0.2648
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.7866
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "ethereal",
        "term": "Ethereal",
        "cleanTerm": "ethereal",
        "dedupeKey": "ethereal",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2771,
          "classic_unexpected": -0.3322,
          "minimal_ornate": -0.1092,
          "soft_sharp": -0.4305,
          "romantic_edgy": -0.3661,
          "organic_geometric": -0.4108,
          "playful_refined": 0.0764,
          "everyday_special_occasion": -0.1603,
          "lowkey_statement": -0.4086,
          "grounded_ethereal": 0.7257
        },
        "metrics": {
          "vectorStrength": 1.1884,
          "maxAbsScore": 0.7257,
          "focusRatio": 0.2201
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7257
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "comfortable",
        "term": "Comfortable",
        "cleanTerm": "comfortable",
        "dedupeKey": "comfortable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.278,
          "classic_unexpected": -0.3298,
          "minimal_ornate": -0.4494,
          "soft_sharp": -0.4853,
          "romantic_edgy": -0.3695,
          "organic_geometric": -0.0896,
          "playful_refined": 0.1856,
          "everyday_special_occasion": -0.3804,
          "lowkey_statement": -0.5704,
          "grounded_ethereal": -0.3735
        },
        "metrics": {
          "vectorStrength": 1.1883,
          "maxAbsScore": 0.5704,
          "focusRatio": 0.1624
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.5704
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "elegant",
        "term": "Elegant",
        "cleanTerm": "elegant",
        "dedupeKey": "elegant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1875,
          "classic_unexpected": -0.6618,
          "minimal_ornate": 0.0249,
          "soft_sharp": -0.1612,
          "romantic_edgy": -0.4786,
          "organic_geometric": 0.1114,
          "playful_refined": 0.7013,
          "everyday_special_occasion": 0.1209,
          "lowkey_statement": -0.3375,
          "grounded_ethereal": 0.2091
        },
        "metrics": {
          "vectorStrength": 1.1854,
          "maxAbsScore": 0.7013,
          "focusRatio": 0.2342
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.7013
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "pristine",
        "term": "Pristine",
        "cleanTerm": "pristine",
        "dedupeKey": "pristine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.242,
          "classic_unexpected": -0.7334,
          "minimal_ornate": -0.6956,
          "soft_sharp": -0.1141,
          "romantic_edgy": -0.0785,
          "organic_geometric": -0.1889,
          "playful_refined": 0.4843,
          "everyday_special_occasion": -0.0899,
          "lowkey_statement": -0.1398,
          "grounded_ethereal": -0.0868
        },
        "metrics": {
          "vectorStrength": 1.1853,
          "maxAbsScore": 0.7334,
          "focusRatio": 0.257
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.7334
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluid",
        "term": "Fluid",
        "cleanTerm": "fluid",
        "dedupeKey": "fluid",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0996,
          "classic_unexpected": -0.1417,
          "minimal_ornate": -0.2076,
          "soft_sharp": -0.8584,
          "romantic_edgy": -0.3105,
          "organic_geometric": -0.2573,
          "playful_refined": 0.0988,
          "everyday_special_occasion": -0.3865,
          "lowkey_statement": -0.4588,
          "grounded_ethereal": 0.2447
        },
        "metrics": {
          "vectorStrength": 1.1841,
          "maxAbsScore": 0.8584,
          "focusRatio": 0.2802
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.8584
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "decorative",
        "term": "Decorative",
        "cleanTerm": "decorative",
        "dedupeKey": "decorative",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0332,
          "classic_unexpected": -0.1901,
          "minimal_ornate": 0.9504,
          "soft_sharp": 0.0254,
          "romantic_edgy": -0.3442,
          "organic_geometric": 0.2453,
          "playful_refined": 0.1068,
          "everyday_special_occasion": 0.4871,
          "lowkey_statement": -0.0308,
          "grounded_ethereal": 0.1475
        },
        "metrics": {
          "vectorStrength": 1.1795,
          "maxAbsScore": 0.9504,
          "focusRatio": 0.3711
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9504
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "unruly",
        "term": "Unruly",
        "cleanTerm": "unruly",
        "dedupeKey": "unruly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1855,
          "classic_unexpected": 0.5366,
          "minimal_ornate": -0.1744,
          "soft_sharp": -0.0081,
          "romantic_edgy": 0.7689,
          "organic_geometric": -0.4613,
          "playful_refined": -0.2813,
          "everyday_special_occasion": -0.1115,
          "lowkey_statement": -0.3262,
          "grounded_ethereal": -0.1591
        },
        "metrics": {
          "vectorStrength": 1.1748,
          "maxAbsScore": 0.7689,
          "focusRatio": 0.2552
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7689
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "caressing",
        "term": "Caressing",
        "cleanTerm": "caressing",
        "dedupeKey": "caressing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.3085,
          "classic_unexpected": -0.0774,
          "minimal_ornate": 0.0372,
          "soft_sharp": -0.7358,
          "romantic_edgy": -0.6862,
          "organic_geometric": -0.2694,
          "playful_refined": 0.0058,
          "everyday_special_occasion": -0.0266,
          "lowkey_statement": -0.4104,
          "grounded_ethereal": -0.1001
        },
        "metrics": {
          "vectorStrength": 1.169,
          "maxAbsScore": 0.7358,
          "focusRatio": 0.2769
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.7358
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "understated",
        "term": "Understated",
        "cleanTerm": "understated",
        "dedupeKey": "understated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.1635,
          "classic_unexpected": 0.0754,
          "minimal_ornate": -0.759,
          "soft_sharp": -0.2228,
          "romantic_edgy": -0.316,
          "organic_geometric": -0.0284,
          "playful_refined": 0.3906,
          "everyday_special_occasion": -0.2048,
          "lowkey_statement": -0.6225,
          "grounded_ethereal": -0.1204
        },
        "metrics": {
          "vectorStrength": 1.1641,
          "maxAbsScore": 0.759,
          "focusRatio": 0.2614
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.759
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "rooted",
        "term": "Rooted",
        "cleanTerm": "rooted",
        "dedupeKey": "rooted",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.2845,
          "classic_unexpected": -0.1335,
          "minimal_ornate": -0.1133,
          "soft_sharp": 0.0433,
          "romantic_edgy": 0.1811,
          "organic_geometric": -0.3351,
          "playful_refined": 0.3483,
          "everyday_special_occasion": 0.2206,
          "lowkey_statement": 0.1761,
          "grounded_ethereal": -0.9409
        },
        "metrics": {
          "vectorStrength": 1.1597,
          "maxAbsScore": 0.9409,
          "focusRatio": 0.3389
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.9409
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "otherworldly",
        "term": "Otherworldly",
        "cleanTerm": "otherworldly",
        "dedupeKey": "otherworldly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": 0.0987,
          "classic_unexpected": 0.1809,
          "minimal_ornate": 0.0833,
          "soft_sharp": -0.3265,
          "romantic_edgy": 0.2203,
          "organic_geometric": -0.5209,
          "playful_refined": -0.0998,
          "everyday_special_occasion": -0.029,
          "lowkey_statement": -0.1508,
          "grounded_ethereal": 0.9126
        },
        "metrics": {
          "vectorStrength": 1.1586,
          "maxAbsScore": 0.9126,
          "focusRatio": 0.348
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.9126
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "friendly",
        "term": "Friendly",
        "cleanTerm": "friendly",
        "dedupeKey": "friendly",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0195,
          "classic_unexpected": -0.0537,
          "minimal_ornate": -0.5832,
          "soft_sharp": -0.5899,
          "romantic_edgy": -0.2685,
          "organic_geometric": -0.1463,
          "playful_refined": -0.29,
          "everyday_special_occasion": -0.2175,
          "lowkey_statement": -0.496,
          "grounded_ethereal": -0.4116
        },
        "metrics": {
          "vectorStrength": 1.154,
          "maxAbsScore": 0.5899,
          "focusRatio": 0.1918
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5899
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "ornamentation",
        "term": "Ornamentation",
        "cleanTerm": "ornamentation",
        "dedupeKey": "ornamentation",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": -0.1996,
          "classic_unexpected": -0.3211,
          "minimal_ornate": 0.9481,
          "soft_sharp": 0.0714,
          "romantic_edgy": -0.1388,
          "organic_geometric": 0.2661,
          "playful_refined": 0.138,
          "everyday_special_occasion": 0.3277,
          "lowkey_statement": 0.1679,
          "grounded_ethereal": 0.1905
        },
        "metrics": {
          "vectorStrength": 1.1524,
          "maxAbsScore": 0.9481,
          "focusRatio": 0.3424
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9481
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "celestial",
        "term": "Celestial",
        "cleanTerm": "celestial",
        "dedupeKey": "celestial",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0973,
          "classic_unexpected": -0.2465,
          "minimal_ornate": 0.1047,
          "soft_sharp": -0.395,
          "romantic_edgy": -0.241,
          "organic_geometric": -0.1812,
          "playful_refined": 0.0504,
          "everyday_special_occasion": 0.2288,
          "lowkey_statement": 0.0213,
          "grounded_ethereal": 0.9696
        },
        "metrics": {
          "vectorStrength": 1.1505,
          "maxAbsScore": 0.9696,
          "focusRatio": 0.3824
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.9696
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "structured",
        "term": "Structured",
        "cleanTerm": "structured",
        "dedupeKey": "structured",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0213,
          "classic_unexpected": -0.5073,
          "minimal_ornate": -0.171,
          "soft_sharp": -0.2464,
          "romantic_edgy": -0.0554,
          "organic_geometric": 0.7599,
          "playful_refined": 0.5588,
          "everyday_special_occasion": 0.2064,
          "lowkey_statement": -0.0719,
          "grounded_ethereal": -0.172
        },
        "metrics": {
          "vectorStrength": 1.148,
          "maxAbsScore": 0.7599,
          "focusRatio": 0.2743
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.7599
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "floating",
        "term": "Floating",
        "cleanTerm": "floating",
        "dedupeKey": "floating",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.0341,
          "classic_unexpected": -0.1045,
          "minimal_ornate": -0.1403,
          "soft_sharp": -0.6361,
          "romantic_edgy": -0.1806,
          "organic_geometric": -0.0097,
          "playful_refined": 0.1821,
          "everyday_special_occasion": -0.2707,
          "lowkey_statement": -0.0934,
          "grounded_ethereal": 0.8373
        },
        "metrics": {
          "vectorStrength": 1.1337,
          "maxAbsScore": 0.8373,
          "focusRatio": 0.3364
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.8373
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sweet",
        "term": "Sweet",
        "cleanTerm": "sweet",
        "dedupeKey": "sweet",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1628,
          "classic_unexpected": -0.1159,
          "minimal_ornate": -0.2525,
          "soft_sharp": -0.3579,
          "romantic_edgy": -0.9206,
          "organic_geometric": -0.2608,
          "playful_refined": 0.0138,
          "everyday_special_occasion": 0.1695,
          "lowkey_statement": -0.2477,
          "grounded_ethereal": -0.1999
        },
        "metrics": {
          "vectorStrength": 1.1303,
          "maxAbsScore": 0.9206,
          "focusRatio": 0.3408
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.9206
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "intricate",
        "term": "Intricate",
        "cleanTerm": "intricate",
        "dedupeKey": "intricate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.2201,
          "classic_unexpected": -0.06,
          "minimal_ornate": 0.9215,
          "soft_sharp": -0.0089,
          "romantic_edgy": 0.0554,
          "organic_geometric": 0.1298,
          "playful_refined": 0.359,
          "everyday_special_occasion": 0.1698,
          "lowkey_statement": -0.4253,
          "grounded_ethereal": 0.1182
        },
        "metrics": {
          "vectorStrength": 1.1286,
          "maxAbsScore": 0.9215,
          "focusRatio": 0.3734
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.9215
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "comfort",
        "term": "Comfort",
        "cleanTerm": "comfort",
        "dedupeKey": "comfort",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.0628,
          "classic_unexpected": -0.2694,
          "minimal_ornate": -0.442,
          "soft_sharp": -0.6394,
          "romantic_edgy": -0.4739,
          "organic_geometric": -0.1297,
          "playful_refined": 0.0295,
          "everyday_special_occasion": -0.0614,
          "lowkey_statement": -0.3856,
          "grounded_ethereal": -0.4386
        },
        "metrics": {
          "vectorStrength": 1.126,
          "maxAbsScore": 0.6394,
          "focusRatio": 0.2181
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6394
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "synopsis"
        }
      },
      {
        "id": "distinguished",
        "term": "Distinguished",
        "cleanTerm": "distinguished",
        "dedupeKey": "distinguished",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.3838,
          "classic_unexpected": -0.3286,
          "minimal_ornate": 0.2614,
          "soft_sharp": -0.0191,
          "romantic_edgy": -0.0107,
          "organic_geometric": 0.2179,
          "playful_refined": 0.6622,
          "everyday_special_occasion": 0.5938,
          "lowkey_statement": 0.2451,
          "grounded_ethereal": 0.1941
        },
        "metrics": {
          "vectorStrength": 1.1227,
          "maxAbsScore": 0.6622,
          "focusRatio": 0.227
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6622
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "luxuriant",
        "term": "Luxuriant",
        "cleanTerm": "luxuriant",
        "dedupeKey": "luxuriant",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0099,
          "classic_unexpected": -0.3259,
          "minimal_ornate": 0.5525,
          "soft_sharp": -0.519,
          "romantic_edgy": -0.3818,
          "organic_geometric": -0.1818,
          "playful_refined": 0.2654,
          "everyday_special_occasion": 0.0122,
          "lowkey_statement": -0.3579,
          "grounded_ethereal": 0.4418
        },
        "metrics": {
          "vectorStrength": 1.1197,
          "maxAbsScore": 0.5525,
          "focusRatio": 0.1813
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5525
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sleek",
        "term": "Sleek",
        "cleanTerm": "sleek",
        "dedupeKey": "sleek",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0719,
          "classic_unexpected": -0.3952,
          "minimal_ornate": -0.6735,
          "soft_sharp": 0.1335,
          "romantic_edgy": -0.1644,
          "organic_geometric": 0.1235,
          "playful_refined": 0.5432,
          "everyday_special_occasion": -0.3849,
          "lowkey_statement": -0.3594,
          "grounded_ethereal": -0.0555
        },
        "metrics": {
          "vectorStrength": 1.1183,
          "maxAbsScore": 0.6735,
          "focusRatio": 0.2319
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.6735
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "dreamlike",
        "term": "Dreamlike",
        "cleanTerm": "dreamlike",
        "dedupeKey": "dreamlike",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1185,
          "classic_unexpected": 0.0557,
          "minimal_ornate": 0.1099,
          "soft_sharp": -0.5493,
          "romantic_edgy": -0.5141,
          "organic_geometric": -0.2756,
          "playful_refined": -0.3174,
          "everyday_special_occasion": -0.0552,
          "lowkey_statement": -0.2399,
          "grounded_ethereal": 0.6384
        },
        "metrics": {
          "vectorStrength": 1.1136,
          "maxAbsScore": 0.6384,
          "focusRatio": 0.2221
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.6384
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluidity",
        "term": "Fluidity",
        "cleanTerm": "fluidity",
        "dedupeKey": "fluidity",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2016,
          "classic_unexpected": -0.1462,
          "minimal_ornate": -0.1167,
          "soft_sharp": -0.659,
          "romantic_edgy": -0.2371,
          "organic_geometric": -0.1772,
          "playful_refined": 0.0237,
          "everyday_special_occasion": -0.6316,
          "lowkey_statement": -0.421,
          "grounded_ethereal": 0.2334
        },
        "metrics": {
          "vectorStrength": 1.1086,
          "maxAbsScore": 0.659,
          "focusRatio": 0.2314
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.659
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "classic",
        "term": "Classic",
        "cleanTerm": "classic",
        "dedupeKey": "classic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2118,
          "classic_unexpected": -0.8032,
          "minimal_ornate": -0.4848,
          "soft_sharp": -0.2181,
          "romantic_edgy": -0.1528,
          "organic_geometric": 0.2517,
          "playful_refined": 0.3047,
          "everyday_special_occasion": 0.1391,
          "lowkey_statement": 0.2023,
          "grounded_ethereal": 0.0204
        },
        "metrics": {
          "vectorStrength": 1.1013,
          "maxAbsScore": 0.8032,
          "focusRatio": 0.288
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.8032
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "refined",
        "term": "Refined",
        "cleanTerm": "refined",
        "dedupeKey": "refined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.2837,
          "classic_unexpected": -0.4243,
          "minimal_ornate": -0.0804,
          "soft_sharp": 0.0393,
          "romantic_edgy": -0.0143,
          "organic_geometric": -0.0953,
          "playful_refined": 0.8101,
          "everyday_special_occasion": 0.125,
          "lowkey_statement": -0.4466,
          "grounded_ethereal": -0.2411
        },
        "metrics": {
          "vectorStrength": 1.0988,
          "maxAbsScore": 0.8101,
          "focusRatio": 0.3164
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.8101
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nuanced",
        "term": "Nuanced",
        "cleanTerm": "nuanced",
        "dedupeKey": "nuanced",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.4463,
          "classic_unexpected": -0.0141,
          "minimal_ornate": 0.2416,
          "soft_sharp": -0.0052,
          "romantic_edgy": -0.3425,
          "organic_geometric": -0.1626,
          "playful_refined": 0.5329,
          "everyday_special_occasion": 0.129,
          "lowkey_statement": -0.6889,
          "grounded_ethereal": -0.1706
        },
        "metrics": {
          "vectorStrength": 1.0981,
          "maxAbsScore": 0.6889,
          "focusRatio": 0.252
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.6889
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "weightless",
        "term": "Weightless",
        "cleanTerm": "weightless",
        "dedupeKey": "weightless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.172,
          "classic_unexpected": -0.1578,
          "minimal_ornate": -0.5732,
          "soft_sharp": -0.3783,
          "romantic_edgy": -0.0447,
          "organic_geometric": -0.0418,
          "playful_refined": -0.018,
          "everyday_special_occasion": -0.6724,
          "lowkey_statement": -0.2891,
          "grounded_ethereal": 0.374
        },
        "metrics": {
          "vectorStrength": 1.0981,
          "maxAbsScore": 0.6724,
          "focusRatio": 0.2471
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.6724
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "startling",
        "term": "Startling",
        "cleanTerm": "startling",
        "dedupeKey": "startling",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.4602,
          "classic_unexpected": 0.7929,
          "minimal_ornate": -0.1739,
          "soft_sharp": 0.094,
          "romantic_edgy": 0.1729,
          "organic_geometric": -0.1858,
          "playful_refined": -0.1373,
          "everyday_special_occasion": 0.3554,
          "lowkey_statement": 0.2455,
          "grounded_ethereal": -0.1252
        },
        "metrics": {
          "vectorStrength": 1.0794,
          "maxAbsScore": 0.7929,
          "focusRatio": 0.2891
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.7929
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "romantic",
        "term": "Romantic",
        "cleanTerm": "romantic",
        "dedupeKey": "romantic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.0377,
          "classic_unexpected": -0.2195,
          "minimal_ornate": 0.1382,
          "soft_sharp": -0.5113,
          "romantic_edgy": -0.7413,
          "organic_geometric": -0.1924,
          "playful_refined": -0.1647,
          "everyday_special_occasion": 0.293,
          "lowkey_statement": -0.317,
          "grounded_ethereal": 0.1835
        },
        "metrics": {
          "vectorStrength": 1.0788,
          "maxAbsScore": 0.7413,
          "focusRatio": 0.2649
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7413
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nurturing",
        "term": "Nurturing",
        "cleanTerm": "nurturing",
        "dedupeKey": "nurturing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1334,
          "classic_unexpected": -0.0648,
          "minimal_ornate": -0.0754,
          "soft_sharp": -0.6637,
          "romantic_edgy": -0.364,
          "organic_geometric": -0.3819,
          "playful_refined": -0.0097,
          "everyday_special_occasion": -0.0471,
          "lowkey_statement": -0.3919,
          "grounded_ethereal": -0.5028
        },
        "metrics": {
          "vectorStrength": 1.0748,
          "maxAbsScore": 0.6637,
          "focusRatio": 0.2519
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6637
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "defiant",
        "term": "Defiant",
        "cleanTerm": "defiant",
        "dedupeKey": "defiant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.538,
          "classic_unexpected": 0.3974,
          "minimal_ornate": -0.0776,
          "soft_sharp": 0.0721,
          "romantic_edgy": 0.7865,
          "organic_geometric": -0.1614,
          "playful_refined": -0.1422,
          "everyday_special_occasion": -0.0908,
          "lowkey_statement": 0.1065,
          "grounded_ethereal": -0.069
        },
        "metrics": {
          "vectorStrength": 1.0714,
          "maxAbsScore": 0.7865,
          "focusRatio": 0.3221
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7865
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cheerful",
        "term": "Cheerful",
        "cleanTerm": "cheerful",
        "dedupeKey": "cheerful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2655,
          "classic_unexpected": 0.056,
          "minimal_ornate": -0.0936,
          "soft_sharp": -0.3436,
          "romantic_edgy": -0.4519,
          "organic_geometric": -0.1347,
          "playful_refined": -0.789,
          "everyday_special_occasion": 0.0353,
          "lowkey_statement": -0.279,
          "grounded_ethereal": 0.0314
        },
        "metrics": {
          "vectorStrength": 1.0608,
          "maxAbsScore": 0.789,
          "focusRatio": 0.3181
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.789
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "bare",
        "term": "Bare",
        "cleanTerm": "bare",
        "dedupeKey": "bare",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.1353,
          "classic_unexpected": -0.0216,
          "minimal_ornate": -0.4093,
          "soft_sharp": -0.6527,
          "romantic_edgy": 0.0451,
          "organic_geometric": -0.3707,
          "playful_refined": 0.0927,
          "everyday_special_occasion": -0.3313,
          "lowkey_statement": -0.496,
          "grounded_ethereal": 0.0172
        },
        "metrics": {
          "vectorStrength": 1.0566,
          "maxAbsScore": 0.6527,
          "focusRatio": 0.2538
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6527
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sophisticated",
        "term": "Sophisticated",
        "cleanTerm": "sophisticated",
        "dedupeKey": "sophisticated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.0438,
          "classic_unexpected": -0.2009,
          "minimal_ornate": 0.1415,
          "soft_sharp": 0.0126,
          "romantic_edgy": -0.0839,
          "organic_geometric": 0.0882,
          "playful_refined": 0.9361,
          "everyday_special_occasion": 0.1799,
          "lowkey_statement": -0.3567,
          "grounded_ethereal": 0.0247
        },
        "metrics": {
          "vectorStrength": 1.0554,
          "maxAbsScore": 0.9361,
          "focusRatio": 0.4526
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.9361
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "celebration",
        "term": "Celebration",
        "cleanTerm": "celebration",
        "dedupeKey": "celebration",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2405,
          "classic_unexpected": -0.1496,
          "minimal_ornate": 0.0652,
          "soft_sharp": -0.0857,
          "romantic_edgy": -0.1287,
          "organic_geometric": 0.107,
          "playful_refined": -0.0466,
          "everyday_special_occasion": 0.899,
          "lowkey_statement": 0.3974,
          "grounded_ethereal": 0.1412
        },
        "metrics": {
          "vectorStrength": 1.0526,
          "maxAbsScore": 0.899,
          "focusRatio": 0.3976
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "untamed",
        "term": "Untamed",
        "cleanTerm": "untamed",
        "dedupeKey": "untamed",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2443,
          "classic_unexpected": 0.2578,
          "minimal_ornate": -0.3271,
          "soft_sharp": -0.1373,
          "romantic_edgy": 0.5166,
          "organic_geometric": -0.705,
          "playful_refined": 0.0253,
          "everyday_special_occasion": -0.1235,
          "lowkey_statement": -0.0766,
          "grounded_ethereal": -0.2503
        },
        "metrics": {
          "vectorStrength": 1.049,
          "maxAbsScore": 0.705,
          "focusRatio": 0.2647
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "pleasant",
        "term": "Pleasant",
        "cleanTerm": "pleasant",
        "dedupeKey": "pleasant",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0701,
          "classic_unexpected": -0.1958,
          "minimal_ornate": -0.153,
          "soft_sharp": -0.5653,
          "romantic_edgy": -0.6688,
          "organic_geometric": -0.1954,
          "playful_refined": 0.1054,
          "everyday_special_occasion": 0.1985,
          "lowkey_statement": -0.3721,
          "grounded_ethereal": -0.1748
        },
        "metrics": {
          "vectorStrength": 1.0447,
          "maxAbsScore": 0.6688,
          "focusRatio": 0.2478
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.6688
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "harmonious",
        "term": "Harmonious",
        "cleanTerm": "harmonious",
        "dedupeKey": "harmonious",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.2224,
          "classic_unexpected": -0.3024,
          "minimal_ornate": -0.2152,
          "soft_sharp": -0.6037,
          "romantic_edgy": -0.536,
          "organic_geometric": -0.1128,
          "playful_refined": -0.0078,
          "everyday_special_occasion": -0.152,
          "lowkey_statement": -0.4513,
          "grounded_ethereal": 0.0224
        },
        "metrics": {
          "vectorStrength": 1.0388,
          "maxAbsScore": 0.6037,
          "focusRatio": 0.2299
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6037
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "pure",
        "term": "Pure",
        "cleanTerm": "pure",
        "dedupeKey": "pure",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0751,
          "classic_unexpected": -0.5763,
          "minimal_ornate": -0.5908,
          "soft_sharp": -0.2928,
          "romantic_edgy": -0.0835,
          "organic_geometric": -0.3835,
          "playful_refined": 0.1897,
          "everyday_special_occasion": -0.2348,
          "lowkey_statement": -0.2119,
          "grounded_ethereal": -0.1119
        },
        "metrics": {
          "vectorStrength": 1.0368,
          "maxAbsScore": 0.5908,
          "focusRatio": 0.2148
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5908
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "botanical",
        "term": "Botanical",
        "cleanTerm": "botanical",
        "dedupeKey": "botanical",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0077,
          "classic_unexpected": -0.0438,
          "minimal_ornate": 0.1598,
          "soft_sharp": -0.2745,
          "romantic_edgy": -0.0932,
          "organic_geometric": -0.9501,
          "playful_refined": 0.1645,
          "everyday_special_occasion": 0.0872,
          "lowkey_statement": -0.1114,
          "grounded_ethereal": -0.0899
        },
        "metrics": {
          "vectorStrength": 1.0341,
          "maxAbsScore": 0.9501,
          "focusRatio": 0.4793
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.9501
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "serenity",
        "term": "Serenity",
        "cleanTerm": "serenity",
        "dedupeKey": "serenity",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.1339,
          "classic_unexpected": -0.3246,
          "minimal_ornate": -0.5999,
          "soft_sharp": -0.4469,
          "romantic_edgy": -0.3608,
          "organic_geometric": -0.1185,
          "playful_refined": 0.0985,
          "everyday_special_occasion": -0.2132,
          "lowkey_statement": -0.4229,
          "grounded_ethereal": 0.0642
        },
        "metrics": {
          "vectorStrength": 1.0321,
          "maxAbsScore": 0.5999,
          "focusRatio": 0.2155
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5999
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "roots",
        "term": "Roots",
        "cleanTerm": "roots",
        "dedupeKey": "roots",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.0765,
          "classic_unexpected": -0.0781,
          "minimal_ornate": -0.2293,
          "soft_sharp": -0.1045,
          "romantic_edgy": 0.2692,
          "organic_geometric": -0.3322,
          "playful_refined": 0.1165,
          "everyday_special_occasion": -0.0332,
          "lowkey_statement": 0.2035,
          "grounded_ethereal": -0.8619
        },
        "metrics": {
          "vectorStrength": 1.0282,
          "maxAbsScore": 0.8619,
          "focusRatio": 0.3739
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.8619
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "spike",
        "term": "Spike",
        "cleanTerm": "spike",
        "dedupeKey": "spike",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1873,
          "classic_unexpected": 0.1151,
          "minimal_ornate": -0.0117,
          "soft_sharp": 0.7798,
          "romantic_edgy": 0.3515,
          "organic_geometric": -0.0154,
          "playful_refined": 0.0635,
          "everyday_special_occasion": 0.2424,
          "lowkey_statement": 0.3029,
          "grounded_ethereal": -0.3236
        },
        "metrics": {
          "vectorStrength": 1.0196,
          "maxAbsScore": 0.7798,
          "focusRatio": 0.3259
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.7798
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "exquisite",
        "term": "Exquisite",
        "cleanTerm": "exquisite",
        "dedupeKey": "exquisite",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0809,
          "classic_unexpected": -0.2985,
          "minimal_ornate": 0.4611,
          "soft_sharp": 0.0648,
          "romantic_edgy": -0.1983,
          "organic_geometric": -0.0675,
          "playful_refined": 0.5992,
          "everyday_special_occasion": 0.4848,
          "lowkey_statement": 0.0391,
          "grounded_ethereal": 0.2908
        },
        "metrics": {
          "vectorStrength": 1.0181,
          "maxAbsScore": 0.5992,
          "focusRatio": 0.2318
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5992
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "elevated",
        "term": "Elevated",
        "cleanTerm": "elevated",
        "dedupeKey": "elevated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4275,
          "classic_unexpected": 0.0365,
          "minimal_ornate": 0.0316,
          "soft_sharp": 0.0228,
          "romantic_edgy": 0.0058,
          "organic_geometric": 0.0598,
          "playful_refined": 0.8031,
          "everyday_special_occasion": 0.4442,
          "lowkey_statement": -0.0584,
          "grounded_ethereal": 0.0348
        },
        "metrics": {
          "vectorStrength": 1.0179,
          "maxAbsScore": 0.8031,
          "focusRatio": 0.4173
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.8031
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "spunky",
        "term": "Spunky",
        "cleanTerm": "spunky",
        "dedupeKey": "spunky",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1449,
          "classic_unexpected": 0.3874,
          "minimal_ornate": -0.265,
          "soft_sharp": 0.2437,
          "romantic_edgy": 0.1726,
          "organic_geometric": -0.3103,
          "playful_refined": -0.6032,
          "everyday_special_occasion": -0.1831,
          "lowkey_statement": -0.2969,
          "grounded_ethereal": -0.3308
        },
        "metrics": {
          "vectorStrength": 1.0108,
          "maxAbsScore": 0.6032,
          "focusRatio": 0.2053
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6032
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sentimental",
        "term": "Sentimental",
        "cleanTerm": "sentimental",
        "dedupeKey": "sentimental",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1079,
          "classic_unexpected": -0.1288,
          "minimal_ornate": 0.0124,
          "soft_sharp": -0.3964,
          "romantic_edgy": -0.7733,
          "organic_geometric": -0.1976,
          "playful_refined": -0.2028,
          "everyday_special_occasion": 0.3026,
          "lowkey_statement": -0.1089,
          "grounded_ethereal": -0.2257
        },
        "metrics": {
          "vectorStrength": 1.009,
          "maxAbsScore": 0.7733,
          "focusRatio": 0.3148
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.7733
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "happy",
        "term": "Happy",
        "cleanTerm": "happy",
        "dedupeKey": "happy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.2442,
          "classic_unexpected": -0.0687,
          "minimal_ornate": -0.2594,
          "soft_sharp": -0.5512,
          "romantic_edgy": -0.6227,
          "organic_geometric": -0.0906,
          "playful_refined": -0.2799,
          "everyday_special_occasion": 0.0891,
          "lowkey_statement": -0.2272,
          "grounded_ethereal": -0.2096
        },
        "metrics": {
          "vectorStrength": 1.0066,
          "maxAbsScore": 0.6227,
          "focusRatio": 0.2356
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.6227
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sublime",
        "term": "Sublime",
        "cleanTerm": "sublime",
        "dedupeKey": "sublime",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1801,
          "classic_unexpected": -0.125,
          "minimal_ornate": -0.3204,
          "soft_sharp": -0.4644,
          "romantic_edgy": -0.3793,
          "organic_geometric": -0.2452,
          "playful_refined": 0.3217,
          "everyday_special_occasion": 0.0054,
          "lowkey_statement": -0.306,
          "grounded_ethereal": 0.495
        },
        "metrics": {
          "vectorStrength": 1.0062,
          "maxAbsScore": 0.495,
          "focusRatio": 0.1741
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.495
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "striking",
        "term": "Striking",
        "cleanTerm": "striking",
        "dedupeKey": "striking",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4403,
          "classic_unexpected": 0.3436,
          "minimal_ornate": -0.0432,
          "soft_sharp": 0.3035,
          "romantic_edgy": 0.3882,
          "organic_geometric": 0.2231,
          "playful_refined": 0.0561,
          "everyday_special_occasion": 0.3215,
          "lowkey_statement": 0.5404,
          "grounded_ethereal": -0.0294
        },
        "metrics": {
          "vectorStrength": 1.0028,
          "maxAbsScore": 0.5404,
          "focusRatio": 0.2009
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5404
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "draped",
        "term": "Draped",
        "cleanTerm": "draped",
        "dedupeKey": "draped",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0093,
          "classic_unexpected": -0.3799,
          "minimal_ornate": 0.47,
          "soft_sharp": -0.3945,
          "romantic_edgy": -0.3429,
          "organic_geometric": 0.1386,
          "playful_refined": 0.5114,
          "everyday_special_occasion": 0.0683,
          "lowkey_statement": -0.1509,
          "grounded_ethereal": 0.2335
        },
        "metrics": {
          "vectorStrength": 1.0006,
          "maxAbsScore": 0.5114,
          "focusRatio": 0.1895
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5114
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "minimal",
        "term": "Minimal",
        "cleanTerm": "minimal",
        "dedupeKey": "minimal",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.5288,
          "classic_unexpected": -0.022,
          "minimal_ornate": -0.6308,
          "soft_sharp": -0.1755,
          "romantic_edgy": 0.0733,
          "organic_geometric": 0.0966,
          "playful_refined": 0.1874,
          "everyday_special_occasion": -0.0077,
          "lowkey_statement": -0.4859,
          "grounded_ethereal": 0.0121
        },
        "metrics": {
          "vectorStrength": 0.9975,
          "maxAbsScore": 0.6308,
          "focusRatio": 0.2841
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.6308
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "glamorous",
        "term": "Glamorous",
        "cleanTerm": "glamorous",
        "dedupeKey": "glamorous",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.2465,
          "classic_unexpected": -0.37,
          "minimal_ornate": 0.3417,
          "soft_sharp": -0.2468,
          "romantic_edgy": -0.4807,
          "organic_geometric": 0.0485,
          "playful_refined": 0.2771,
          "everyday_special_occasion": 0.2553,
          "lowkey_statement": 0.013,
          "grounded_ethereal": 0.4886
        },
        "metrics": {
          "vectorStrength": 0.9948,
          "maxAbsScore": 0.4886,
          "focusRatio": 0.1765
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4886
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "floral",
        "term": "Floral",
        "cleanTerm": "floral",
        "dedupeKey": "floral",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0155,
          "classic_unexpected": -0.1809,
          "minimal_ornate": 0.5425,
          "soft_sharp": -0.4508,
          "romantic_edgy": -0.4461,
          "organic_geometric": -0.3952,
          "playful_refined": 0.0588,
          "everyday_special_occasion": 0.1415,
          "lowkey_statement": -0.1574,
          "grounded_ethereal": 0.2308
        },
        "metrics": {
          "vectorStrength": 0.9936,
          "maxAbsScore": 0.5425,
          "focusRatio": 0.2071
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5425
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "elaborate",
        "term": "Elaborate",
        "cleanTerm": "elaborate",
        "dedupeKey": "elaborate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0908,
          "classic_unexpected": -0.1343,
          "minimal_ornate": 0.6337,
          "soft_sharp": 0.0575,
          "romantic_edgy": 0.0235,
          "organic_geometric": 0.2319,
          "playful_refined": 0.5971,
          "everyday_special_occasion": 0.3708,
          "lowkey_statement": -0.0855,
          "grounded_ethereal": -0.0137
        },
        "metrics": {
          "vectorStrength": 0.9935,
          "maxAbsScore": 0.6337,
          "focusRatio": 0.2831
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6337
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "lightweight",
        "term": "Lightweight",
        "cleanTerm": "lightweight",
        "dedupeKey": "lightweight",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.3785,
          "classic_unexpected": -0.0447,
          "minimal_ornate": -0.5047,
          "soft_sharp": -0.425,
          "romantic_edgy": -0.0874,
          "organic_geometric": 0.0534,
          "playful_refined": -0.1251,
          "everyday_special_occasion": -0.4739,
          "lowkey_statement": -0.2902,
          "grounded_ethereal": 0.2664
        },
        "metrics": {
          "vectorStrength": 0.9932,
          "maxAbsScore": 0.5047,
          "focusRatio": 0.1905
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5047
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "synopsis"
        }
      },
      {
        "id": "joyful",
        "term": "Joyful",
        "cleanTerm": "joyful",
        "dedupeKey": "joyful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3118,
          "classic_unexpected": -0.0002,
          "minimal_ornate": 0.1647,
          "soft_sharp": -0.461,
          "romantic_edgy": -0.4297,
          "organic_geometric": -0.1833,
          "playful_refined": -0.5643,
          "everyday_special_occasion": 0.1847,
          "lowkey_statement": -0.2068,
          "grounded_ethereal": 0.1734
        },
        "metrics": {
          "vectorStrength": 0.9902,
          "maxAbsScore": 0.5643,
          "focusRatio": 0.2106
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5643
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "unrefined",
        "term": "Unrefined",
        "cleanTerm": "unrefined",
        "dedupeKey": "unrefined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1809,
          "classic_unexpected": 0.1007,
          "minimal_ornate": -0.3939,
          "soft_sharp": -0.0334,
          "romantic_edgy": 0.1787,
          "organic_geometric": -0.5252,
          "playful_refined": 0.387,
          "everyday_special_occasion": -0.2345,
          "lowkey_statement": -0.3714,
          "grounded_ethereal": -0.3604
        },
        "metrics": {
          "vectorStrength": 0.9897,
          "maxAbsScore": 0.5252,
          "focusRatio": 0.1899
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5252
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "groundbreaking",
        "term": "Groundbreaking",
        "cleanTerm": "groundbreaking",
        "dedupeKey": "groundbreaking",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 14,
        "scores": {
          "delicate_bold": 0.3481,
          "classic_unexpected": 0.406,
          "minimal_ornate": -0.2255,
          "soft_sharp": 0.0409,
          "romantic_edgy": 0.5161,
          "organic_geometric": -0.0914,
          "playful_refined": 0.0789,
          "everyday_special_occasion": 0.297,
          "lowkey_statement": 0.4602,
          "grounded_ethereal": -0.1522
        },
        "metrics": {
          "vectorStrength": 0.9709,
          "maxAbsScore": 0.5161,
          "focusRatio": 0.1973
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5161
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "dramatic",
        "term": "Dramatic",
        "cleanTerm": "dramatic",
        "dedupeKey": "dramatic",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.6627,
          "classic_unexpected": 0.2609,
          "minimal_ornate": 0.3514,
          "soft_sharp": 0.006,
          "romantic_edgy": 0.0149,
          "organic_geometric": -0.0321,
          "playful_refined": 0.0556,
          "everyday_special_occasion": 0.4979,
          "lowkey_statement": 0.1557,
          "grounded_ethereal": 0.1773
        },
        "metrics": {
          "vectorStrength": 0.9689,
          "maxAbsScore": 0.6627,
          "focusRatio": 0.2992
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6627
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "grounded",
        "term": "Grounded",
        "cleanTerm": "grounded",
        "dedupeKey": "grounded",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2195,
          "classic_unexpected": -0.0468,
          "minimal_ornate": -0.2928,
          "soft_sharp": -0.0547,
          "romantic_edgy": 0.0971,
          "organic_geometric": -0.1161,
          "playful_refined": 0.3788,
          "everyday_special_occasion": 0.0476,
          "lowkey_statement": 0.0703,
          "grounded_ethereal": -0.788
        },
        "metrics": {
          "vectorStrength": 0.9663,
          "maxAbsScore": 0.788,
          "focusRatio": 0.3732
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.788
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nonconformist",
        "term": "Nonconformist",
        "cleanTerm": "nonconformist",
        "dedupeKey": "nonconformist",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 13,
        "scores": {
          "delicate_bold": 0.1461,
          "classic_unexpected": 0.5012,
          "minimal_ornate": -0.3679,
          "soft_sharp": 0.0365,
          "romantic_edgy": 0.6803,
          "organic_geometric": -0.1218,
          "playful_refined": -0.1197,
          "everyday_special_occasion": -0.1573,
          "lowkey_statement": -0.0424,
          "grounded_ethereal": -0.051
        },
        "metrics": {
          "vectorStrength": 0.9645,
          "maxAbsScore": 0.6803,
          "focusRatio": 0.3059
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6803
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "daring",
        "term": "Daring",
        "cleanTerm": "daring",
        "dedupeKey": "daring",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3102,
          "classic_unexpected": 0.5374,
          "minimal_ornate": 0.0724,
          "soft_sharp": 0.1408,
          "romantic_edgy": 0.5323,
          "organic_geometric": -0.2083,
          "playful_refined": -0.2561,
          "everyday_special_occasion": 0.2634,
          "lowkey_statement": 0.2396,
          "grounded_ethereal": 0.0239
        },
        "metrics": {
          "vectorStrength": 0.9643,
          "maxAbsScore": 0.5374,
          "focusRatio": 0.208
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5374
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "exciting",
        "term": "Exciting",
        "cleanTerm": "exciting",
        "dedupeKey": "exciting",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.5547,
          "classic_unexpected": 0.5238,
          "minimal_ornate": 0.0942,
          "soft_sharp": -0.025,
          "romantic_edgy": 0.0539,
          "organic_geometric": -0.2019,
          "playful_refined": -0.2525,
          "everyday_special_occasion": 0.4761,
          "lowkey_statement": 0.0197,
          "grounded_ethereal": -0.0465
        },
        "metrics": {
          "vectorStrength": 0.9635,
          "maxAbsScore": 0.5547,
          "focusRatio": 0.2467
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5547
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unexpected",
        "term": "Unexpected",
        "cleanTerm": "unexpected",
        "dedupeKey": "unexpected",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0924,
          "classic_unexpected": 0.6978,
          "minimal_ornate": -0.4839,
          "soft_sharp": 0.0037,
          "romantic_edgy": 0.2516,
          "organic_geometric": -0.2379,
          "playful_refined": -0.1536,
          "everyday_special_occasion": 0.222,
          "lowkey_statement": 0.008,
          "grounded_ethereal": 0.0609
        },
        "metrics": {
          "vectorStrength": 0.9623,
          "maxAbsScore": 0.6978,
          "focusRatio": 0.3155
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.6978
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "showcasing",
        "term": "Showcasing",
        "cleanTerm": "showcasing",
        "dedupeKey": "showcasing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.3584,
          "classic_unexpected": -0.03,
          "minimal_ornate": 0.076,
          "soft_sharp": 0.045,
          "romantic_edgy": 0.0303,
          "organic_geometric": 0.3533,
          "playful_refined": 0.2119,
          "everyday_special_occasion": 0.4233,
          "lowkey_statement": 0.6534,
          "grounded_ethereal": 0.0922
        },
        "metrics": {
          "vectorStrength": 0.9604,
          "maxAbsScore": 0.6534,
          "focusRatio": 0.2874
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.6534
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "tough",
        "term": "Tough",
        "cleanTerm": "tough",
        "dedupeKey": "tough",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.2917,
          "classic_unexpected": 0.0502,
          "minimal_ornate": -0.2408,
          "soft_sharp": -0.0696,
          "romantic_edgy": 0.7899,
          "organic_geometric": -0.1644,
          "playful_refined": 0.1175,
          "everyday_special_occasion": -0.114,
          "lowkey_statement": -0.1532,
          "grounded_ethereal": -0.2612
        },
        "metrics": {
          "vectorStrength": 0.9591,
          "maxAbsScore": 0.7899,
          "focusRatio": 0.3507
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.7899
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "playful",
        "term": "Playful",
        "cleanTerm": "playful",
        "dedupeKey": "playful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1181,
          "classic_unexpected": 0.2511,
          "minimal_ornate": -0.0085,
          "soft_sharp": -0.3453,
          "romantic_edgy": -0.0225,
          "organic_geometric": -0.3652,
          "playful_refined": -0.6094,
          "everyday_special_occasion": -0.1721,
          "lowkey_statement": -0.4308,
          "grounded_ethereal": -0.0171
        },
        "metrics": {
          "vectorStrength": 0.9577,
          "maxAbsScore": 0.6094,
          "focusRatio": 0.2604
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6094
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "nestled",
        "term": "Nestled",
        "cleanTerm": "nestled",
        "dedupeKey": "nestled",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.3921,
          "classic_unexpected": -0.2699,
          "minimal_ornate": -0.0139,
          "soft_sharp": -0.2852,
          "romantic_edgy": -0.3599,
          "organic_geometric": -0.1022,
          "playful_refined": 0.2894,
          "everyday_special_occasion": 0.1915,
          "lowkey_statement": -0.4442,
          "grounded_ethereal": -0.3787
        },
        "metrics": {
          "vectorStrength": 0.9536,
          "maxAbsScore": 0.4442,
          "focusRatio": 0.1629
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4442
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "tender",
        "term": "Tender",
        "cleanTerm": "tender",
        "dedupeKey": "tender",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3331,
          "classic_unexpected": -0.155,
          "minimal_ornate": -0.1972,
          "soft_sharp": -0.6402,
          "romantic_edgy": -0.2442,
          "organic_geometric": -0.2121,
          "playful_refined": 0.1699,
          "everyday_special_occasion": 0.0583,
          "lowkey_statement": -0.3892,
          "grounded_ethereal": -0.1901
        },
        "metrics": {
          "vectorStrength": 0.953,
          "maxAbsScore": 0.6402,
          "focusRatio": 0.2472
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.6402
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cherished",
        "term": "Cherished",
        "cleanTerm": "cherished",
        "dedupeKey": "cherished",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.1022,
          "classic_unexpected": -0.5599,
          "minimal_ornate": 0.0518,
          "soft_sharp": -0.3084,
          "romantic_edgy": -0.5114,
          "organic_geometric": -0.1506,
          "playful_refined": 0.1222,
          "everyday_special_occasion": 0.3964,
          "lowkey_statement": -0.0415,
          "grounded_ethereal": -0.1497
        },
        "metrics": {
          "vectorStrength": 0.9499,
          "maxAbsScore": 0.5599,
          "focusRatio": 0.2339
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5599
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "outsider",
        "term": "Outsider",
        "cleanTerm": "outsider",
        "dedupeKey": "outsider",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1123,
          "classic_unexpected": 0.5988,
          "minimal_ornate": -0.1515,
          "soft_sharp": -0.0038,
          "romantic_edgy": 0.6166,
          "organic_geometric": -0.1532,
          "playful_refined": -0.1036,
          "everyday_special_occasion": 0.0475,
          "lowkey_statement": 0.1559,
          "grounded_ethereal": 0.2584
        },
        "metrics": {
          "vectorStrength": 0.9497,
          "maxAbsScore": 0.6166,
          "focusRatio": 0.2801
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6166
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "sustainable",
        "term": "Sustainable",
        "cleanTerm": "sustainable",
        "dedupeKey": "sustainable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.3173,
          "classic_unexpected": -0.2534,
          "minimal_ornate": -0.4492,
          "soft_sharp": -0.386,
          "romantic_edgy": 0.0542,
          "organic_geometric": -0.3038,
          "playful_refined": 0.2589,
          "everyday_special_occasion": -0.3919,
          "lowkey_statement": -0.1888,
          "grounded_ethereal": -0.1825
        },
        "metrics": {
          "vectorStrength": 0.949,
          "maxAbsScore": 0.4492,
          "focusRatio": 0.1612
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4492
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "showy",
        "term": "Showy",
        "cleanTerm": "showy",
        "dedupeKey": "showy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.5926,
          "classic_unexpected": 0.1765,
          "minimal_ornate": 0.2934,
          "soft_sharp": 0.0908,
          "romantic_edgy": -0.1223,
          "organic_geometric": 0.1061,
          "playful_refined": 0.0732,
          "everyday_special_occasion": 0.4664,
          "lowkey_statement": 0.3914,
          "grounded_ethereal": 0.1329
        },
        "metrics": {
          "vectorStrength": 0.9469,
          "maxAbsScore": 0.5926,
          "focusRatio": 0.2423
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5926
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "cultivated",
        "term": "Cultivated",
        "cleanTerm": "cultivated",
        "dedupeKey": "cultivated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0006,
          "classic_unexpected": -0.3224,
          "minimal_ornate": 0.1066,
          "soft_sharp": -0.1785,
          "romantic_edgy": -0.166,
          "organic_geometric": -0.3089,
          "playful_refined": 0.6029,
          "everyday_special_occasion": 0.0878,
          "lowkey_statement": -0.1911,
          "grounded_ethereal": -0.4623
        },
        "metrics": {
          "vectorStrength": 0.9442,
          "maxAbsScore": 0.6029,
          "focusRatio": 0.2484
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6029
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fluttery",
        "term": "Fluttery",
        "cleanTerm": "fluttery",
        "dedupeKey": "fluttery",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.4257,
          "classic_unexpected": 0.0919,
          "minimal_ornate": 0.0378,
          "soft_sharp": -0.3601,
          "romantic_edgy": -0.3141,
          "organic_geometric": -0.3091,
          "playful_refined": -0.4256,
          "everyday_special_occasion": -0.1761,
          "lowkey_statement": -0.2398,
          "grounded_ethereal": 0.3247
        },
        "metrics": {
          "vectorStrength": 0.9434,
          "maxAbsScore": 0.4257,
          "focusRatio": 0.1574
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.4257
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "memorable",
        "term": "Memorable",
        "cleanTerm": "memorable",
        "dedupeKey": "memorable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.556,
          "classic_unexpected": -0.092,
          "minimal_ornate": -0.1238,
          "soft_sharp": -0.1404,
          "romantic_edgy": -0.3051,
          "organic_geometric": -0.044,
          "playful_refined": -0.1031,
          "everyday_special_occasion": 0.5962,
          "lowkey_statement": 0.271,
          "grounded_ethereal": 0.0445
        },
        "metrics": {
          "vectorStrength": 0.9429,
          "maxAbsScore": 0.5962,
          "focusRatio": 0.2619
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5962
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "enchanting",
        "term": "Enchanting",
        "cleanTerm": "enchanting",
        "dedupeKey": "enchanting",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.0451,
          "classic_unexpected": -0.0326,
          "minimal_ornate": 0.3999,
          "soft_sharp": -0.3442,
          "romantic_edgy": -0.491,
          "organic_geometric": -0.3946,
          "playful_refined": -0.2879,
          "everyday_special_occasion": 0.1997,
          "lowkey_statement": -0.0804,
          "grounded_ethereal": 0.2834
        },
        "metrics": {
          "vectorStrength": 0.9422,
          "maxAbsScore": 0.491,
          "focusRatio": 0.1919
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.491
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "streamlined",
        "term": "Streamlined",
        "cleanTerm": "streamlined",
        "dedupeKey": "streamlined",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.041,
          "classic_unexpected": -0.4188,
          "minimal_ornate": -0.4717,
          "soft_sharp": -0.1808,
          "romantic_edgy": -0.0064,
          "organic_geometric": 0.3484,
          "playful_refined": 0.5476,
          "everyday_special_occasion": 0.1195,
          "lowkey_statement": -0.0968,
          "grounded_ethereal": -0.0349
        },
        "metrics": {
          "vectorStrength": 0.9373,
          "maxAbsScore": 0.5476,
          "focusRatio": 0.2417
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5476
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "treasured",
        "term": "Treasured",
        "cleanTerm": "treasured",
        "dedupeKey": "treasured",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.0243,
          "classic_unexpected": -0.5194,
          "minimal_ornate": 0.1998,
          "soft_sharp": -0.1443,
          "romantic_edgy": -0.4084,
          "organic_geometric": -0.1704,
          "playful_refined": 0.2647,
          "everyday_special_occasion": 0.5241,
          "lowkey_statement": 0.0019,
          "grounded_ethereal": 0.0569
        },
        "metrics": {
          "vectorStrength": 0.9354,
          "maxAbsScore": 0.5241,
          "focusRatio": 0.2265
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5241
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fierce",
        "term": "Fierce",
        "cleanTerm": "fierce",
        "dedupeKey": "fierce",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.3621,
          "classic_unexpected": 0.0047,
          "minimal_ornate": 0.0427,
          "soft_sharp": 0.0361,
          "romantic_edgy": 0.8049,
          "organic_geometric": -0.2966,
          "playful_refined": -0.0551,
          "everyday_special_occasion": 0.014,
          "lowkey_statement": 0.0131,
          "grounded_ethereal": -0.0109
        },
        "metrics": {
          "vectorStrength": 0.9347,
          "maxAbsScore": 0.8049,
          "focusRatio": 0.4907
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.8049
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "fearless",
        "term": "Fearless",
        "cleanTerm": "fearless",
        "dedupeKey": "fearless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.3387,
          "classic_unexpected": 0.0684,
          "minimal_ornate": -0.4963,
          "soft_sharp": -0.1997,
          "romantic_edgy": 0.4757,
          "organic_geometric": -0.3103,
          "playful_refined": -0.126,
          "everyday_special_occasion": -0.2921,
          "lowkey_statement": 0.0516,
          "grounded_ethereal": 0.1994
        },
        "metrics": {
          "vectorStrength": 0.9337,
          "maxAbsScore": 0.4963,
          "focusRatio": 0.194
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4963
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fantastical",
        "term": "Fantastical",
        "cleanTerm": "fantastical",
        "dedupeKey": "fantastical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.069,
          "classic_unexpected": 0.0083,
          "minimal_ornate": 0.2513,
          "soft_sharp": -0.2669,
          "romantic_edgy": -0.0889,
          "organic_geometric": -0.2485,
          "playful_refined": -0.2059,
          "everyday_special_occasion": 0.2035,
          "lowkey_statement": 0.0798,
          "grounded_ethereal": 0.7551
        },
        "metrics": {
          "vectorStrength": 0.9323,
          "maxAbsScore": 0.7551,
          "focusRatio": 0.3468
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7551
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "frolic",
        "term": "Frolic",
        "cleanTerm": "frolic",
        "dedupeKey": "frolic",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.0381,
          "classic_unexpected": 0.2429,
          "minimal_ornate": 0.096,
          "soft_sharp": -0.2841,
          "romantic_edgy": 0.0947,
          "organic_geometric": -0.3522,
          "playful_refined": -0.727,
          "everyday_special_occasion": -0.1559,
          "lowkey_statement": -0.156,
          "grounded_ethereal": 0.0889
        },
        "metrics": {
          "vectorStrength": 0.932,
          "maxAbsScore": 0.727,
          "focusRatio": 0.3252
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.727
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "tapestry",
        "term": "Tapestry",
        "cleanTerm": "tapestry",
        "dedupeKey": "tapestry",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2303,
          "classic_unexpected": -0.4134,
          "minimal_ornate": 0.6289,
          "soft_sharp": -0.2654,
          "romantic_edgy": -0.167,
          "organic_geometric": 0.1266,
          "playful_refined": 0.1657,
          "everyday_special_occasion": 0.0326,
          "lowkey_statement": 0.2031,
          "grounded_ethereal": 0.2543
        },
        "metrics": {
          "vectorStrength": 0.9318,
          "maxAbsScore": 0.6289,
          "focusRatio": 0.2528
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6289
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "unstoppable",
        "term": "Unstoppable",
        "cleanTerm": "unstoppable",
        "dedupeKey": "unstoppable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.4769,
          "classic_unexpected": 0.1334,
          "minimal_ornate": -0.4174,
          "soft_sharp": 0.0054,
          "romantic_edgy": 0.5092,
          "organic_geometric": -0.2251,
          "playful_refined": -0.062,
          "everyday_special_occasion": -0.1829,
          "lowkey_statement": 0.2941,
          "grounded_ethereal": 0.1136
        },
        "metrics": {
          "vectorStrength": 0.9307,
          "maxAbsScore": 0.5092,
          "focusRatio": 0.2104
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5092
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "cozy",
        "term": "Cozy",
        "cleanTerm": "cozy",
        "dedupeKey": "cozy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0987,
          "classic_unexpected": -0.1979,
          "minimal_ornate": -0.1996,
          "soft_sharp": -0.3098,
          "romantic_edgy": -0.3854,
          "organic_geometric": -0.1905,
          "playful_refined": -0.3035,
          "everyday_special_occasion": -0.0439,
          "lowkey_statement": -0.5251,
          "grounded_ethereal": -0.3499
        },
        "metrics": {
          "vectorStrength": 0.9283,
          "maxAbsScore": 0.5251,
          "focusRatio": 0.2016
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.5251
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "distinctive",
        "term": "Distinctive",
        "cleanTerm": "distinctive",
        "dedupeKey": "distinctive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.2889,
          "classic_unexpected": -0.0784,
          "minimal_ornate": 0.3034,
          "soft_sharp": 0.3251,
          "romantic_edgy": 0.188,
          "organic_geometric": 0.1457,
          "playful_refined": 0.0764,
          "everyday_special_occasion": 0.4851,
          "lowkey_statement": 0.5168,
          "grounded_ethereal": -0.0266
        },
        "metrics": {
          "vectorStrength": 0.9235,
          "maxAbsScore": 0.5168,
          "focusRatio": 0.2123
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5168
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "confident",
        "term": "Confident",
        "cleanTerm": "confident",
        "dedupeKey": "confident",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.8006,
          "classic_unexpected": -0.0335,
          "minimal_ornate": -0.2924,
          "soft_sharp": -0.0819,
          "romantic_edgy": 0.0326,
          "organic_geometric": 0.0677,
          "playful_refined": 0.155,
          "everyday_special_occasion": -0.0098,
          "lowkey_statement": -0.0741,
          "grounded_ethereal": -0.2836
        },
        "metrics": {
          "vectorStrength": 0.9219,
          "maxAbsScore": 0.8006,
          "focusRatio": 0.4372
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.8006
        },
        "usage": {
          "initialScreen": true,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "initial_screen"
        }
      },
      {
        "id": "remarkable",
        "term": "Remarkable",
        "cleanTerm": "remarkable",
        "dedupeKey": "remarkable",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.5422,
          "classic_unexpected": 0.3464,
          "minimal_ornate": -0.0364,
          "soft_sharp": -0.0637,
          "romantic_edgy": 0.0531,
          "organic_geometric": -0.085,
          "playful_refined": 0.0485,
          "everyday_special_occasion": 0.4473,
          "lowkey_statement": 0.4128,
          "grounded_ethereal": 0.21
        },
        "metrics": {
          "vectorStrength": 0.92,
          "maxAbsScore": 0.5422,
          "focusRatio": 0.2415
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5422
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mournful",
        "term": "Mournful",
        "cleanTerm": "mournful",
        "dedupeKey": "mournful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.2234,
          "classic_unexpected": -0.0944,
          "minimal_ornate": 0.2244,
          "soft_sharp": -0.4763,
          "romantic_edgy": -0.4009,
          "organic_geometric": -0.3164,
          "playful_refined": -0.1069,
          "everyday_special_occasion": 0.2907,
          "lowkey_statement": -0.2827,
          "grounded_ethereal": 0.2703
        },
        "metrics": {
          "vectorStrength": 0.9196,
          "maxAbsScore": 0.4763,
          "focusRatio": 0.1773
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.4763
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "whisper",
        "term": "Whisper",
        "cleanTerm": "whisper",
        "dedupeKey": "whisper",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.335,
          "classic_unexpected": 0.0151,
          "minimal_ornate": -0.5302,
          "soft_sharp": -0.3315,
          "romantic_edgy": -0.2131,
          "organic_geometric": -0.125,
          "playful_refined": -0.0082,
          "everyday_special_occasion": -0.1273,
          "lowkey_statement": -0.4974,
          "grounded_ethereal": 0.1243
        },
        "metrics": {
          "vectorStrength": 0.9184,
          "maxAbsScore": 0.5302,
          "focusRatio": 0.2298
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5302
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "assertive",
        "term": "Assertive",
        "cleanTerm": "assertive",
        "dedupeKey": "assertive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.6606,
          "classic_unexpected": 0.0028,
          "minimal_ornate": -0.4152,
          "soft_sharp": 0.0385,
          "romantic_edgy": 0.1773,
          "organic_geometric": 0.0869,
          "playful_refined": 0.2908,
          "everyday_special_occasion": 0.055,
          "lowkey_statement": 0.0648,
          "grounded_ethereal": -0.3199
        },
        "metrics": {
          "vectorStrength": 0.9184,
          "maxAbsScore": 0.6606,
          "focusRatio": 0.3128
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6606
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mature",
        "term": "Mature",
        "cleanTerm": "mature",
        "dedupeKey": "mature",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.144,
          "classic_unexpected": -0.3168,
          "minimal_ornate": -0.128,
          "soft_sharp": -0.2985,
          "romantic_edgy": -0.02,
          "organic_geometric": -0.1399,
          "playful_refined": 0.6469,
          "everyday_special_occasion": 0.2433,
          "lowkey_statement": -0.1967,
          "grounded_ethereal": -0.2829
        },
        "metrics": {
          "vectorStrength": 0.9181,
          "maxAbsScore": 0.6469,
          "focusRatio": 0.2677
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6469
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fanciful",
        "term": "Fanciful",
        "cleanTerm": "fanciful",
        "dedupeKey": "fanciful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2213,
          "classic_unexpected": -0.0381,
          "minimal_ornate": 0.4791,
          "soft_sharp": -0.1491,
          "romantic_edgy": -0.3762,
          "organic_geometric": -0.1512,
          "playful_refined": -0.228,
          "everyday_special_occasion": 0.2498,
          "lowkey_statement": -0.1615,
          "grounded_ethereal": 0.4818
        },
        "metrics": {
          "vectorStrength": 0.916,
          "maxAbsScore": 0.4818,
          "focusRatio": 0.19
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4818
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "flora",
        "term": "Flora",
        "cleanTerm": "flora",
        "dedupeKey": "flora",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1435,
          "classic_unexpected": -0.1808,
          "minimal_ornate": 0.2036,
          "soft_sharp": -0.5936,
          "romantic_edgy": -0.1684,
          "organic_geometric": -0.5334,
          "playful_refined": -0.043,
          "everyday_special_occasion": -0.1529,
          "lowkey_statement": -0.2223,
          "grounded_ethereal": 0.0384
        },
        "metrics": {
          "vectorStrength": 0.9144,
          "maxAbsScore": 0.5936,
          "focusRatio": 0.2604
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5936
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "everlasting",
        "term": "Everlasting",
        "cleanTerm": "everlasting",
        "dedupeKey": "everlasting",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1953,
          "classic_unexpected": -0.5517,
          "minimal_ornate": -0.0525,
          "soft_sharp": -0.3233,
          "romantic_edgy": -0.014,
          "organic_geometric": -0.3152,
          "playful_refined": 0.1161,
          "everyday_special_occasion": -0.1843,
          "lowkey_statement": 0.1425,
          "grounded_ethereal": 0.459
        },
        "metrics": {
          "vectorStrength": 0.9098,
          "maxAbsScore": 0.5517,
          "focusRatio": 0.2344
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5517
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "soulful",
        "term": "Soulful",
        "cleanTerm": "soulful",
        "dedupeKey": "soulful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.0323,
          "classic_unexpected": -0.0937,
          "minimal_ornate": -0.1457,
          "soft_sharp": -0.5061,
          "romantic_edgy": -0.5005,
          "organic_geometric": -0.4167,
          "playful_refined": 0.0264,
          "everyday_special_occasion": -0.0502,
          "lowkey_statement": -0.3157,
          "grounded_ethereal": 0.0728
        },
        "metrics": {
          "vectorStrength": 0.9052,
          "maxAbsScore": 0.5061,
          "focusRatio": 0.2343
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5061
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fuzzy",
        "term": "Fuzzy",
        "cleanTerm": "fuzzy",
        "dedupeKey": "fuzzy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.2006,
          "classic_unexpected": 0.101,
          "minimal_ornate": -0.0647,
          "soft_sharp": -0.4248,
          "romantic_edgy": -0.1866,
          "organic_geometric": -0.3121,
          "playful_refined": -0.0906,
          "everyday_special_occasion": -0.2202,
          "lowkey_statement": -0.6116,
          "grounded_ethereal": -0.1383
        },
        "metrics": {
          "vectorStrength": 0.904,
          "maxAbsScore": 0.6116,
          "focusRatio": 0.2602
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.6116
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intricacy",
        "term": "Intricacy",
        "cleanTerm": "intricacy",
        "dedupeKey": "intricacy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.3823,
          "classic_unexpected": -0.0348,
          "minimal_ornate": 0.6218,
          "soft_sharp": 0.2213,
          "romantic_edgy": 0.1605,
          "organic_geometric": 0.1231,
          "playful_refined": 0.2653,
          "everyday_special_occasion": 0.1155,
          "lowkey_statement": -0.3248,
          "grounded_ethereal": -0.0456
        },
        "metrics": {
          "vectorStrength": 0.9028,
          "maxAbsScore": 0.6218,
          "focusRatio": 0.271
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.6218
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "starlight",
        "term": "Starlight",
        "cleanTerm": "starlight",
        "dedupeKey": "starlight",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.196,
          "classic_unexpected": -0.2809,
          "minimal_ornate": -0.2597,
          "soft_sharp": -0.0825,
          "romantic_edgy": -0.1723,
          "organic_geometric": 0.0858,
          "playful_refined": -0.168,
          "everyday_special_occasion": 0.2545,
          "lowkey_statement": 0.3405,
          "grounded_ethereal": 0.6122
        },
        "metrics": {
          "vectorStrength": 0.9013,
          "maxAbsScore": 0.6122,
          "focusRatio": 0.2496
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.6122
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "giggly",
        "term": "Giggly",
        "cleanTerm": "giggly",
        "dedupeKey": "giggly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.0038,
          "classic_unexpected": 0.2639,
          "minimal_ornate": 0.0214,
          "soft_sharp": -0.2244,
          "romantic_edgy": -0.3617,
          "organic_geometric": -0.2909,
          "playful_refined": -0.6358,
          "everyday_special_occasion": -0.0088,
          "lowkey_statement": -0.2538,
          "grounded_ethereal": -0.0833
        },
        "metrics": {
          "vectorStrength": 0.9009,
          "maxAbsScore": 0.6358,
          "focusRatio": 0.296
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6358
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "intuitive",
        "term": "Intuitive",
        "cleanTerm": "intuitive",
        "dedupeKey": "intuitive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1213,
          "classic_unexpected": 0.2952,
          "minimal_ornate": -0.416,
          "soft_sharp": -0.2005,
          "romantic_edgy": -0.0571,
          "organic_geometric": -0.3255,
          "playful_refined": 0.0165,
          "everyday_special_occasion": -0.4555,
          "lowkey_statement": -0.3356,
          "grounded_ethereal": -0.258
        },
        "metrics": {
          "vectorStrength": 0.9007,
          "maxAbsScore": 0.4555,
          "focusRatio": 0.1836
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.4555
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "jovial",
        "term": "Jovial",
        "cleanTerm": "jovial",
        "dedupeKey": "jovial",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.219,
          "classic_unexpected": 0.192,
          "minimal_ornate": 0.1056,
          "soft_sharp": -0.4601,
          "romantic_edgy": -0.1041,
          "organic_geometric": -0.2705,
          "playful_refined": -0.5541,
          "everyday_special_occasion": -0.0535,
          "lowkey_statement": -0.3063,
          "grounded_ethereal": 0.1221
        },
        "metrics": {
          "vectorStrength": 0.9002,
          "maxAbsScore": 0.5541,
          "focusRatio": 0.2321
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5541
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "layered",
        "term": "Layered",
        "cleanTerm": "layered",
        "dedupeKey": "layered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.0317,
          "classic_unexpected": -0.2735,
          "minimal_ornate": 0.551,
          "soft_sharp": -0.2239,
          "romantic_edgy": -0.1431,
          "organic_geometric": 0.1822,
          "playful_refined": 0.492,
          "everyday_special_occasion": 0.028,
          "lowkey_statement": -0.2721,
          "grounded_ethereal": -0.03
        },
        "metrics": {
          "vectorStrength": 0.8949,
          "maxAbsScore": 0.551,
          "focusRatio": 0.2474
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.551
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "rugged",
        "term": "Rugged",
        "cleanTerm": "rugged",
        "dedupeKey": "rugged",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.241,
          "classic_unexpected": -0.1101,
          "minimal_ornate": -0.0814,
          "soft_sharp": 0.028,
          "romantic_edgy": 0.5474,
          "organic_geometric": -0.1091,
          "playful_refined": 0.2844,
          "everyday_special_occasion": -0.1573,
          "lowkey_statement": -0.2522,
          "grounded_ethereal": -0.4834
        },
        "metrics": {
          "vectorStrength": 0.89,
          "maxAbsScore": 0.5474,
          "focusRatio": 0.2386
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5474
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "charming",
        "term": "Charming",
        "cleanTerm": "charming",
        "dedupeKey": "charming",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0949,
          "classic_unexpected": -0.0036,
          "minimal_ornate": 0.1266,
          "soft_sharp": -0.2902,
          "romantic_edgy": -0.4324,
          "organic_geometric": -0.2401,
          "playful_refined": -0.6401,
          "everyday_special_occasion": 0.1005,
          "lowkey_statement": -0.0585,
          "grounded_ethereal": -0.0155
        },
        "metrics": {
          "vectorStrength": 0.8817,
          "maxAbsScore": 0.6401,
          "focusRatio": 0.3197
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6401
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "wild",
        "term": "Wild",
        "cleanTerm": "wild",
        "dedupeKey": "wild",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.2324,
          "classic_unexpected": 0.2751,
          "minimal_ornate": -0.2197,
          "soft_sharp": -0.1582,
          "romantic_edgy": 0.3981,
          "organic_geometric": -0.5839,
          "playful_refined": -0.2469,
          "everyday_special_occasion": -0.0742,
          "lowkey_statement": -0.0422,
          "grounded_ethereal": -0.0733
        },
        "metrics": {
          "vectorStrength": 0.8809,
          "maxAbsScore": 0.5839,
          "focusRatio": 0.2534
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5839
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "outspoken",
        "term": "Outspoken",
        "cleanTerm": "outspoken",
        "dedupeKey": "outspoken",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.5594,
          "classic_unexpected": 0.417,
          "minimal_ornate": -0.2567,
          "soft_sharp": -0.0072,
          "romantic_edgy": 0.344,
          "organic_geometric": -0.0785,
          "playful_refined": 0.2194,
          "everyday_special_occasion": 0.0803,
          "lowkey_statement": 0.1933,
          "grounded_ethereal": -0.0523
        },
        "metrics": {
          "vectorStrength": 0.8786,
          "maxAbsScore": 0.5594,
          "focusRatio": 0.2533
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.5594
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "colorful",
        "term": "Colorful",
        "cleanTerm": "colorful",
        "dedupeKey": "colorful",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.4261,
          "classic_unexpected": 0.1196,
          "minimal_ornate": 0.534,
          "soft_sharp": -0.2599,
          "romantic_edgy": -0.2777,
          "organic_geometric": -0.1538,
          "playful_refined": -0.3157,
          "everyday_special_occasion": 0.0964,
          "lowkey_statement": 0.0048,
          "grounded_ethereal": 0.1032
        },
        "metrics": {
          "vectorStrength": 0.877,
          "maxAbsScore": 0.534,
          "focusRatio": 0.2331
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.534
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "legacy",
        "term": "Legacy",
        "cleanTerm": "legacy",
        "dedupeKey": "legacy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1731,
          "classic_unexpected": -0.5302,
          "minimal_ornate": -0.0538,
          "soft_sharp": -0.2886,
          "romantic_edgy": 0.0525,
          "organic_geometric": 0.1921,
          "playful_refined": 0.2362,
          "everyday_special_occasion": 0.2956,
          "lowkey_statement": 0.3396,
          "grounded_ethereal": 0.27
        },
        "metrics": {
          "vectorStrength": 0.8765,
          "maxAbsScore": 0.5302,
          "focusRatio": 0.218
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.5302
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "adventurous",
        "term": "Adventurous",
        "cleanTerm": "adventurous",
        "dedupeKey": "adventurous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.3488,
          "classic_unexpected": 0.4705,
          "minimal_ornate": 0.1835,
          "soft_sharp": -0.0505,
          "romantic_edgy": 0.3266,
          "organic_geometric": -0.3578,
          "playful_refined": -0.3162,
          "everyday_special_occasion": 0.1423,
          "lowkey_statement": -0.0697,
          "grounded_ethereal": 0.1712
        },
        "metrics": {
          "vectorStrength": 0.8765,
          "maxAbsScore": 0.4705,
          "focusRatio": 0.193
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "durable",
        "term": "Durable",
        "cleanTerm": "durable",
        "dedupeKey": "durable",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.3797,
          "classic_unexpected": -0.4713,
          "minimal_ornate": -0.0996,
          "soft_sharp": -0.2448,
          "romantic_edgy": 0.1578,
          "organic_geometric": -0.086,
          "playful_refined": 0.2548,
          "everyday_special_occasion": -0.4332,
          "lowkey_statement": -0.1562,
          "grounded_ethereal": -0.1494
        },
        "metrics": {
          "vectorStrength": 0.8762,
          "maxAbsScore": 0.4713,
          "focusRatio": 0.1937
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Classic",
          "score": -0.4713
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "maverick",
        "term": "Maverick",
        "cleanTerm": "maverick",
        "dedupeKey": "maverick",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1406,
          "classic_unexpected": 0.3044,
          "minimal_ornate": -0.5038,
          "soft_sharp": 0.1392,
          "romantic_edgy": 0.5549,
          "organic_geometric": -0.1036,
          "playful_refined": -0.1524,
          "everyday_special_occasion": 0.089,
          "lowkey_statement": 0.1742,
          "grounded_ethereal": 0.0351
        },
        "metrics": {
          "vectorStrength": 0.8758,
          "maxAbsScore": 0.5549,
          "focusRatio": 0.2525
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5549
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "mystical",
        "term": "Mystical",
        "cleanTerm": "mystical",
        "dedupeKey": "mystical",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1173,
          "classic_unexpected": 0.0859,
          "minimal_ornate": 0.1392,
          "soft_sharp": -0.3453,
          "romantic_edgy": -0.1857,
          "organic_geometric": -0.3788,
          "playful_refined": -0.0627,
          "everyday_special_occasion": 0.1505,
          "lowkey_statement": -0.2445,
          "grounded_ethereal": 0.5839
        },
        "metrics": {
          "vectorStrength": 0.8746,
          "maxAbsScore": 0.5839,
          "focusRatio": 0.2546
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5839
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "lunar",
        "term": "Lunar",
        "cleanTerm": "lunar",
        "dedupeKey": "lunar",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.04,
          "classic_unexpected": -0.0899,
          "minimal_ornate": -0.0639,
          "soft_sharp": -0.3736,
          "romantic_edgy": -0.1313,
          "organic_geometric": -0.2587,
          "playful_refined": 0.0106,
          "everyday_special_occasion": -0.0139,
          "lowkey_statement": -0.0797,
          "grounded_ethereal": 0.7195
        },
        "metrics": {
          "vectorStrength": 0.8729,
          "maxAbsScore": 0.7195,
          "focusRatio": 0.404
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.7195
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "feathery",
        "term": "Feathery",
        "cleanTerm": "feathery",
        "dedupeKey": "feathery",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2815,
          "classic_unexpected": -0.1996,
          "minimal_ornate": 0.2969,
          "soft_sharp": -0.2323,
          "romantic_edgy": -0.3055,
          "organic_geometric": -0.4025,
          "playful_refined": 0.0635,
          "everyday_special_occasion": -0.1035,
          "lowkey_statement": -0.4209,
          "grounded_ethereal": 0.2066
        },
        "metrics": {
          "vectorStrength": 0.8667,
          "maxAbsScore": 0.4209,
          "focusRatio": 0.1675
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4209
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intriguing",
        "term": "Intriguing",
        "cleanTerm": "intriguing",
        "dedupeKey": "intriguing",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.254,
          "classic_unexpected": 0.5888,
          "minimal_ornate": 0.3761,
          "soft_sharp": 0.0604,
          "romantic_edgy": 0.0631,
          "organic_geometric": -0.2273,
          "playful_refined": -0.3148,
          "everyday_special_occasion": 0.184,
          "lowkey_statement": -0.0232,
          "grounded_ethereal": 0.0657
        },
        "metrics": {
          "vectorStrength": 0.866,
          "maxAbsScore": 0.5888,
          "focusRatio": 0.2729
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5888
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "engineered",
        "term": "Engineered",
        "cleanTerm": "engineered",
        "dedupeKey": "engineered",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1908,
          "classic_unexpected": -0.288,
          "minimal_ornate": 0.2573,
          "soft_sharp": 0.2055,
          "romantic_edgy": 0.2303,
          "organic_geometric": 0.1902,
          "playful_refined": 0.6043,
          "everyday_special_occasion": 0.2307,
          "lowkey_statement": -0.0411,
          "grounded_ethereal": -0.1061
        },
        "metrics": {
          "vectorStrength": 0.8651,
          "maxAbsScore": 0.6043,
          "focusRatio": 0.2578
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.6043
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "precise",
        "term": "Precise",
        "cleanTerm": "precise",
        "dedupeKey": "precise",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.1075,
          "classic_unexpected": -0.2678,
          "minimal_ornate": -0.0899,
          "soft_sharp": 0.5155,
          "romantic_edgy": 0.1114,
          "organic_geometric": 0.0603,
          "playful_refined": 0.4741,
          "everyday_special_occasion": 0.1609,
          "lowkey_statement": -0.2917,
          "grounded_ethereal": -0.1859
        },
        "metrics": {
          "vectorStrength": 0.8623,
          "maxAbsScore": 0.5155,
          "focusRatio": 0.2276
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.5155
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "uncanny",
        "term": "Uncanny",
        "cleanTerm": "uncanny",
        "dedupeKey": "uncanny",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1447,
          "classic_unexpected": 0.4575,
          "minimal_ornate": -0.2764,
          "soft_sharp": 0.0031,
          "romantic_edgy": 0.1607,
          "organic_geometric": -0.3862,
          "playful_refined": -0.3535,
          "everyday_special_occasion": -0.1426,
          "lowkey_statement": -0.229,
          "grounded_ethereal": 0.2285
        },
        "metrics": {
          "vectorStrength": 0.8554,
          "maxAbsScore": 0.4575,
          "focusRatio": 0.192
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4575
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "labyrinthine",
        "term": "Labyrinthine",
        "cleanTerm": "labyrinthine",
        "dedupeKey": "labyrinthine",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": -0.2826,
          "classic_unexpected": -0.0243,
          "minimal_ornate": 0.2635,
          "soft_sharp": -0.4072,
          "romantic_edgy": 0.1155,
          "organic_geometric": -0.1246,
          "playful_refined": -0.0028,
          "everyday_special_occasion": -0.1662,
          "lowkey_statement": -0.4062,
          "grounded_ethereal": 0.4381
        },
        "metrics": {
          "vectorStrength": 0.8538,
          "maxAbsScore": 0.4381,
          "focusRatio": 0.1964
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4381
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "dreamscape",
        "term": "Dreamscape",
        "cleanTerm": "dreamscape",
        "dedupeKey": "dreamscape",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.1919,
          "classic_unexpected": -0.0634,
          "minimal_ornate": 0.1103,
          "soft_sharp": -0.3782,
          "romantic_edgy": -0.4654,
          "organic_geometric": -0.0834,
          "playful_refined": -0.1869,
          "everyday_special_occasion": 0.0646,
          "lowkey_statement": -0.0059,
          "grounded_ethereal": 0.516
        },
        "metrics": {
          "vectorStrength": 0.8515,
          "maxAbsScore": 0.516,
          "focusRatio": 0.2498
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.516
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "petals",
        "term": "Petals",
        "cleanTerm": "petals",
        "dedupeKey": "petals",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.3931,
          "classic_unexpected": -0.2331,
          "minimal_ornate": 0.2888,
          "soft_sharp": -0.2602,
          "romantic_edgy": -0.401,
          "organic_geometric": -0.343,
          "playful_refined": 0.2296,
          "everyday_special_occasion": 0.1086,
          "lowkey_statement": -0.0073,
          "grounded_ethereal": 0.133
        },
        "metrics": {
          "vectorStrength": 0.8489,
          "maxAbsScore": 0.401,
          "focusRatio": 0.1673
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.401
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "meadow",
        "term": "Meadow",
        "cleanTerm": "meadow",
        "dedupeKey": "meadow",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.202,
          "classic_unexpected": -0.1209,
          "minimal_ornate": -0.1697,
          "soft_sharp": -0.4383,
          "romantic_edgy": -0.3431,
          "organic_geometric": -0.5036,
          "playful_refined": 0.0466,
          "everyday_special_occasion": -0.0259,
          "lowkey_statement": -0.2413,
          "grounded_ethereal": -0.0912
        },
        "metrics": {
          "vectorStrength": 0.8468,
          "maxAbsScore": 0.5036,
          "focusRatio": 0.2308
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5036
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "opulent",
        "term": "Opulent",
        "cleanTerm": "opulent",
        "dedupeKey": "opulent",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2601,
          "classic_unexpected": -0.1787,
          "minimal_ornate": 0.4134,
          "soft_sharp": -0.3611,
          "romantic_edgy": -0.0989,
          "organic_geometric": -0.0826,
          "playful_refined": 0.407,
          "everyday_special_occasion": 0.0779,
          "lowkey_statement": -0.1765,
          "grounded_ethereal": 0.3073
        },
        "metrics": {
          "vectorStrength": 0.8455,
          "maxAbsScore": 0.4134,
          "focusRatio": 0.1749
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.4134
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "whispering",
        "term": "Whispering",
        "cleanTerm": "whispering",
        "dedupeKey": "whispering",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.3102,
          "classic_unexpected": 0.1452,
          "minimal_ornate": -0.3032,
          "soft_sharp": -0.3862,
          "romantic_edgy": -0.2769,
          "organic_geometric": -0.1838,
          "playful_refined": -0.1015,
          "everyday_special_occasion": -0.0798,
          "lowkey_statement": -0.4492,
          "grounded_ethereal": 0.1576
        },
        "metrics": {
          "vectorStrength": 0.8439,
          "maxAbsScore": 0.4492,
          "focusRatio": 0.1877
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4492
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "synopsis"
        }
      },
      {
        "id": "finesse",
        "term": "Finesse",
        "cleanTerm": "finesse",
        "dedupeKey": "finesse",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.6372,
          "classic_unexpected": -0.1658,
          "minimal_ornate": -0.1232,
          "soft_sharp": 0.0283,
          "romantic_edgy": -0.1394,
          "organic_geometric": -0.0153,
          "playful_refined": 0.3458,
          "everyday_special_occasion": -0.0537,
          "lowkey_statement": -0.34,
          "grounded_ethereal": 0.0492
        },
        "metrics": {
          "vectorStrength": 0.8424,
          "maxAbsScore": 0.6372,
          "focusRatio": 0.3357
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Delicate",
          "score": -0.6372
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "twinkling",
        "term": "Twinkling",
        "cleanTerm": "twinkling",
        "dedupeKey": "twinkling",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": -0.4011,
          "classic_unexpected": 0.0386,
          "minimal_ornate": 0.0301,
          "soft_sharp": -0.0747,
          "romantic_edgy": -0.4239,
          "organic_geometric": -0.0279,
          "playful_refined": -0.4681,
          "everyday_special_occasion": 0.1646,
          "lowkey_statement": -0.1215,
          "grounded_ethereal": 0.3096
        },
        "metrics": {
          "vectorStrength": 0.8403,
          "maxAbsScore": 0.4681,
          "focusRatio": 0.2272
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.4681
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": false,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "synopsis"
        }
      },
      {
        "id": "blossoming",
        "term": "Blossoming",
        "cleanTerm": "blossoming",
        "dedupeKey": "blossoming",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0728,
          "classic_unexpected": 0.1079,
          "minimal_ornate": 0.2873,
          "soft_sharp": -0.4239,
          "romantic_edgy": -0.3292,
          "organic_geometric": -0.486,
          "playful_refined": 0.1131,
          "everyday_special_occasion": 0.2344,
          "lowkey_statement": 0.0993,
          "grounded_ethereal": -0.0298
        },
        "metrics": {
          "vectorStrength": 0.838,
          "maxAbsScore": 0.486,
          "focusRatio": 0.2226
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.486
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "loud",
        "term": "Loud",
        "cleanTerm": "loud",
        "dedupeKey": "loud",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.3007,
          "classic_unexpected": 0.248,
          "minimal_ornate": -0.2485,
          "soft_sharp": -0.5649,
          "romantic_edgy": -0.1495,
          "organic_geometric": -0.0225,
          "playful_refined": 0.0086,
          "everyday_special_occasion": -0.0668,
          "lowkey_statement": -0.3637,
          "grounded_ethereal": 0.0813
        },
        "metrics": {
          "vectorStrength": 0.8362,
          "maxAbsScore": 0.5649,
          "focusRatio": 0.275
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Soft",
          "score": -0.5649
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sunshine",
        "term": "Sunshine",
        "cleanTerm": "sunshine",
        "dedupeKey": "sunshine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.1093,
          "classic_unexpected": 0.067,
          "minimal_ornate": -0.4583,
          "soft_sharp": -0.3859,
          "romantic_edgy": -0.3634,
          "organic_geometric": -0.17,
          "playful_refined": -0.3478,
          "everyday_special_occasion": -0.1736,
          "lowkey_statement": -0.0504,
          "grounded_ethereal": -0.0452
        },
        "metrics": {
          "vectorStrength": 0.8319,
          "maxAbsScore": 0.4583,
          "focusRatio": 0.2111
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4583
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "festive",
        "term": "Festive",
        "cleanTerm": "festive",
        "dedupeKey": "festive",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1661,
          "classic_unexpected": -0.208,
          "minimal_ornate": 0.4092,
          "soft_sharp": -0.0602,
          "romantic_edgy": -0.137,
          "organic_geometric": -0.0567,
          "playful_refined": -0.2158,
          "everyday_special_occasion": 0.5913,
          "lowkey_statement": -0.0846,
          "grounded_ethereal": 0.1415
        },
        "metrics": {
          "vectorStrength": 0.829,
          "maxAbsScore": 0.5913,
          "focusRatio": 0.2856
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5913
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "wildflowers",
        "term": "Wildflowers",
        "cleanTerm": "wildflowers",
        "dedupeKey": "wildflowers",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.1521,
          "classic_unexpected": 0.1703,
          "minimal_ornate": 0.0161,
          "soft_sharp": -0.3903,
          "romantic_edgy": -0.2961,
          "organic_geometric": -0.5972,
          "playful_refined": -0.1883,
          "everyday_special_occasion": -0.0372,
          "lowkey_statement": 0.0077,
          "grounded_ethereal": -0.033
        },
        "metrics": {
          "vectorStrength": 0.8289,
          "maxAbsScore": 0.5972,
          "focusRatio": 0.3163
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.5972
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "balanced",
        "term": "Balanced",
        "cleanTerm": "balanced",
        "dedupeKey": "balanced",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0533,
          "classic_unexpected": -0.1236,
          "minimal_ornate": -0.5063,
          "soft_sharp": -0.3619,
          "romantic_edgy": -0.0339,
          "organic_geometric": 0.0219,
          "playful_refined": 0.3621,
          "everyday_special_occasion": -0.2552,
          "lowkey_statement": -0.2591,
          "grounded_ethereal": -0.1199
        },
        "metrics": {
          "vectorStrength": 0.8275,
          "maxAbsScore": 0.5063,
          "focusRatio": 0.2414
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5063
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "impactful",
        "term": "Impactful",
        "cleanTerm": "impactful",
        "dedupeKey": "impactful",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.6838,
          "classic_unexpected": 0.2368,
          "minimal_ornate": 0.0731,
          "soft_sharp": 0.0305,
          "romantic_edgy": 0.1627,
          "organic_geometric": -0.0867,
          "playful_refined": -0.0986,
          "everyday_special_occasion": 0.0805,
          "lowkey_statement": 0.3134,
          "grounded_ethereal": -0.0114
        },
        "metrics": {
          "vectorStrength": 0.8237,
          "maxAbsScore": 0.6838,
          "focusRatio": 0.3847
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.6838
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "woven",
        "term": "Woven",
        "cleanTerm": "woven",
        "dedupeKey": "woven",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0195,
          "classic_unexpected": -0.3802,
          "minimal_ornate": 0.4314,
          "soft_sharp": -0.2908,
          "romantic_edgy": -0.0994,
          "organic_geometric": 0.02,
          "playful_refined": 0.3627,
          "everyday_special_occasion": -0.2932,
          "lowkey_statement": -0.1841,
          "grounded_ethereal": -0.0175
        },
        "metrics": {
          "vectorStrength": 0.8231,
          "maxAbsScore": 0.4314,
          "focusRatio": 0.2055
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.4314
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "silly",
        "term": "Silly",
        "cleanTerm": "silly",
        "dedupeKey": "silly",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1253,
          "classic_unexpected": 0.2773,
          "minimal_ornate": -0.2641,
          "soft_sharp": -0.1236,
          "romantic_edgy": -0.0362,
          "organic_geometric": -0.2525,
          "playful_refined": -0.5304,
          "everyday_special_occasion": 0.0052,
          "lowkey_statement": -0.3465,
          "grounded_ethereal": 0.1825
        },
        "metrics": {
          "vectorStrength": 0.823,
          "maxAbsScore": 0.5304,
          "focusRatio": 0.2474
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.5304
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "transparent",
        "term": "Transparent",
        "cleanTerm": "transparent",
        "dedupeKey": "transparent",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": -0.0074,
          "classic_unexpected": -0.3765,
          "minimal_ornate": -0.4724,
          "soft_sharp": -0.2777,
          "romantic_edgy": -0.1147,
          "organic_geometric": 0.2219,
          "playful_refined": 0.2622,
          "everyday_special_occasion": -0.18,
          "lowkey_statement": -0.1469,
          "grounded_ethereal": 0.218
        },
        "metrics": {
          "vectorStrength": 0.8214,
          "maxAbsScore": 0.4724,
          "focusRatio": 0.2074
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4724
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sunlit",
        "term": "Sunlit",
        "cleanTerm": "sunlit",
        "dedupeKey": "sunlit",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": -0.1118,
          "classic_unexpected": -0.0755,
          "minimal_ornate": -0.3534,
          "soft_sharp": -0.4209,
          "romantic_edgy": -0.4638,
          "organic_geometric": -0.1083,
          "playful_refined": -0.041,
          "everyday_special_occasion": -0.0643,
          "lowkey_statement": -0.1525,
          "grounded_ethereal": 0.3138
        },
        "metrics": {
          "vectorStrength": 0.8214,
          "maxAbsScore": 0.4638,
          "focusRatio": 0.2203
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.4638
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "noteworthy",
        "term": "Noteworthy",
        "cleanTerm": "noteworthy",
        "dedupeKey": "noteworthy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4339,
          "classic_unexpected": 0.2473,
          "minimal_ornate": -0.0195,
          "soft_sharp": 0.0974,
          "romantic_edgy": 0.1155,
          "organic_geometric": -0.1013,
          "playful_refined": 0.0372,
          "everyday_special_occasion": 0.3276,
          "lowkey_statement": 0.5298,
          "grounded_ethereal": 0.0171
        },
        "metrics": {
          "vectorStrength": 0.8201,
          "maxAbsScore": 0.5298,
          "focusRatio": 0.275
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5298
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "gutsy",
        "term": "Gutsy",
        "cleanTerm": "gutsy",
        "dedupeKey": "gutsy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.3145,
          "classic_unexpected": 0.2048,
          "minimal_ornate": -0.2458,
          "soft_sharp": -0.1518,
          "romantic_edgy": 0.4743,
          "organic_geometric": -0.3065,
          "playful_refined": -0.0932,
          "everyday_special_occasion": -0.0164,
          "lowkey_statement": 0.0525,
          "grounded_ethereal": -0.3416
        },
        "metrics": {
          "vectorStrength": 0.8195,
          "maxAbsScore": 0.4743,
          "focusRatio": 0.2154
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.4743
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "courageous",
        "term": "Courageous",
        "cleanTerm": "courageous",
        "dedupeKey": "courageous",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.4821,
          "classic_unexpected": 0.2118,
          "minimal_ornate": -0.199,
          "soft_sharp": -0.1836,
          "romantic_edgy": 0.4248,
          "organic_geometric": -0.3127,
          "playful_refined": -0.0905,
          "everyday_special_occasion": 0.1455,
          "lowkey_statement": 0.0682,
          "grounded_ethereal": 0.0703
        },
        "metrics": {
          "vectorStrength": 0.8171,
          "maxAbsScore": 0.4821,
          "focusRatio": 0.2203
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.4821
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "grunge",
        "term": "Grunge",
        "cleanTerm": "grunge",
        "dedupeKey": "grunge",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0767,
          "classic_unexpected": 0.1876,
          "minimal_ornate": -0.2762,
          "soft_sharp": -0.0081,
          "romantic_edgy": 0.4758,
          "organic_geometric": -0.1698,
          "playful_refined": 0.1424,
          "everyday_special_occasion": -0.1995,
          "lowkey_statement": -0.0288,
          "grounded_ethereal": -0.4728
        },
        "metrics": {
          "vectorStrength": 0.8106,
          "maxAbsScore": 0.4758,
          "focusRatio": 0.2335
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.4758
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "punk",
        "term": "Punk",
        "cleanTerm": "punk",
        "dedupeKey": "punk",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": -0.0577,
          "classic_unexpected": 0.0783,
          "minimal_ornate": -0.2723,
          "soft_sharp": 0.3016,
          "romantic_edgy": 0.6394,
          "organic_geometric": -0.0117,
          "playful_refined": -0.1275,
          "everyday_special_occasion": -0.0949,
          "lowkey_statement": -0.032,
          "grounded_ethereal": -0.2084
        },
        "metrics": {
          "vectorStrength": 0.8083,
          "maxAbsScore": 0.6394,
          "focusRatio": 0.3506
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.6394
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "distinct",
        "term": "Distinct",
        "cleanTerm": "distinct",
        "dedupeKey": "distinct",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1457,
          "classic_unexpected": -0.1076,
          "minimal_ornate": -0.1289,
          "soft_sharp": 0.1418,
          "romantic_edgy": 0.2132,
          "organic_geometric": 0.1992,
          "playful_refined": 0.282,
          "everyday_special_occasion": 0.5776,
          "lowkey_statement": 0.2548,
          "grounded_ethereal": 0.075
        },
        "metrics": {
          "vectorStrength": 0.799,
          "maxAbsScore": 0.5776,
          "focusRatio": 0.2717
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Special Occasion",
          "score": 0.5776
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "enchanted",
        "term": "Enchanted",
        "cleanTerm": "enchanted",
        "dedupeKey": "enchanted",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0332,
          "classic_unexpected": -0.1353,
          "minimal_ornate": 0.3575,
          "soft_sharp": -0.1523,
          "romantic_edgy": -0.3886,
          "organic_geometric": -0.376,
          "playful_refined": -0.0424,
          "everyday_special_occasion": 0.3591,
          "lowkey_statement": -0.0909,
          "grounded_ethereal": 0.1894
        },
        "metrics": {
          "vectorStrength": 0.7985,
          "maxAbsScore": 0.3886,
          "focusRatio": 0.1829
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.3886
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "accessible",
        "term": "Accessible",
        "cleanTerm": "accessible",
        "dedupeKey": "accessible",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.25,
          "classic_unexpected": -0.077,
          "minimal_ornate": -0.5043,
          "soft_sharp": -0.3767,
          "romantic_edgy": 0.1237,
          "organic_geometric": -0.049,
          "playful_refined": 0.3452,
          "everyday_special_occasion": -0.1426,
          "lowkey_statement": -0.104,
          "grounded_ethereal": 0.018
        },
        "metrics": {
          "vectorStrength": 0.7956,
          "maxAbsScore": 0.5043,
          "focusRatio": 0.2534
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5043
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "integrated",
        "term": "Integrated",
        "cleanTerm": "integrated",
        "dedupeKey": "integrated",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.2008,
          "classic_unexpected": -0.3827,
          "minimal_ornate": 0.0204,
          "soft_sharp": -0.1078,
          "romantic_edgy": -0.0208,
          "organic_geometric": 0.2984,
          "playful_refined": 0.5519,
          "everyday_special_occasion": 0.0055,
          "lowkey_statement": -0.0317,
          "grounded_ethereal": -0.1733
        },
        "metrics": {
          "vectorStrength": 0.7899,
          "maxAbsScore": 0.5519,
          "focusRatio": 0.3078
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5519
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "limitless",
        "term": "Limitless",
        "cleanTerm": "limitless",
        "dedupeKey": "limitless",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1861,
          "classic_unexpected": -0.104,
          "minimal_ornate": -0.3055,
          "soft_sharp": -0.3002,
          "romantic_edgy": 0.2492,
          "organic_geometric": -0.1352,
          "playful_refined": -0.0394,
          "everyday_special_occasion": -0.3256,
          "lowkey_statement": 0.0145,
          "grounded_ethereal": 0.4543
        },
        "metrics": {
          "vectorStrength": 0.7895,
          "maxAbsScore": 0.4543,
          "focusRatio": 0.2149
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4543
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "rough",
        "term": "Rough",
        "cleanTerm": "rough",
        "dedupeKey": "rough",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.0987,
          "classic_unexpected": 0.1331,
          "minimal_ornate": -0.1497,
          "soft_sharp": -0.2084,
          "romantic_edgy": 0.3689,
          "organic_geometric": -0.1926,
          "playful_refined": 0.0341,
          "everyday_special_occasion": -0.1849,
          "lowkey_statement": -0.2355,
          "grounded_ethereal": -0.5154
        },
        "metrics": {
          "vectorStrength": 0.7893,
          "maxAbsScore": 0.5154,
          "focusRatio": 0.243
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.5154
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "crisp",
        "term": "Crisp",
        "cleanTerm": "crisp",
        "dedupeKey": "crisp",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.1863,
          "classic_unexpected": -0.0459,
          "minimal_ornate": -0.3098,
          "soft_sharp": 0.582,
          "romantic_edgy": 0.0657,
          "organic_geometric": 0.0343,
          "playful_refined": 0.0516,
          "everyday_special_occasion": 0.0405,
          "lowkey_statement": -0.0883,
          "grounded_ethereal": -0.363
        },
        "metrics": {
          "vectorStrength": 0.7879,
          "maxAbsScore": 0.582,
          "focusRatio": 0.3293
        },
        "topStyleSignal": {
          "dimension": "Soft ↔ Sharp",
          "dimensionId": "soft_sharp",
          "dimensionColumn": "soft_sharp_score_norm",
          "pole": "Sharp",
          "score": 0.582
        },
        "usage": {
          "initialScreen": false,
          "badFit": true,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "authentic",
        "term": "Authentic",
        "cleanTerm": "authentic",
        "dedupeKey": "authentic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.3921,
          "classic_unexpected": -0.3336,
          "minimal_ornate": -0.1068,
          "soft_sharp": -0.0978,
          "romantic_edgy": 0.0298,
          "organic_geometric": -0.3757,
          "playful_refined": 0.1108,
          "everyday_special_occasion": 0.0735,
          "lowkey_statement": 0.1124,
          "grounded_ethereal": -0.399
        },
        "metrics": {
          "vectorStrength": 0.7858,
          "maxAbsScore": 0.399,
          "focusRatio": 0.1964
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.399
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "pioneering",
        "term": "Pioneering",
        "cleanTerm": "pioneering",
        "dedupeKey": "pioneering",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1631,
          "classic_unexpected": 0.2951,
          "minimal_ornate": -0.1491,
          "soft_sharp": 0.1671,
          "romantic_edgy": 0.5386,
          "organic_geometric": -0.1098,
          "playful_refined": -0.1176,
          "everyday_special_occasion": 0.15,
          "lowkey_statement": 0.3322,
          "grounded_ethereal": 0.054
        },
        "metrics": {
          "vectorStrength": 0.7846,
          "maxAbsScore": 0.5386,
          "focusRatio": 0.2594
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Edgy",
          "score": 0.5386
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "gritty",
        "term": "Gritty",
        "cleanTerm": "gritty",
        "dedupeKey": "gritty",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.0053,
          "classic_unexpected": 0.051,
          "minimal_ornate": -0.0759,
          "soft_sharp": 0.2143,
          "romantic_edgy": 0.3992,
          "organic_geometric": -0.2131,
          "playful_refined": 0.0767,
          "everyday_special_occasion": -0.2116,
          "lowkey_statement": -0.1831,
          "grounded_ethereal": -0.5205
        },
        "metrics": {
          "vectorStrength": 0.7837,
          "maxAbsScore": 0.5205,
          "focusRatio": 0.2668
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.5205
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "exposed",
        "term": "Exposed",
        "cleanTerm": "exposed",
        "dedupeKey": "exposed",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.331,
          "classic_unexpected": 0.1248,
          "minimal_ornate": -0.1483,
          "soft_sharp": 0.1108,
          "romantic_edgy": 0.2216,
          "organic_geometric": 0.057,
          "playful_refined": 0.515,
          "everyday_special_occasion": 0.286,
          "lowkey_statement": 0.0969,
          "grounded_ethereal": -0.2117
        },
        "metrics": {
          "vectorStrength": 0.7829,
          "maxAbsScore": 0.515,
          "focusRatio": 0.2449
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.515
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "spark",
        "term": "Spark",
        "cleanTerm": "spark",
        "dedupeKey": "spark",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0534,
          "classic_unexpected": 0.094,
          "minimal_ornate": -0.1317,
          "soft_sharp": 0.3426,
          "romantic_edgy": -0.1293,
          "organic_geometric": 0.1282,
          "playful_refined": -0.2233,
          "everyday_special_occasion": 0.3107,
          "lowkey_statement": 0.4705,
          "grounded_ethereal": -0.2457
        },
        "metrics": {
          "vectorStrength": 0.7795,
          "maxAbsScore": 0.4705,
          "focusRatio": 0.221
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.4705
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "poised",
        "term": "Poised",
        "cleanTerm": "poised",
        "dedupeKey": "poised",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1934,
          "classic_unexpected": -0.2741,
          "minimal_ornate": -0.3656,
          "soft_sharp": 0.1819,
          "romantic_edgy": -0.2014,
          "organic_geometric": 0.0008,
          "playful_refined": 0.4967,
          "everyday_special_occasion": 0.0244,
          "lowkey_statement": -0.0852,
          "grounded_ethereal": -0.1696
        },
        "metrics": {
          "vectorStrength": 0.7767,
          "maxAbsScore": 0.4967,
          "focusRatio": 0.2492
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.4967
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "original",
        "term": "Original",
        "cleanTerm": "original",
        "dedupeKey": "original",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1798,
          "classic_unexpected": -0.3824,
          "minimal_ornate": -0.4086,
          "soft_sharp": -0.1812,
          "romantic_edgy": 0.1594,
          "organic_geometric": -0.2696,
          "playful_refined": 0.1423,
          "everyday_special_occasion": 0.0009,
          "lowkey_statement": 0.1471,
          "grounded_ethereal": -0.2874
        },
        "metrics": {
          "vectorStrength": 0.7752,
          "maxAbsScore": 0.4086,
          "focusRatio": 0.1893
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4086
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "twinkle",
        "term": "Twinkle",
        "cleanTerm": "twinkle",
        "dedupeKey": "twinkle",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.4478,
          "classic_unexpected": -0.0048,
          "minimal_ornate": -0.0307,
          "soft_sharp": 0.0453,
          "romantic_edgy": -0.3569,
          "organic_geometric": -0.0823,
          "playful_refined": -0.4668,
          "everyday_special_occasion": 0.1645,
          "lowkey_statement": -0.0674,
          "grounded_ethereal": 0.1135
        },
        "metrics": {
          "vectorStrength": 0.7747,
          "maxAbsScore": 0.4668,
          "focusRatio": 0.2623
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.4668
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "whitespace",
        "term": "Whitespace",
        "cleanTerm": "whitespace",
        "dedupeKey": "whitespace",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.186,
          "classic_unexpected": -0.1721,
          "minimal_ornate": -0.5704,
          "soft_sharp": -0.1171,
          "romantic_edgy": -0.0191,
          "organic_geometric": 0.4076,
          "playful_refined": 0.0258,
          "everyday_special_occasion": -0.1287,
          "lowkey_statement": 0.0308,
          "grounded_ethereal": 0.068
        },
        "metrics": {
          "vectorStrength": 0.7698,
          "maxAbsScore": 0.5704,
          "focusRatio": 0.3306
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5704
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "witty",
        "term": "Witty",
        "cleanTerm": "witty",
        "dedupeKey": "witty",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1271,
          "classic_unexpected": 0.2861,
          "minimal_ornate": 0.0317,
          "soft_sharp": -0.03,
          "romantic_edgy": -0.0395,
          "organic_geometric": -0.2666,
          "playful_refined": -0.6301,
          "everyday_special_occasion": -0.0803,
          "lowkey_statement": -0.1274,
          "grounded_ethereal": -0.0087
        },
        "metrics": {
          "vectorStrength": 0.7696,
          "maxAbsScore": 0.6301,
          "focusRatio": 0.3871
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Playful",
          "score": -0.6301
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "everyday",
        "term": "Everyday",
        "cleanTerm": "everyday",
        "dedupeKey": "everyday",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0126,
          "classic_unexpected": -0.2749,
          "minimal_ornate": -0.2953,
          "soft_sharp": -0.3056,
          "romantic_edgy": 0.0454,
          "organic_geometric": -0.2391,
          "playful_refined": 0.0031,
          "everyday_special_occasion": -0.5212,
          "lowkey_statement": -0.0368,
          "grounded_ethereal": 0.005
        },
        "metrics": {
          "vectorStrength": 0.7672,
          "maxAbsScore": 0.5212,
          "focusRatio": 0.2997
        },
        "topStyleSignal": {
          "dimension": "Everyday ↔ Special Occasion",
          "dimensionId": "everyday_special_occasion",
          "dimensionColumn": "everyday_special_occasion_score_norm",
          "pole": "Everyday",
          "score": -0.5212
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "flourished",
        "term": "Flourished",
        "cleanTerm": "flourished",
        "dedupeKey": "flourished",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.0622,
          "classic_unexpected": -0.1886,
          "minimal_ornate": 0.5046,
          "soft_sharp": -0.2101,
          "romantic_edgy": -0.2415,
          "organic_geometric": -0.1742,
          "playful_refined": 0.1791,
          "everyday_special_occasion": 0.234,
          "lowkey_statement": 0.2175,
          "grounded_ethereal": -0.1615
        },
        "metrics": {
          "vectorStrength": 0.7663,
          "maxAbsScore": 0.5046,
          "focusRatio": 0.2322
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Ornate",
          "score": 0.5046
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "edgy",
        "term": "Edgy",
        "cleanTerm": "edgy",
        "dedupeKey": "edgy",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 4,
        "scores": {
          "delicate_bold": 0.1043,
          "classic_unexpected": 0.4982,
          "minimal_ornate": -0.0466,
          "soft_sharp": 0.3048,
          "romantic_edgy": 0.2104,
          "organic_geometric": -0.2989,
          "playful_refined": -0.0839,
          "everyday_special_occasion": 0.2332,
          "lowkey_statement": 0.0009,
          "grounded_ethereal": -0.1944
        },
        "metrics": {
          "vectorStrength": 0.7661,
          "maxAbsScore": 0.4982,
          "focusRatio": 0.2522
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.4982
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "imaginative",
        "term": "Imaginative",
        "cleanTerm": "imaginative",
        "dedupeKey": "imaginative",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 11,
        "scores": {
          "delicate_bold": 0.1729,
          "classic_unexpected": 0.3521,
          "minimal_ornate": 0.2476,
          "soft_sharp": -0.2332,
          "romantic_edgy": -0.1125,
          "organic_geometric": -0.221,
          "playful_refined": -0.2545,
          "everyday_special_occasion": 0.1916,
          "lowkey_statement": -0.1322,
          "grounded_ethereal": 0.3683
        },
        "metrics": {
          "vectorStrength": 0.7653,
          "maxAbsScore": 0.3683,
          "focusRatio": 0.1611
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.3683
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sky_bound",
        "term": "Sky-Bound",
        "cleanTerm": "sky-bound",
        "dedupeKey": "sky-bound",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.1746,
          "classic_unexpected": -0.0092,
          "minimal_ornate": -0.2351,
          "soft_sharp": -0.1136,
          "romantic_edgy": -0.0082,
          "organic_geometric": -0.0435,
          "playful_refined": 0.1684,
          "everyday_special_occasion": 0.1634,
          "lowkey_statement": 0.3504,
          "grounded_ethereal": 0.5508
        },
        "metrics": {
          "vectorStrength": 0.7628,
          "maxAbsScore": 0.5508,
          "focusRatio": 0.3031
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5508
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "intimate",
        "term": "Intimate",
        "cleanTerm": "intimate",
        "dedupeKey": "intimate",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": -0.2654,
          "classic_unexpected": -0.0682,
          "minimal_ornate": 0.0327,
          "soft_sharp": -0.3172,
          "romantic_edgy": -0.2549,
          "organic_geometric": -0.1977,
          "playful_refined": 0.0661,
          "everyday_special_occasion": 0.2157,
          "lowkey_statement": -0.4564,
          "grounded_ethereal": -0.1844
        },
        "metrics": {
          "vectorStrength": 0.7576,
          "maxAbsScore": 0.4564,
          "focusRatio": 0.2217
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Low-key",
          "score": -0.4564
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "meticulous",
        "term": "Meticulous",
        "cleanTerm": "meticulous",
        "dedupeKey": "meticulous",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": -0.2277,
          "classic_unexpected": -0.3988,
          "minimal_ornate": 0.0735,
          "soft_sharp": 0.0894,
          "romantic_edgy": -0.0406,
          "organic_geometric": 0.0992,
          "playful_refined": 0.462,
          "everyday_special_occasion": 0.1232,
          "lowkey_statement": -0.3267,
          "grounded_ethereal": 0.0161
        },
        "metrics": {
          "vectorStrength": 0.7559,
          "maxAbsScore": 0.462,
          "focusRatio": 0.2488
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.462
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "sincerity",
        "term": "Sincerity",
        "cleanTerm": "sincerity",
        "dedupeKey": "sincerity",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.0231,
          "classic_unexpected": -0.2444,
          "minimal_ornate": -0.5028,
          "soft_sharp": -0.1358,
          "romantic_edgy": -0.2059,
          "organic_geometric": -0.174,
          "playful_refined": -0.1757,
          "everyday_special_occasion": -0.1121,
          "lowkey_statement": 0.0276,
          "grounded_ethereal": -0.3457
        },
        "metrics": {
          "vectorStrength": 0.7536,
          "maxAbsScore": 0.5028,
          "focusRatio": 0.2583
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.5028
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "jumpy",
        "term": "Jumpy",
        "cleanTerm": "jumpy",
        "dedupeKey": "jumpy",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": 0.1174,
          "classic_unexpected": 0.5077,
          "minimal_ornate": -0.1943,
          "soft_sharp": 0.0749,
          "romantic_edgy": 0.1765,
          "organic_geometric": -0.2271,
          "playful_refined": -0.2856,
          "everyday_special_occasion": -0.1912,
          "lowkey_statement": -0.1665,
          "grounded_ethereal": -0.1351
        },
        "metrics": {
          "vectorStrength": 0.7495,
          "maxAbsScore": 0.5077,
          "focusRatio": 0.2445
        },
        "topStyleSignal": {
          "dimension": "Classic ↔ Unexpected",
          "dimensionId": "classic_unexpected",
          "dimensionColumn": "classic_unexpected_score_norm",
          "pole": "Unexpected",
          "score": 0.5077
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "heartstrings",
        "term": "Heartstrings",
        "cleanTerm": "heartstrings",
        "dedupeKey": "heartstrings",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 12,
        "scores": {
          "delicate_bold": -0.2031,
          "classic_unexpected": -0.1881,
          "minimal_ornate": 0.0329,
          "soft_sharp": -0.258,
          "romantic_edgy": -0.5038,
          "organic_geometric": -0.1109,
          "playful_refined": -0.2336,
          "everyday_special_occasion": 0.2497,
          "lowkey_statement": 0.1847,
          "grounded_ethereal": 0.0115
        },
        "metrics": {
          "vectorStrength": 0.7493,
          "maxAbsScore": 0.5038,
          "focusRatio": 0.2549
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.5038
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "starstruck",
        "term": "Starstruck",
        "cleanTerm": "starstruck",
        "dedupeKey": "starstruck",
        "termType": "single_word",
        "clientFacingPotential": "medium",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.1104,
          "classic_unexpected": -0.1044,
          "minimal_ornate": -0.2049,
          "soft_sharp": 0.0362,
          "romantic_edgy": -0.0687,
          "organic_geometric": 0.0948,
          "playful_refined": -0.1213,
          "everyday_special_occasion": 0.2334,
          "lowkey_statement": 0.5118,
          "grounded_ethereal": 0.3787
        },
        "metrics": {
          "vectorStrength": 0.7448,
          "maxAbsScore": 0.5118,
          "focusRatio": 0.2745
        },
        "topStyleSignal": {
          "dimension": "Low-key ↔ Statement",
          "dimensionId": "lowkey_statement",
          "dimensionColumn": "lowkey_statement_score_norm",
          "pole": "Statement",
          "score": 0.5118
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": true,
          "synopsis": true,
          "primaryUsage": "opposing_pair_candidate"
        }
      },
      {
        "id": "memory",
        "term": "Memory",
        "cleanTerm": "memory",
        "dedupeKey": "memory",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 6,
        "scores": {
          "delicate_bold": 0.1035,
          "classic_unexpected": -0.3532,
          "minimal_ornate": -0.4051,
          "soft_sharp": -0.3265,
          "romantic_edgy": -0.2033,
          "organic_geometric": 0.1854,
          "playful_refined": 0.1944,
          "everyday_special_occasion": 0.1532,
          "lowkey_statement": -0.0502,
          "grounded_ethereal": -0.0871
        },
        "metrics": {
          "vectorStrength": 0.7438,
          "maxAbsScore": 0.4051,
          "focusRatio": 0.1965
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4051
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "alluring",
        "term": "Alluring",
        "cleanTerm": "alluring",
        "dedupeKey": "alluring",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.1919,
          "classic_unexpected": 0.1087,
          "minimal_ornate": 0.3249,
          "soft_sharp": -0.2687,
          "romantic_edgy": -0.3109,
          "organic_geometric": -0.3871,
          "playful_refined": -0.1652,
          "everyday_special_occasion": -0.0154,
          "lowkey_statement": -0.0917,
          "grounded_ethereal": 0.1831
        },
        "metrics": {
          "vectorStrength": 0.7365,
          "maxAbsScore": 0.3871,
          "focusRatio": 0.1891
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Organic",
          "score": -0.3871
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "expressive",
        "term": "Expressive",
        "cleanTerm": "expressive",
        "dedupeKey": "expressive",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 10,
        "scores": {
          "delicate_bold": 0.3978,
          "classic_unexpected": 0.0954,
          "minimal_ornate": 0.3345,
          "soft_sharp": -0.1763,
          "romantic_edgy": -0.2576,
          "organic_geometric": -0.1778,
          "playful_refined": 0.0628,
          "everyday_special_occasion": 0.307,
          "lowkey_statement": -0.0417,
          "grounded_ethereal": -0.1075
        },
        "metrics": {
          "vectorStrength": 0.721,
          "maxAbsScore": 0.3978,
          "focusRatio": 0.2031
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.3978
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "enigmatic",
        "term": "Enigmatic",
        "cleanTerm": "enigmatic",
        "dedupeKey": "enigmatic",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 9,
        "scores": {
          "delicate_bold": 0.144,
          "classic_unexpected": 0.3796,
          "minimal_ornate": 0.0345,
          "soft_sharp": -0.0907,
          "romantic_edgy": 0.105,
          "organic_geometric": -0.1958,
          "playful_refined": -0.1374,
          "everyday_special_occasion": 0.068,
          "lowkey_statement": -0.2471,
          "grounded_ethereal": 0.4415
        },
        "metrics": {
          "vectorStrength": 0.7093,
          "maxAbsScore": 0.4415,
          "focusRatio": 0.2395
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.4415
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "symmetry",
        "term": "Symmetry",
        "cleanTerm": "symmetry",
        "dedupeKey": "symmetry",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0645,
          "classic_unexpected": -0.3454,
          "minimal_ornate": -0.3352,
          "soft_sharp": -0.1494,
          "romantic_edgy": -0.0313,
          "organic_geometric": 0.4124,
          "playful_refined": 0.1264,
          "everyday_special_occasion": -0.1857,
          "lowkey_statement": 0.1095,
          "grounded_ethereal": -0.0907
        },
        "metrics": {
          "vectorStrength": 0.707,
          "maxAbsScore": 0.4124,
          "focusRatio": 0.2228
        },
        "topStyleSignal": {
          "dimension": "Organic ↔ Geometric",
          "dimensionId": "organic_geometric",
          "dimensionColumn": "organic_geometric_score_norm",
          "pole": "Geometric",
          "score": 0.4124
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "growing",
        "term": "Growing",
        "cleanTerm": "growing",
        "dedupeKey": "growing",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1297,
          "classic_unexpected": 0.0886,
          "minimal_ornate": 0.1505,
          "soft_sharp": -0.2846,
          "romantic_edgy": 0.0152,
          "organic_geometric": -0.3251,
          "playful_refined": 0.2118,
          "everyday_special_occasion": 0.0774,
          "lowkey_statement": -0.0293,
          "grounded_ethereal": -0.418
        },
        "metrics": {
          "vectorStrength": 0.6787,
          "maxAbsScore": 0.418,
          "focusRatio": 0.2416
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Grounded",
          "score": -0.418
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "curated",
        "term": "Curated",
        "cleanTerm": "curated",
        "dedupeKey": "curated",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": -0.031,
          "classic_unexpected": -0.23,
          "minimal_ornate": -0.1085,
          "soft_sharp": -0.0564,
          "romantic_edgy": -0.0647,
          "organic_geometric": 0.0469,
          "playful_refined": 0.5067,
          "everyday_special_occasion": 0.2849,
          "lowkey_statement": -0.108,
          "grounded_ethereal": -0.1886
        },
        "metrics": {
          "vectorStrength": 0.6785,
          "maxAbsScore": 0.5067,
          "focusRatio": 0.3117
        },
        "topStyleSignal": {
          "dimension": "Playful ↔ Refined",
          "dimensionId": "playful_refined",
          "dimensionColumn": "playful_refined_score_norm",
          "pole": "Refined",
          "score": 0.5067
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "vibrant",
        "term": "Vibrant",
        "cleanTerm": "vibrant",
        "dedupeKey": "vibrant",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.4415,
          "classic_unexpected": 0.1557,
          "minimal_ornate": 0.2211,
          "soft_sharp": -0.1558,
          "romantic_edgy": -0.1778,
          "organic_geometric": -0.1998,
          "playful_refined": -0.2261,
          "everyday_special_occasion": 0.1207,
          "lowkey_statement": 0.1014,
          "grounded_ethereal": -0.1095
        },
        "metrics": {
          "vectorStrength": 0.6722,
          "maxAbsScore": 0.4415,
          "focusRatio": 0.2312
        },
        "topStyleSignal": {
          "dimension": "Delicate ↔ Bold",
          "dimensionId": "delicate_bold",
          "dimensionColumn": "delicate_bold_score_norm",
          "pole": "Bold",
          "score": 0.4415
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "beaming",
        "term": "Beaming",
        "cleanTerm": "beaming",
        "dedupeKey": "beaming",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.2761,
          "classic_unexpected": -0.0396,
          "minimal_ornate": 0.0545,
          "soft_sharp": -0.1758,
          "romantic_edgy": -0.4472,
          "organic_geometric": 0.0494,
          "playful_refined": -0.2019,
          "everyday_special_occasion": 0.2158,
          "lowkey_statement": 0.2086,
          "grounded_ethereal": 0.0492
        },
        "metrics": {
          "vectorStrength": 0.6688,
          "maxAbsScore": 0.4472,
          "focusRatio": 0.2603
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.4472
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "fresh",
        "term": "Fresh",
        "cleanTerm": "fresh",
        "dedupeKey": "fresh",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0008,
          "classic_unexpected": 0.0798,
          "minimal_ornate": -0.4203,
          "soft_sharp": -0.1481,
          "romantic_edgy": -0.1327,
          "organic_geometric": -0.3594,
          "playful_refined": -0.0393,
          "everyday_special_occasion": -0.028,
          "lowkey_statement": -0.13,
          "grounded_ethereal": -0.2675
        },
        "metrics": {
          "vectorStrength": 0.6652,
          "maxAbsScore": 0.4203,
          "focusRatio": 0.2617
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4203
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "shine",
        "term": "Shine",
        "cleanTerm": "shine",
        "dedupeKey": "shine",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 5,
        "scores": {
          "delicate_bold": -0.0659,
          "classic_unexpected": -0.2208,
          "minimal_ornate": -0.2813,
          "soft_sharp": -0.1503,
          "romantic_edgy": -0.453,
          "organic_geometric": 0.1061,
          "playful_refined": -0.1333,
          "everyday_special_occasion": 0.0428,
          "lowkey_statement": 0.1501,
          "grounded_ethereal": 0.1609
        },
        "metrics": {
          "vectorStrength": 0.6628,
          "maxAbsScore": 0.453,
          "focusRatio": 0.2567
        },
        "topStyleSignal": {
          "dimension": "Romantic ↔ Edgy",
          "dimensionId": "romantic_edgy",
          "dimensionColumn": "romantic_edgy_score_norm",
          "pole": "Romantic",
          "score": -0.453
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "freedom",
        "term": "Freedom",
        "cleanTerm": "freedom",
        "dedupeKey": "freedom",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 7,
        "scores": {
          "delicate_bold": 0.1153,
          "classic_unexpected": -0.1091,
          "minimal_ornate": -0.4331,
          "soft_sharp": -0.2502,
          "romantic_edgy": 0.3287,
          "organic_geometric": -0.1048,
          "playful_refined": -0.0381,
          "everyday_special_occasion": -0.1698,
          "lowkey_statement": -0.0215,
          "grounded_ethereal": -0.0401
        },
        "metrics": {
          "vectorStrength": 0.6532,
          "maxAbsScore": 0.4331,
          "focusRatio": 0.2689
        },
        "topStyleSignal": {
          "dimension": "Minimal ↔ Ornate",
          "dimensionId": "minimal_ornate",
          "dimensionColumn": "minimal_ornate_score_norm",
          "pole": "Minimal",
          "score": -0.4331
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      },
      {
        "id": "illusion",
        "term": "Illusion",
        "cleanTerm": "illusion",
        "dedupeKey": "illusion",
        "termType": "single_word",
        "clientFacingPotential": "high",
        "wordCount": 1,
        "charCount": 8,
        "scores": {
          "delicate_bold": 0.0056,
          "classic_unexpected": 0.1855,
          "minimal_ornate": -0.1055,
          "soft_sharp": -0.0944,
          "romantic_edgy": 0.1286,
          "organic_geometric": 0.0627,
          "playful_refined": -0.087,
          "everyday_special_occasion": -0.0127,
          "lowkey_statement": 0.0404,
          "grounded_ethereal": 0.5217
        },
        "metrics": {
          "vectorStrength": 0.597,
          "maxAbsScore": 0.5217,
          "focusRatio": 0.4193
        },
        "topStyleSignal": {
          "dimension": "Grounded ↔ Ethereal",
          "dimensionId": "grounded_ethereal",
          "dimensionColumn": "grounded_ethereal_score_norm",
          "pole": "Ethereal",
          "score": 0.5217
        },
        "usage": {
          "initialScreen": false,
          "badFit": false,
          "adaptiveRound": true,
          "opposingPair": false,
          "synopsis": true,
          "primaryUsage": "adaptive_round"
        }
      }
    ]
  },
  "termsById": {
    "gentle": {
      "id": "gentle",
      "term": "Gentle",
      "cleanTerm": "gentle",
      "dedupeKey": "gentle",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.3499,
        "classic_unexpected": -0.2537,
        "minimal_ornate": -0.5867,
        "soft_sharp": -0.9486,
        "romantic_edgy": -0.5475,
        "organic_geometric": -0.3634,
        "playful_refined": 0.1978,
        "everyday_special_occasion": -0.4005,
        "lowkey_statement": -0.8523,
        "grounded_ethereal": -0.3366
      },
      "metrics": {
        "vectorStrength": 1.7035,
        "maxAbsScore": 0.9486,
        "focusRatio": 0.1961
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.9486
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "polished": {
      "id": "polished",
      "term": "Polished",
      "cleanTerm": "polished",
      "dedupeKey": "polished",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0414,
        "classic_unexpected": -0.8438,
        "minimal_ornate": -0.1786,
        "soft_sharp": 0.1464,
        "romantic_edgy": -0.2588,
        "organic_geometric": 0.3184,
        "playful_refined": 1.0,
        "everyday_special_occasion": 0.0039,
        "lowkey_statement": -0.0972,
        "grounded_ethereal": -0.1834
      },
      "metrics": {
        "vectorStrength": 1.4066,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3255
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 1.0
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "standout": {
      "id": "standout",
      "term": "Standout",
      "cleanTerm": "standout",
      "dedupeKey": "standout",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.5226,
        "classic_unexpected": -0.0716,
        "minimal_ornate": -0.252,
        "soft_sharp": 0.226,
        "romantic_edgy": 0.3407,
        "organic_geometric": 0.2489,
        "playful_refined": 0.386,
        "everyday_special_occasion": 0.4426,
        "lowkey_statement": 1.0,
        "grounded_ethereal": -0.0073
      },
      "metrics": {
        "vectorStrength": 1.3842,
        "maxAbsScore": 1.0,
        "focusRatio": 0.2859
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 1.0
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "dreamy": {
      "id": "dreamy",
      "term": "Dreamy",
      "cleanTerm": "dreamy",
      "dedupeKey": "dreamy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1622,
        "classic_unexpected": -0.1043,
        "minimal_ornate": 0.095,
        "soft_sharp": -0.5944,
        "romantic_edgy": -0.9503,
        "organic_geometric": -0.2775,
        "playful_refined": -0.2161,
        "everyday_special_occasion": -0.0667,
        "lowkey_statement": -0.3953,
        "grounded_ethereal": 0.5374
      },
      "metrics": {
        "vectorStrength": 1.3696,
        "maxAbsScore": 0.9503,
        "focusRatio": 0.2796
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.9503
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "dainty": {
      "id": "dainty",
      "term": "Dainty",
      "cleanTerm": "dainty",
      "dedupeKey": "dainty",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -1.0,
        "classic_unexpected": -0.3011,
        "minimal_ornate": 0.0934,
        "soft_sharp": -0.1358,
        "romantic_edgy": -0.5311,
        "organic_geometric": -0.1515,
        "playful_refined": 0.0213,
        "everyday_special_occasion": -0.0588,
        "lowkey_statement": -0.544,
        "grounded_ethereal": 0.0356
      },
      "metrics": {
        "vectorStrength": 1.313,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3481
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Delicate",
        "score": -1.0
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "quirky": {
      "id": "quirky",
      "term": "Quirky",
      "cleanTerm": "quirky",
      "dedupeKey": "quirky",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1087,
        "classic_unexpected": 0.6909,
        "minimal_ornate": 0.0192,
        "soft_sharp": 0.1649,
        "romantic_edgy": 0.1892,
        "organic_geometric": -0.2932,
        "playful_refined": -0.969,
        "everyday_special_occasion": 0.069,
        "lowkey_statement": -0.2657,
        "grounded_ethereal": -0.1049
      },
      "metrics": {
        "vectorStrength": 1.2899,
        "maxAbsScore": 0.969,
        "focusRatio": 0.3371
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.969
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "simple": {
      "id": "simple",
      "term": "Simple",
      "cleanTerm": "simple",
      "dedupeKey": "simple",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1609,
        "classic_unexpected": -0.3606,
        "minimal_ornate": -0.9988,
        "soft_sharp": -0.4072,
        "romantic_edgy": -0.2299,
        "organic_geometric": 0.0478,
        "playful_refined": 0.1642,
        "everyday_special_occasion": -0.2729,
        "lowkey_statement": -0.3002,
        "grounded_ethereal": -0.258
      },
      "metrics": {
        "vectorStrength": 1.2777,
        "maxAbsScore": 0.9988,
        "focusRatio": 0.3121
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.9988
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "subtle": {
      "id": "subtle",
      "term": "Subtle",
      "cleanTerm": "subtle",
      "dedupeKey": "subtle",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.5733,
        "classic_unexpected": 0.2733,
        "minimal_ornate": -0.1745,
        "soft_sharp": -0.2359,
        "romantic_edgy": -0.2799,
        "organic_geometric": -0.233,
        "playful_refined": 0.2751,
        "everyday_special_occasion": -0.1215,
        "lowkey_statement": -0.894,
        "grounded_ethereal": 0.0685
      },
      "metrics": {
        "vectorStrength": 1.2314,
        "maxAbsScore": 0.894,
        "focusRatio": 0.2857
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.894
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "decorative": {
      "id": "decorative",
      "term": "Decorative",
      "cleanTerm": "decorative",
      "dedupeKey": "decorative",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0332,
        "classic_unexpected": -0.1901,
        "minimal_ornate": 0.9504,
        "soft_sharp": 0.0254,
        "romantic_edgy": -0.3442,
        "organic_geometric": 0.2453,
        "playful_refined": 0.1068,
        "everyday_special_occasion": 0.4871,
        "lowkey_statement": -0.0308,
        "grounded_ethereal": 0.1475
      },
      "metrics": {
        "vectorStrength": 1.1795,
        "maxAbsScore": 0.9504,
        "focusRatio": 0.3711
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.9504
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "celestial": {
      "id": "celestial",
      "term": "Celestial",
      "cleanTerm": "celestial",
      "dedupeKey": "celestial",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.0973,
        "classic_unexpected": -0.2465,
        "minimal_ornate": 0.1047,
        "soft_sharp": -0.395,
        "romantic_edgy": -0.241,
        "organic_geometric": -0.1812,
        "playful_refined": 0.0504,
        "everyday_special_occasion": 0.2288,
        "lowkey_statement": 0.0213,
        "grounded_ethereal": 0.9696
      },
      "metrics": {
        "vectorStrength": 1.1505,
        "maxAbsScore": 0.9696,
        "focusRatio": 0.3824
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.9696
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "structured": {
      "id": "structured",
      "term": "Structured",
      "cleanTerm": "structured",
      "dedupeKey": "structured",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0213,
        "classic_unexpected": -0.5073,
        "minimal_ornate": -0.171,
        "soft_sharp": -0.2464,
        "romantic_edgy": -0.0554,
        "organic_geometric": 0.7599,
        "playful_refined": 0.5588,
        "everyday_special_occasion": 0.2064,
        "lowkey_statement": -0.0719,
        "grounded_ethereal": -0.172
      },
      "metrics": {
        "vectorStrength": 1.148,
        "maxAbsScore": 0.7599,
        "focusRatio": 0.2743
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Geometric",
        "score": 0.7599
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "sophisticated": {
      "id": "sophisticated",
      "term": "Sophisticated",
      "cleanTerm": "sophisticated",
      "dedupeKey": "sophisticated",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 13,
      "scores": {
        "delicate_bold": 0.0438,
        "classic_unexpected": -0.2009,
        "minimal_ornate": 0.1415,
        "soft_sharp": 0.0126,
        "romantic_edgy": -0.0839,
        "organic_geometric": 0.0882,
        "playful_refined": 0.9361,
        "everyday_special_occasion": 0.1799,
        "lowkey_statement": -0.3567,
        "grounded_ethereal": 0.0247
      },
      "metrics": {
        "vectorStrength": 1.0554,
        "maxAbsScore": 0.9361,
        "focusRatio": 0.4526
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.9361
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "botanical": {
      "id": "botanical",
      "term": "Botanical",
      "cleanTerm": "botanical",
      "dedupeKey": "botanical",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.0077,
        "classic_unexpected": -0.0438,
        "minimal_ornate": 0.1598,
        "soft_sharp": -0.2745,
        "romantic_edgy": -0.0932,
        "organic_geometric": -0.9501,
        "playful_refined": 0.1645,
        "everyday_special_occasion": 0.0872,
        "lowkey_statement": -0.1114,
        "grounded_ethereal": -0.0899
      },
      "metrics": {
        "vectorStrength": 1.0341,
        "maxAbsScore": 0.9501,
        "focusRatio": 0.4793
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.9501
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "tough": {
      "id": "tough",
      "term": "Tough",
      "cleanTerm": "tough",
      "dedupeKey": "tough",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.2917,
        "classic_unexpected": 0.0502,
        "minimal_ornate": -0.2408,
        "soft_sharp": -0.0696,
        "romantic_edgy": 0.7899,
        "organic_geometric": -0.1644,
        "playful_refined": 0.1175,
        "everyday_special_occasion": -0.114,
        "lowkey_statement": -0.1532,
        "grounded_ethereal": -0.2612
      },
      "metrics": {
        "vectorStrength": 0.9591,
        "maxAbsScore": 0.7899,
        "focusRatio": 0.3507
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.7899
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "confident": {
      "id": "confident",
      "term": "Confident",
      "cleanTerm": "confident",
      "dedupeKey": "confident",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.8006,
        "classic_unexpected": -0.0335,
        "minimal_ornate": -0.2924,
        "soft_sharp": -0.0819,
        "romantic_edgy": 0.0326,
        "organic_geometric": 0.0677,
        "playful_refined": 0.155,
        "everyday_special_occasion": -0.0098,
        "lowkey_statement": -0.0741,
        "grounded_ethereal": -0.2836
      },
      "metrics": {
        "vectorStrength": 0.9219,
        "maxAbsScore": 0.8006,
        "focusRatio": 0.4372
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.8006
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "effortless": {
      "id": "effortless",
      "term": "Effortless",
      "cleanTerm": "effortless",
      "dedupeKey": "effortless",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0419,
        "classic_unexpected": -0.2431,
        "minimal_ornate": -0.5779,
        "soft_sharp": -0.52,
        "romantic_edgy": -0.1811,
        "organic_geometric": -0.3444,
        "playful_refined": 0.1399,
        "everyday_special_occasion": -0.9737,
        "lowkey_statement": -0.3234,
        "grounded_ethereal": 0.1835
      },
      "metrics": {
        "vectorStrength": 1.3865,
        "maxAbsScore": 0.9737,
        "focusRatio": 0.2759
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -0.9737
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "unconventional": {
      "id": "unconventional",
      "term": "Unconventional",
      "cleanTerm": "unconventional",
      "dedupeKey": "unconventional",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 14,
      "scores": {
        "delicate_bold": 0.2391,
        "classic_unexpected": 1.0,
        "minimal_ornate": -0.2912,
        "soft_sharp": -0.038,
        "romantic_edgy": 0.6352,
        "organic_geometric": -0.3774,
        "playful_refined": -0.2326,
        "everyday_special_occasion": -0.0139,
        "lowkey_statement": -0.1039,
        "grounded_ethereal": 0.1095
      },
      "metrics": {
        "vectorStrength": 1.3291,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3289
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 1.0
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "rooted": {
      "id": "rooted",
      "term": "Rooted",
      "cleanTerm": "rooted",
      "dedupeKey": "rooted",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.2845,
        "classic_unexpected": -0.1335,
        "minimal_ornate": -0.1133,
        "soft_sharp": 0.0433,
        "romantic_edgy": 0.1811,
        "organic_geometric": -0.3351,
        "playful_refined": 0.3483,
        "everyday_special_occasion": 0.2206,
        "lowkey_statement": 0.1761,
        "grounded_ethereal": -0.9409
      },
      "metrics": {
        "vectorStrength": 1.1597,
        "maxAbsScore": 0.9409,
        "focusRatio": 0.3389
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.9409
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "celebration": {
      "id": "celebration",
      "term": "Celebration",
      "cleanTerm": "celebration",
      "dedupeKey": "celebration",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.2405,
        "classic_unexpected": -0.1496,
        "minimal_ornate": 0.0652,
        "soft_sharp": -0.0857,
        "romantic_edgy": -0.1287,
        "organic_geometric": 0.107,
        "playful_refined": -0.0466,
        "everyday_special_occasion": 0.899,
        "lowkey_statement": 0.3974,
        "grounded_ethereal": 0.1412
      },
      "metrics": {
        "vectorStrength": 1.0526,
        "maxAbsScore": 0.899,
        "focusRatio": 0.3976
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Special Occasion",
        "score": 0.899
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "spike": {
      "id": "spike",
      "term": "Spike",
      "cleanTerm": "spike",
      "dedupeKey": "spike",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.1873,
        "classic_unexpected": 0.1151,
        "minimal_ornate": -0.0117,
        "soft_sharp": 0.7798,
        "romantic_edgy": 0.3515,
        "organic_geometric": -0.0154,
        "playful_refined": 0.0635,
        "everyday_special_occasion": 0.2424,
        "lowkey_statement": 0.3029,
        "grounded_ethereal": -0.3236
      },
      "metrics": {
        "vectorStrength": 1.0196,
        "maxAbsScore": 0.7798,
        "focusRatio": 0.3259
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Sharp",
        "score": 0.7798
      },
      "usage": {
        "initialScreen": true,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "initial_screen"
      }
    },
    "calm": {
      "id": "calm",
      "term": "Calm",
      "cleanTerm": "calm",
      "dedupeKey": "calm",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.0819,
        "classic_unexpected": -0.1899,
        "minimal_ornate": -0.7842,
        "soft_sharp": -0.5901,
        "romantic_edgy": -0.261,
        "organic_geometric": -0.1739,
        "playful_refined": 0.1593,
        "everyday_special_occasion": -0.3153,
        "lowkey_statement": -0.7472,
        "grounded_ethereal": -0.6518
      },
      "metrics": {
        "vectorStrength": 1.4873,
        "maxAbsScore": 0.7842,
        "focusRatio": 0.1983
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.7842
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "ornate": {
      "id": "ornate",
      "term": "Ornate",
      "cleanTerm": "ornate",
      "dedupeKey": "ornate",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.0181,
        "classic_unexpected": -0.338,
        "minimal_ornate": 0.9972,
        "soft_sharp": 0.0205,
        "romantic_edgy": -0.1918,
        "organic_geometric": 0.136,
        "playful_refined": 0.5521,
        "everyday_special_occasion": 0.4798,
        "lowkey_statement": -0.018,
        "grounded_ethereal": 0.2597
      },
      "metrics": {
        "vectorStrength": 1.3295,
        "maxAbsScore": 0.9972,
        "focusRatio": 0.3312
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.9972
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "natural": {
      "id": "natural",
      "term": "Natural",
      "cleanTerm": "natural",
      "dedupeKey": "natural",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.0942,
        "classic_unexpected": -0.0934,
        "minimal_ornate": -0.3506,
        "soft_sharp": -0.3787,
        "romantic_edgy": -0.0678,
        "organic_geometric": -1.0,
        "playful_refined": 0.1034,
        "everyday_special_occasion": -0.4195,
        "lowkey_statement": -0.2721,
        "grounded_ethereal": -0.3684
      },
      "metrics": {
        "vectorStrength": 1.2981,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3177
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -1.0
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "earthy": {
      "id": "earthy",
      "term": "Earthy",
      "cleanTerm": "earthy",
      "dedupeKey": "earthy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.003,
        "classic_unexpected": 0.0342,
        "minimal_ornate": -0.1408,
        "soft_sharp": -0.2117,
        "romantic_edgy": -0.0597,
        "organic_geometric": -0.9481,
        "playful_refined": -0.0071,
        "everyday_special_occasion": -0.1725,
        "lowkey_statement": -0.3872,
        "grounded_ethereal": -0.7098
      },
      "metrics": {
        "vectorStrength": 1.2852,
        "maxAbsScore": 0.9481,
        "focusRatio": 0.3545
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.9481
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "graceful": {
      "id": "graceful",
      "term": "Graceful",
      "cleanTerm": "graceful",
      "dedupeKey": "graceful",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0386,
        "classic_unexpected": -0.4969,
        "minimal_ornate": -0.2189,
        "soft_sharp": -0.5588,
        "romantic_edgy": -0.7343,
        "organic_geometric": -0.1653,
        "playful_refined": 0.538,
        "everyday_special_occasion": -0.1788,
        "lowkey_statement": -0.3601,
        "grounded_ethereal": 0.1545
      },
      "metrics": {
        "vectorStrength": 1.2846,
        "maxAbsScore": 0.7343,
        "focusRatio": 0.2132
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.7343
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "warm": {
      "id": "warm",
      "term": "Warm",
      "cleanTerm": "warm",
      "dedupeKey": "warm",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.0134,
        "classic_unexpected": -0.1731,
        "minimal_ornate": -0.3512,
        "soft_sharp": -0.5784,
        "romantic_edgy": -0.4484,
        "organic_geometric": -0.1858,
        "playful_refined": -0.0157,
        "everyday_special_occasion": -0.0081,
        "lowkey_statement": -0.4174,
        "grounded_ethereal": -0.8201
      },
      "metrics": {
        "vectorStrength": 1.2533,
        "maxAbsScore": 0.8201,
        "focusRatio": 0.2723
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.8201
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "delicate": {
      "id": "delicate",
      "term": "Delicate",
      "cleanTerm": "delicate",
      "dedupeKey": "delicate",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.6663,
        "classic_unexpected": -0.3264,
        "minimal_ornate": 0.2676,
        "soft_sharp": -0.3264,
        "romantic_edgy": -0.5147,
        "organic_geometric": -0.1909,
        "playful_refined": 0.3455,
        "everyday_special_occasion": -0.0033,
        "lowkey_statement": -0.6405,
        "grounded_ethereal": 0.07
      },
      "metrics": {
        "vectorStrength": 1.2508,
        "maxAbsScore": 0.6663,
        "focusRatio": 0.1988
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Delicate",
        "score": -0.6663
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "whimsy": {
      "id": "whimsy",
      "term": "Whimsy",
      "cleanTerm": "whimsy",
      "dedupeKey": "whimsy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.484,
        "classic_unexpected": 0.1081,
        "minimal_ornate": 0.0483,
        "soft_sharp": -0.1621,
        "romantic_edgy": -0.4209,
        "organic_geometric": -0.3231,
        "playful_refined": -0.9163,
        "everyday_special_occasion": -0.1771,
        "lowkey_statement": -0.3143,
        "grounded_ethereal": 0.0916
      },
      "metrics": {
        "vectorStrength": 1.2386,
        "maxAbsScore": 0.9163,
        "focusRatio": 0.3008
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.9163
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "timeless": {
      "id": "timeless",
      "term": "Timeless",
      "cleanTerm": "timeless",
      "dedupeKey": "timeless",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0717,
        "classic_unexpected": -0.7866,
        "minimal_ornate": -0.566,
        "soft_sharp": -0.343,
        "romantic_edgy": -0.2074,
        "organic_geometric": -0.1668,
        "playful_refined": 0.0103,
        "everyday_special_occasion": -0.4453,
        "lowkey_statement": 0.0636,
        "grounded_ethereal": 0.3098
      },
      "metrics": {
        "vectorStrength": 1.1962,
        "maxAbsScore": 0.7866,
        "focusRatio": 0.2648
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.7866
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "ethereal": {
      "id": "ethereal",
      "term": "Ethereal",
      "cleanTerm": "ethereal",
      "dedupeKey": "ethereal",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2771,
        "classic_unexpected": -0.3322,
        "minimal_ornate": -0.1092,
        "soft_sharp": -0.4305,
        "romantic_edgy": -0.3661,
        "organic_geometric": -0.4108,
        "playful_refined": 0.0764,
        "everyday_special_occasion": -0.1603,
        "lowkey_statement": -0.4086,
        "grounded_ethereal": 0.7257
      },
      "metrics": {
        "vectorStrength": 1.1884,
        "maxAbsScore": 0.7257,
        "focusRatio": 0.2201
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7257
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "comfortable": {
      "id": "comfortable",
      "term": "Comfortable",
      "cleanTerm": "comfortable",
      "dedupeKey": "comfortable",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.278,
        "classic_unexpected": -0.3298,
        "minimal_ornate": -0.4494,
        "soft_sharp": -0.4853,
        "romantic_edgy": -0.3695,
        "organic_geometric": -0.0896,
        "playful_refined": 0.1856,
        "everyday_special_occasion": -0.3804,
        "lowkey_statement": -0.5704,
        "grounded_ethereal": -0.3735
      },
      "metrics": {
        "vectorStrength": 1.1883,
        "maxAbsScore": 0.5704,
        "focusRatio": 0.1624
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.5704
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "elegant": {
      "id": "elegant",
      "term": "Elegant",
      "cleanTerm": "elegant",
      "dedupeKey": "elegant",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1875,
        "classic_unexpected": -0.6618,
        "minimal_ornate": 0.0249,
        "soft_sharp": -0.1612,
        "romantic_edgy": -0.4786,
        "organic_geometric": 0.1114,
        "playful_refined": 0.7013,
        "everyday_special_occasion": 0.1209,
        "lowkey_statement": -0.3375,
        "grounded_ethereal": 0.2091
      },
      "metrics": {
        "vectorStrength": 1.1854,
        "maxAbsScore": 0.7013,
        "focusRatio": 0.2342
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.7013
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "pristine": {
      "id": "pristine",
      "term": "Pristine",
      "cleanTerm": "pristine",
      "dedupeKey": "pristine",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.242,
        "classic_unexpected": -0.7334,
        "minimal_ornate": -0.6956,
        "soft_sharp": -0.1141,
        "romantic_edgy": -0.0785,
        "organic_geometric": -0.1889,
        "playful_refined": 0.4843,
        "everyday_special_occasion": -0.0899,
        "lowkey_statement": -0.1398,
        "grounded_ethereal": -0.0868
      },
      "metrics": {
        "vectorStrength": 1.1853,
        "maxAbsScore": 0.7334,
        "focusRatio": 0.257
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.7334
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "understated": {
      "id": "understated",
      "term": "Understated",
      "cleanTerm": "understated",
      "dedupeKey": "understated",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.1635,
        "classic_unexpected": 0.0754,
        "minimal_ornate": -0.759,
        "soft_sharp": -0.2228,
        "romantic_edgy": -0.316,
        "organic_geometric": -0.0284,
        "playful_refined": 0.3906,
        "everyday_special_occasion": -0.2048,
        "lowkey_statement": -0.6225,
        "grounded_ethereal": -0.1204
      },
      "metrics": {
        "vectorStrength": 1.1641,
        "maxAbsScore": 0.759,
        "focusRatio": 0.2614
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.759
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "friendly": {
      "id": "friendly",
      "term": "Friendly",
      "cleanTerm": "friendly",
      "dedupeKey": "friendly",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0195,
        "classic_unexpected": -0.0537,
        "minimal_ornate": -0.5832,
        "soft_sharp": -0.5899,
        "romantic_edgy": -0.2685,
        "organic_geometric": -0.1463,
        "playful_refined": -0.29,
        "everyday_special_occasion": -0.2175,
        "lowkey_statement": -0.496,
        "grounded_ethereal": -0.4116
      },
      "metrics": {
        "vectorStrength": 1.154,
        "maxAbsScore": 0.5899,
        "focusRatio": 0.1918
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.5899
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "intricate": {
      "id": "intricate",
      "term": "Intricate",
      "cleanTerm": "intricate",
      "dedupeKey": "intricate",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.2201,
        "classic_unexpected": -0.06,
        "minimal_ornate": 0.9215,
        "soft_sharp": -0.0089,
        "romantic_edgy": 0.0554,
        "organic_geometric": 0.1298,
        "playful_refined": 0.359,
        "everyday_special_occasion": 0.1698,
        "lowkey_statement": -0.4253,
        "grounded_ethereal": 0.1182
      },
      "metrics": {
        "vectorStrength": 1.1286,
        "maxAbsScore": 0.9215,
        "focusRatio": 0.3734
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.9215
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "sleek": {
      "id": "sleek",
      "term": "Sleek",
      "cleanTerm": "sleek",
      "dedupeKey": "sleek",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0719,
        "classic_unexpected": -0.3952,
        "minimal_ornate": -0.6735,
        "soft_sharp": 0.1335,
        "romantic_edgy": -0.1644,
        "organic_geometric": 0.1235,
        "playful_refined": 0.5432,
        "everyday_special_occasion": -0.3849,
        "lowkey_statement": -0.3594,
        "grounded_ethereal": -0.0555
      },
      "metrics": {
        "vectorStrength": 1.1183,
        "maxAbsScore": 0.6735,
        "focusRatio": 0.2319
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.6735
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "classic": {
      "id": "classic",
      "term": "Classic",
      "cleanTerm": "classic",
      "dedupeKey": "classic",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.2118,
        "classic_unexpected": -0.8032,
        "minimal_ornate": -0.4848,
        "soft_sharp": -0.2181,
        "romantic_edgy": -0.1528,
        "organic_geometric": 0.2517,
        "playful_refined": 0.3047,
        "everyday_special_occasion": 0.1391,
        "lowkey_statement": 0.2023,
        "grounded_ethereal": 0.0204
      },
      "metrics": {
        "vectorStrength": 1.1013,
        "maxAbsScore": 0.8032,
        "focusRatio": 0.288
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.8032
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "romantic": {
      "id": "romantic",
      "term": "Romantic",
      "cleanTerm": "romantic",
      "dedupeKey": "romantic",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.0377,
        "classic_unexpected": -0.2195,
        "minimal_ornate": 0.1382,
        "soft_sharp": -0.5113,
        "romantic_edgy": -0.7413,
        "organic_geometric": -0.1924,
        "playful_refined": -0.1647,
        "everyday_special_occasion": 0.293,
        "lowkey_statement": -0.317,
        "grounded_ethereal": 0.1835
      },
      "metrics": {
        "vectorStrength": 1.0788,
        "maxAbsScore": 0.7413,
        "focusRatio": 0.2649
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.7413
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "defiant": {
      "id": "defiant",
      "term": "Defiant",
      "cleanTerm": "defiant",
      "dedupeKey": "defiant",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.538,
        "classic_unexpected": 0.3974,
        "minimal_ornate": -0.0776,
        "soft_sharp": 0.0721,
        "romantic_edgy": 0.7865,
        "organic_geometric": -0.1614,
        "playful_refined": -0.1422,
        "everyday_special_occasion": -0.0908,
        "lowkey_statement": 0.1065,
        "grounded_ethereal": -0.069
      },
      "metrics": {
        "vectorStrength": 1.0714,
        "maxAbsScore": 0.7865,
        "focusRatio": 0.3221
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.7865
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "pure": {
      "id": "pure",
      "term": "Pure",
      "cleanTerm": "pure",
      "dedupeKey": "pure",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": -0.0751,
        "classic_unexpected": -0.5763,
        "minimal_ornate": -0.5908,
        "soft_sharp": -0.2928,
        "romantic_edgy": -0.0835,
        "organic_geometric": -0.3835,
        "playful_refined": 0.1897,
        "everyday_special_occasion": -0.2348,
        "lowkey_statement": -0.2119,
        "grounded_ethereal": -0.1119
      },
      "metrics": {
        "vectorStrength": 1.0368,
        "maxAbsScore": 0.5908,
        "focusRatio": 0.2148
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5908
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "sentimental": {
      "id": "sentimental",
      "term": "Sentimental",
      "cleanTerm": "sentimental",
      "dedupeKey": "sentimental",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.1079,
        "classic_unexpected": -0.1288,
        "minimal_ornate": 0.0124,
        "soft_sharp": -0.3964,
        "romantic_edgy": -0.7733,
        "organic_geometric": -0.1976,
        "playful_refined": -0.2028,
        "everyday_special_occasion": 0.3026,
        "lowkey_statement": -0.1089,
        "grounded_ethereal": -0.2257
      },
      "metrics": {
        "vectorStrength": 1.009,
        "maxAbsScore": 0.7733,
        "focusRatio": 0.3148
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.7733
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "happy": {
      "id": "happy",
      "term": "Happy",
      "cleanTerm": "happy",
      "dedupeKey": "happy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.2442,
        "classic_unexpected": -0.0687,
        "minimal_ornate": -0.2594,
        "soft_sharp": -0.5512,
        "romantic_edgy": -0.6227,
        "organic_geometric": -0.0906,
        "playful_refined": -0.2799,
        "everyday_special_occasion": 0.0891,
        "lowkey_statement": -0.2272,
        "grounded_ethereal": -0.2096
      },
      "metrics": {
        "vectorStrength": 1.0066,
        "maxAbsScore": 0.6227,
        "focusRatio": 0.2356
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.6227
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "striking": {
      "id": "striking",
      "term": "Striking",
      "cleanTerm": "striking",
      "dedupeKey": "striking",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.4403,
        "classic_unexpected": 0.3436,
        "minimal_ornate": -0.0432,
        "soft_sharp": 0.3035,
        "romantic_edgy": 0.3882,
        "organic_geometric": 0.2231,
        "playful_refined": 0.0561,
        "everyday_special_occasion": 0.3215,
        "lowkey_statement": 0.5404,
        "grounded_ethereal": -0.0294
      },
      "metrics": {
        "vectorStrength": 1.0028,
        "maxAbsScore": 0.5404,
        "focusRatio": 0.2009
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.5404
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "minimal": {
      "id": "minimal",
      "term": "Minimal",
      "cleanTerm": "minimal",
      "dedupeKey": "minimal",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.5288,
        "classic_unexpected": -0.022,
        "minimal_ornate": -0.6308,
        "soft_sharp": -0.1755,
        "romantic_edgy": 0.0733,
        "organic_geometric": 0.0966,
        "playful_refined": 0.1874,
        "everyday_special_occasion": -0.0077,
        "lowkey_statement": -0.4859,
        "grounded_ethereal": 0.0121
      },
      "metrics": {
        "vectorStrength": 0.9975,
        "maxAbsScore": 0.6308,
        "focusRatio": 0.2841
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.6308
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "glamorous": {
      "id": "glamorous",
      "term": "Glamorous",
      "cleanTerm": "glamorous",
      "dedupeKey": "glamorous",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.2465,
        "classic_unexpected": -0.37,
        "minimal_ornate": 0.3417,
        "soft_sharp": -0.2468,
        "romantic_edgy": -0.4807,
        "organic_geometric": 0.0485,
        "playful_refined": 0.2771,
        "everyday_special_occasion": 0.2553,
        "lowkey_statement": 0.013,
        "grounded_ethereal": 0.4886
      },
      "metrics": {
        "vectorStrength": 0.9948,
        "maxAbsScore": 0.4886,
        "focusRatio": 0.1765
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.4886
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "floral": {
      "id": "floral",
      "term": "Floral",
      "cleanTerm": "floral",
      "dedupeKey": "floral",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.0155,
        "classic_unexpected": -0.1809,
        "minimal_ornate": 0.5425,
        "soft_sharp": -0.4508,
        "romantic_edgy": -0.4461,
        "organic_geometric": -0.3952,
        "playful_refined": 0.0588,
        "everyday_special_occasion": 0.1415,
        "lowkey_statement": -0.1574,
        "grounded_ethereal": 0.2308
      },
      "metrics": {
        "vectorStrength": 0.9936,
        "maxAbsScore": 0.5425,
        "focusRatio": 0.2071
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.5425
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "elaborate": {
      "id": "elaborate",
      "term": "Elaborate",
      "cleanTerm": "elaborate",
      "dedupeKey": "elaborate",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0908,
        "classic_unexpected": -0.1343,
        "minimal_ornate": 0.6337,
        "soft_sharp": 0.0575,
        "romantic_edgy": 0.0235,
        "organic_geometric": 0.2319,
        "playful_refined": 0.5971,
        "everyday_special_occasion": 0.3708,
        "lowkey_statement": -0.0855,
        "grounded_ethereal": -0.0137
      },
      "metrics": {
        "vectorStrength": 0.9935,
        "maxAbsScore": 0.6337,
        "focusRatio": 0.2831
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.6337
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "joyful": {
      "id": "joyful",
      "term": "Joyful",
      "cleanTerm": "joyful",
      "dedupeKey": "joyful",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.3118,
        "classic_unexpected": -0.0002,
        "minimal_ornate": 0.1647,
        "soft_sharp": -0.461,
        "romantic_edgy": -0.4297,
        "organic_geometric": -0.1833,
        "playful_refined": -0.5643,
        "everyday_special_occasion": 0.1847,
        "lowkey_statement": -0.2068,
        "grounded_ethereal": 0.1734
      },
      "metrics": {
        "vectorStrength": 0.9902,
        "maxAbsScore": 0.5643,
        "focusRatio": 0.2106
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.5643
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "daring": {
      "id": "daring",
      "term": "Daring",
      "cleanTerm": "daring",
      "dedupeKey": "daring",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.3102,
        "classic_unexpected": 0.5374,
        "minimal_ornate": 0.0724,
        "soft_sharp": 0.1408,
        "romantic_edgy": 0.5323,
        "organic_geometric": -0.2083,
        "playful_refined": -0.2561,
        "everyday_special_occasion": 0.2634,
        "lowkey_statement": 0.2396,
        "grounded_ethereal": 0.0239
      },
      "metrics": {
        "vectorStrength": 0.9643,
        "maxAbsScore": 0.5374,
        "focusRatio": 0.208
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.5374
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "playful": {
      "id": "playful",
      "term": "Playful",
      "cleanTerm": "playful",
      "dedupeKey": "playful",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1181,
        "classic_unexpected": 0.2511,
        "minimal_ornate": -0.0085,
        "soft_sharp": -0.3453,
        "romantic_edgy": -0.0225,
        "organic_geometric": -0.3652,
        "playful_refined": -0.6094,
        "everyday_special_occasion": -0.1721,
        "lowkey_statement": -0.4308,
        "grounded_ethereal": -0.0171
      },
      "metrics": {
        "vectorStrength": 0.9577,
        "maxAbsScore": 0.6094,
        "focusRatio": 0.2604
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.6094
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "tender": {
      "id": "tender",
      "term": "Tender",
      "cleanTerm": "tender",
      "dedupeKey": "tender",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.3331,
        "classic_unexpected": -0.155,
        "minimal_ornate": -0.1972,
        "soft_sharp": -0.6402,
        "romantic_edgy": -0.2442,
        "organic_geometric": -0.2121,
        "playful_refined": 0.1699,
        "everyday_special_occasion": 0.0583,
        "lowkey_statement": -0.3892,
        "grounded_ethereal": -0.1901
      },
      "metrics": {
        "vectorStrength": 0.953,
        "maxAbsScore": 0.6402,
        "focusRatio": 0.2472
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.6402
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "cherished": {
      "id": "cherished",
      "term": "Cherished",
      "cleanTerm": "cherished",
      "dedupeKey": "cherished",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.1022,
        "classic_unexpected": -0.5599,
        "minimal_ornate": 0.0518,
        "soft_sharp": -0.3084,
        "romantic_edgy": -0.5114,
        "organic_geometric": -0.1506,
        "playful_refined": 0.1222,
        "everyday_special_occasion": 0.3964,
        "lowkey_statement": -0.0415,
        "grounded_ethereal": -0.1497
      },
      "metrics": {
        "vectorStrength": 0.9499,
        "maxAbsScore": 0.5599,
        "focusRatio": 0.2339
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.5599
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "memorable": {
      "id": "memorable",
      "term": "Memorable",
      "cleanTerm": "memorable",
      "dedupeKey": "memorable",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.556,
        "classic_unexpected": -0.092,
        "minimal_ornate": -0.1238,
        "soft_sharp": -0.1404,
        "romantic_edgy": -0.3051,
        "organic_geometric": -0.044,
        "playful_refined": -0.1031,
        "everyday_special_occasion": 0.5962,
        "lowkey_statement": 0.271,
        "grounded_ethereal": 0.0445
      },
      "metrics": {
        "vectorStrength": 0.9429,
        "maxAbsScore": 0.5962,
        "focusRatio": 0.2619
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Special Occasion",
        "score": 0.5962
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "enchanting": {
      "id": "enchanting",
      "term": "Enchanting",
      "cleanTerm": "enchanting",
      "dedupeKey": "enchanting",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.0451,
        "classic_unexpected": -0.0326,
        "minimal_ornate": 0.3999,
        "soft_sharp": -0.3442,
        "romantic_edgy": -0.491,
        "organic_geometric": -0.3946,
        "playful_refined": -0.2879,
        "everyday_special_occasion": 0.1997,
        "lowkey_statement": -0.0804,
        "grounded_ethereal": 0.2834
      },
      "metrics": {
        "vectorStrength": 0.9422,
        "maxAbsScore": 0.491,
        "focusRatio": 0.1919
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.491
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "treasured": {
      "id": "treasured",
      "term": "Treasured",
      "cleanTerm": "treasured",
      "dedupeKey": "treasured",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0243,
        "classic_unexpected": -0.5194,
        "minimal_ornate": 0.1998,
        "soft_sharp": -0.1443,
        "romantic_edgy": -0.4084,
        "organic_geometric": -0.1704,
        "playful_refined": 0.2647,
        "everyday_special_occasion": 0.5241,
        "lowkey_statement": 0.0019,
        "grounded_ethereal": 0.0569
      },
      "metrics": {
        "vectorStrength": 0.9354,
        "maxAbsScore": 0.5241,
        "focusRatio": 0.2265
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Special Occasion",
        "score": 0.5241
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "starlight": {
      "id": "starlight",
      "term": "Starlight",
      "cleanTerm": "starlight",
      "dedupeKey": "starlight",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.196,
        "classic_unexpected": -0.2809,
        "minimal_ornate": -0.2597,
        "soft_sharp": -0.0825,
        "romantic_edgy": -0.1723,
        "organic_geometric": 0.0858,
        "playful_refined": -0.168,
        "everyday_special_occasion": 0.2545,
        "lowkey_statement": 0.3405,
        "grounded_ethereal": 0.6122
      },
      "metrics": {
        "vectorStrength": 0.9013,
        "maxAbsScore": 0.6122,
        "focusRatio": 0.2496
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.6122
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "wild": {
      "id": "wild",
      "term": "Wild",
      "cleanTerm": "wild",
      "dedupeKey": "wild",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.2324,
        "classic_unexpected": 0.2751,
        "minimal_ornate": -0.2197,
        "soft_sharp": -0.1582,
        "romantic_edgy": 0.3981,
        "organic_geometric": -0.5839,
        "playful_refined": -0.2469,
        "everyday_special_occasion": -0.0742,
        "lowkey_statement": -0.0422,
        "grounded_ethereal": -0.0733
      },
      "metrics": {
        "vectorStrength": 0.8809,
        "maxAbsScore": 0.5839,
        "focusRatio": 0.2534
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.5839
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "colorful": {
      "id": "colorful",
      "term": "Colorful",
      "cleanTerm": "colorful",
      "dedupeKey": "colorful",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.4261,
        "classic_unexpected": 0.1196,
        "minimal_ornate": 0.534,
        "soft_sharp": -0.2599,
        "romantic_edgy": -0.2777,
        "organic_geometric": -0.1538,
        "playful_refined": -0.3157,
        "everyday_special_occasion": 0.0964,
        "lowkey_statement": 0.0048,
        "grounded_ethereal": 0.1032
      },
      "metrics": {
        "vectorStrength": 0.877,
        "maxAbsScore": 0.534,
        "focusRatio": 0.2331
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.534
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "legacy": {
      "id": "legacy",
      "term": "Legacy",
      "cleanTerm": "legacy",
      "dedupeKey": "legacy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.1731,
        "classic_unexpected": -0.5302,
        "minimal_ornate": -0.0538,
        "soft_sharp": -0.2886,
        "romantic_edgy": 0.0525,
        "organic_geometric": 0.1921,
        "playful_refined": 0.2362,
        "everyday_special_occasion": 0.2956,
        "lowkey_statement": 0.3396,
        "grounded_ethereal": 0.27
      },
      "metrics": {
        "vectorStrength": 0.8765,
        "maxAbsScore": 0.5302,
        "focusRatio": 0.218
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.5302
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "durable": {
      "id": "durable",
      "term": "Durable",
      "cleanTerm": "durable",
      "dedupeKey": "durable",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.3797,
        "classic_unexpected": -0.4713,
        "minimal_ornate": -0.0996,
        "soft_sharp": -0.2448,
        "romantic_edgy": 0.1578,
        "organic_geometric": -0.086,
        "playful_refined": 0.2548,
        "everyday_special_occasion": -0.4332,
        "lowkey_statement": -0.1562,
        "grounded_ethereal": -0.1494
      },
      "metrics": {
        "vectorStrength": 0.8762,
        "maxAbsScore": 0.4713,
        "focusRatio": 0.1937
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.4713
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "lunar": {
      "id": "lunar",
      "term": "Lunar",
      "cleanTerm": "lunar",
      "dedupeKey": "lunar",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.04,
        "classic_unexpected": -0.0899,
        "minimal_ornate": -0.0639,
        "soft_sharp": -0.3736,
        "romantic_edgy": -0.1313,
        "organic_geometric": -0.2587,
        "playful_refined": 0.0106,
        "everyday_special_occasion": -0.0139,
        "lowkey_statement": -0.0797,
        "grounded_ethereal": 0.7195
      },
      "metrics": {
        "vectorStrength": 0.8729,
        "maxAbsScore": 0.7195,
        "focusRatio": 0.404
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7195
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "petals": {
      "id": "petals",
      "term": "Petals",
      "cleanTerm": "petals",
      "dedupeKey": "petals",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.3931,
        "classic_unexpected": -0.2331,
        "minimal_ornate": 0.2888,
        "soft_sharp": -0.2602,
        "romantic_edgy": -0.401,
        "organic_geometric": -0.343,
        "playful_refined": 0.2296,
        "everyday_special_occasion": 0.1086,
        "lowkey_statement": -0.0073,
        "grounded_ethereal": 0.133
      },
      "metrics": {
        "vectorStrength": 0.8489,
        "maxAbsScore": 0.401,
        "focusRatio": 0.1673
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.401
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "meadow": {
      "id": "meadow",
      "term": "Meadow",
      "cleanTerm": "meadow",
      "dedupeKey": "meadow",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.202,
        "classic_unexpected": -0.1209,
        "minimal_ornate": -0.1697,
        "soft_sharp": -0.4383,
        "romantic_edgy": -0.3431,
        "organic_geometric": -0.5036,
        "playful_refined": 0.0466,
        "everyday_special_occasion": -0.0259,
        "lowkey_statement": -0.2413,
        "grounded_ethereal": -0.0912
      },
      "metrics": {
        "vectorStrength": 0.8468,
        "maxAbsScore": 0.5036,
        "focusRatio": 0.2308
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.5036
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "blossoming": {
      "id": "blossoming",
      "term": "Blossoming",
      "cleanTerm": "blossoming",
      "dedupeKey": "blossoming",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0728,
        "classic_unexpected": 0.1079,
        "minimal_ornate": 0.2873,
        "soft_sharp": -0.4239,
        "romantic_edgy": -0.3292,
        "organic_geometric": -0.486,
        "playful_refined": 0.1131,
        "everyday_special_occasion": 0.2344,
        "lowkey_statement": 0.0993,
        "grounded_ethereal": -0.0298
      },
      "metrics": {
        "vectorStrength": 0.838,
        "maxAbsScore": 0.486,
        "focusRatio": 0.2226
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.486
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "sunshine": {
      "id": "sunshine",
      "term": "Sunshine",
      "cleanTerm": "sunshine",
      "dedupeKey": "sunshine",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.1093,
        "classic_unexpected": 0.067,
        "minimal_ornate": -0.4583,
        "soft_sharp": -0.3859,
        "romantic_edgy": -0.3634,
        "organic_geometric": -0.17,
        "playful_refined": -0.3478,
        "everyday_special_occasion": -0.1736,
        "lowkey_statement": -0.0504,
        "grounded_ethereal": -0.0452
      },
      "metrics": {
        "vectorStrength": 0.8319,
        "maxAbsScore": 0.4583,
        "focusRatio": 0.2111
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4583
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "wildflowers": {
      "id": "wildflowers",
      "term": "Wildflowers",
      "cleanTerm": "wildflowers",
      "dedupeKey": "wildflowers",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.1521,
        "classic_unexpected": 0.1703,
        "minimal_ornate": 0.0161,
        "soft_sharp": -0.3903,
        "romantic_edgy": -0.2961,
        "organic_geometric": -0.5972,
        "playful_refined": -0.1883,
        "everyday_special_occasion": -0.0372,
        "lowkey_statement": 0.0077,
        "grounded_ethereal": -0.033
      },
      "metrics": {
        "vectorStrength": 0.8289,
        "maxAbsScore": 0.5972,
        "focusRatio": 0.3163
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.5972
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "enchanted": {
      "id": "enchanted",
      "term": "Enchanted",
      "cleanTerm": "enchanted",
      "dedupeKey": "enchanted",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.0332,
        "classic_unexpected": -0.1353,
        "minimal_ornate": 0.3575,
        "soft_sharp": -0.1523,
        "romantic_edgy": -0.3886,
        "organic_geometric": -0.376,
        "playful_refined": -0.0424,
        "everyday_special_occasion": 0.3591,
        "lowkey_statement": -0.0909,
        "grounded_ethereal": 0.1894
      },
      "metrics": {
        "vectorStrength": 0.7985,
        "maxAbsScore": 0.3886,
        "focusRatio": 0.1829
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.3886
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "rough": {
      "id": "rough",
      "term": "Rough",
      "cleanTerm": "rough",
      "dedupeKey": "rough",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.0987,
        "classic_unexpected": 0.1331,
        "minimal_ornate": -0.1497,
        "soft_sharp": -0.2084,
        "romantic_edgy": 0.3689,
        "organic_geometric": -0.1926,
        "playful_refined": 0.0341,
        "everyday_special_occasion": -0.1849,
        "lowkey_statement": -0.2355,
        "grounded_ethereal": -0.5154
      },
      "metrics": {
        "vectorStrength": 0.7893,
        "maxAbsScore": 0.5154,
        "focusRatio": 0.243
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.5154
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "authentic": {
      "id": "authentic",
      "term": "Authentic",
      "cleanTerm": "authentic",
      "dedupeKey": "authentic",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.3921,
        "classic_unexpected": -0.3336,
        "minimal_ornate": -0.1068,
        "soft_sharp": -0.0978,
        "romantic_edgy": 0.0298,
        "organic_geometric": -0.3757,
        "playful_refined": 0.1108,
        "everyday_special_occasion": 0.0735,
        "lowkey_statement": 0.1124,
        "grounded_ethereal": -0.399
      },
      "metrics": {
        "vectorStrength": 0.7858,
        "maxAbsScore": 0.399,
        "focusRatio": 0.1964
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.399
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "original": {
      "id": "original",
      "term": "Original",
      "cleanTerm": "original",
      "dedupeKey": "original",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1798,
        "classic_unexpected": -0.3824,
        "minimal_ornate": -0.4086,
        "soft_sharp": -0.1812,
        "romantic_edgy": 0.1594,
        "organic_geometric": -0.2696,
        "playful_refined": 0.1423,
        "everyday_special_occasion": 0.0009,
        "lowkey_statement": 0.1471,
        "grounded_ethereal": -0.2874
      },
      "metrics": {
        "vectorStrength": 0.7752,
        "maxAbsScore": 0.4086,
        "focusRatio": 0.1893
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4086
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "twinkle": {
      "id": "twinkle",
      "term": "Twinkle",
      "cleanTerm": "twinkle",
      "dedupeKey": "twinkle",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.4478,
        "classic_unexpected": -0.0048,
        "minimal_ornate": -0.0307,
        "soft_sharp": 0.0453,
        "romantic_edgy": -0.3569,
        "organic_geometric": -0.0823,
        "playful_refined": -0.4668,
        "everyday_special_occasion": 0.1645,
        "lowkey_statement": -0.0674,
        "grounded_ethereal": 0.1135
      },
      "metrics": {
        "vectorStrength": 0.7747,
        "maxAbsScore": 0.4668,
        "focusRatio": 0.2623
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.4668
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "everyday": {
      "id": "everyday",
      "term": "Everyday",
      "cleanTerm": "everyday",
      "dedupeKey": "everyday",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0126,
        "classic_unexpected": -0.2749,
        "minimal_ornate": -0.2953,
        "soft_sharp": -0.3056,
        "romantic_edgy": 0.0454,
        "organic_geometric": -0.2391,
        "playful_refined": 0.0031,
        "everyday_special_occasion": -0.5212,
        "lowkey_statement": -0.0368,
        "grounded_ethereal": 0.005
      },
      "metrics": {
        "vectorStrength": 0.7672,
        "maxAbsScore": 0.5212,
        "focusRatio": 0.2997
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -0.5212
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "edgy": {
      "id": "edgy",
      "term": "Edgy",
      "cleanTerm": "edgy",
      "dedupeKey": "edgy",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.1043,
        "classic_unexpected": 0.4982,
        "minimal_ornate": -0.0466,
        "soft_sharp": 0.3048,
        "romantic_edgy": 0.2104,
        "organic_geometric": -0.2989,
        "playful_refined": -0.0839,
        "everyday_special_occasion": 0.2332,
        "lowkey_statement": 0.0009,
        "grounded_ethereal": -0.1944
      },
      "metrics": {
        "vectorStrength": 0.7661,
        "maxAbsScore": 0.4982,
        "focusRatio": 0.2522
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.4982
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "imaginative": {
      "id": "imaginative",
      "term": "Imaginative",
      "cleanTerm": "imaginative",
      "dedupeKey": "imaginative",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.1729,
        "classic_unexpected": 0.3521,
        "minimal_ornate": 0.2476,
        "soft_sharp": -0.2332,
        "romantic_edgy": -0.1125,
        "organic_geometric": -0.221,
        "playful_refined": -0.2545,
        "everyday_special_occasion": 0.1916,
        "lowkey_statement": -0.1322,
        "grounded_ethereal": 0.3683
      },
      "metrics": {
        "vectorStrength": 0.7653,
        "maxAbsScore": 0.3683,
        "focusRatio": 0.1611
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.3683
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "intimate": {
      "id": "intimate",
      "term": "Intimate",
      "cleanTerm": "intimate",
      "dedupeKey": "intimate",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2654,
        "classic_unexpected": -0.0682,
        "minimal_ornate": 0.0327,
        "soft_sharp": -0.3172,
        "romantic_edgy": -0.2549,
        "organic_geometric": -0.1977,
        "playful_refined": 0.0661,
        "everyday_special_occasion": 0.2157,
        "lowkey_statement": -0.4564,
        "grounded_ethereal": -0.1844
      },
      "metrics": {
        "vectorStrength": 0.7576,
        "maxAbsScore": 0.4564,
        "focusRatio": 0.2217
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.4564
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "meticulous": {
      "id": "meticulous",
      "term": "Meticulous",
      "cleanTerm": "meticulous",
      "dedupeKey": "meticulous",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.2277,
        "classic_unexpected": -0.3988,
        "minimal_ornate": 0.0735,
        "soft_sharp": 0.0894,
        "romantic_edgy": -0.0406,
        "organic_geometric": 0.0992,
        "playful_refined": 0.462,
        "everyday_special_occasion": 0.1232,
        "lowkey_statement": -0.3267,
        "grounded_ethereal": 0.0161
      },
      "metrics": {
        "vectorStrength": 0.7559,
        "maxAbsScore": 0.462,
        "focusRatio": 0.2488
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.462
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "sincerity": {
      "id": "sincerity",
      "term": "Sincerity",
      "cleanTerm": "sincerity",
      "dedupeKey": "sincerity",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.0231,
        "classic_unexpected": -0.2444,
        "minimal_ornate": -0.5028,
        "soft_sharp": -0.1358,
        "romantic_edgy": -0.2059,
        "organic_geometric": -0.174,
        "playful_refined": -0.1757,
        "everyday_special_occasion": -0.1121,
        "lowkey_statement": 0.0276,
        "grounded_ethereal": -0.3457
      },
      "metrics": {
        "vectorStrength": 0.7536,
        "maxAbsScore": 0.5028,
        "focusRatio": 0.2583
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5028
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "memory": {
      "id": "memory",
      "term": "Memory",
      "cleanTerm": "memory",
      "dedupeKey": "memory",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.1035,
        "classic_unexpected": -0.3532,
        "minimal_ornate": -0.4051,
        "soft_sharp": -0.3265,
        "romantic_edgy": -0.2033,
        "organic_geometric": 0.1854,
        "playful_refined": 0.1944,
        "everyday_special_occasion": 0.1532,
        "lowkey_statement": -0.0502,
        "grounded_ethereal": -0.0871
      },
      "metrics": {
        "vectorStrength": 0.7438,
        "maxAbsScore": 0.4051,
        "focusRatio": 0.1965
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4051
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "alluring": {
      "id": "alluring",
      "term": "Alluring",
      "cleanTerm": "alluring",
      "dedupeKey": "alluring",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1919,
        "classic_unexpected": 0.1087,
        "minimal_ornate": 0.3249,
        "soft_sharp": -0.2687,
        "romantic_edgy": -0.3109,
        "organic_geometric": -0.3871,
        "playful_refined": -0.1652,
        "everyday_special_occasion": -0.0154,
        "lowkey_statement": -0.0917,
        "grounded_ethereal": 0.1831
      },
      "metrics": {
        "vectorStrength": 0.7365,
        "maxAbsScore": 0.3871,
        "focusRatio": 0.1891
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.3871
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "expressive": {
      "id": "expressive",
      "term": "Expressive",
      "cleanTerm": "expressive",
      "dedupeKey": "expressive",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.3978,
        "classic_unexpected": 0.0954,
        "minimal_ornate": 0.3345,
        "soft_sharp": -0.1763,
        "romantic_edgy": -0.2576,
        "organic_geometric": -0.1778,
        "playful_refined": 0.0628,
        "everyday_special_occasion": 0.307,
        "lowkey_statement": -0.0417,
        "grounded_ethereal": -0.1075
      },
      "metrics": {
        "vectorStrength": 0.721,
        "maxAbsScore": 0.3978,
        "focusRatio": 0.2031
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.3978
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "enigmatic": {
      "id": "enigmatic",
      "term": "Enigmatic",
      "cleanTerm": "enigmatic",
      "dedupeKey": "enigmatic",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.144,
        "classic_unexpected": 0.3796,
        "minimal_ornate": 0.0345,
        "soft_sharp": -0.0907,
        "romantic_edgy": 0.105,
        "organic_geometric": -0.1958,
        "playful_refined": -0.1374,
        "everyday_special_occasion": 0.068,
        "lowkey_statement": -0.2471,
        "grounded_ethereal": 0.4415
      },
      "metrics": {
        "vectorStrength": 0.7093,
        "maxAbsScore": 0.4415,
        "focusRatio": 0.2395
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.4415
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "symmetry": {
      "id": "symmetry",
      "term": "Symmetry",
      "cleanTerm": "symmetry",
      "dedupeKey": "symmetry",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0645,
        "classic_unexpected": -0.3454,
        "minimal_ornate": -0.3352,
        "soft_sharp": -0.1494,
        "romantic_edgy": -0.0313,
        "organic_geometric": 0.4124,
        "playful_refined": 0.1264,
        "everyday_special_occasion": -0.1857,
        "lowkey_statement": 0.1095,
        "grounded_ethereal": -0.0907
      },
      "metrics": {
        "vectorStrength": 0.707,
        "maxAbsScore": 0.4124,
        "focusRatio": 0.2228
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Geometric",
        "score": 0.4124
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "growing": {
      "id": "growing",
      "term": "Growing",
      "cleanTerm": "growing",
      "dedupeKey": "growing",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1297,
        "classic_unexpected": 0.0886,
        "minimal_ornate": 0.1505,
        "soft_sharp": -0.2846,
        "romantic_edgy": 0.0152,
        "organic_geometric": -0.3251,
        "playful_refined": 0.2118,
        "everyday_special_occasion": 0.0774,
        "lowkey_statement": -0.0293,
        "grounded_ethereal": -0.418
      },
      "metrics": {
        "vectorStrength": 0.6787,
        "maxAbsScore": 0.418,
        "focusRatio": 0.2416
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.418
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "curated": {
      "id": "curated",
      "term": "Curated",
      "cleanTerm": "curated",
      "dedupeKey": "curated",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.031,
        "classic_unexpected": -0.23,
        "minimal_ornate": -0.1085,
        "soft_sharp": -0.0564,
        "romantic_edgy": -0.0647,
        "organic_geometric": 0.0469,
        "playful_refined": 0.5067,
        "everyday_special_occasion": 0.2849,
        "lowkey_statement": -0.108,
        "grounded_ethereal": -0.1886
      },
      "metrics": {
        "vectorStrength": 0.6785,
        "maxAbsScore": 0.5067,
        "focusRatio": 0.3117
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5067
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "vibrant": {
      "id": "vibrant",
      "term": "Vibrant",
      "cleanTerm": "vibrant",
      "dedupeKey": "vibrant",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.4415,
        "classic_unexpected": 0.1557,
        "minimal_ornate": 0.2211,
        "soft_sharp": -0.1558,
        "romantic_edgy": -0.1778,
        "organic_geometric": -0.1998,
        "playful_refined": -0.2261,
        "everyday_special_occasion": 0.1207,
        "lowkey_statement": 0.1014,
        "grounded_ethereal": -0.1095
      },
      "metrics": {
        "vectorStrength": 0.6722,
        "maxAbsScore": 0.4415,
        "focusRatio": 0.2312
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.4415
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "beaming": {
      "id": "beaming",
      "term": "Beaming",
      "cleanTerm": "beaming",
      "dedupeKey": "beaming",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.2761,
        "classic_unexpected": -0.0396,
        "minimal_ornate": 0.0545,
        "soft_sharp": -0.1758,
        "romantic_edgy": -0.4472,
        "organic_geometric": 0.0494,
        "playful_refined": -0.2019,
        "everyday_special_occasion": 0.2158,
        "lowkey_statement": 0.2086,
        "grounded_ethereal": 0.0492
      },
      "metrics": {
        "vectorStrength": 0.6688,
        "maxAbsScore": 0.4472,
        "focusRatio": 0.2603
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.4472
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "fresh": {
      "id": "fresh",
      "term": "Fresh",
      "cleanTerm": "fresh",
      "dedupeKey": "fresh",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0008,
        "classic_unexpected": 0.0798,
        "minimal_ornate": -0.4203,
        "soft_sharp": -0.1481,
        "romantic_edgy": -0.1327,
        "organic_geometric": -0.3594,
        "playful_refined": -0.0393,
        "everyday_special_occasion": -0.028,
        "lowkey_statement": -0.13,
        "grounded_ethereal": -0.2675
      },
      "metrics": {
        "vectorStrength": 0.6652,
        "maxAbsScore": 0.4203,
        "focusRatio": 0.2617
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4203
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "shine": {
      "id": "shine",
      "term": "Shine",
      "cleanTerm": "shine",
      "dedupeKey": "shine",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0659,
        "classic_unexpected": -0.2208,
        "minimal_ornate": -0.2813,
        "soft_sharp": -0.1503,
        "romantic_edgy": -0.453,
        "organic_geometric": 0.1061,
        "playful_refined": -0.1333,
        "everyday_special_occasion": 0.0428,
        "lowkey_statement": 0.1501,
        "grounded_ethereal": 0.1609
      },
      "metrics": {
        "vectorStrength": 0.6628,
        "maxAbsScore": 0.453,
        "focusRatio": 0.2567
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.453
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "freedom": {
      "id": "freedom",
      "term": "Freedom",
      "cleanTerm": "freedom",
      "dedupeKey": "freedom",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1153,
        "classic_unexpected": -0.1091,
        "minimal_ornate": -0.4331,
        "soft_sharp": -0.2502,
        "romantic_edgy": 0.3287,
        "organic_geometric": -0.1048,
        "playful_refined": -0.0381,
        "everyday_special_occasion": -0.1698,
        "lowkey_statement": -0.0215,
        "grounded_ethereal": -0.0401
      },
      "metrics": {
        "vectorStrength": 0.6532,
        "maxAbsScore": 0.4331,
        "focusRatio": 0.2689
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4331
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "illusion": {
      "id": "illusion",
      "term": "Illusion",
      "cleanTerm": "illusion",
      "dedupeKey": "illusion",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0056,
        "classic_unexpected": 0.1855,
        "minimal_ornate": -0.1055,
        "soft_sharp": -0.0944,
        "romantic_edgy": 0.1286,
        "organic_geometric": 0.0627,
        "playful_refined": -0.087,
        "everyday_special_occasion": -0.0127,
        "lowkey_statement": 0.0404,
        "grounded_ethereal": 0.5217
      },
      "metrics": {
        "vectorStrength": 0.597,
        "maxAbsScore": 0.5217,
        "focusRatio": 0.4193
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.5217
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "easy_going": {
      "id": "easy_going",
      "term": "Easy-Going",
      "cleanTerm": "easy-going",
      "dedupeKey": "easy-going",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0179,
        "classic_unexpected": 0.008,
        "minimal_ornate": -0.606,
        "soft_sharp": -0.8359,
        "romantic_edgy": -0.2698,
        "organic_geometric": -0.3595,
        "playful_refined": -0.2395,
        "everyday_special_occasion": -1.0,
        "lowkey_statement": -0.8143,
        "grounded_ethereal": -0.0549
      },
      "metrics": {
        "vectorStrength": 1.7297,
        "maxAbsScore": 1.0,
        "focusRatio": 0.2378
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -1.0
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "smooth": {
      "id": "smooth",
      "term": "Smooth",
      "cleanTerm": "smooth",
      "dedupeKey": "smooth",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1705,
        "classic_unexpected": -0.4405,
        "minimal_ornate": -0.6529,
        "soft_sharp": -0.7314,
        "romantic_edgy": -0.5357,
        "organic_geometric": -0.0609,
        "playful_refined": 0.5193,
        "everyday_special_occasion": -0.5148,
        "lowkey_statement": -0.4999,
        "grounded_ethereal": -0.1056
      },
      "metrics": {
        "vectorStrength": 1.5069,
        "maxAbsScore": 0.7314,
        "focusRatio": 0.1728
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.7314
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "unfussy": {
      "id": "unfussy",
      "term": "Unfussy",
      "cleanTerm": "unfussy",
      "dedupeKey": "unfussy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1835,
        "classic_unexpected": -0.2169,
        "minimal_ornate": -0.8162,
        "soft_sharp": -0.4603,
        "romantic_edgy": -0.1203,
        "organic_geometric": -0.1599,
        "playful_refined": 0.003,
        "everyday_special_occasion": -0.7597,
        "lowkey_statement": -0.7306,
        "grounded_ethereal": -0.1946
      },
      "metrics": {
        "vectorStrength": 1.4654,
        "maxAbsScore": 0.8162,
        "focusRatio": 0.2239
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.8162
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "fairy_like": {
      "id": "fairy_like",
      "term": "Fairy-Like",
      "cleanTerm": "fairy-like",
      "dedupeKey": "fairy-like",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.4287,
        "classic_unexpected": -0.1395,
        "minimal_ornate": 0.2133,
        "soft_sharp": -0.5709,
        "romantic_edgy": -0.4679,
        "organic_geometric": -0.4688,
        "playful_refined": -0.3926,
        "everyday_special_occasion": -0.0181,
        "lowkey_statement": -0.3602,
        "grounded_ethereal": 0.7274
      },
      "metrics": {
        "vectorStrength": 1.3515,
        "maxAbsScore": 0.7274,
        "focusRatio": 0.1921
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7274
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "unassuming": {
      "id": "unassuming",
      "term": "Unassuming",
      "cleanTerm": "unassuming",
      "dedupeKey": "unassuming",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.0635,
        "classic_unexpected": 0.4221,
        "minimal_ornate": -0.7984,
        "soft_sharp": -0.4591,
        "romantic_edgy": -0.0993,
        "organic_geometric": -0.3096,
        "playful_refined": -0.0797,
        "everyday_special_occasion": -0.3986,
        "lowkey_statement": -0.6211,
        "grounded_ethereal": -0.1689
      },
      "metrics": {
        "vectorStrength": 1.3099,
        "maxAbsScore": 0.7984,
        "focusRatio": 0.2334
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.7984
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "rebellious": {
      "id": "rebellious",
      "term": "Rebellious",
      "cleanTerm": "rebellious",
      "dedupeKey": "rebellious",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.4099,
        "classic_unexpected": 0.5041,
        "minimal_ornate": 0.0395,
        "soft_sharp": 0.0119,
        "romantic_edgy": 1.0,
        "organic_geometric": -0.3644,
        "playful_refined": -0.2413,
        "everyday_special_occasion": -0.0546,
        "lowkey_statement": -0.1461,
        "grounded_ethereal": 0.0184
      },
      "metrics": {
        "vectorStrength": 1.2804,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3584
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 1.0
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "subdued": {
      "id": "subdued",
      "term": "Subdued",
      "cleanTerm": "subdued",
      "dedupeKey": "subdued",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1841,
        "classic_unexpected": 0.0855,
        "minimal_ornate": -0.5802,
        "soft_sharp": -0.5122,
        "romantic_edgy": -0.088,
        "organic_geometric": -0.1835,
        "playful_refined": 0.4022,
        "everyday_special_occasion": -0.063,
        "lowkey_statement": -0.8558,
        "grounded_ethereal": -0.1242
      },
      "metrics": {
        "vectorStrength": 1.263,
        "maxAbsScore": 0.8558,
        "focusRatio": 0.278
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.8558
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "minimalist": {
      "id": "minimalist",
      "term": "Minimalist",
      "cleanTerm": "minimalist",
      "dedupeKey": "minimalist",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.4145,
        "classic_unexpected": -0.3996,
        "minimal_ornate": -0.8434,
        "soft_sharp": -0.0857,
        "romantic_edgy": -0.0226,
        "organic_geometric": 0.2965,
        "playful_refined": 0.3036,
        "everyday_special_occasion": -0.4523,
        "lowkey_statement": -0.335,
        "grounded_ethereal": 0.0487
      },
      "metrics": {
        "vectorStrength": 1.245,
        "maxAbsScore": 0.8434,
        "focusRatio": 0.2634
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.8434
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "mischievous": {
      "id": "mischievous",
      "term": "Mischievous",
      "cleanTerm": "mischievous",
      "dedupeKey": "mischievous",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.0111,
        "classic_unexpected": 0.6062,
        "minimal_ornate": -0.0866,
        "soft_sharp": -0.0574,
        "romantic_edgy": 0.3634,
        "organic_geometric": -0.4644,
        "playful_refined": -0.7874,
        "everyday_special_occasion": -0.0827,
        "lowkey_statement": -0.4024,
        "grounded_ethereal": 0.0595
      },
      "metrics": {
        "vectorStrength": 1.2323,
        "maxAbsScore": 0.7874,
        "focusRatio": 0.2695
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.7874
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "lush": {
      "id": "lush",
      "term": "Lush",
      "cleanTerm": "lush",
      "dedupeKey": "lush",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": -0.2143,
        "classic_unexpected": -0.3506,
        "minimal_ornate": -0.1126,
        "soft_sharp": -0.7122,
        "romantic_edgy": -0.5903,
        "organic_geometric": -0.2635,
        "playful_refined": 0.1597,
        "everyday_special_occasion": -0.0631,
        "lowkey_statement": -0.5154,
        "grounded_ethereal": 0.3214
      },
      "metrics": {
        "vectorStrength": 1.2268,
        "maxAbsScore": 0.7122,
        "focusRatio": 0.2156
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.7122
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "uncluttered": {
      "id": "uncluttered",
      "term": "Uncluttered",
      "cleanTerm": "uncluttered",
      "dedupeKey": "uncluttered",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.0599,
        "classic_unexpected": -0.2446,
        "minimal_ornate": -0.9186,
        "soft_sharp": -0.1957,
        "romantic_edgy": -0.1019,
        "organic_geometric": 0.2083,
        "playful_refined": 0.3778,
        "everyday_special_occasion": -0.195,
        "lowkey_statement": -0.4886,
        "grounded_ethereal": -0.1988
      },
      "metrics": {
        "vectorStrength": 1.2076,
        "maxAbsScore": 0.9186,
        "focusRatio": 0.3073
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.9186
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "fluid": {
      "id": "fluid",
      "term": "Fluid",
      "cleanTerm": "fluid",
      "dedupeKey": "fluid",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0996,
        "classic_unexpected": -0.1417,
        "minimal_ornate": -0.2076,
        "soft_sharp": -0.8584,
        "romantic_edgy": -0.3105,
        "organic_geometric": -0.2573,
        "playful_refined": 0.0988,
        "everyday_special_occasion": -0.3865,
        "lowkey_statement": -0.4588,
        "grounded_ethereal": 0.2447
      },
      "metrics": {
        "vectorStrength": 1.1841,
        "maxAbsScore": 0.8584,
        "focusRatio": 0.2802
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.8584
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "unruly": {
      "id": "unruly",
      "term": "Unruly",
      "cleanTerm": "unruly",
      "dedupeKey": "unruly",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.1855,
        "classic_unexpected": 0.5366,
        "minimal_ornate": -0.1744,
        "soft_sharp": -0.0081,
        "romantic_edgy": 0.7689,
        "organic_geometric": -0.4613,
        "playful_refined": -0.2813,
        "everyday_special_occasion": -0.1115,
        "lowkey_statement": -0.3262,
        "grounded_ethereal": -0.1591
      },
      "metrics": {
        "vectorStrength": 1.1748,
        "maxAbsScore": 0.7689,
        "focusRatio": 0.2552
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.7689
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "caressing": {
      "id": "caressing",
      "term": "Caressing",
      "cleanTerm": "caressing",
      "dedupeKey": "caressing",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.3085,
        "classic_unexpected": -0.0774,
        "minimal_ornate": 0.0372,
        "soft_sharp": -0.7358,
        "romantic_edgy": -0.6862,
        "organic_geometric": -0.2694,
        "playful_refined": 0.0058,
        "everyday_special_occasion": -0.0266,
        "lowkey_statement": -0.4104,
        "grounded_ethereal": -0.1001
      },
      "metrics": {
        "vectorStrength": 1.169,
        "maxAbsScore": 0.7358,
        "focusRatio": 0.2769
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.7358
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "otherworldly": {
      "id": "otherworldly",
      "term": "Otherworldly",
      "cleanTerm": "otherworldly",
      "dedupeKey": "otherworldly",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 12,
      "scores": {
        "delicate_bold": 0.0987,
        "classic_unexpected": 0.1809,
        "minimal_ornate": 0.0833,
        "soft_sharp": -0.3265,
        "romantic_edgy": 0.2203,
        "organic_geometric": -0.5209,
        "playful_refined": -0.0998,
        "everyday_special_occasion": -0.029,
        "lowkey_statement": -0.1508,
        "grounded_ethereal": 0.9126
      },
      "metrics": {
        "vectorStrength": 1.1586,
        "maxAbsScore": 0.9126,
        "focusRatio": 0.348
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.9126
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "ornamentation": {
      "id": "ornamentation",
      "term": "Ornamentation",
      "cleanTerm": "ornamentation",
      "dedupeKey": "ornamentation",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 13,
      "scores": {
        "delicate_bold": -0.1996,
        "classic_unexpected": -0.3211,
        "minimal_ornate": 0.9481,
        "soft_sharp": 0.0714,
        "romantic_edgy": -0.1388,
        "organic_geometric": 0.2661,
        "playful_refined": 0.138,
        "everyday_special_occasion": 0.3277,
        "lowkey_statement": 0.1679,
        "grounded_ethereal": 0.1905
      },
      "metrics": {
        "vectorStrength": 1.1524,
        "maxAbsScore": 0.9481,
        "focusRatio": 0.3424
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.9481
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "floating": {
      "id": "floating",
      "term": "Floating",
      "cleanTerm": "floating",
      "dedupeKey": "floating",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.0341,
        "classic_unexpected": -0.1045,
        "minimal_ornate": -0.1403,
        "soft_sharp": -0.6361,
        "romantic_edgy": -0.1806,
        "organic_geometric": -0.0097,
        "playful_refined": 0.1821,
        "everyday_special_occasion": -0.2707,
        "lowkey_statement": -0.0934,
        "grounded_ethereal": 0.8373
      },
      "metrics": {
        "vectorStrength": 1.1337,
        "maxAbsScore": 0.8373,
        "focusRatio": 0.3364
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.8373
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "sweet": {
      "id": "sweet",
      "term": "Sweet",
      "cleanTerm": "sweet",
      "dedupeKey": "sweet",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.1628,
        "classic_unexpected": -0.1159,
        "minimal_ornate": -0.2525,
        "soft_sharp": -0.3579,
        "romantic_edgy": -0.9206,
        "organic_geometric": -0.2608,
        "playful_refined": 0.0138,
        "everyday_special_occasion": 0.1695,
        "lowkey_statement": -0.2477,
        "grounded_ethereal": -0.1999
      },
      "metrics": {
        "vectorStrength": 1.1303,
        "maxAbsScore": 0.9206,
        "focusRatio": 0.3408
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.9206
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "distinguished": {
      "id": "distinguished",
      "term": "Distinguished",
      "cleanTerm": "distinguished",
      "dedupeKey": "distinguished",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 13,
      "scores": {
        "delicate_bold": 0.3838,
        "classic_unexpected": -0.3286,
        "minimal_ornate": 0.2614,
        "soft_sharp": -0.0191,
        "romantic_edgy": -0.0107,
        "organic_geometric": 0.2179,
        "playful_refined": 0.6622,
        "everyday_special_occasion": 0.5938,
        "lowkey_statement": 0.2451,
        "grounded_ethereal": 0.1941
      },
      "metrics": {
        "vectorStrength": 1.1227,
        "maxAbsScore": 0.6622,
        "focusRatio": 0.227
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.6622
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "luxuriant": {
      "id": "luxuriant",
      "term": "Luxuriant",
      "cleanTerm": "luxuriant",
      "dedupeKey": "luxuriant",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0099,
        "classic_unexpected": -0.3259,
        "minimal_ornate": 0.5525,
        "soft_sharp": -0.519,
        "romantic_edgy": -0.3818,
        "organic_geometric": -0.1818,
        "playful_refined": 0.2654,
        "everyday_special_occasion": 0.0122,
        "lowkey_statement": -0.3579,
        "grounded_ethereal": 0.4418
      },
      "metrics": {
        "vectorStrength": 1.1197,
        "maxAbsScore": 0.5525,
        "focusRatio": 0.1813
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.5525
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "refined": {
      "id": "refined",
      "term": "Refined",
      "cleanTerm": "refined",
      "dedupeKey": "refined",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.2837,
        "classic_unexpected": -0.4243,
        "minimal_ornate": -0.0804,
        "soft_sharp": 0.0393,
        "romantic_edgy": -0.0143,
        "organic_geometric": -0.0953,
        "playful_refined": 0.8101,
        "everyday_special_occasion": 0.125,
        "lowkey_statement": -0.4466,
        "grounded_ethereal": -0.2411
      },
      "metrics": {
        "vectorStrength": 1.0988,
        "maxAbsScore": 0.8101,
        "focusRatio": 0.3164
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.8101
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "nuanced": {
      "id": "nuanced",
      "term": "Nuanced",
      "cleanTerm": "nuanced",
      "dedupeKey": "nuanced",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.4463,
        "classic_unexpected": -0.0141,
        "minimal_ornate": 0.2416,
        "soft_sharp": -0.0052,
        "romantic_edgy": -0.3425,
        "organic_geometric": -0.1626,
        "playful_refined": 0.5329,
        "everyday_special_occasion": 0.129,
        "lowkey_statement": -0.6889,
        "grounded_ethereal": -0.1706
      },
      "metrics": {
        "vectorStrength": 1.0981,
        "maxAbsScore": 0.6889,
        "focusRatio": 0.252
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.6889
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "weightless": {
      "id": "weightless",
      "term": "Weightless",
      "cleanTerm": "weightless",
      "dedupeKey": "weightless",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.172,
        "classic_unexpected": -0.1578,
        "minimal_ornate": -0.5732,
        "soft_sharp": -0.3783,
        "romantic_edgy": -0.0447,
        "organic_geometric": -0.0418,
        "playful_refined": -0.018,
        "everyday_special_occasion": -0.6724,
        "lowkey_statement": -0.2891,
        "grounded_ethereal": 0.374
      },
      "metrics": {
        "vectorStrength": 1.0981,
        "maxAbsScore": 0.6724,
        "focusRatio": 0.2471
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -0.6724
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "startling": {
      "id": "startling",
      "term": "Startling",
      "cleanTerm": "startling",
      "dedupeKey": "startling",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.4602,
        "classic_unexpected": 0.7929,
        "minimal_ornate": -0.1739,
        "soft_sharp": 0.094,
        "romantic_edgy": 0.1729,
        "organic_geometric": -0.1858,
        "playful_refined": -0.1373,
        "everyday_special_occasion": 0.3554,
        "lowkey_statement": 0.2455,
        "grounded_ethereal": -0.1252
      },
      "metrics": {
        "vectorStrength": 1.0794,
        "maxAbsScore": 0.7929,
        "focusRatio": 0.2891
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.7929
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "nurturing": {
      "id": "nurturing",
      "term": "Nurturing",
      "cleanTerm": "nurturing",
      "dedupeKey": "nurturing",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.1334,
        "classic_unexpected": -0.0648,
        "minimal_ornate": -0.0754,
        "soft_sharp": -0.6637,
        "romantic_edgy": -0.364,
        "organic_geometric": -0.3819,
        "playful_refined": -0.0097,
        "everyday_special_occasion": -0.0471,
        "lowkey_statement": -0.3919,
        "grounded_ethereal": -0.5028
      },
      "metrics": {
        "vectorStrength": 1.0748,
        "maxAbsScore": 0.6637,
        "focusRatio": 0.2519
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.6637
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "angelic": {
      "id": "angelic",
      "term": "Angelic",
      "cleanTerm": "angelic",
      "dedupeKey": "angelic",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.0891,
        "classic_unexpected": -0.1912,
        "minimal_ornate": 0.0068,
        "soft_sharp": -0.4225,
        "romantic_edgy": -0.465,
        "organic_geometric": -0.2025,
        "playful_refined": 0.0479,
        "everyday_special_occasion": 0.1128,
        "lowkey_statement": -0.2725,
        "grounded_ethereal": 0.7516
      },
      "metrics": {
        "vectorStrength": 1.0652,
        "maxAbsScore": 0.7516,
        "focusRatio": 0.2934
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7516
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "cheerful": {
      "id": "cheerful",
      "term": "Cheerful",
      "cleanTerm": "cheerful",
      "dedupeKey": "cheerful",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.2655,
        "classic_unexpected": 0.056,
        "minimal_ornate": -0.0936,
        "soft_sharp": -0.3436,
        "romantic_edgy": -0.4519,
        "organic_geometric": -0.1347,
        "playful_refined": -0.789,
        "everyday_special_occasion": 0.0353,
        "lowkey_statement": -0.279,
        "grounded_ethereal": 0.0314
      },
      "metrics": {
        "vectorStrength": 1.0608,
        "maxAbsScore": 0.789,
        "focusRatio": 0.3181
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.789
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "bare": {
      "id": "bare",
      "term": "Bare",
      "cleanTerm": "bare",
      "dedupeKey": "bare",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": -0.1353,
        "classic_unexpected": -0.0216,
        "minimal_ornate": -0.4093,
        "soft_sharp": -0.6527,
        "romantic_edgy": 0.0451,
        "organic_geometric": -0.3707,
        "playful_refined": 0.0927,
        "everyday_special_occasion": -0.3313,
        "lowkey_statement": -0.496,
        "grounded_ethereal": 0.0172
      },
      "metrics": {
        "vectorStrength": 1.0566,
        "maxAbsScore": 0.6527,
        "focusRatio": 0.2538
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.6527
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "untamed": {
      "id": "untamed",
      "term": "Untamed",
      "cleanTerm": "untamed",
      "dedupeKey": "untamed",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.2443,
        "classic_unexpected": 0.2578,
        "minimal_ornate": -0.3271,
        "soft_sharp": -0.1373,
        "romantic_edgy": 0.5166,
        "organic_geometric": -0.705,
        "playful_refined": 0.0253,
        "everyday_special_occasion": -0.1235,
        "lowkey_statement": -0.0766,
        "grounded_ethereal": -0.2503
      },
      "metrics": {
        "vectorStrength": 1.049,
        "maxAbsScore": 0.705,
        "focusRatio": 0.2647
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.705
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "pleasant": {
      "id": "pleasant",
      "term": "Pleasant",
      "cleanTerm": "pleasant",
      "dedupeKey": "pleasant",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0701,
        "classic_unexpected": -0.1958,
        "minimal_ornate": -0.153,
        "soft_sharp": -0.5653,
        "romantic_edgy": -0.6688,
        "organic_geometric": -0.1954,
        "playful_refined": 0.1054,
        "everyday_special_occasion": 0.1985,
        "lowkey_statement": -0.3721,
        "grounded_ethereal": -0.1748
      },
      "metrics": {
        "vectorStrength": 1.0447,
        "maxAbsScore": 0.6688,
        "focusRatio": 0.2478
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.6688
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "harmonious": {
      "id": "harmonious",
      "term": "Harmonious",
      "cleanTerm": "harmonious",
      "dedupeKey": "harmonious",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.2224,
        "classic_unexpected": -0.3024,
        "minimal_ornate": -0.2152,
        "soft_sharp": -0.6037,
        "romantic_edgy": -0.536,
        "organic_geometric": -0.1128,
        "playful_refined": -0.0078,
        "everyday_special_occasion": -0.152,
        "lowkey_statement": -0.4513,
        "grounded_ethereal": 0.0224
      },
      "metrics": {
        "vectorStrength": 1.0388,
        "maxAbsScore": 0.6037,
        "focusRatio": 0.2299
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.6037
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "serenity": {
      "id": "serenity",
      "term": "Serenity",
      "cleanTerm": "serenity",
      "dedupeKey": "serenity",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.1339,
        "classic_unexpected": -0.3246,
        "minimal_ornate": -0.5999,
        "soft_sharp": -0.4469,
        "romantic_edgy": -0.3608,
        "organic_geometric": -0.1185,
        "playful_refined": 0.0985,
        "everyday_special_occasion": -0.2132,
        "lowkey_statement": -0.4229,
        "grounded_ethereal": 0.0642
      },
      "metrics": {
        "vectorStrength": 1.0321,
        "maxAbsScore": 0.5999,
        "focusRatio": 0.2155
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5999
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "roots": {
      "id": "roots",
      "term": "Roots",
      "cleanTerm": "roots",
      "dedupeKey": "roots",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.0765,
        "classic_unexpected": -0.0781,
        "minimal_ornate": -0.2293,
        "soft_sharp": -0.1045,
        "romantic_edgy": 0.2692,
        "organic_geometric": -0.3322,
        "playful_refined": 0.1165,
        "everyday_special_occasion": -0.0332,
        "lowkey_statement": 0.2035,
        "grounded_ethereal": -0.8619
      },
      "metrics": {
        "vectorStrength": 1.0282,
        "maxAbsScore": 0.8619,
        "focusRatio": 0.3739
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.8619
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "exquisite": {
      "id": "exquisite",
      "term": "Exquisite",
      "cleanTerm": "exquisite",
      "dedupeKey": "exquisite",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0809,
        "classic_unexpected": -0.2985,
        "minimal_ornate": 0.4611,
        "soft_sharp": 0.0648,
        "romantic_edgy": -0.1983,
        "organic_geometric": -0.0675,
        "playful_refined": 0.5992,
        "everyday_special_occasion": 0.4848,
        "lowkey_statement": 0.0391,
        "grounded_ethereal": 0.2908
      },
      "metrics": {
        "vectorStrength": 1.0181,
        "maxAbsScore": 0.5992,
        "focusRatio": 0.2318
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5992
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "elevated": {
      "id": "elevated",
      "term": "Elevated",
      "cleanTerm": "elevated",
      "dedupeKey": "elevated",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.4275,
        "classic_unexpected": 0.0365,
        "minimal_ornate": 0.0316,
        "soft_sharp": 0.0228,
        "romantic_edgy": 0.0058,
        "organic_geometric": 0.0598,
        "playful_refined": 0.8031,
        "everyday_special_occasion": 0.4442,
        "lowkey_statement": -0.0584,
        "grounded_ethereal": 0.0348
      },
      "metrics": {
        "vectorStrength": 1.0179,
        "maxAbsScore": 0.8031,
        "focusRatio": 0.4173
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.8031
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "spunky": {
      "id": "spunky",
      "term": "Spunky",
      "cleanTerm": "spunky",
      "dedupeKey": "spunky",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1449,
        "classic_unexpected": 0.3874,
        "minimal_ornate": -0.265,
        "soft_sharp": 0.2437,
        "romantic_edgy": 0.1726,
        "organic_geometric": -0.3103,
        "playful_refined": -0.6032,
        "everyday_special_occasion": -0.1831,
        "lowkey_statement": -0.2969,
        "grounded_ethereal": -0.3308
      },
      "metrics": {
        "vectorStrength": 1.0108,
        "maxAbsScore": 0.6032,
        "focusRatio": 0.2053
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.6032
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "sublime": {
      "id": "sublime",
      "term": "Sublime",
      "cleanTerm": "sublime",
      "dedupeKey": "sublime",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1801,
        "classic_unexpected": -0.125,
        "minimal_ornate": -0.3204,
        "soft_sharp": -0.4644,
        "romantic_edgy": -0.3793,
        "organic_geometric": -0.2452,
        "playful_refined": 0.3217,
        "everyday_special_occasion": 0.0054,
        "lowkey_statement": -0.306,
        "grounded_ethereal": 0.495
      },
      "metrics": {
        "vectorStrength": 1.0062,
        "maxAbsScore": 0.495,
        "focusRatio": 0.1741
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.495
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "draped": {
      "id": "draped",
      "term": "Draped",
      "cleanTerm": "draped",
      "dedupeKey": "draped",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.0093,
        "classic_unexpected": -0.3799,
        "minimal_ornate": 0.47,
        "soft_sharp": -0.3945,
        "romantic_edgy": -0.3429,
        "organic_geometric": 0.1386,
        "playful_refined": 0.5114,
        "everyday_special_occasion": 0.0683,
        "lowkey_statement": -0.1509,
        "grounded_ethereal": 0.2335
      },
      "metrics": {
        "vectorStrength": 1.0006,
        "maxAbsScore": 0.5114,
        "focusRatio": 0.1895
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5114
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "unrefined": {
      "id": "unrefined",
      "term": "Unrefined",
      "cleanTerm": "unrefined",
      "dedupeKey": "unrefined",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.1809,
        "classic_unexpected": 0.1007,
        "minimal_ornate": -0.3939,
        "soft_sharp": -0.0334,
        "romantic_edgy": 0.1787,
        "organic_geometric": -0.5252,
        "playful_refined": 0.387,
        "everyday_special_occasion": -0.2345,
        "lowkey_statement": -0.3714,
        "grounded_ethereal": -0.3604
      },
      "metrics": {
        "vectorStrength": 0.9897,
        "maxAbsScore": 0.5252,
        "focusRatio": 0.1899
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.5252
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "groundbreaking": {
      "id": "groundbreaking",
      "term": "Groundbreaking",
      "cleanTerm": "groundbreaking",
      "dedupeKey": "groundbreaking",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 14,
      "scores": {
        "delicate_bold": 0.3481,
        "classic_unexpected": 0.406,
        "minimal_ornate": -0.2255,
        "soft_sharp": 0.0409,
        "romantic_edgy": 0.5161,
        "organic_geometric": -0.0914,
        "playful_refined": 0.0789,
        "everyday_special_occasion": 0.297,
        "lowkey_statement": 0.4602,
        "grounded_ethereal": -0.1522
      },
      "metrics": {
        "vectorStrength": 0.9709,
        "maxAbsScore": 0.5161,
        "focusRatio": 0.1973
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.5161
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "dramatic": {
      "id": "dramatic",
      "term": "Dramatic",
      "cleanTerm": "dramatic",
      "dedupeKey": "dramatic",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.6627,
        "classic_unexpected": 0.2609,
        "minimal_ornate": 0.3514,
        "soft_sharp": 0.006,
        "romantic_edgy": 0.0149,
        "organic_geometric": -0.0321,
        "playful_refined": 0.0556,
        "everyday_special_occasion": 0.4979,
        "lowkey_statement": 0.1557,
        "grounded_ethereal": 0.1773
      },
      "metrics": {
        "vectorStrength": 0.9689,
        "maxAbsScore": 0.6627,
        "focusRatio": 0.2992
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.6627
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "grounded": {
      "id": "grounded",
      "term": "Grounded",
      "cleanTerm": "grounded",
      "dedupeKey": "grounded",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.2195,
        "classic_unexpected": -0.0468,
        "minimal_ornate": -0.2928,
        "soft_sharp": -0.0547,
        "romantic_edgy": 0.0971,
        "organic_geometric": -0.1161,
        "playful_refined": 0.3788,
        "everyday_special_occasion": 0.0476,
        "lowkey_statement": 0.0703,
        "grounded_ethereal": -0.788
      },
      "metrics": {
        "vectorStrength": 0.9663,
        "maxAbsScore": 0.788,
        "focusRatio": 0.3732
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.788
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "nonconformist": {
      "id": "nonconformist",
      "term": "Nonconformist",
      "cleanTerm": "nonconformist",
      "dedupeKey": "nonconformist",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 13,
      "scores": {
        "delicate_bold": 0.1461,
        "classic_unexpected": 0.5012,
        "minimal_ornate": -0.3679,
        "soft_sharp": 0.0365,
        "romantic_edgy": 0.6803,
        "organic_geometric": -0.1218,
        "playful_refined": -0.1197,
        "everyday_special_occasion": -0.1573,
        "lowkey_statement": -0.0424,
        "grounded_ethereal": -0.051
      },
      "metrics": {
        "vectorStrength": 0.9645,
        "maxAbsScore": 0.6803,
        "focusRatio": 0.3059
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.6803
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "exciting": {
      "id": "exciting",
      "term": "Exciting",
      "cleanTerm": "exciting",
      "dedupeKey": "exciting",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.5547,
        "classic_unexpected": 0.5238,
        "minimal_ornate": 0.0942,
        "soft_sharp": -0.025,
        "romantic_edgy": 0.0539,
        "organic_geometric": -0.2019,
        "playful_refined": -0.2525,
        "everyday_special_occasion": 0.4761,
        "lowkey_statement": 0.0197,
        "grounded_ethereal": -0.0465
      },
      "metrics": {
        "vectorStrength": 0.9635,
        "maxAbsScore": 0.5547,
        "focusRatio": 0.2467
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.5547
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "unexpected": {
      "id": "unexpected",
      "term": "Unexpected",
      "cleanTerm": "unexpected",
      "dedupeKey": "unexpected",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0924,
        "classic_unexpected": 0.6978,
        "minimal_ornate": -0.4839,
        "soft_sharp": 0.0037,
        "romantic_edgy": 0.2516,
        "organic_geometric": -0.2379,
        "playful_refined": -0.1536,
        "everyday_special_occasion": 0.222,
        "lowkey_statement": 0.008,
        "grounded_ethereal": 0.0609
      },
      "metrics": {
        "vectorStrength": 0.9623,
        "maxAbsScore": 0.6978,
        "focusRatio": 0.3155
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.6978
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "showcasing": {
      "id": "showcasing",
      "term": "Showcasing",
      "cleanTerm": "showcasing",
      "dedupeKey": "showcasing",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.3584,
        "classic_unexpected": -0.03,
        "minimal_ornate": 0.076,
        "soft_sharp": 0.045,
        "romantic_edgy": 0.0303,
        "organic_geometric": 0.3533,
        "playful_refined": 0.2119,
        "everyday_special_occasion": 0.4233,
        "lowkey_statement": 0.6534,
        "grounded_ethereal": 0.0922
      },
      "metrics": {
        "vectorStrength": 0.9604,
        "maxAbsScore": 0.6534,
        "focusRatio": 0.2874
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.6534
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "nestled": {
      "id": "nestled",
      "term": "Nestled",
      "cleanTerm": "nestled",
      "dedupeKey": "nestled",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.3921,
        "classic_unexpected": -0.2699,
        "minimal_ornate": -0.0139,
        "soft_sharp": -0.2852,
        "romantic_edgy": -0.3599,
        "organic_geometric": -0.1022,
        "playful_refined": 0.2894,
        "everyday_special_occasion": 0.1915,
        "lowkey_statement": -0.4442,
        "grounded_ethereal": -0.3787
      },
      "metrics": {
        "vectorStrength": 0.9536,
        "maxAbsScore": 0.4442,
        "focusRatio": 0.1629
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.4442
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "outsider": {
      "id": "outsider",
      "term": "Outsider",
      "cleanTerm": "outsider",
      "dedupeKey": "outsider",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1123,
        "classic_unexpected": 0.5988,
        "minimal_ornate": -0.1515,
        "soft_sharp": -0.0038,
        "romantic_edgy": 0.6166,
        "organic_geometric": -0.1532,
        "playful_refined": -0.1036,
        "everyday_special_occasion": 0.0475,
        "lowkey_statement": 0.1559,
        "grounded_ethereal": 0.2584
      },
      "metrics": {
        "vectorStrength": 0.9497,
        "maxAbsScore": 0.6166,
        "focusRatio": 0.2801
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.6166
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "sustainable": {
      "id": "sustainable",
      "term": "Sustainable",
      "cleanTerm": "sustainable",
      "dedupeKey": "sustainable",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.3173,
        "classic_unexpected": -0.2534,
        "minimal_ornate": -0.4492,
        "soft_sharp": -0.386,
        "romantic_edgy": 0.0542,
        "organic_geometric": -0.3038,
        "playful_refined": 0.2589,
        "everyday_special_occasion": -0.3919,
        "lowkey_statement": -0.1888,
        "grounded_ethereal": -0.1825
      },
      "metrics": {
        "vectorStrength": 0.949,
        "maxAbsScore": 0.4492,
        "focusRatio": 0.1612
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4492
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "showy": {
      "id": "showy",
      "term": "Showy",
      "cleanTerm": "showy",
      "dedupeKey": "showy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.5926,
        "classic_unexpected": 0.1765,
        "minimal_ornate": 0.2934,
        "soft_sharp": 0.0908,
        "romantic_edgy": -0.1223,
        "organic_geometric": 0.1061,
        "playful_refined": 0.0732,
        "everyday_special_occasion": 0.4664,
        "lowkey_statement": 0.3914,
        "grounded_ethereal": 0.1329
      },
      "metrics": {
        "vectorStrength": 0.9469,
        "maxAbsScore": 0.5926,
        "focusRatio": 0.2423
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.5926
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "cultivated": {
      "id": "cultivated",
      "term": "Cultivated",
      "cleanTerm": "cultivated",
      "dedupeKey": "cultivated",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.0006,
        "classic_unexpected": -0.3224,
        "minimal_ornate": 0.1066,
        "soft_sharp": -0.1785,
        "romantic_edgy": -0.166,
        "organic_geometric": -0.3089,
        "playful_refined": 0.6029,
        "everyday_special_occasion": 0.0878,
        "lowkey_statement": -0.1911,
        "grounded_ethereal": -0.4623
      },
      "metrics": {
        "vectorStrength": 0.9442,
        "maxAbsScore": 0.6029,
        "focusRatio": 0.2484
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.6029
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "fluttery": {
      "id": "fluttery",
      "term": "Fluttery",
      "cleanTerm": "fluttery",
      "dedupeKey": "fluttery",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.4257,
        "classic_unexpected": 0.0919,
        "minimal_ornate": 0.0378,
        "soft_sharp": -0.3601,
        "romantic_edgy": -0.3141,
        "organic_geometric": -0.3091,
        "playful_refined": -0.4256,
        "everyday_special_occasion": -0.1761,
        "lowkey_statement": -0.2398,
        "grounded_ethereal": 0.3247
      },
      "metrics": {
        "vectorStrength": 0.9434,
        "maxAbsScore": 0.4257,
        "focusRatio": 0.1574
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Delicate",
        "score": -0.4257
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "streamlined": {
      "id": "streamlined",
      "term": "Streamlined",
      "cleanTerm": "streamlined",
      "dedupeKey": "streamlined",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.041,
        "classic_unexpected": -0.4188,
        "minimal_ornate": -0.4717,
        "soft_sharp": -0.1808,
        "romantic_edgy": -0.0064,
        "organic_geometric": 0.3484,
        "playful_refined": 0.5476,
        "everyday_special_occasion": 0.1195,
        "lowkey_statement": -0.0968,
        "grounded_ethereal": -0.0349
      },
      "metrics": {
        "vectorStrength": 0.9373,
        "maxAbsScore": 0.5476,
        "focusRatio": 0.2417
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5476
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "fierce": {
      "id": "fierce",
      "term": "Fierce",
      "cleanTerm": "fierce",
      "dedupeKey": "fierce",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.3621,
        "classic_unexpected": 0.0047,
        "minimal_ornate": 0.0427,
        "soft_sharp": 0.0361,
        "romantic_edgy": 0.8049,
        "organic_geometric": -0.2966,
        "playful_refined": -0.0551,
        "everyday_special_occasion": 0.014,
        "lowkey_statement": 0.0131,
        "grounded_ethereal": -0.0109
      },
      "metrics": {
        "vectorStrength": 0.9347,
        "maxAbsScore": 0.8049,
        "focusRatio": 0.4907
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.8049
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "fearless": {
      "id": "fearless",
      "term": "Fearless",
      "cleanTerm": "fearless",
      "dedupeKey": "fearless",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.3387,
        "classic_unexpected": 0.0684,
        "minimal_ornate": -0.4963,
        "soft_sharp": -0.1997,
        "romantic_edgy": 0.4757,
        "organic_geometric": -0.3103,
        "playful_refined": -0.126,
        "everyday_special_occasion": -0.2921,
        "lowkey_statement": 0.0516,
        "grounded_ethereal": 0.1994
      },
      "metrics": {
        "vectorStrength": 0.9337,
        "maxAbsScore": 0.4963,
        "focusRatio": 0.194
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4963
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "fantastical": {
      "id": "fantastical",
      "term": "Fantastical",
      "cleanTerm": "fantastical",
      "dedupeKey": "fantastical",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.069,
        "classic_unexpected": 0.0083,
        "minimal_ornate": 0.2513,
        "soft_sharp": -0.2669,
        "romantic_edgy": -0.0889,
        "organic_geometric": -0.2485,
        "playful_refined": -0.2059,
        "everyday_special_occasion": 0.2035,
        "lowkey_statement": 0.0798,
        "grounded_ethereal": 0.7551
      },
      "metrics": {
        "vectorStrength": 0.9323,
        "maxAbsScore": 0.7551,
        "focusRatio": 0.3468
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7551
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "frolic": {
      "id": "frolic",
      "term": "Frolic",
      "cleanTerm": "frolic",
      "dedupeKey": "frolic",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.0381,
        "classic_unexpected": 0.2429,
        "minimal_ornate": 0.096,
        "soft_sharp": -0.2841,
        "romantic_edgy": 0.0947,
        "organic_geometric": -0.3522,
        "playful_refined": -0.727,
        "everyday_special_occasion": -0.1559,
        "lowkey_statement": -0.156,
        "grounded_ethereal": 0.0889
      },
      "metrics": {
        "vectorStrength": 0.932,
        "maxAbsScore": 0.727,
        "focusRatio": 0.3252
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.727
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "tapestry": {
      "id": "tapestry",
      "term": "Tapestry",
      "cleanTerm": "tapestry",
      "dedupeKey": "tapestry",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2303,
        "classic_unexpected": -0.4134,
        "minimal_ornate": 0.6289,
        "soft_sharp": -0.2654,
        "romantic_edgy": -0.167,
        "organic_geometric": 0.1266,
        "playful_refined": 0.1657,
        "everyday_special_occasion": 0.0326,
        "lowkey_statement": 0.2031,
        "grounded_ethereal": 0.2543
      },
      "metrics": {
        "vectorStrength": 0.9318,
        "maxAbsScore": 0.6289,
        "focusRatio": 0.2528
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.6289
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "unstoppable": {
      "id": "unstoppable",
      "term": "Unstoppable",
      "cleanTerm": "unstoppable",
      "dedupeKey": "unstoppable",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.4769,
        "classic_unexpected": 0.1334,
        "minimal_ornate": -0.4174,
        "soft_sharp": 0.0054,
        "romantic_edgy": 0.5092,
        "organic_geometric": -0.2251,
        "playful_refined": -0.062,
        "everyday_special_occasion": -0.1829,
        "lowkey_statement": 0.2941,
        "grounded_ethereal": 0.1136
      },
      "metrics": {
        "vectorStrength": 0.9307,
        "maxAbsScore": 0.5092,
        "focusRatio": 0.2104
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.5092
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "cozy": {
      "id": "cozy",
      "term": "Cozy",
      "cleanTerm": "cozy",
      "dedupeKey": "cozy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": -0.0987,
        "classic_unexpected": -0.1979,
        "minimal_ornate": -0.1996,
        "soft_sharp": -0.3098,
        "romantic_edgy": -0.3854,
        "organic_geometric": -0.1905,
        "playful_refined": -0.3035,
        "everyday_special_occasion": -0.0439,
        "lowkey_statement": -0.5251,
        "grounded_ethereal": -0.3499
      },
      "metrics": {
        "vectorStrength": 0.9283,
        "maxAbsScore": 0.5251,
        "focusRatio": 0.2016
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.5251
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "distinctive": {
      "id": "distinctive",
      "term": "Distinctive",
      "cleanTerm": "distinctive",
      "dedupeKey": "distinctive",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.2889,
        "classic_unexpected": -0.0784,
        "minimal_ornate": 0.3034,
        "soft_sharp": 0.3251,
        "romantic_edgy": 0.188,
        "organic_geometric": 0.1457,
        "playful_refined": 0.0764,
        "everyday_special_occasion": 0.4851,
        "lowkey_statement": 0.5168,
        "grounded_ethereal": -0.0266
      },
      "metrics": {
        "vectorStrength": 0.9235,
        "maxAbsScore": 0.5168,
        "focusRatio": 0.2123
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.5168
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "remarkable": {
      "id": "remarkable",
      "term": "Remarkable",
      "cleanTerm": "remarkable",
      "dedupeKey": "remarkable",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.5422,
        "classic_unexpected": 0.3464,
        "minimal_ornate": -0.0364,
        "soft_sharp": -0.0637,
        "romantic_edgy": 0.0531,
        "organic_geometric": -0.085,
        "playful_refined": 0.0485,
        "everyday_special_occasion": 0.4473,
        "lowkey_statement": 0.4128,
        "grounded_ethereal": 0.21
      },
      "metrics": {
        "vectorStrength": 0.92,
        "maxAbsScore": 0.5422,
        "focusRatio": 0.2415
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.5422
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "mournful": {
      "id": "mournful",
      "term": "Mournful",
      "cleanTerm": "mournful",
      "dedupeKey": "mournful",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.2234,
        "classic_unexpected": -0.0944,
        "minimal_ornate": 0.2244,
        "soft_sharp": -0.4763,
        "romantic_edgy": -0.4009,
        "organic_geometric": -0.3164,
        "playful_refined": -0.1069,
        "everyday_special_occasion": 0.2907,
        "lowkey_statement": -0.2827,
        "grounded_ethereal": 0.2703
      },
      "metrics": {
        "vectorStrength": 0.9196,
        "maxAbsScore": 0.4763,
        "focusRatio": 0.1773
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.4763
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "whisper": {
      "id": "whisper",
      "term": "Whisper",
      "cleanTerm": "whisper",
      "dedupeKey": "whisper",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.335,
        "classic_unexpected": 0.0151,
        "minimal_ornate": -0.5302,
        "soft_sharp": -0.3315,
        "romantic_edgy": -0.2131,
        "organic_geometric": -0.125,
        "playful_refined": -0.0082,
        "everyday_special_occasion": -0.1273,
        "lowkey_statement": -0.4974,
        "grounded_ethereal": 0.1243
      },
      "metrics": {
        "vectorStrength": 0.9184,
        "maxAbsScore": 0.5302,
        "focusRatio": 0.2298
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5302
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "assertive": {
      "id": "assertive",
      "term": "Assertive",
      "cleanTerm": "assertive",
      "dedupeKey": "assertive",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.6606,
        "classic_unexpected": 0.0028,
        "minimal_ornate": -0.4152,
        "soft_sharp": 0.0385,
        "romantic_edgy": 0.1773,
        "organic_geometric": 0.0869,
        "playful_refined": 0.2908,
        "everyday_special_occasion": 0.055,
        "lowkey_statement": 0.0648,
        "grounded_ethereal": -0.3199
      },
      "metrics": {
        "vectorStrength": 0.9184,
        "maxAbsScore": 0.6606,
        "focusRatio": 0.3128
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.6606
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "mature": {
      "id": "mature",
      "term": "Mature",
      "cleanTerm": "mature",
      "dedupeKey": "mature",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.144,
        "classic_unexpected": -0.3168,
        "minimal_ornate": -0.128,
        "soft_sharp": -0.2985,
        "romantic_edgy": -0.02,
        "organic_geometric": -0.1399,
        "playful_refined": 0.6469,
        "everyday_special_occasion": 0.2433,
        "lowkey_statement": -0.1967,
        "grounded_ethereal": -0.2829
      },
      "metrics": {
        "vectorStrength": 0.9181,
        "maxAbsScore": 0.6469,
        "focusRatio": 0.2677
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.6469
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "fanciful": {
      "id": "fanciful",
      "term": "Fanciful",
      "cleanTerm": "fanciful",
      "dedupeKey": "fanciful",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2213,
        "classic_unexpected": -0.0381,
        "minimal_ornate": 0.4791,
        "soft_sharp": -0.1491,
        "romantic_edgy": -0.3762,
        "organic_geometric": -0.1512,
        "playful_refined": -0.228,
        "everyday_special_occasion": 0.2498,
        "lowkey_statement": -0.1615,
        "grounded_ethereal": 0.4818
      },
      "metrics": {
        "vectorStrength": 0.916,
        "maxAbsScore": 0.4818,
        "focusRatio": 0.19
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.4818
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "flora": {
      "id": "flora",
      "term": "Flora",
      "cleanTerm": "flora",
      "dedupeKey": "flora",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.1435,
        "classic_unexpected": -0.1808,
        "minimal_ornate": 0.2036,
        "soft_sharp": -0.5936,
        "romantic_edgy": -0.1684,
        "organic_geometric": -0.5334,
        "playful_refined": -0.043,
        "everyday_special_occasion": -0.1529,
        "lowkey_statement": -0.2223,
        "grounded_ethereal": 0.0384
      },
      "metrics": {
        "vectorStrength": 0.9144,
        "maxAbsScore": 0.5936,
        "focusRatio": 0.2604
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.5936
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "everlasting": {
      "id": "everlasting",
      "term": "Everlasting",
      "cleanTerm": "everlasting",
      "dedupeKey": "everlasting",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.1953,
        "classic_unexpected": -0.5517,
        "minimal_ornate": -0.0525,
        "soft_sharp": -0.3233,
        "romantic_edgy": -0.014,
        "organic_geometric": -0.3152,
        "playful_refined": 0.1161,
        "everyday_special_occasion": -0.1843,
        "lowkey_statement": 0.1425,
        "grounded_ethereal": 0.459
      },
      "metrics": {
        "vectorStrength": 0.9098,
        "maxAbsScore": 0.5517,
        "focusRatio": 0.2344
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Classic",
        "score": -0.5517
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "soulful": {
      "id": "soulful",
      "term": "Soulful",
      "cleanTerm": "soulful",
      "dedupeKey": "soulful",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.0323,
        "classic_unexpected": -0.0937,
        "minimal_ornate": -0.1457,
        "soft_sharp": -0.5061,
        "romantic_edgy": -0.5005,
        "organic_geometric": -0.4167,
        "playful_refined": 0.0264,
        "everyday_special_occasion": -0.0502,
        "lowkey_statement": -0.3157,
        "grounded_ethereal": 0.0728
      },
      "metrics": {
        "vectorStrength": 0.9052,
        "maxAbsScore": 0.5061,
        "focusRatio": 0.2343
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.5061
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "fuzzy": {
      "id": "fuzzy",
      "term": "Fuzzy",
      "cleanTerm": "fuzzy",
      "dedupeKey": "fuzzy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.2006,
        "classic_unexpected": 0.101,
        "minimal_ornate": -0.0647,
        "soft_sharp": -0.4248,
        "romantic_edgy": -0.1866,
        "organic_geometric": -0.3121,
        "playful_refined": -0.0906,
        "everyday_special_occasion": -0.2202,
        "lowkey_statement": -0.6116,
        "grounded_ethereal": -0.1383
      },
      "metrics": {
        "vectorStrength": 0.904,
        "maxAbsScore": 0.6116,
        "focusRatio": 0.2602
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.6116
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "intricacy": {
      "id": "intricacy",
      "term": "Intricacy",
      "cleanTerm": "intricacy",
      "dedupeKey": "intricacy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.3823,
        "classic_unexpected": -0.0348,
        "minimal_ornate": 0.6218,
        "soft_sharp": 0.2213,
        "romantic_edgy": 0.1605,
        "organic_geometric": 0.1231,
        "playful_refined": 0.2653,
        "everyday_special_occasion": 0.1155,
        "lowkey_statement": -0.3248,
        "grounded_ethereal": -0.0456
      },
      "metrics": {
        "vectorStrength": 0.9028,
        "maxAbsScore": 0.6218,
        "focusRatio": 0.271
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.6218
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "giggly": {
      "id": "giggly",
      "term": "Giggly",
      "cleanTerm": "giggly",
      "dedupeKey": "giggly",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.0038,
        "classic_unexpected": 0.2639,
        "minimal_ornate": 0.0214,
        "soft_sharp": -0.2244,
        "romantic_edgy": -0.3617,
        "organic_geometric": -0.2909,
        "playful_refined": -0.6358,
        "everyday_special_occasion": -0.0088,
        "lowkey_statement": -0.2538,
        "grounded_ethereal": -0.0833
      },
      "metrics": {
        "vectorStrength": 0.9009,
        "maxAbsScore": 0.6358,
        "focusRatio": 0.296
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.6358
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "intuitive": {
      "id": "intuitive",
      "term": "Intuitive",
      "cleanTerm": "intuitive",
      "dedupeKey": "intuitive",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.1213,
        "classic_unexpected": 0.2952,
        "minimal_ornate": -0.416,
        "soft_sharp": -0.2005,
        "romantic_edgy": -0.0571,
        "organic_geometric": -0.3255,
        "playful_refined": 0.0165,
        "everyday_special_occasion": -0.4555,
        "lowkey_statement": -0.3356,
        "grounded_ethereal": -0.258
      },
      "metrics": {
        "vectorStrength": 0.9007,
        "maxAbsScore": 0.4555,
        "focusRatio": 0.1836
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -0.4555
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "jovial": {
      "id": "jovial",
      "term": "Jovial",
      "cleanTerm": "jovial",
      "dedupeKey": "jovial",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.219,
        "classic_unexpected": 0.192,
        "minimal_ornate": 0.1056,
        "soft_sharp": -0.4601,
        "romantic_edgy": -0.1041,
        "organic_geometric": -0.2705,
        "playful_refined": -0.5541,
        "everyday_special_occasion": -0.0535,
        "lowkey_statement": -0.3063,
        "grounded_ethereal": 0.1221
      },
      "metrics": {
        "vectorStrength": 0.9002,
        "maxAbsScore": 0.5541,
        "focusRatio": 0.2321
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.5541
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "layered": {
      "id": "layered",
      "term": "Layered",
      "cleanTerm": "layered",
      "dedupeKey": "layered",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.0317,
        "classic_unexpected": -0.2735,
        "minimal_ornate": 0.551,
        "soft_sharp": -0.2239,
        "romantic_edgy": -0.1431,
        "organic_geometric": 0.1822,
        "playful_refined": 0.492,
        "everyday_special_occasion": 0.028,
        "lowkey_statement": -0.2721,
        "grounded_ethereal": -0.03
      },
      "metrics": {
        "vectorStrength": 0.8949,
        "maxAbsScore": 0.551,
        "focusRatio": 0.2474
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.551
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "rugged": {
      "id": "rugged",
      "term": "Rugged",
      "cleanTerm": "rugged",
      "dedupeKey": "rugged",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.241,
        "classic_unexpected": -0.1101,
        "minimal_ornate": -0.0814,
        "soft_sharp": 0.028,
        "romantic_edgy": 0.5474,
        "organic_geometric": -0.1091,
        "playful_refined": 0.2844,
        "everyday_special_occasion": -0.1573,
        "lowkey_statement": -0.2522,
        "grounded_ethereal": -0.4834
      },
      "metrics": {
        "vectorStrength": 0.89,
        "maxAbsScore": 0.5474,
        "focusRatio": 0.2386
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.5474
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "charming": {
      "id": "charming",
      "term": "Charming",
      "cleanTerm": "charming",
      "dedupeKey": "charming",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0949,
        "classic_unexpected": -0.0036,
        "minimal_ornate": 0.1266,
        "soft_sharp": -0.2902,
        "romantic_edgy": -0.4324,
        "organic_geometric": -0.2401,
        "playful_refined": -0.6401,
        "everyday_special_occasion": 0.1005,
        "lowkey_statement": -0.0585,
        "grounded_ethereal": -0.0155
      },
      "metrics": {
        "vectorStrength": 0.8817,
        "maxAbsScore": 0.6401,
        "focusRatio": 0.3197
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.6401
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "outspoken": {
      "id": "outspoken",
      "term": "Outspoken",
      "cleanTerm": "outspoken",
      "dedupeKey": "outspoken",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.5594,
        "classic_unexpected": 0.417,
        "minimal_ornate": -0.2567,
        "soft_sharp": -0.0072,
        "romantic_edgy": 0.344,
        "organic_geometric": -0.0785,
        "playful_refined": 0.2194,
        "everyday_special_occasion": 0.0803,
        "lowkey_statement": 0.1933,
        "grounded_ethereal": -0.0523
      },
      "metrics": {
        "vectorStrength": 0.8786,
        "maxAbsScore": 0.5594,
        "focusRatio": 0.2533
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.5594
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "adventurous": {
      "id": "adventurous",
      "term": "Adventurous",
      "cleanTerm": "adventurous",
      "dedupeKey": "adventurous",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.3488,
        "classic_unexpected": 0.4705,
        "minimal_ornate": 0.1835,
        "soft_sharp": -0.0505,
        "romantic_edgy": 0.3266,
        "organic_geometric": -0.3578,
        "playful_refined": -0.3162,
        "everyday_special_occasion": 0.1423,
        "lowkey_statement": -0.0697,
        "grounded_ethereal": 0.1712
      },
      "metrics": {
        "vectorStrength": 0.8765,
        "maxAbsScore": 0.4705,
        "focusRatio": 0.193
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.4705
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "maverick": {
      "id": "maverick",
      "term": "Maverick",
      "cleanTerm": "maverick",
      "dedupeKey": "maverick",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1406,
        "classic_unexpected": 0.3044,
        "minimal_ornate": -0.5038,
        "soft_sharp": 0.1392,
        "romantic_edgy": 0.5549,
        "organic_geometric": -0.1036,
        "playful_refined": -0.1524,
        "everyday_special_occasion": 0.089,
        "lowkey_statement": 0.1742,
        "grounded_ethereal": 0.0351
      },
      "metrics": {
        "vectorStrength": 0.8758,
        "maxAbsScore": 0.5549,
        "focusRatio": 0.2525
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.5549
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "mystical": {
      "id": "mystical",
      "term": "Mystical",
      "cleanTerm": "mystical",
      "dedupeKey": "mystical",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1173,
        "classic_unexpected": 0.0859,
        "minimal_ornate": 0.1392,
        "soft_sharp": -0.3453,
        "romantic_edgy": -0.1857,
        "organic_geometric": -0.3788,
        "playful_refined": -0.0627,
        "everyday_special_occasion": 0.1505,
        "lowkey_statement": -0.2445,
        "grounded_ethereal": 0.5839
      },
      "metrics": {
        "vectorStrength": 0.8746,
        "maxAbsScore": 0.5839,
        "focusRatio": 0.2546
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.5839
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "feathery": {
      "id": "feathery",
      "term": "Feathery",
      "cleanTerm": "feathery",
      "dedupeKey": "feathery",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2815,
        "classic_unexpected": -0.1996,
        "minimal_ornate": 0.2969,
        "soft_sharp": -0.2323,
        "romantic_edgy": -0.3055,
        "organic_geometric": -0.4025,
        "playful_refined": 0.0635,
        "everyday_special_occasion": -0.1035,
        "lowkey_statement": -0.4209,
        "grounded_ethereal": 0.2066
      },
      "metrics": {
        "vectorStrength": 0.8667,
        "maxAbsScore": 0.4209,
        "focusRatio": 0.1675
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.4209
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "intriguing": {
      "id": "intriguing",
      "term": "Intriguing",
      "cleanTerm": "intriguing",
      "dedupeKey": "intriguing",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.254,
        "classic_unexpected": 0.5888,
        "minimal_ornate": 0.3761,
        "soft_sharp": 0.0604,
        "romantic_edgy": 0.0631,
        "organic_geometric": -0.2273,
        "playful_refined": -0.3148,
        "everyday_special_occasion": 0.184,
        "lowkey_statement": -0.0232,
        "grounded_ethereal": 0.0657
      },
      "metrics": {
        "vectorStrength": 0.866,
        "maxAbsScore": 0.5888,
        "focusRatio": 0.2729
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.5888
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "engineered": {
      "id": "engineered",
      "term": "Engineered",
      "cleanTerm": "engineered",
      "dedupeKey": "engineered",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.1908,
        "classic_unexpected": -0.288,
        "minimal_ornate": 0.2573,
        "soft_sharp": 0.2055,
        "romantic_edgy": 0.2303,
        "organic_geometric": 0.1902,
        "playful_refined": 0.6043,
        "everyday_special_occasion": 0.2307,
        "lowkey_statement": -0.0411,
        "grounded_ethereal": -0.1061
      },
      "metrics": {
        "vectorStrength": 0.8651,
        "maxAbsScore": 0.6043,
        "focusRatio": 0.2578
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.6043
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "precise": {
      "id": "precise",
      "term": "Precise",
      "cleanTerm": "precise",
      "dedupeKey": "precise",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1075,
        "classic_unexpected": -0.2678,
        "minimal_ornate": -0.0899,
        "soft_sharp": 0.5155,
        "romantic_edgy": 0.1114,
        "organic_geometric": 0.0603,
        "playful_refined": 0.4741,
        "everyday_special_occasion": 0.1609,
        "lowkey_statement": -0.2917,
        "grounded_ethereal": -0.1859
      },
      "metrics": {
        "vectorStrength": 0.8623,
        "maxAbsScore": 0.5155,
        "focusRatio": 0.2276
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Sharp",
        "score": 0.5155
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "uncanny": {
      "id": "uncanny",
      "term": "Uncanny",
      "cleanTerm": "uncanny",
      "dedupeKey": "uncanny",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1447,
        "classic_unexpected": 0.4575,
        "minimal_ornate": -0.2764,
        "soft_sharp": 0.0031,
        "romantic_edgy": 0.1607,
        "organic_geometric": -0.3862,
        "playful_refined": -0.3535,
        "everyday_special_occasion": -0.1426,
        "lowkey_statement": -0.229,
        "grounded_ethereal": 0.2285
      },
      "metrics": {
        "vectorStrength": 0.8554,
        "maxAbsScore": 0.4575,
        "focusRatio": 0.192
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.4575
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "labyrinthine": {
      "id": "labyrinthine",
      "term": "Labyrinthine",
      "cleanTerm": "labyrinthine",
      "dedupeKey": "labyrinthine",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 12,
      "scores": {
        "delicate_bold": -0.2826,
        "classic_unexpected": -0.0243,
        "minimal_ornate": 0.2635,
        "soft_sharp": -0.4072,
        "romantic_edgy": 0.1155,
        "organic_geometric": -0.1246,
        "playful_refined": -0.0028,
        "everyday_special_occasion": -0.1662,
        "lowkey_statement": -0.4062,
        "grounded_ethereal": 0.4381
      },
      "metrics": {
        "vectorStrength": 0.8538,
        "maxAbsScore": 0.4381,
        "focusRatio": 0.1964
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.4381
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "dreamscape": {
      "id": "dreamscape",
      "term": "Dreamscape",
      "cleanTerm": "dreamscape",
      "dedupeKey": "dreamscape",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.1919,
        "classic_unexpected": -0.0634,
        "minimal_ornate": 0.1103,
        "soft_sharp": -0.3782,
        "romantic_edgy": -0.4654,
        "organic_geometric": -0.0834,
        "playful_refined": -0.1869,
        "everyday_special_occasion": 0.0646,
        "lowkey_statement": -0.0059,
        "grounded_ethereal": 0.516
      },
      "metrics": {
        "vectorStrength": 0.8515,
        "maxAbsScore": 0.516,
        "focusRatio": 0.2498
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.516
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "tactile": {
      "id": "tactile",
      "term": "Tactile",
      "cleanTerm": "tactile",
      "dedupeKey": "tactile",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.2326,
        "classic_unexpected": -0.0055,
        "minimal_ornate": -0.0833,
        "soft_sharp": -0.3109,
        "romantic_edgy": -0.2595,
        "organic_geometric": -0.3832,
        "playful_refined": 0.1592,
        "everyday_special_occasion": -0.262,
        "lowkey_statement": -0.3886,
        "grounded_ethereal": -0.3256
      },
      "metrics": {
        "vectorStrength": 0.8502,
        "maxAbsScore": 0.3886,
        "focusRatio": 0.1612
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.3886
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "opulent": {
      "id": "opulent",
      "term": "Opulent",
      "cleanTerm": "opulent",
      "dedupeKey": "opulent",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.2601,
        "classic_unexpected": -0.1787,
        "minimal_ornate": 0.4134,
        "soft_sharp": -0.3611,
        "romantic_edgy": -0.0989,
        "organic_geometric": -0.0826,
        "playful_refined": 0.407,
        "everyday_special_occasion": 0.0779,
        "lowkey_statement": -0.1765,
        "grounded_ethereal": 0.3073
      },
      "metrics": {
        "vectorStrength": 0.8455,
        "maxAbsScore": 0.4134,
        "focusRatio": 0.1749
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.4134
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "finesse": {
      "id": "finesse",
      "term": "Finesse",
      "cleanTerm": "finesse",
      "dedupeKey": "finesse",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.6372,
        "classic_unexpected": -0.1658,
        "minimal_ornate": -0.1232,
        "soft_sharp": 0.0283,
        "romantic_edgy": -0.1394,
        "organic_geometric": -0.0153,
        "playful_refined": 0.3458,
        "everyday_special_occasion": -0.0537,
        "lowkey_statement": -0.34,
        "grounded_ethereal": 0.0492
      },
      "metrics": {
        "vectorStrength": 0.8424,
        "maxAbsScore": 0.6372,
        "focusRatio": 0.3357
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Delicate",
        "score": -0.6372
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "loud": {
      "id": "loud",
      "term": "Loud",
      "cleanTerm": "loud",
      "dedupeKey": "loud",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.3007,
        "classic_unexpected": 0.248,
        "minimal_ornate": -0.2485,
        "soft_sharp": -0.5649,
        "romantic_edgy": -0.1495,
        "organic_geometric": -0.0225,
        "playful_refined": 0.0086,
        "everyday_special_occasion": -0.0668,
        "lowkey_statement": -0.3637,
        "grounded_ethereal": 0.0813
      },
      "metrics": {
        "vectorStrength": 0.8362,
        "maxAbsScore": 0.5649,
        "focusRatio": 0.275
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.5649
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "festive": {
      "id": "festive",
      "term": "Festive",
      "cleanTerm": "festive",
      "dedupeKey": "festive",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1661,
        "classic_unexpected": -0.208,
        "minimal_ornate": 0.4092,
        "soft_sharp": -0.0602,
        "romantic_edgy": -0.137,
        "organic_geometric": -0.0567,
        "playful_refined": -0.2158,
        "everyday_special_occasion": 0.5913,
        "lowkey_statement": -0.0846,
        "grounded_ethereal": 0.1415
      },
      "metrics": {
        "vectorStrength": 0.829,
        "maxAbsScore": 0.5913,
        "focusRatio": 0.2856
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Special Occasion",
        "score": 0.5913
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "balanced": {
      "id": "balanced",
      "term": "Balanced",
      "cleanTerm": "balanced",
      "dedupeKey": "balanced",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0533,
        "classic_unexpected": -0.1236,
        "minimal_ornate": -0.5063,
        "soft_sharp": -0.3619,
        "romantic_edgy": -0.0339,
        "organic_geometric": 0.0219,
        "playful_refined": 0.3621,
        "everyday_special_occasion": -0.2552,
        "lowkey_statement": -0.2591,
        "grounded_ethereal": -0.1199
      },
      "metrics": {
        "vectorStrength": 0.8275,
        "maxAbsScore": 0.5063,
        "focusRatio": 0.2414
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5063
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "impactful": {
      "id": "impactful",
      "term": "Impactful",
      "cleanTerm": "impactful",
      "dedupeKey": "impactful",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.6838,
        "classic_unexpected": 0.2368,
        "minimal_ornate": 0.0731,
        "soft_sharp": 0.0305,
        "romantic_edgy": 0.1627,
        "organic_geometric": -0.0867,
        "playful_refined": -0.0986,
        "everyday_special_occasion": 0.0805,
        "lowkey_statement": 0.3134,
        "grounded_ethereal": -0.0114
      },
      "metrics": {
        "vectorStrength": 0.8237,
        "maxAbsScore": 0.6838,
        "focusRatio": 0.3847
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.6838
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "woven": {
      "id": "woven",
      "term": "Woven",
      "cleanTerm": "woven",
      "dedupeKey": "woven",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0195,
        "classic_unexpected": -0.3802,
        "minimal_ornate": 0.4314,
        "soft_sharp": -0.2908,
        "romantic_edgy": -0.0994,
        "organic_geometric": 0.02,
        "playful_refined": 0.3627,
        "everyday_special_occasion": -0.2932,
        "lowkey_statement": -0.1841,
        "grounded_ethereal": -0.0175
      },
      "metrics": {
        "vectorStrength": 0.8231,
        "maxAbsScore": 0.4314,
        "focusRatio": 0.2055
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.4314
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "silly": {
      "id": "silly",
      "term": "Silly",
      "cleanTerm": "silly",
      "dedupeKey": "silly",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.1253,
        "classic_unexpected": 0.2773,
        "minimal_ornate": -0.2641,
        "soft_sharp": -0.1236,
        "romantic_edgy": -0.0362,
        "organic_geometric": -0.2525,
        "playful_refined": -0.5304,
        "everyday_special_occasion": 0.0052,
        "lowkey_statement": -0.3465,
        "grounded_ethereal": 0.1825
      },
      "metrics": {
        "vectorStrength": 0.823,
        "maxAbsScore": 0.5304,
        "focusRatio": 0.2474
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.5304
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "transparent": {
      "id": "transparent",
      "term": "Transparent",
      "cleanTerm": "transparent",
      "dedupeKey": "transparent",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.0074,
        "classic_unexpected": -0.3765,
        "minimal_ornate": -0.4724,
        "soft_sharp": -0.2777,
        "romantic_edgy": -0.1147,
        "organic_geometric": 0.2219,
        "playful_refined": 0.2622,
        "everyday_special_occasion": -0.18,
        "lowkey_statement": -0.1469,
        "grounded_ethereal": 0.218
      },
      "metrics": {
        "vectorStrength": 0.8214,
        "maxAbsScore": 0.4724,
        "focusRatio": 0.2074
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4724
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "sunlit": {
      "id": "sunlit",
      "term": "Sunlit",
      "cleanTerm": "sunlit",
      "dedupeKey": "sunlit",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": -0.1118,
        "classic_unexpected": -0.0755,
        "minimal_ornate": -0.3534,
        "soft_sharp": -0.4209,
        "romantic_edgy": -0.4638,
        "organic_geometric": -0.1083,
        "playful_refined": -0.041,
        "everyday_special_occasion": -0.0643,
        "lowkey_statement": -0.1525,
        "grounded_ethereal": 0.3138
      },
      "metrics": {
        "vectorStrength": 0.8214,
        "maxAbsScore": 0.4638,
        "focusRatio": 0.2203
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.4638
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "noteworthy": {
      "id": "noteworthy",
      "term": "Noteworthy",
      "cleanTerm": "noteworthy",
      "dedupeKey": "noteworthy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.4339,
        "classic_unexpected": 0.2473,
        "minimal_ornate": -0.0195,
        "soft_sharp": 0.0974,
        "romantic_edgy": 0.1155,
        "organic_geometric": -0.1013,
        "playful_refined": 0.0372,
        "everyday_special_occasion": 0.3276,
        "lowkey_statement": 0.5298,
        "grounded_ethereal": 0.0171
      },
      "metrics": {
        "vectorStrength": 0.8201,
        "maxAbsScore": 0.5298,
        "focusRatio": 0.275
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.5298
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "gutsy": {
      "id": "gutsy",
      "term": "Gutsy",
      "cleanTerm": "gutsy",
      "dedupeKey": "gutsy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.3145,
        "classic_unexpected": 0.2048,
        "minimal_ornate": -0.2458,
        "soft_sharp": -0.1518,
        "romantic_edgy": 0.4743,
        "organic_geometric": -0.3065,
        "playful_refined": -0.0932,
        "everyday_special_occasion": -0.0164,
        "lowkey_statement": 0.0525,
        "grounded_ethereal": -0.3416
      },
      "metrics": {
        "vectorStrength": 0.8195,
        "maxAbsScore": 0.4743,
        "focusRatio": 0.2154
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.4743
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "courageous": {
      "id": "courageous",
      "term": "Courageous",
      "cleanTerm": "courageous",
      "dedupeKey": "courageous",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.4821,
        "classic_unexpected": 0.2118,
        "minimal_ornate": -0.199,
        "soft_sharp": -0.1836,
        "romantic_edgy": 0.4248,
        "organic_geometric": -0.3127,
        "playful_refined": -0.0905,
        "everyday_special_occasion": 0.1455,
        "lowkey_statement": 0.0682,
        "grounded_ethereal": 0.0703
      },
      "metrics": {
        "vectorStrength": 0.8171,
        "maxAbsScore": 0.4821,
        "focusRatio": 0.2203
      },
      "topStyleSignal": {
        "dimension": "Delicate ↔ Bold",
        "dimensionId": "delicate_bold",
        "dimensionColumn": "delicate_bold_score_norm",
        "pole": "Bold",
        "score": 0.4821
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "grunge": {
      "id": "grunge",
      "term": "Grunge",
      "cleanTerm": "grunge",
      "dedupeKey": "grunge",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.0767,
        "classic_unexpected": 0.1876,
        "minimal_ornate": -0.2762,
        "soft_sharp": -0.0081,
        "romantic_edgy": 0.4758,
        "organic_geometric": -0.1698,
        "playful_refined": 0.1424,
        "everyday_special_occasion": -0.1995,
        "lowkey_statement": -0.0288,
        "grounded_ethereal": -0.4728
      },
      "metrics": {
        "vectorStrength": 0.8106,
        "maxAbsScore": 0.4758,
        "focusRatio": 0.2335
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.4758
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "punk": {
      "id": "punk",
      "term": "Punk",
      "cleanTerm": "punk",
      "dedupeKey": "punk",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": -0.0577,
        "classic_unexpected": 0.0783,
        "minimal_ornate": -0.2723,
        "soft_sharp": 0.3016,
        "romantic_edgy": 0.6394,
        "organic_geometric": -0.0117,
        "playful_refined": -0.1275,
        "everyday_special_occasion": -0.0949,
        "lowkey_statement": -0.032,
        "grounded_ethereal": -0.2084
      },
      "metrics": {
        "vectorStrength": 0.8083,
        "maxAbsScore": 0.6394,
        "focusRatio": 0.3506
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.6394
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "distinct": {
      "id": "distinct",
      "term": "Distinct",
      "cleanTerm": "distinct",
      "dedupeKey": "distinct",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1457,
        "classic_unexpected": -0.1076,
        "minimal_ornate": -0.1289,
        "soft_sharp": 0.1418,
        "romantic_edgy": 0.2132,
        "organic_geometric": 0.1992,
        "playful_refined": 0.282,
        "everyday_special_occasion": 0.5776,
        "lowkey_statement": 0.2548,
        "grounded_ethereal": 0.075
      },
      "metrics": {
        "vectorStrength": 0.799,
        "maxAbsScore": 0.5776,
        "focusRatio": 0.2717
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Special Occasion",
        "score": 0.5776
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "accessible": {
      "id": "accessible",
      "term": "Accessible",
      "cleanTerm": "accessible",
      "dedupeKey": "accessible",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.25,
        "classic_unexpected": -0.077,
        "minimal_ornate": -0.5043,
        "soft_sharp": -0.3767,
        "romantic_edgy": 0.1237,
        "organic_geometric": -0.049,
        "playful_refined": 0.3452,
        "everyday_special_occasion": -0.1426,
        "lowkey_statement": -0.104,
        "grounded_ethereal": 0.018
      },
      "metrics": {
        "vectorStrength": 0.7956,
        "maxAbsScore": 0.5043,
        "focusRatio": 0.2534
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5043
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "integrated": {
      "id": "integrated",
      "term": "Integrated",
      "cleanTerm": "integrated",
      "dedupeKey": "integrated",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.2008,
        "classic_unexpected": -0.3827,
        "minimal_ornate": 0.0204,
        "soft_sharp": -0.1078,
        "romantic_edgy": -0.0208,
        "organic_geometric": 0.2984,
        "playful_refined": 0.5519,
        "everyday_special_occasion": 0.0055,
        "lowkey_statement": -0.0317,
        "grounded_ethereal": -0.1733
      },
      "metrics": {
        "vectorStrength": 0.7899,
        "maxAbsScore": 0.5519,
        "focusRatio": 0.3078
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5519
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "limitless": {
      "id": "limitless",
      "term": "Limitless",
      "cleanTerm": "limitless",
      "dedupeKey": "limitless",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.1861,
        "classic_unexpected": -0.104,
        "minimal_ornate": -0.3055,
        "soft_sharp": -0.3002,
        "romantic_edgy": 0.2492,
        "organic_geometric": -0.1352,
        "playful_refined": -0.0394,
        "everyday_special_occasion": -0.3256,
        "lowkey_statement": 0.0145,
        "grounded_ethereal": 0.4543
      },
      "metrics": {
        "vectorStrength": 0.7895,
        "maxAbsScore": 0.4543,
        "focusRatio": 0.2149
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.4543
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "crisp": {
      "id": "crisp",
      "term": "Crisp",
      "cleanTerm": "crisp",
      "dedupeKey": "crisp",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.1863,
        "classic_unexpected": -0.0459,
        "minimal_ornate": -0.3098,
        "soft_sharp": 0.582,
        "romantic_edgy": 0.0657,
        "organic_geometric": 0.0343,
        "playful_refined": 0.0516,
        "everyday_special_occasion": 0.0405,
        "lowkey_statement": -0.0883,
        "grounded_ethereal": -0.363
      },
      "metrics": {
        "vectorStrength": 0.7879,
        "maxAbsScore": 0.582,
        "focusRatio": 0.3293
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Sharp",
        "score": 0.582
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "pioneering": {
      "id": "pioneering",
      "term": "Pioneering",
      "cleanTerm": "pioneering",
      "dedupeKey": "pioneering",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.1631,
        "classic_unexpected": 0.2951,
        "minimal_ornate": -0.1491,
        "soft_sharp": 0.1671,
        "romantic_edgy": 0.5386,
        "organic_geometric": -0.1098,
        "playful_refined": -0.1176,
        "everyday_special_occasion": 0.15,
        "lowkey_statement": 0.3322,
        "grounded_ethereal": 0.054
      },
      "metrics": {
        "vectorStrength": 0.7846,
        "maxAbsScore": 0.5386,
        "focusRatio": 0.2594
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Edgy",
        "score": 0.5386
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "gritty": {
      "id": "gritty",
      "term": "Gritty",
      "cleanTerm": "gritty",
      "dedupeKey": "gritty",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.0053,
        "classic_unexpected": 0.051,
        "minimal_ornate": -0.0759,
        "soft_sharp": 0.2143,
        "romantic_edgy": 0.3992,
        "organic_geometric": -0.2131,
        "playful_refined": 0.0767,
        "everyday_special_occasion": -0.2116,
        "lowkey_statement": -0.1831,
        "grounded_ethereal": -0.5205
      },
      "metrics": {
        "vectorStrength": 0.7837,
        "maxAbsScore": 0.5205,
        "focusRatio": 0.2668
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.5205
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "exposed": {
      "id": "exposed",
      "term": "Exposed",
      "cleanTerm": "exposed",
      "dedupeKey": "exposed",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.331,
        "classic_unexpected": 0.1248,
        "minimal_ornate": -0.1483,
        "soft_sharp": 0.1108,
        "romantic_edgy": 0.2216,
        "organic_geometric": 0.057,
        "playful_refined": 0.515,
        "everyday_special_occasion": 0.286,
        "lowkey_statement": 0.0969,
        "grounded_ethereal": -0.2117
      },
      "metrics": {
        "vectorStrength": 0.7829,
        "maxAbsScore": 0.515,
        "focusRatio": 0.2449
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.515
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "spark": {
      "id": "spark",
      "term": "Spark",
      "cleanTerm": "spark",
      "dedupeKey": "spark",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0534,
        "classic_unexpected": 0.094,
        "minimal_ornate": -0.1317,
        "soft_sharp": 0.3426,
        "romantic_edgy": -0.1293,
        "organic_geometric": 0.1282,
        "playful_refined": -0.2233,
        "everyday_special_occasion": 0.3107,
        "lowkey_statement": 0.4705,
        "grounded_ethereal": -0.2457
      },
      "metrics": {
        "vectorStrength": 0.7795,
        "maxAbsScore": 0.4705,
        "focusRatio": 0.221
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.4705
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "poised": {
      "id": "poised",
      "term": "Poised",
      "cleanTerm": "poised",
      "dedupeKey": "poised",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.1934,
        "classic_unexpected": -0.2741,
        "minimal_ornate": -0.3656,
        "soft_sharp": 0.1819,
        "romantic_edgy": -0.2014,
        "organic_geometric": 0.0008,
        "playful_refined": 0.4967,
        "everyday_special_occasion": 0.0244,
        "lowkey_statement": -0.0852,
        "grounded_ethereal": -0.1696
      },
      "metrics": {
        "vectorStrength": 0.7767,
        "maxAbsScore": 0.4967,
        "focusRatio": 0.2492
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.4967
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "whitespace": {
      "id": "whitespace",
      "term": "Whitespace",
      "cleanTerm": "whitespace",
      "dedupeKey": "whitespace",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.186,
        "classic_unexpected": -0.1721,
        "minimal_ornate": -0.5704,
        "soft_sharp": -0.1171,
        "romantic_edgy": -0.0191,
        "organic_geometric": 0.4076,
        "playful_refined": 0.0258,
        "everyday_special_occasion": -0.1287,
        "lowkey_statement": 0.0308,
        "grounded_ethereal": 0.068
      },
      "metrics": {
        "vectorStrength": 0.7698,
        "maxAbsScore": 0.5704,
        "focusRatio": 0.3306
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5704
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "witty": {
      "id": "witty",
      "term": "Witty",
      "cleanTerm": "witty",
      "dedupeKey": "witty",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.1271,
        "classic_unexpected": 0.2861,
        "minimal_ornate": 0.0317,
        "soft_sharp": -0.03,
        "romantic_edgy": -0.0395,
        "organic_geometric": -0.2666,
        "playful_refined": -0.6301,
        "everyday_special_occasion": -0.0803,
        "lowkey_statement": -0.1274,
        "grounded_ethereal": -0.0087
      },
      "metrics": {
        "vectorStrength": 0.7696,
        "maxAbsScore": 0.6301,
        "focusRatio": 0.3871
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.6301
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "flourished": {
      "id": "flourished",
      "term": "Flourished",
      "cleanTerm": "flourished",
      "dedupeKey": "flourished",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0622,
        "classic_unexpected": -0.1886,
        "minimal_ornate": 0.5046,
        "soft_sharp": -0.2101,
        "romantic_edgy": -0.2415,
        "organic_geometric": -0.1742,
        "playful_refined": 0.1791,
        "everyday_special_occasion": 0.234,
        "lowkey_statement": 0.2175,
        "grounded_ethereal": -0.1615
      },
      "metrics": {
        "vectorStrength": 0.7663,
        "maxAbsScore": 0.5046,
        "focusRatio": 0.2322
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.5046
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "stripped": {
      "id": "stripped",
      "term": "Stripped",
      "cleanTerm": "stripped",
      "dedupeKey": "stripped",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.0375,
        "classic_unexpected": -0.2476,
        "minimal_ornate": -0.3292,
        "soft_sharp": 0.1021,
        "romantic_edgy": 0.1804,
        "organic_geometric": 0.2424,
        "playful_refined": 0.4721,
        "everyday_special_occasion": 0.0475,
        "lowkey_statement": -0.1205,
        "grounded_ethereal": -0.2698
      },
      "metrics": {
        "vectorStrength": 0.765,
        "maxAbsScore": 0.4721,
        "focusRatio": 0.2304
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.4721
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "sky_bound": {
      "id": "sky_bound",
      "term": "Sky-Bound",
      "cleanTerm": "sky-bound",
      "dedupeKey": "sky-bound",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.1746,
        "classic_unexpected": -0.0092,
        "minimal_ornate": -0.2351,
        "soft_sharp": -0.1136,
        "romantic_edgy": -0.0082,
        "organic_geometric": -0.0435,
        "playful_refined": 0.1684,
        "everyday_special_occasion": 0.1634,
        "lowkey_statement": 0.3504,
        "grounded_ethereal": 0.5508
      },
      "metrics": {
        "vectorStrength": 0.7628,
        "maxAbsScore": 0.5508,
        "focusRatio": 0.3031
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.5508
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "unfiltered": {
      "id": "unfiltered",
      "term": "Unfiltered",
      "cleanTerm": "unfiltered",
      "dedupeKey": "unfiltered",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0845,
        "classic_unexpected": 0.1416,
        "minimal_ornate": -0.4849,
        "soft_sharp": -0.1015,
        "romantic_edgy": 0.2615,
        "organic_geometric": -0.2661,
        "playful_refined": 0.1087,
        "everyday_special_occasion": -0.1757,
        "lowkey_statement": -0.2038,
        "grounded_ethereal": -0.2828
      },
      "metrics": {
        "vectorStrength": 0.759,
        "maxAbsScore": 0.4849,
        "focusRatio": 0.2297
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.4849
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "flexible": {
      "id": "flexible",
      "term": "Flexible",
      "cleanTerm": "flexible",
      "dedupeKey": "flexible",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0911,
        "classic_unexpected": -0.0316,
        "minimal_ornate": -0.2298,
        "soft_sharp": -0.2726,
        "romantic_edgy": 0.2029,
        "organic_geometric": 0.083,
        "playful_refined": 0.0973,
        "everyday_special_occasion": -0.4611,
        "lowkey_statement": -0.385,
        "grounded_ethereal": 0.0862
      },
      "metrics": {
        "vectorStrength": 0.7498,
        "maxAbsScore": 0.4611,
        "focusRatio": 0.2376
      },
      "topStyleSignal": {
        "dimension": "Everyday ↔ Special Occasion",
        "dimensionId": "everyday_special_occasion",
        "dimensionColumn": "everyday_special_occasion_score_norm",
        "pole": "Everyday",
        "score": -0.4611
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "jumpy": {
      "id": "jumpy",
      "term": "Jumpy",
      "cleanTerm": "jumpy",
      "dedupeKey": "jumpy",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.1174,
        "classic_unexpected": 0.5077,
        "minimal_ornate": -0.1943,
        "soft_sharp": 0.0749,
        "romantic_edgy": 0.1765,
        "organic_geometric": -0.2271,
        "playful_refined": -0.2856,
        "everyday_special_occasion": -0.1912,
        "lowkey_statement": -0.1665,
        "grounded_ethereal": -0.1351
      },
      "metrics": {
        "vectorStrength": 0.7495,
        "maxAbsScore": 0.5077,
        "focusRatio": 0.2445
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.5077
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "heartstrings": {
      "id": "heartstrings",
      "term": "Heartstrings",
      "cleanTerm": "heartstrings",
      "dedupeKey": "heartstrings",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 12,
      "scores": {
        "delicate_bold": -0.2031,
        "classic_unexpected": -0.1881,
        "minimal_ornate": 0.0329,
        "soft_sharp": -0.258,
        "romantic_edgy": -0.5038,
        "organic_geometric": -0.1109,
        "playful_refined": -0.2336,
        "everyday_special_occasion": 0.2497,
        "lowkey_statement": 0.1847,
        "grounded_ethereal": 0.0115
      },
      "metrics": {
        "vectorStrength": 0.7493,
        "maxAbsScore": 0.5038,
        "focusRatio": 0.2549
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.5038
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "adaptive_round"
      }
    },
    "starstruck": {
      "id": "starstruck",
      "term": "Starstruck",
      "cleanTerm": "starstruck",
      "dedupeKey": "starstruck",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.1104,
        "classic_unexpected": -0.1044,
        "minimal_ornate": -0.2049,
        "soft_sharp": 0.0362,
        "romantic_edgy": -0.0687,
        "organic_geometric": 0.0948,
        "playful_refined": -0.1213,
        "everyday_special_occasion": 0.2334,
        "lowkey_statement": 0.5118,
        "grounded_ethereal": 0.3787
      },
      "metrics": {
        "vectorStrength": 0.7448,
        "maxAbsScore": 0.5118,
        "focusRatio": 0.2745
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Statement",
        "score": 0.5118
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "energized": {
      "id": "energized",
      "term": "Energized",
      "cleanTerm": "energized",
      "dedupeKey": "energized",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.4219,
        "classic_unexpected": 0.0379,
        "minimal_ornate": -0.0503,
        "soft_sharp": 0.0059,
        "romantic_edgy": -0.0237,
        "organic_geometric": -0.0392,
        "playful_refined": 0.0663,
        "everyday_special_occasion": 0.3237,
        "lowkey_statement": 0.137,
        "grounded_ethereal": -0.4758
      },
      "metrics": {
        "vectorStrength": 0.7338,
        "maxAbsScore": 0.4758,
        "focusRatio": 0.3009
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Grounded",
        "score": -0.4758
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "explorative": {
      "id": "explorative",
      "term": "Explorative",
      "cleanTerm": "explorative",
      "dedupeKey": "explorative",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": 0.2288,
        "classic_unexpected": 0.5341,
        "minimal_ornate": 0.1103,
        "soft_sharp": -0.0632,
        "romantic_edgy": 0.2294,
        "organic_geometric": -0.2653,
        "playful_refined": -0.0826,
        "everyday_special_occasion": 0.1997,
        "lowkey_statement": -0.064,
        "grounded_ethereal": -0.0947
      },
      "metrics": {
        "vectorStrength": 0.7325,
        "maxAbsScore": 0.5341,
        "focusRatio": 0.2853
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.5341
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "evolved": {
      "id": "evolved",
      "term": "Evolved",
      "cleanTerm": "evolved",
      "dedupeKey": "evolved",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": 0.1187,
        "classic_unexpected": -0.1281,
        "minimal_ornate": 0.0164,
        "soft_sharp": 0.019,
        "romantic_edgy": 0.2465,
        "organic_geometric": -0.2607,
        "playful_refined": 0.5162,
        "everyday_special_occasion": 0.079,
        "lowkey_statement": -0.1095,
        "grounded_ethereal": -0.2338
      },
      "metrics": {
        "vectorStrength": 0.7066,
        "maxAbsScore": 0.5162,
        "focusRatio": 0.2988
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.5162
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "adaptive_round"
      }
    },
    "grid": {
      "id": "grid",
      "term": "Grid",
      "cleanTerm": "grid",
      "dedupeKey": "grid",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 4,
      "scores": {
        "delicate_bold": 0.128,
        "classic_unexpected": -0.0583,
        "minimal_ornate": 0.0911,
        "soft_sharp": 0.0507,
        "romantic_edgy": 0.0895,
        "organic_geometric": 0.5203,
        "playful_refined": 0.1694,
        "everyday_special_occasion": -0.0208,
        "lowkey_statement": 0.3219,
        "grounded_ethereal": 0.0259
      },
      "metrics": {
        "vectorStrength": 0.6654,
        "maxAbsScore": 0.5203,
        "focusRatio": 0.3525
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Geometric",
        "score": 0.5203
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": true,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "dreamlike": {
      "id": "dreamlike",
      "term": "Dreamlike",
      "cleanTerm": "dreamlike",
      "dedupeKey": "dreamlike",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.1185,
        "classic_unexpected": 0.0557,
        "minimal_ornate": 0.1099,
        "soft_sharp": -0.5493,
        "romantic_edgy": -0.5141,
        "organic_geometric": -0.2756,
        "playful_refined": -0.3174,
        "everyday_special_occasion": -0.0552,
        "lowkey_statement": -0.2399,
        "grounded_ethereal": 0.6384
      },
      "metrics": {
        "vectorStrength": 1.1136,
        "maxAbsScore": 0.6384,
        "focusRatio": 0.2221
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.6384
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "starlit": {
      "id": "starlit",
      "term": "Starlit",
      "cleanTerm": "starlit",
      "dedupeKey": "starlit",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.1769,
        "classic_unexpected": -0.2756,
        "minimal_ornate": -0.0728,
        "soft_sharp": -0.097,
        "romantic_edgy": -0.1917,
        "organic_geometric": 0.0189,
        "playful_refined": -0.0199,
        "everyday_special_occasion": 0.3408,
        "lowkey_statement": 0.3085,
        "grounded_ethereal": 0.6009
      },
      "metrics": {
        "vectorStrength": 0.8555,
        "maxAbsScore": 0.6009,
        "focusRatio": 0.2857
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.6009
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "sculptural": {
      "id": "sculptural",
      "term": "Sculptural",
      "cleanTerm": "sculptural",
      "dedupeKey": "sculptural",
      "termType": "single_word",
      "clientFacingPotential": "high",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.0669,
        "classic_unexpected": -0.1994,
        "minimal_ornate": 0.5029,
        "soft_sharp": -0.044,
        "romantic_edgy": -0.0236,
        "organic_geometric": 0.1982,
        "playful_refined": 0.1805,
        "everyday_special_occasion": 0.2178,
        "lowkey_statement": 0.0533,
        "grounded_ethereal": 0.1668
      },
      "metrics": {
        "vectorStrength": 0.6705,
        "maxAbsScore": 0.5029,
        "focusRatio": 0.3042
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.5029
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "tranquil": {
      "id": "tranquil",
      "term": "Tranquil",
      "cleanTerm": "tranquil",
      "dedupeKey": "tranquil",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.0999,
        "classic_unexpected": -0.2964,
        "minimal_ornate": -0.6868,
        "soft_sharp": -0.6924,
        "romantic_edgy": -0.5152,
        "organic_geometric": -0.2369,
        "playful_refined": 0.0428,
        "everyday_special_occasion": -0.3058,
        "lowkey_statement": -0.9392,
        "grounded_ethereal": -0.259
      },
      "metrics": {
        "vectorStrength": 1.5541,
        "maxAbsScore": 0.9392,
        "focusRatio": 0.2305
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.9392
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "laid_back": {
      "id": "laid_back",
      "term": "Laid-Back",
      "cleanTerm": "laid-back",
      "dedupeKey": "laid-back",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0537,
        "classic_unexpected": -0.069,
        "minimal_ornate": -0.5273,
        "soft_sharp": -0.6035,
        "romantic_edgy": -0.2932,
        "organic_geometric": -0.2421,
        "playful_refined": 0.0225,
        "everyday_special_occasion": -0.6728,
        "lowkey_statement": -0.8745,
        "grounded_ethereal": -0.145
      },
      "metrics": {
        "vectorStrength": 1.426,
        "maxAbsScore": 0.8745,
        "focusRatio": 0.2496
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.8745
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "whimsical": {
      "id": "whimsical",
      "term": "Whimsical",
      "cleanTerm": "whimsical",
      "dedupeKey": "whimsical",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.2468,
        "classic_unexpected": 0.2782,
        "minimal_ornate": 0.225,
        "soft_sharp": -0.2108,
        "romantic_edgy": -0.3744,
        "organic_geometric": -0.3653,
        "playful_refined": -0.9708,
        "everyday_special_occasion": -0.0687,
        "lowkey_statement": -0.3536,
        "grounded_ethereal": 0.3024
      },
      "metrics": {
        "vectorStrength": 1.2925,
        "maxAbsScore": 0.9708,
        "focusRatio": 0.2859
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.9708
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "garnished": {
      "id": "garnished",
      "term": "Garnished",
      "cleanTerm": "garnished",
      "dedupeKey": "garnished",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.0202,
        "classic_unexpected": -0.3318,
        "minimal_ornate": 0.8149,
        "soft_sharp": 0.2062,
        "romantic_edgy": -0.2686,
        "organic_geometric": 0.181,
        "playful_refined": 0.597,
        "everyday_special_occasion": 0.5584,
        "lowkey_statement": 0.2021,
        "grounded_ethereal": -0.0004
      },
      "metrics": {
        "vectorStrength": 1.2771,
        "maxAbsScore": 0.8149,
        "focusRatio": 0.2562
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Ornate",
        "score": 0.8149
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "uncomplicated": {
      "id": "uncomplicated",
      "term": "Uncomplicated",
      "cleanTerm": "uncomplicated",
      "dedupeKey": "uncomplicated",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 13,
      "scores": {
        "delicate_bold": -0.0331,
        "classic_unexpected": -0.0431,
        "minimal_ornate": -0.7896,
        "soft_sharp": -0.4307,
        "romantic_edgy": -0.0529,
        "organic_geometric": -0.1182,
        "playful_refined": 0.1637,
        "everyday_special_occasion": -0.5472,
        "lowkey_statement": -0.5711,
        "grounded_ethereal": -0.2916
      },
      "metrics": {
        "vectorStrength": 1.2514,
        "maxAbsScore": 0.7896,
        "focusRatio": 0.2596
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.7896
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "moonlit": {
      "id": "moonlit",
      "term": "Moonlit",
      "cleanTerm": "moonlit",
      "dedupeKey": "moonlit",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.2145,
        "classic_unexpected": -0.2405,
        "minimal_ornate": -0.0086,
        "soft_sharp": -0.4012,
        "romantic_edgy": -0.4386,
        "organic_geometric": -0.1795,
        "playful_refined": 0.0797,
        "everyday_special_occasion": 0.2113,
        "lowkey_statement": -0.1565,
        "grounded_ethereal": 1.0
      },
      "metrics": {
        "vectorStrength": 1.251,
        "maxAbsScore": 1.0,
        "focusRatio": 0.3413
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 1.0
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "unorthodox": {
      "id": "unorthodox",
      "term": "Unorthodox",
      "cleanTerm": "unorthodox",
      "dedupeKey": "unorthodox",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": 0.1579,
        "classic_unexpected": 0.871,
        "minimal_ornate": -0.3214,
        "soft_sharp": 0.2057,
        "romantic_edgy": 0.7275,
        "organic_geometric": -0.2381,
        "playful_refined": -0.1277,
        "everyday_special_occasion": 0.0183,
        "lowkey_statement": -0.0906,
        "grounded_ethereal": -0.0349
      },
      "metrics": {
        "vectorStrength": 1.2414,
        "maxAbsScore": 0.871,
        "focusRatio": 0.3118
      },
      "topStyleSignal": {
        "dimension": "Classic ↔ Unexpected",
        "dimensionId": "classic_unexpected",
        "dimensionColumn": "classic_unexpected_score_norm",
        "pole": "Unexpected",
        "score": 0.871
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "herbal": {
      "id": "herbal",
      "term": "Herbal",
      "cleanTerm": "herbal",
      "dedupeKey": "herbal",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 6,
      "scores": {
        "delicate_bold": 0.034,
        "classic_unexpected": -0.0479,
        "minimal_ornate": -0.2189,
        "soft_sharp": -0.479,
        "romantic_edgy": -0.125,
        "organic_geometric": -0.9202,
        "playful_refined": 0.0283,
        "everyday_special_occasion": -0.1301,
        "lowkey_statement": -0.3912,
        "grounded_ethereal": -0.224
      },
      "metrics": {
        "vectorStrength": 1.168,
        "maxAbsScore": 0.9202,
        "focusRatio": 0.3541
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.9202
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "kooky": {
      "id": "kooky",
      "term": "Kooky",
      "cleanTerm": "kooky",
      "dedupeKey": "kooky",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": 0.114,
        "classic_unexpected": 0.6403,
        "minimal_ornate": -0.0034,
        "soft_sharp": 0.071,
        "romantic_edgy": 0.2716,
        "organic_geometric": -0.4658,
        "playful_refined": -0.7671,
        "everyday_special_occasion": 0.0041,
        "lowkey_statement": -0.2019,
        "grounded_ethereal": -0.1101
      },
      "metrics": {
        "vectorStrength": 1.1662,
        "maxAbsScore": 0.7671,
        "focusRatio": 0.2896
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.7671
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "nonchalant": {
      "id": "nonchalant",
      "term": "Nonchalant",
      "cleanTerm": "nonchalant",
      "dedupeKey": "nonchalant",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.0106,
        "classic_unexpected": 0.0433,
        "minimal_ornate": -0.5915,
        "soft_sharp": -0.3558,
        "romantic_edgy": -0.1598,
        "organic_geometric": -0.1371,
        "playful_refined": -0.0331,
        "everyday_special_occasion": -0.5607,
        "lowkey_statement": -0.6732,
        "grounded_ethereal": -0.0959
      },
      "metrics": {
        "vectorStrength": 1.1405,
        "maxAbsScore": 0.6732,
        "focusRatio": 0.253
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.6732
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "low_key": {
      "id": "low_key",
      "term": "Low-Key",
      "cleanTerm": "low-key",
      "dedupeKey": "low-key",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.239,
        "classic_unexpected": 0.0124,
        "minimal_ornate": -0.6029,
        "soft_sharp": -0.3223,
        "romantic_edgy": -0.2628,
        "organic_geometric": -0.0839,
        "playful_refined": 0.1883,
        "everyday_special_occasion": -0.3222,
        "lowkey_statement": -0.7141,
        "grounded_ethereal": -0.1924
      },
      "metrics": {
        "vectorStrength": 1.1345,
        "maxAbsScore": 0.7141,
        "focusRatio": 0.2429
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.7141
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "comfort": {
      "id": "comfort",
      "term": "Comfort",
      "cleanTerm": "comfort",
      "dedupeKey": "comfort",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 7,
      "scores": {
        "delicate_bold": -0.0628,
        "classic_unexpected": -0.2694,
        "minimal_ornate": -0.442,
        "soft_sharp": -0.6394,
        "romantic_edgy": -0.4739,
        "organic_geometric": -0.1297,
        "playful_refined": 0.0295,
        "everyday_special_occasion": -0.0614,
        "lowkey_statement": -0.3856,
        "grounded_ethereal": -0.4386
      },
      "metrics": {
        "vectorStrength": 1.126,
        "maxAbsScore": 0.6394,
        "focusRatio": 0.2181
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.6394
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "synopsis"
      }
    },
    "fluidity": {
      "id": "fluidity",
      "term": "Fluidity",
      "cleanTerm": "fluidity",
      "dedupeKey": "fluidity",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": -0.2016,
        "classic_unexpected": -0.1462,
        "minimal_ornate": -0.1167,
        "soft_sharp": -0.659,
        "romantic_edgy": -0.2371,
        "organic_geometric": -0.1772,
        "playful_refined": 0.0237,
        "everyday_special_occasion": -0.6316,
        "lowkey_statement": -0.421,
        "grounded_ethereal": 0.2334
      },
      "metrics": {
        "vectorStrength": 1.1086,
        "maxAbsScore": 0.659,
        "focusRatio": 0.2314
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Soft",
        "score": -0.659
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": true,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "heavenly": {
      "id": "heavenly",
      "term": "Heavenly",
      "cleanTerm": "heavenly",
      "dedupeKey": "heavenly",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1655,
        "classic_unexpected": -0.2834,
        "minimal_ornate": 0.105,
        "soft_sharp": -0.426,
        "romantic_edgy": -0.3738,
        "organic_geometric": -0.2109,
        "playful_refined": 0.128,
        "everyday_special_occasion": 0.1874,
        "lowkey_statement": -0.2235,
        "grounded_ethereal": 0.7924
      },
      "metrics": {
        "vectorStrength": 1.1017,
        "maxAbsScore": 0.7924,
        "focusRatio": 0.2736
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.7924
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "refinement": {
      "id": "refinement",
      "term": "Refinement",
      "cleanTerm": "refinement",
      "dedupeKey": "refinement",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.4665,
        "classic_unexpected": -0.4069,
        "minimal_ornate": 0.0104,
        "soft_sharp": -0.0756,
        "romantic_edgy": -0.0733,
        "organic_geometric": 0.0834,
        "playful_refined": 0.7259,
        "everyday_special_occasion": 0.1002,
        "lowkey_statement": -0.3412,
        "grounded_ethereal": -0.216
      },
      "metrics": {
        "vectorStrength": 1.0494,
        "maxAbsScore": 0.7259,
        "focusRatio": 0.2904
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.7259
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "sweetness": {
      "id": "sweetness",
      "term": "Sweetness",
      "cleanTerm": "sweetness",
      "dedupeKey": "sweetness",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.3482,
        "classic_unexpected": -0.0712,
        "minimal_ornate": -0.3039,
        "soft_sharp": -0.3097,
        "romantic_edgy": -0.7167,
        "organic_geometric": -0.3313,
        "playful_refined": -0.1256,
        "everyday_special_occasion": 0.0445,
        "lowkey_statement": -0.2279,
        "grounded_ethereal": -0.2492
      },
      "metrics": {
        "vectorStrength": 1.0343,
        "maxAbsScore": 0.7167,
        "focusRatio": 0.2627
      },
      "topStyleSignal": {
        "dimension": "Romantic ↔ Edgy",
        "dimensionId": "romantic_edgy",
        "dimensionColumn": "romantic_edgy_score_norm",
        "pole": "Romantic",
        "score": -0.7167
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "luminous": {
      "id": "luminous",
      "term": "Luminous",
      "cleanTerm": "luminous",
      "dedupeKey": "luminous",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.1315,
        "classic_unexpected": -0.0969,
        "minimal_ornate": 0.0629,
        "soft_sharp": -0.5082,
        "romantic_edgy": -0.2771,
        "organic_geometric": -0.1641,
        "playful_refined": -0.0976,
        "everyday_special_occasion": 0.0651,
        "lowkey_statement": -0.1095,
        "grounded_ethereal": 0.8057
      },
      "metrics": {
        "vectorStrength": 1.0332,
        "maxAbsScore": 0.8057,
        "focusRatio": 0.3475
      },
      "topStyleSignal": {
        "dimension": "Grounded ↔ Ethereal",
        "dimensionId": "grounded_ethereal",
        "dimensionColumn": "grounded_ethereal_score_norm",
        "pole": "Ethereal",
        "score": 0.8057
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "lightweight": {
      "id": "lightweight",
      "term": "Lightweight",
      "cleanTerm": "lightweight",
      "dedupeKey": "lightweight",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 11,
      "scores": {
        "delicate_bold": -0.3785,
        "classic_unexpected": -0.0447,
        "minimal_ornate": -0.5047,
        "soft_sharp": -0.425,
        "romantic_edgy": -0.0874,
        "organic_geometric": 0.0534,
        "playful_refined": -0.1251,
        "everyday_special_occasion": -0.4739,
        "lowkey_statement": -0.2902,
        "grounded_ethereal": 0.2664
      },
      "metrics": {
        "vectorStrength": 0.9932,
        "maxAbsScore": 0.5047,
        "focusRatio": 0.1905
      },
      "topStyleSignal": {
        "dimension": "Minimal ↔ Ornate",
        "dimensionId": "minimal_ornate",
        "dimensionColumn": "minimal_ornate_score_norm",
        "pole": "Minimal",
        "score": -0.5047
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "synopsis"
      }
    },
    "herbaceous": {
      "id": "herbaceous",
      "term": "Herbaceous",
      "cleanTerm": "herbaceous",
      "dedupeKey": "herbaceous",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.0373,
        "classic_unexpected": -0.0286,
        "minimal_ornate": -0.0713,
        "soft_sharp": -0.138,
        "romantic_edgy": -0.0435,
        "organic_geometric": -0.7053,
        "playful_refined": -0.0763,
        "everyday_special_occasion": -0.2461,
        "lowkey_statement": -0.3787,
        "grounded_ethereal": -0.399
      },
      "metrics": {
        "vectorStrength": 0.9459,
        "maxAbsScore": 0.7053,
        "focusRatio": 0.332
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Organic",
        "score": -0.7053
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "cultured": {
      "id": "cultured",
      "term": "Cultured",
      "cleanTerm": "cultured",
      "dedupeKey": "cultured",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 8,
      "scores": {
        "delicate_bold": 0.0736,
        "classic_unexpected": -0.3607,
        "minimal_ornate": 0.128,
        "soft_sharp": -0.1756,
        "romantic_edgy": -0.2127,
        "organic_geometric": -0.1174,
        "playful_refined": 0.6493,
        "everyday_special_occasion": 0.2027,
        "lowkey_statement": -0.1556,
        "grounded_ethereal": -0.3218
      },
      "metrics": {
        "vectorStrength": 0.9123,
        "maxAbsScore": 0.6493,
        "focusRatio": 0.2708
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Refined",
        "score": 0.6493
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "whispering": {
      "id": "whispering",
      "term": "Whispering",
      "cleanTerm": "whispering",
      "dedupeKey": "whispering",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 10,
      "scores": {
        "delicate_bold": -0.3102,
        "classic_unexpected": 0.1452,
        "minimal_ornate": -0.3032,
        "soft_sharp": -0.3862,
        "romantic_edgy": -0.2769,
        "organic_geometric": -0.1838,
        "playful_refined": -0.1015,
        "everyday_special_occasion": -0.0798,
        "lowkey_statement": -0.4492,
        "grounded_ethereal": 0.1576
      },
      "metrics": {
        "vectorStrength": 0.8439,
        "maxAbsScore": 0.4492,
        "focusRatio": 0.1877
      },
      "topStyleSignal": {
        "dimension": "Low-key ↔ Statement",
        "dimensionId": "lowkey_statement",
        "dimensionColumn": "lowkey_statement_score_norm",
        "pole": "Low-key",
        "score": -0.4492
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "synopsis"
      }
    },
    "twinkling": {
      "id": "twinkling",
      "term": "Twinkling",
      "cleanTerm": "twinkling",
      "dedupeKey": "twinkling",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": -0.4011,
        "classic_unexpected": 0.0386,
        "minimal_ornate": 0.0301,
        "soft_sharp": -0.0747,
        "romantic_edgy": -0.4239,
        "organic_geometric": -0.0279,
        "playful_refined": -0.4681,
        "everyday_special_occasion": 0.1646,
        "lowkey_statement": -0.1215,
        "grounded_ethereal": 0.3096
      },
      "metrics": {
        "vectorStrength": 0.8403,
        "maxAbsScore": 0.4681,
        "focusRatio": 0.2272
      },
      "topStyleSignal": {
        "dimension": "Playful ↔ Refined",
        "dimensionId": "playful_refined",
        "dimensionColumn": "playful_refined_score_norm",
        "pole": "Playful",
        "score": -0.4681
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": false,
        "synopsis": true,
        "primaryUsage": "synopsis"
      }
    },
    "sharp": {
      "id": "sharp",
      "term": "Sharp",
      "cleanTerm": "sharp",
      "dedupeKey": "sharp",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 5,
      "scores": {
        "delicate_bold": -0.0156,
        "classic_unexpected": 0.0227,
        "minimal_ornate": -0.2404,
        "soft_sharp": 0.5752,
        "romantic_edgy": 0.0525,
        "organic_geometric": 0.1174,
        "playful_refined": 0.0892,
        "everyday_special_occasion": 0.1142,
        "lowkey_statement": -0.0471,
        "grounded_ethereal": -0.3501
      },
      "metrics": {
        "vectorStrength": 0.7428,
        "maxAbsScore": 0.5752,
        "focusRatio": 0.3541
      },
      "topStyleSignal": {
        "dimension": "Soft ↔ Sharp",
        "dimensionId": "soft_sharp",
        "dimensionColumn": "soft_sharp_score_norm",
        "pole": "Sharp",
        "score": 0.5752
      },
      "usage": {
        "initialScreen": false,
        "badFit": false,
        "adaptiveRound": false,
        "opposingPair": true,
        "synopsis": false,
        "primaryUsage": "opposing_pair_candidate"
      }
    },
    "framework": {
      "id": "framework",
      "term": "Framework",
      "cleanTerm": "framework",
      "dedupeKey": "framework",
      "termType": "single_word",
      "clientFacingPotential": "medium",
      "wordCount": 1,
      "charCount": 9,
      "scores": {
        "delicate_bold": 0.0103,
        "classic_unexpected": -0.2583,
        "minimal_ornate": -0.1782,
        "soft_sharp": -0.2303,
        "romantic_edgy": 0.2141,
        "organic_geometric": 0.4971,
        "playful_refined": 0.217,
        "everyday_special_occasion": 0.0657,
        "lowkey_statement": 0.1714,
        "grounded_ethereal": -0.0839
      },
      "metrics": {
        "vectorStrength": 0.7297,
        "maxAbsScore": 0.4971,
        "focusRatio": 0.2581
      },
      "topStyleSignal": {
        "dimension": "Organic ↔ Geometric",
        "dimensionId": "organic_geometric",
        "dimensionColumn": "organic_geometric_score_norm",
        "pole": "Geometric",
        "score": 0.4971
      },
      "usage": {
        "initialScreen": false,
        "badFit": true,
        "adaptiveRound": false,
        "opposingPair": false,
        "synopsis": false,
        "primaryUsage": "unused"
      }
    }
  },
  "droppedTermsSummary": {
    "count": 22,
    "reason": "Excluded because term was bad_fit, risky_or_internal, low client-facing, risk-flagged, or marked Remove."
  }
};
