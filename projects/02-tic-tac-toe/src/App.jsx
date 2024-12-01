import confetti from "canvas-confetti";
import { useState } from "react";

import { Board } from "./components/Board";
import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/Winner";
import { TURNS } from "./constants";
import { checkEndGame, checkWinnerFrom } from "./logic/board";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);

  // null significa que no tenemos ganador, False que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Restart</button>

      <Board boardGame={board} updateBoard={updateBoard}/>

      <Turns turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
