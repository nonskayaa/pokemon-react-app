import React from "react";
import SearchInput from "./inputs/SearchInput";
import classes from "./Search.module.css";
import pokeball from "../../../../assets/images/Pokeball.png";

export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <div className={classes.search_container}>
      <img
        src={pokeball}
        alt="pokeball"
        className={classes.search__pokeball_background}
      />
      <h1 className={classes.search__title}>Who are you looking for?</h1>
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
