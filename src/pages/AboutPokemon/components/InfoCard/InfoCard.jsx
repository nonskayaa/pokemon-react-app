import React from "react";
import classes from "./InfoCard.module.css";
import CharacteristicBar from "./CharacteristicBar";

export default function InfoCard({ pokemon }) {
  let pokemonTypeColor = new Map([
    ["grass", "#60D394"],
    ["fire", "#F14B3D"],
    ["poison", "#6E44FF"],
    ["bug", "#009666"],
    ["dragon", "#33CCCC"],
    ["steel", "#66CC99"],
    ["dark", "#333333"],
    ["flying", " #999999"],
    ["normal", "#996699"],
    ["ghost", "#993399"],
    ["rock", "#663300"],
    ["ground", "#664400"],
    ["fighting", "#CC3300"],
    ["electric", "#FFCC00"],
    ["psychic", "#CC0099"],
    ["fairy", " #FF3366"],
    ["water", "#3333CC"],
    ["ice", "#66CCCC"],
  ]);
  return (
    <div className={classes.info_card__container}>
      <div className={classes.info_card__top}>
        <div className={classes.info_card__text}>
          <p className={classes.info_card__id}>#{pokemon?.id}</p>
          <h1 className={classes.info_card__title}>{pokemon?.name}</h1>
        </div>
        <ul className={classes.info_card__type_list}>
          {pokemon?.types?.map((type) => (
            <li
              key={type.type.name}
              className={classes.info_card__type}
              style={{
                backgroundColor: `${pokemonTypeColor.get(type.type.name)}`,
              }}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.info_card__bottom}>
        <ul className={classes.info_card__stats_list}>
          {pokemon?.stats?.map((stat) => {
            const statName = stat.stat.name;
            if (
              (statName === "hp") |
              (statName === "attack") |
              (statName === "defense") |
              (statName === "speed")
            ) {
              return (
                <li>
                  <CharacteristicBar
                    label={stat.stat.name}
                    progressValue={stat.base_stat}
                  />
                </li>
              );
            }
          })}
        </ul>

        <img
          src={pokemon?.sprites?.other?.home.front_default}
          alt={pokemon?.name}
          className={classes.info_card__img}
        />
      </div>
    </div>
  );
}
