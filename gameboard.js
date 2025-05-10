function createGameboard() {
  const gameArea = document.createElement("div");
  gameArea.className = "container";

  gameArea.style.display = "grid";
  gameArea.style.gridTemplateColumns = "repeat(3, 1fr)";
  gameArea.style.gridTemplateRows = "repeat(3, 1fr)";
  gameArea.style.gap = "10px";
  gameArea.style.width = "300px";
  gameArea.style.height = "300px";

  const grid = [];
  for (let row = 0; row < 3; row++) {
    const rowCells = [];
    for (let col = 0; col < 3; col++) {
      const i = row * 3 + col;
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      cell.style.background = "lightgray";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      cell.style.border = "1px solid black";
      gameArea.appendChild(cell);
      rowCells.push(cell);
    }
    grid.push(rowCells);
  }

  document.body.appendChild(container);

  const updateGameArea = (row, col, value) => {
    grid[row][col].textContent = value;
  };

  const getGameArea = () => {
    return gameArea;
  };

  return { updateGameArea, getGameArea };
}


