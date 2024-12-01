import { Scuare } from "./Square";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText =
    winner === false ? "Juego Terminado" : `Jugador ${winner} ganó!`;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner !== false && <Scuare>{winner}</Scuare>}
          {winner === false && "Empate"}
        </header>
        <footer>
          <button onClick={resetGame}>Jugar</button>
        </footer>
      </div>
    </section>
  );
}
