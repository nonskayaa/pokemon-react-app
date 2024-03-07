import React from "react";
import Search from "./components/search/Search";
import { useEffect, useState, useMemo } from "react";
import PokemonList from "./components/pokemonList/PokemonList";
import axios from "axios";

export default function MainPage({ listPokemons }) {
  const [pokemons, setPokemons] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [currentOffset, setCurrentOffset] = useState(0);

  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${currentOffset}`
        )
        .then((response) => {
          setPokemons([...pokemons, ...response.data.results]);
          setCurrentOffset((prev) => prev + 30);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  const searchedPokemons = useMemo(() => {
    if (searchQuery) {
      return listPokemons.filter((pokemon) =>
        pokemon.name.startsWith(searchQuery)
      );
    }
    return pokemons;
  }, [searchQuery, listPokemons, pokemons]);

  return (
    <div className="main_container">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokemonList pokemonsList={searchedPokemons} />
    </div>
  );
}
