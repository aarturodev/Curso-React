import { Scuare } from "./Square";
import { TURNS } from "../constants";

export function Turns({turn}) {
  return (
    <section className="turn">
      <Scuare isSelected={turn === TURNS.x}>{TURNS.x}</Scuare>
      <Scuare isSelected={turn === TURNS.o}>{TURNS.o}</Scuare>
    </section>
  );
}
