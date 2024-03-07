import React from "react";
import classes from "./PokemonList.module.css";
import PokemonCard from "../pokemonCard/PokemonCard";
import pikachu from "../../../../assets/images/pikachu.png";

export default function PokemonList({ pokemonsList }) {


  return (
    <>
      {pokemonsList.length > 0 ? (
        <div className={classes.pokemon_list__container}>
          {pokemonsList.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className={classes.not_found__container}>
          <h1>Oops! Try again. </h1>
          <p>
            The Pokemon you're looking for is a unicorn. it doesn't exist in
            this list.
          </p>
          <img src={pikachu} alt="" />
        </div>
      )}
    </>
  );
}
