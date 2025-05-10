
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

// create player factory function
function createPlayer(name, symbol) {
    const getName = () => name;
    const getSymbol = () => symbol;
  return { getName, getSymbol };
}

// create game flow factory function
function createGameFlow() {
  const players = [createPlayer("Player 1", "X"), createPlayer("Player 2", "O")];
  const gameBoard = createGameboard();
  
  function startGame() {
    const currentPlayer = players[0];
    let game = true;
    while(game) {
        console.log(gameBoard.getGameArea());
        let col = prompt('choose a column');
        let row = prompt("choose a row");

        gameBoard.updateGameArea(row, col, currentPlayer.getSymbol());
        
        
    }

  }

  return { startGame }
}
const game = createGameFlow();

console.log(game.startGame());