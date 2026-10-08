# Jewelry taste portfolio

Right swipe / Like saves inspiration; left swipe / Pass skips it. Users can
review at any point, undo the last swipe, remove favorites, and add notes.
Finishing exploration opens the gallery. Selections appear in the final plan.
Prices and availability are intentionally omitted. No stock filter is applied.
Selections live in memory for the current page session; refreshing clears them.

## Connect Ecwid

1. Configure `ECWID_API_TOKEN` in the existing Google Apps Script project's
   Script Properties using a token with catalog read access. Do not commit it.
2. Set `ECWID_STORE_ID` to `100498189` (also the connector's default).
3. Add `Backend/JewelryCatalog.js` and the updated `Backend/Code.js` to that
   project, then update its web-app deployment.
4. If the deployment URL changes, set `window.JEWELRY_CATALOG_URL` before
   loading the explorer script to the new URL with `action=getJewelryCatalog`.

The connector returns catalog pages of 100 items, cached for five minutes.
Only minimal product metadata is sent to the browser. All products returned by
Ecwid are included regardless of stock; products without a usable HTTPS image
are omitted. If the store contains services or other non-jewelry products,
category filtering still needs to be configured once its catalog is available.

## Backend handoff

`window.BMBMJewelryExplorer.getHandoff()` returns store ID, purpose,
reviewed count, and selections (product ID, name, SKU, image URL, category IDs,
and comment). The integrated planner also exposes this in
`window.BMBMPlanner.getConsultationHandoff().jewelryExplorer`.
The standalone page ends at the editable portfolio summary. There is no JSON download in the client interface.
At 5 and 15 likes, a dialog offers to end with the portfolio summary or keep going.
There are no further checkpoints after 15 likes.

The planner's existing final Submit button is still a placeholder. These
changes prepare the payload; they do not implement final submission or storage.

API reference: https://docs.ecwid.com/api-reference/rest-api/products/search-products
