import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

export default function Prompt(props) {
  const nextRound = () => {
    props.incrementRound();
  };

  const previousRound = () => {
    props.decrementRound();
  };
  const { difficulty, id } = props;
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={springProps}>
      <section className="prompt--container">
        <div className="prompt-head--container">
          <h3 className="prompt-difficulty">Difficulty : {difficulty}</h3>
          <div className="prompt-button--container">
            <button className="prompt-previous-button" onClick={previousRound}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <h3> Level : {id} of 20</h3>
            <button className="prompt-next-button" onClick={nextRound}>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
        </div>
        <div className="prompt-body-container">
          <p className="prompt-body-title">
            Help the fox get into the box by using the following{" "}
            <span>CSS properties : </span>
          </p>
          <div className="prompt-property--container">
            <ul>
              <li> center</li>
              <li> flex-start</li>
              <li> flex-end</li>
              <li> space-around</li>
              <li> space-between</li>
              <li> space-evenly</li>
            </ul>
          </div>
        </div>
      </section>
    </animated.div>
  );
}
