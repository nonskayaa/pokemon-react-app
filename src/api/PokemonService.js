import axios from "axios";

export default class PokemonService {
  static async getAllPokemons() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  static async getPokemonInfo(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
    }

    // axios.get(url).then((response) => {
    //   return response.data.results;
    // });
  }
}
