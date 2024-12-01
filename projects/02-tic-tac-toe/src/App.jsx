import confetti from "canvas-confetti";
import { useState } from "react";

import { Board } from "./components/Board";
import { Turns } from "./components/Turns";
import { WinnerModal } from "./components/Winner";
import { TURNS } from "./constants";
import { checkEndGame, checkWinnerFrom } from "./logic/board";

export default function App() {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = window.localStorage.getItem("board");
    return boardLocalStorage
      ? JSON.parse(boardLocalStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem("turn");
    return turnLocalStorage ?? TURNS.x;
  });

  // null significa que no tenemos ganador, False que hay un empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);
    window.localStorage.removeItem("board")
    window.localStorage.removeItem("turn")
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // guardamos el tablero y el turno de la partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}> Restart</button>

      <Board boardGame={board} updateBoard={updateBoard} />

      <Turns turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
