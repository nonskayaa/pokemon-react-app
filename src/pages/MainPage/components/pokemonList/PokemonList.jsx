import React from "react";
import classes from "./PokemonList.module.css";
import PokemonCard from "../pokemonCard/PokemonCard";
import NotFound from "../../../../components/NotFound/NotFound";

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
        <NotFound />
      )}
    </>
  );
}
