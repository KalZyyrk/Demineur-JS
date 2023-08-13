import createVirtualGrid from "./createVirtualGrid.js";
import addBombs from './addBombs.js';
import scanArea from './scanArea.js';
import createHTMLGrid from './createHTMLGrid.js';
import addEventListener from './addEventListener.js';

const grid = createVirtualGrid();
addBombs(grid)
scanArea(grid)
createHTMLGrid(grid)
addEventListener(grid)

console.table(grid)