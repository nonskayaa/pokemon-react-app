import React from "react";
import classes from "./PokemonCard.module.css";
import { useState, useEffect } from "react";
import PokemonService from "../../../../api/PokemonService";
import { Link } from "react-router-dom";
export default function PokemonCard({ pokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState({});

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

  async function fetchPokemon() {
    const pokemonInfo = await PokemonService.getPokemonInfo(pokemon.url);
    setPokemonInfo(pokemonInfo);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <a
      href={`../aboutPokemon/${pokemonInfo.name}`}
      className={classes.pokemon_card}
    >
      <div className={classes.pokemon_card__titles_container}>
        <p className={classes.pokemon_card__name}>{pokemonInfo.name}</p>
        <p className={classes.pokemon_card__id}>#{pokemonInfo.id}</p>
      </div>
      <img
        src={pokemonInfo?.sprites?.other?.home.front_default} //
        className={classes.pokemon_card__image}
        alt="pokemon image"
      />
      <ul className={classes.pokemon_card__types_list}>
        {pokemonInfo.types?.map((type) => (
          <li
            key={type.type.name}
            className={classes.pokemon_card__type}
            style={{
              backgroundColor: `${pokemonTypeColor.get(type.type.name)}`,
            }}
          >
            {type.type.name}
          </li>
        ))}
      </ul>
    </a>
  );
}
