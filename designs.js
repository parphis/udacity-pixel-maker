// Select color input
var currentColor = $('#colorPicker').val();
$('#colorPicker').change(function() {
  currentColor = $(this).val();
})

function initTable() {
  $('.gridRow').each(function() {
    $(this).remove();
  });
  $('.gridCol').each(function() {
    $(this).remove();
  });
}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(makeGrid);

function makeGrid(evt) {
  evt.preventDefault();
  // clear the canvas
  initTable();
  
  // Select size input
  let gridRows = parseInt($('#input_height').val());
  let gridCols = parseInt($('#input_width').val());
  // get table object
  let tbl = $('#pixel_canvas');

  for (var row=0; row<gridRows; row++) {
    let newRow = $('<tr class="gridRow"></tr>');
    tbl.prepend(newRow);
    for (var col=0; col<gridCols; col++) {
      let newCol = $('<td class="gridCol"></td>');
      newRow.append(newCol);
      newRow.on('click', 'td', function() {
         $(this).css('backgroundColor', currentColor);
      });
    }
  }
}
