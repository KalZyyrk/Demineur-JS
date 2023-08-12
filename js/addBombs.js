const addBombs = (grid) => {
  const maxBombs = 9;

  const bombCoords = [];

  while (bombCoords.length < maxBombs) {
    const coord = getRandomCoord(grid);
    bombCoords.push(coord);
  }

  for (const coord of bombCoords) {
    grid[coord.col][coord.row] = "B";
  }
}

const getRandomCoord = (grid) => {
  const col = Math.floor(Math.random() * grid.length);
  const row = Math.floor(Math.random() * grid.length);

  return { col, row };
}

export default addBombs