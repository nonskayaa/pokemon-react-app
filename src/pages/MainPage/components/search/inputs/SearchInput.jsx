import React from "react";
import classes from "./SearchInput.module.css";
import search_loop from "../../../../../assets/images/search_loop.png";
import { Link } from "react-router-dom";

export default function SearchInput({ value, onChange }) {
  return (
    <div className={classes.search_input__container}>
      <div className={classes.search_input__left_side}>
        <img
          src={search_loop}
          alt=""
          className={classes.search_input__search_icon}
        />
        <input
          type="text"
          placeholder="E.g Pikachu"
          className={classes.search_input}
          value={value}
          onChange={onChange}
        />
      </div>
      <Link to={`/aboutPokemon/${value}`}>
        <button className={classes.search_input__btn}>GO</button>
      </Link>
    </div>
  );
}
