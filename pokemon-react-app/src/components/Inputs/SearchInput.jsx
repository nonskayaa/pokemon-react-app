import React from "react";
import classes from "./SearchInput.module.css";
import search_loop from "../../assets/images/search_loop.png";

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
      <button className={classes.search_input__btn}>GO</button>
    </div>
  );
}
