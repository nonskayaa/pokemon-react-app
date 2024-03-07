import React from "react";
import classes from "./Breeding.module.css";

export default function Breeding({ pokemon }) {
  return (
    <div className={classes.breeding_card__container}>
      <h2 className={classes.breeding_card__title}>Breeding</h2>
      <div className={classes.breeding_card__sizes_list}>
        <div className={classes.breeding_card__size_container}>
          <label className={classes.breeding_card__size_title} htmlFor="height">
            Height
          </label>
          <div id="height" className={classes.breeding_card__size_item}>
            {pokemon?.height / 10} m
          </div>
        </div>
        <div className={classes.breeding_card__size_container}>
          <label className={classes.breeding_card__size_title} htmlFor="weight">
            Weight
          </label>
          <div id="weight" className={classes.breeding_card__size_item}>
            {pokemon?.weight} kg
          </div>
        </div>
      </div>
    </div>
  );
}
