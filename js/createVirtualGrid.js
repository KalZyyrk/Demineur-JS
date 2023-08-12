const createVirtualGrid = () => {
  const gridSize = 10;
  const grid = [...Array(gridSize).keys()].map(() => {
    return [...Array(gridSize).keys()].map(() => {
      return 0;
    })
  })

  console.table(grid);
}

export default createVirtualGrid;