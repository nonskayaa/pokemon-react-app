import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../../api/PokemonService";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";
import Breeding from "./components/ Breeding/Breeding";
import Moves from "./components/Moves/Moves";
import Header from "./components/Header/Header";
import Abilities from "./components/Abilities/Abilities";

export default function AboutPokemonPage({ listPokemons }) {
  const { name } = useParams();

  const [pokemonInfo, setPokemonInfo] = useState({});

  async function fetchPokemon() {
    if (listPokemons) {
      const pokemon = listPokemons.find((pokemon) => pokemon.name === name);
      const pokemonInfo = await PokemonService.getPokemonInfo(pokemon?.url);
      setPokemonInfo(pokemonInfo);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [listPokemons]);

  return (
    <>
      <Header />
      <div className="main_container">
        <InfoCard pokemon={pokemonInfo} />
        <Breeding pokemon={pokemonInfo} />
        <Moves pokemon={pokemonInfo} />
        <Abilities pokemon={pokemonInfo} />
      </div>
    </>
  );
}
