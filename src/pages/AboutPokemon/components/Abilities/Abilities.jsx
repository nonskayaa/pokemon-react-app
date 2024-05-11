import React from "react";
import classes from "./Abilities.module.css";
import AbilityCard from "./AbilityCard";

export default function Abilities({ pokemon }) {
  return (
    <div className={classes.abilities_card__container}>
      <h2 className={classes.abilities_card__title}>Abilities</h2>
      <div className={classes.abilities_card__items_container}>
        {pokemon?.abilities?.map((ability) => (
          <AbilityCard ability={ability.ability} key={ability.ability.name} />
        ))}
      </div>
    </div>
  );
}
