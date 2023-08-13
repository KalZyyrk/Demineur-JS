const createHTMLGrid = (grid) => {
  const html = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      const divElt = document.createElement('div');
      divElt.classList.add('cell', 'cell-hidden', `cell-row-${rowIndex}-col-${colIndex}`);
      divElt.dataset.rowIndex = rowIndex;
      divElt.dataset.colIndex = colIndex;
      // divElt.textContent = grid[colIndex][rowIndex]

      // if (typeof grid[colIndex][rowIndex] === "number") {
      //   divElt.classList.add();
      // }
      html.push(divElt);
    };
  };

  document.querySelector('.grid').append(...html)
}

export default createHTMLGrid