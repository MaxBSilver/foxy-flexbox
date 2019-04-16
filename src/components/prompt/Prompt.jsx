import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Prompt(props) {
  const nextRound = () => {
    props.incrementRound();
  };

  const previousRound = () => {
    props.decrementRound();
  };
  const { difficulty, id } = props;
  return (
    <section className="prompt--container">
      <div className="prompt-head--container">
        <h3 className="prompt-difficulty">Difficulty : {difficulty}</h3>
        <div className="prompt-button--container">
          <button className="prompt-previous-button" onClick={previousRound}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <h3> Level : {id} of 25</h3>
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
          <ul> justify-content
            <li> center</li>
            <li> flex-start</li>
            <li> flex-end</li>
            <li> space-around</li>
            <li> space-between</li>
            <li> space-evenly</li>
          </ul>
          <ul> align-content
            <li> center</li>
            <li> flex-start</li>
            <li> flex-end</li>
            <li> space-around</li>
            <li> space-between</li>
            <li> space-evenly</li>
          </ul>
          <div className="prompt-property--container">
          <ul> flex-wrap: 
            <li> wrap</li>
            <li> wrap-reverse</li>
            <li> nowrap</li>
          </ul>
        </div>
        </div>
        <p className="prompt-body-title">The fox will start with a justify-content and align-content of <span>flex-start</span> and  will start with a flex-wrap of <span>wrap</span> if these are part of the answer <span>you will need to enter them in!</span></p>
      </div>
    </section>
  );
}
