const scanArea = (grid) => {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid.length; colIndex++) {
      if (grid[rowIndex][colIndex] === "B") {
        if (typeof grid[rowIndex + 1]?.[colIndex] === "number") grid[rowIndex + 1][colIndex]++;
        if (typeof grid[rowIndex + 1]?.[colIndex + 1] === "number") grid[rowIndex + 1][colIndex + 1]++;
        if (typeof grid[rowIndex]?.[colIndex + 1] === "number") grid[rowIndex][colIndex + 1]++;
        if (typeof grid[rowIndex - 1]?.[colIndex + 1] === "number") grid[rowIndex - 1][colIndex + 1]++;
        if (typeof grid[rowIndex - 1]?.[colIndex] === "number") grid[rowIndex - 1][colIndex]++;
        if (typeof grid[rowIndex - 1]?.[colIndex - 1] === "number") grid[rowIndex - 1][colIndex - 1]++;
        if (typeof grid[rowIndex]?.[colIndex - 1] === "number") grid[rowIndex][colIndex - 1]++;
        if (typeof grid[rowIndex + 1]?.[colIndex - 1] === "number") grid[rowIndex + 1][colIndex - 1]++;
      }
    }
  }
}
export default scanArea