
// create gameboard factory function
function createGameboard() {
  const gameArea = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];

  const updateGameArea = (row, col, value) => {
    gameArea[row][col] = value;
  };

  const getGameArea = () => {
    return gameArea;
  };

  return { updateGameArea, getGameArea };
}






const gameBoard = createGameboard();

console.log(gameBoard.getGameArea());
