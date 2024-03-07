import React from "react";
import classes from "./InfoCard.module.css";

export default function CharacteristicBar({ label, progressValue }) {
  let characteristicColors = new Map([
    ["hp", "#62d496"],
    ["attack", "#f44737"],
    ["defense", "#fcd85d"],
    ["speed", "#ff8450"],
  ]);

  return (
    <div className={classes.stats_list__container}>
      <label className = {classes.stats__label}htmlFor={label}>{label}</label>
      <div className={classes.progress_bar__container}>
        <div
          className={classes.progress_bar}
          style={{
            width: `${progressValue}%`,
            backgroundColor: `${characteristicColors.get(label)}`,
          }}
        ></div>
        <div
          className={classes.progress_bar__background}
          style={{ backgroundColor: `${characteristicColors.get(label)}` }}
        ></div>
      </div>
    </div>
  );
}
