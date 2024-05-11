import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonService from "../../api/PokemonService";
import { useState } from "react";
import InfoCard from "./components/InfoCard/InfoCard";
import Breeding from "./components/ Breeding/Breeding";
import Moves from "./components/Moves/Moves";
import Header from "./components/Header/Header";
import Abilities from "./components/Abilities/Abilities";
import axios from "axios";
import NotFound from "../../components/NotFound/NotFound";

export default function AboutPokemonPage({ listPokemons }) {
  const { name } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    const pokemon = listPokemons.find((pokemon) => pokemon.name === name);
    axios.get(pokemon?.url).then((response) => {
      const pokemonResponse = response.data;
      setPokemonInfo(pokemonResponse);
    });
  }, [listPokemons]);
  console.log(pokemonInfo);
  return (
    <>
      <Header />
      <div className="main_container">
        {Object.keys(pokemonInfo).length ? (
          <>
            <InfoCard pokemon={pokemonInfo} />
            <Breeding pokemon={pokemonInfo} />
            <Moves pokemon={pokemonInfo} />
            <Abilities pokemon={pokemonInfo} />
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}
