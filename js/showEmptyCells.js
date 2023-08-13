const showEmptyCells = (grid) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      if (grid[rowIndex][colIndex] === 0) {
        const el = document.querySelector(`.cell-row-${rowIndex}-col-${colIndex}`);
        el.classList.remove('cell-hidden');
        el.classList.add("cell-empty");
      }
      if (grid[rowIndex][colIndex] === 1) {
        const el = document.querySelector(`.cell-row-${rowIndex}-col-${colIndex}`);
        el.classList.remove('cell-hidden');
        el.classList.add('cell-num', 'cell-num-1');
        el.textContent = "1";
      }
    }
  }
}

export default showEmptyCells;