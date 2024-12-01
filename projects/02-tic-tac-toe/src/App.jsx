import { useState } from "react";
import confetti from "canvas-confetti";

import { Scuare } from "./components/Square";
import { TURNS } from "./constants";
import { checkEndGame, checkWinnerFrom} from "./logic/board";
import { WinnerModal } from "./components/Winner";
import { Turns } from "./components/Turns";

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
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}> Reiniciar</button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Scuare key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Scuare>
          );
        })}
      </section>

      <Turns turn={turn} />

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
