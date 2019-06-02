const elementMap = [];

constructBoard(30, 30);

function constructBoard(cols, rows) {
  const boardTable = document.getElementById('board');
  
  for (let r = 0; r < rows; r++) {
    const row = document.createElement('tr');
    const elementRow = [];
    
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('td');
      cell.dataset.column = c;
      cell.dataset.row = r;
      cell.addEventListener('click', clickHandler);
      
      if ((r === 0 && c < 2) || (r === 1 && c === 0)) {
        cell.className = 'has-piece';
      } else {
        cell.className = '';
      }
      
      row.appendChild(cell);
      elementRow.push(cell);
    }
    
    boardTable.appendChild(row);
    elementMap.push(elementRow);
  }
}

function clickHandler(e) {
  const clickedCell = e.target;
  const clickedRow = parseInt(clickedCell.dataset.row, 10);
  const clickedCol = parseInt(clickedCell.dataset.column, 10);
  const rightPropagationCell = elementMap[clickedRow][clickedCol + 1];
  const bottomPropagationCell = elementMap[clickedRow + 1][clickedCol];
  
  if (!rightPropagationCell || !bottomPropagationCell) {
    console.log('Out of bounds!');
    return;
  }
  
  if (
    rightPropagationCell.classList.contains('has-piece') ||
    bottomPropagationCell.classList.contains('has-piece') ||
    !clickedCell.classList.contains('has-piece')
  ) {
    console.log('Illegal move!');
    return;
  }
  
  console.log(`Clicked on row ${clickedRow}, column ${clickedCol}`);
  clickedCell.classList.remove('has-piece');
  rightPropagationCell.classList.add('has-piece');
  bottomPropagationCell.classList.add('has-piece');
}