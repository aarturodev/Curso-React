import { Scuare } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText =
    winner === false ? "Game Over !" : `Winner !`;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner !== false && <Scuare>{winner}</Scuare>}
          {winner === false && "Draw"}
        </header>
        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  );
}
