function doGet() {
  var t = HtmlService.createTemplateFromFile('index');
  t.ranking = SpreadsheetApp
      .openById(<id>)
      .getActiveSheet()
  .getRange('A1:E24')
      .getValues();
  t.claudio = SpreadsheetApp
      .openById('<id>)
      .getActiveSheet()
  .getRange('I2:J7')
      .getValues();
  t.salvatore = SpreadsheetApp
      .openById(<id>)
      .getActiveSheet()
  .getRange('I12:J16')
      .getValues();
  return t.evaluate();
}




function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

