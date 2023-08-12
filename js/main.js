import createVirtualGrid from "./createVirtualGrid.js";
import addBombs from './addBombs.js';

const grid = createVirtualGrid();
addBombs(grid)

console.table(grid)