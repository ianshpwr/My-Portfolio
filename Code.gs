function doPost(e) {
  try {
    Logger.log('Received POST request: ' + JSON.stringify(e));

    var requestData = JSON.parse(e.postData.contents); // Parse JSON
    Logger.log('Parsed JSON Data: ' + JSON.stringify(requestData));

    if (requestData && requestData.message) {
      var sheet = SpreadsheetApp.openById('1H4Vs_JBDYwkK3p7z6EMvQO_W7OpzjoiQUqb68eJsfko').getActiveSheet();
      sheet.appendRow([new Date(), requestData.message]);
      return ContentService.createTextOutput('Success');
    } else {
      Logger.log('No message received in JSON');
      return ContentService.createTextOutput('No message received');
    }
  } catch (error) {
    Logger.log('Error: ' + error.message);
    return ContentService.createTextOutput('Error: ' + error.message);
  }
}
