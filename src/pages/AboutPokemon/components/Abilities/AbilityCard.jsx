import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Abilities.module.css";

export default function AbilityCard({ ability }) {
  const [abilityName, setAbilityName] = useState("");
  const [abilityInfo, setAbilityInfo] = useState();

  return (
    <div className={classes.abilities_card__ability_item}>
      <div className={classes.abilities_card__ability_icon}>
        {ability.name.toUpperCase()[0]}
      </div>
      <p className={classes.abilities_card__ability_title}>{ability.name}</p>
    </div>
  );
}
