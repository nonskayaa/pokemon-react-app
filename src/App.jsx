import "./App.css";
import AboutPokemonPage from "./pages/AboutPokemon/AboutPokemonPage";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<MainPage listPokemons={listPokemons} />} />
          <Route
            path="aboutPokemon/:name"
            element={<AboutPokemonPage listPokemons={listPokemons} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
