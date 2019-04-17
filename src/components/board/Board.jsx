import React from "react";
import EasyBoard from "./easy-board/EasyBoard";
import ModerateBoard from "./moderate-board/ModerateBoard";
import HardBoard from "./hard-board/HardBoard";

export default function Board(props) {
  if (props.roundNumber <= 5) {
    return <EasyBoard {...props} />;
  } else if (props.roundNumber < 20) {
    return <ModerateBoard {...props} />;
  } else if (props.roundNumber >= 20) {
    return <HardBoard {...props} />;
  }
}
