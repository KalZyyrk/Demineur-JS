const createVirtualGrid = () => {
  const gridSize = 10;
  const grid = [...Array(gridSize).keys()].map(() => {
    return [...Array(gridSize).keys()].map(() => {
      return 0;
    })
  })

  return grid;
}

export default createVirtualGrid;