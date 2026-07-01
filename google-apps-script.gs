function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Entries");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Entries");
    sheet.appendRow(["Timestamp", "Item", "Tier", "Action"]);
  }

  var data = e.parameter || {};
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.item || "",
    data.tier || "",
    data.action || "added"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
