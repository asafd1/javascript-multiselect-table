<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script 
src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">
</script>
<style>
  tr.selected
  {
    background-color:#d0e4fe;
  }
  td.selected
  {
    font-weight:bold;
  }
</style>

<script>
$(document).ready(function(){
  var table = $("#t1");
  table.find("tr").click(function(e){
    select(e, table, $(this));
  });
});

function select(e, table, row)
{
  if (!e.ctrlKey && !e.shiftKey)
  {
    table.find("tr").removeClass("selected");
    table.find("td").removeClass("selected");
    selectedRows = [row];
  } else {
    if (e.ctrlKey)
    {
      selectedRows.push(row);
    } else {
      if (selectedRows.length > 0)
      {
          lastSelectedRow = selectedRows[selectedRows.length - 1];
          var lastSelected = table.find("tr").index(lastSelectedRow);
          var rowId = table.find("tr").index(row);
          if (lastSelected <= rowId)
          {
            var from = lastSelected+1;
            var to = rowId;
          } else {
            var from = rowId;
            var to = lastSelected-1;
          }

          var allRows = table.find("tr");
          for (var i=from; i<=to; i++){
            currentRow = allRows.eq(i);
            selectedRows.push(currentRow);
          }
      }
      else
      {
        selectedRows.push(row);
      }
    }
  }
  
  var len = selectedRows.length;
  if (len > 0)
  {
    for (var i=0; i < len; ++i)
    {
      var selectedRow = selectedRows[i];
      selectedRow.addClass("selected");
      col = selectedRow[0].cells[1];
      $(col).addClass("selected");
    }
  }
}
</script>
</head>

<body>

<table id="t1" border=1 width=100px>
  <tr><td>1</td><td>text</td></tr>
  <tr><td>2</td><td>text</td></tr>
  <tr><td>3</td><td>text</td></tr>
  <tr><td>4</td><td>text</td></tr>
</table>

<table id="t2" border=1 width=100px>
  <tr><td>a</td></tr>
  <tr><td>b</td></tr>
  <tr><td>c</td></tr>
</table>

</body>
</html>
