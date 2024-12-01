import { Scuare } from "./Square";

export function Board({boardGame, updateBoard}) {
  return (
    <section className="game">
      {boardGame.map((square, index) => {
        return (
          <Scuare key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Scuare>
        );
      })}
    </section>
  );
}
