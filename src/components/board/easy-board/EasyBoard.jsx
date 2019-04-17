import React from "react";

export default function EasyBoard(props) {
  const direction = props.flexDirection;
  const foxAlign = props.userGuessTwo;
  const boxAlign = props.alignContent;
  const foxJustify = props.userGuessOne;
  const boxJustify = props.justifyContent;
  const wrap = props.flexWrap;

  return (
    <section className="board--container" style={{ flexDirection: direction}}>
      <section
        className="fox--container"
        style={{ justifyContent: foxJustify, alignItems: foxAlign }}
      >
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/XnHxBnB.png"
          />
        </article>
      </section>
      <section
        className="box--container"
        style={{ justifyContent: boxJustify, alignItems: boxAlign,  flexWrap:  wrap }}
      >
        <article className="box" />
      </section>
    </section>
  );
}
