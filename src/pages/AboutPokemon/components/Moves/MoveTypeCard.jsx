import React from "react";
import classes from "./Moves.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import grass from "../../../../assets/images/moves_types/grass.png";
import fire from "../../../../assets/images/moves_types/fire.png";
import poison from "../../../../assets/images/moves_types/poison.png";
import bug from "../../../../assets/images/moves_types/bug.png";
import dragon from "../../../../assets/images/moves_types/bug.png";
import steel from "../../../../assets/images/moves_types/steel.png";
import flying from "../../../../assets/images/moves_types/flying.png";
import normal from "../../../../assets/images/moves_types/normal.png";
import ghost from "../../../../assets/images/moves_types/ghost.png";
import rock from "../../../../assets/images/moves_types/rock.png";
import ground from "../../../../assets/images/moves_types/ground.png";
import fighting from "../../../../assets/images/moves_types/fight.png";
import electric from "../../../../assets/images/moves_types/electric.png";
import psychic from "../../../../assets/images/moves_types/psychic.png";
import fairy from "../../../../assets/images/moves_types/fairy.png";
import water from "../../../../assets/images/moves_types/water.png";
import ice from "../../../../assets/images/moves_types/ice.png";

export default function MoveTypeCard({ move }) {
  const moveTypesInfo = new Map([
    ["grass", { color: "#60D394", image: grass }],
    ["fire", { color: "#F14B3D", image: fire }],
    ["poison", { color: "#6E44FF", image: poison }],
    ["bug", { color: "#009666", image: bug }],
    ["dragon", { color: "#33CCCC", image: dragon }],
    ["steel", { color: "#66CC99", image: steel }],
    ["dark", { color: "#333333", image: normal }],
    ["flying", { color: "#96aee0", image: flying }],
    ["normal", { color: "#999999", image: normal }],
    ["ghost", { color: "#993399", image: ghost }],
    ["rock", { color: "#663300", image: rock }],
    ["ground", { color: "#664400", image: ground }],
    ["fighting", { color: "#CC3300", image: fighting }],
    ["electric", { color: "#FFCC00", image: electric }],
    ["psychic", { color: "#CC0099", image: psychic }],
    ["fairy", { color: "#FF3366", image: fairy }],
    ["water", { color: "#3333CC", image: water }],
    ["ice", { color: "#66CCCC", image: ice }],
  ]);

  const [moveName, setMoveName] = useState("");
  const [moveType, setMoveType] = useState({});

  useEffect(() => {
    axios.get(move.url).then((response) => {
      const move = response.data;
      setMoveType(moveTypesInfo.get(move?.type?.name));
      setMoveName(move.name);
    });
  }, [move]);
  return (
    <div
      className={classes.moves_card__move_item}
      style={{ backgroundColor: moveType.color }}
    >
      <img
        src={moveType.image}
        className={classes.moves_card__move_item_icon}
        alt=""
      />
      <p>{moveName}</p>
    </div>
  );
}
