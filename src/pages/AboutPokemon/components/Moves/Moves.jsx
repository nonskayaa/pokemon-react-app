import React from "react";
import classes from "./Moves.module.css";
import MoveTypeCard from "./MoveTypeCard";

export default function Moves({ pokemon }) {
  const listMoves = pokemon?.moves?.splice(0, 6);
  return (
    <div className={classes.moves_card__container}>
      <div className={classes.moves_card__top_container}>
        <h2 className={classes.moves_card__title}>Moves</h2>
      </div>
      <ul className={classes.moves__list}>
        {listMoves?.map((move) => (
          <MoveTypeCard move={move.move} />
        ))}
      </ul>
    </div>
  );
}
