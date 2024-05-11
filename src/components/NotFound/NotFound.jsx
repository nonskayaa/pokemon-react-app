import React from "react";
import pikachu from "../../assets/images/pikachu.png";
import classes from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={classes.not_found__container}>
      <h1>Oops! Try again. </h1>
      <p className={classes.not_found__subtitle}>
        The Pokemon you're looking for is a unicorn. it doesn't exist in this
        list.
      </p>  
      <img className={classes.not_found__image} src={pikachu} alt="" />
    </div>
  );
}
