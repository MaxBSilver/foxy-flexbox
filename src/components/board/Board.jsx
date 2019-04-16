import React from "react";
import EasyBoard from "./easy-board/EasyBoard";
import ModerateBoard from "./moderate-board/ModerateBoard";
import HardBoard from "./hard-board/HardBoard";
import { useSpring, animated } from "react-spring";

export default function Board(props) {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  if (props.roundNumber <= 5) {
    return (
      <animated.div style={springProps}>
        <EasyBoard {...props} />
      </animated.div>
    );
  } else if (props.roundNumber < 20) {
    return (
      <animated.div style={springProps}>
        <ModerateBoard {...props} />
      </animated.div>
    );
  } else if (props.roundNumber >= 20) {
    return (
      <animated.div style={springProps}>
        <HardBoard {...props} />
      </animated.div>
    );
  }
}
