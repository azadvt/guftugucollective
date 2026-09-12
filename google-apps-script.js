// COPY THIS ENTIRE CODE into Google Apps Script
// Steps:
// 1. Create a new Google Sheet
// 2. Add headers in Row 1: Timestamp | Name | Email | Reason | Message
// 3. Go to Extensions > Apps Script
// 4. Delete existing code, paste this
// 5. Click Deploy > New deployment
// 6. Type: Web app | Execute as: Me | Access: Anyone
// 7. Click Deploy, Authorize it
// 8. Copy the Web app URL
// 9. Add it as GOOGLE_SHEET_WEBHOOK env var in Vercel

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.reason,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
