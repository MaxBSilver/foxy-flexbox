import React from "react";

export default function ModerateBoard(props) {
  const direction = props.flexDirection;
  const foxAlign = props.userGuessTwo;
  const boxAlign = props.alignContent;
  const foxJustify = props.userGuessOne;
  const boxJustify = props.justifyContent;
  return (
    <section className="board--container">
      <section
        className="fox--container"
        style={{
          justifyContent: foxJustify,
          alignItems: foxAlign,
          flexDirection: direction
        }}
      >
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="http://clipart-library.com/img/749202.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="http://clipart-library.com/img/749202.png"
          />
        </article>
      </section>
      <section
        className="box--container"
        style={{
          justifyContent: boxJustify,
          alignItems: boxAlign,
          flexDirection: direction
        }}
      >
        <article className="box" />
        <article className="box" />
      </section>
    </section>
  );
}
