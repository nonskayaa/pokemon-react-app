import "./App.css";
import PokemonService from "./api/PokemonService";
import Search from "./components/search/Search";
import { useEffect, useState, useMemo } from "react";
import PokemonList from "./components/pokemonList/PokemonList";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const searchedPokemons = useMemo(() => {
    if (searchQuery) {
      return pokemons.filter((pokemon) => pokemon.name.startsWith(searchQuery));
    }
    return pokemons;
  }, [searchQuery, pokemons]);

  async function fetchPokemons() {
    const pokemons = await PokemonService.getAllPokemons();
    setPokemons(pokemons);
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="main_container">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokemonList pokemonsList={searchedPokemons} />
    </div>
  );
}

export default App;
