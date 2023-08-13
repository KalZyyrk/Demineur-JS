import unveil from '../unveil.js';

const onClickCell = ({ target, grid }) => {
  if (!target.matches(".cell-hidden")) {
    return;
  }

  const { rowIndex, colIndex } = target.dataset;
  const row = Number(rowIndex);
  const col = Number(colIndex);

  console.log(row, col);

  unveil({ col, row, grid, target })
}


export default onClickCell;