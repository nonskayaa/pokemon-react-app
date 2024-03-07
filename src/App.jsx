import "./App.css";
import AboutPokemonPage from "./pages/AboutPokemon/AboutPokemonPage";
import MainPage from "./pages/MainPage/MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listPokemons, setListPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=1300`)
      .then((response) => {
        setListPokemons(response.data.results);
      });
  }, []);

  return (
    <>
      <HashRouter basename={"/pokemon-react-app"}>
        <Routes>
          <Route index element={<MainPage listPokemons={listPokemons} />} />
          <Route
            path="aboutPokemon/:name"
            element={<AboutPokemonPage listPokemons={listPokemons} />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
