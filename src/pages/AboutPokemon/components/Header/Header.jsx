import React from "react";
import classes from "./Header.module.css";
import pokeball from "../../../../assets/images/Pokeball.png";
import left_arrow from "../../../../assets/images/left_arrow.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header__container}>
      <button className={classes.header__btn_back}>
        <Link to="/">
          <img src={left_arrow} alt="" />
        </Link>
      </button>
      <img className={classes.header__pokeball} src={pokeball} alt="" />
    </header>
  );
}
