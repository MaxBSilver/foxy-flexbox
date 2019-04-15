import React from "react";
import EasyBoard from "./easy-board/EasyBoard";
import ModerateBoard from "./moderate-board/ModerateBoard";
import { useSpring, animated } from "react-spring";

export default function Board(props) {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return props.roundNumber <= 5 ? (
    <animated.div style={springProps}>
      <EasyBoard {...props} />
    </animated.div>
  ) : (
    <animated.div style={springProps}>
      <ModerateBoard {...props} />
    </animated.div>
  );
}
