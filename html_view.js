function update_html() {
  var table = document.getElementsByTagName("table")[0];
  table.border=3;
  table.style.borderCollapse = "collapse";
  table.cellPadding = "5px";
  var allTableCells = document.getElementsByTagName("td");
  for(var i = 0, max = allTableCells.length; i < max; i++) {
    var node = allTableCells[i];

    //get the text from the first child node - which should be a text node
    var currentText = node.childNodes[0].nodeValue;

    //check for 'one' and assign this table cell's background color accordingly
    if (currentText.trim() === "FAILED")
        node.style.backgroundColor = "red";
    if (currentText.trim() === "PASSED")
        node.style.backgroundColor = "forestgreen";
    if (currentText.trim() === "NOT RUN" || currentText.trim() === "NA")
        node.style.backgroundColor = "808000";
  }
}

update_html();
