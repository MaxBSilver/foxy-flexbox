import React from "react";
import { useSpring, animated } from "react-spring";

export default function Header(props) {
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={springProps}>
      <header>
        <h1 className="header-title">
          <img
            alt="logo"
            src="http://www.logospng.com/images/101/fox-logo-animal-on-behance-pinterest-101998.jpg"
          />
          <span className="header-white-text">fox </span>
          <span className="header-colored-letters">flex</span>box
        </h1>
      </header>
    </animated.div>
  );
}
