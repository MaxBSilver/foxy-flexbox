import React from "react";

export default function HardBoard(props) {
  const direction = props.flexDirection;
  const foxAlign = props.userGuessTwo;
  const boxAlign = props.alignContent;
  const foxJustify = props.userGuessOne;
  const boxJustify = props.justifyContent;
  const boxWrap = props.flexWrap;
  const foxWrap = props.userGuessThree;
  console.log(boxWrap)
 
  return (
    <section className="board--container">
      <section
        className="fox--container"
        style={{
          justifyContent: foxJustify,
          alignItems: foxAlign,
          flexDirection: direction,
          flexWrap: foxWrap
        }}
      >
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/XnHxBnB.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/XnHxBnB.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/XnHxBnB.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/FmUqM1R.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/FmUqM1R.png"
          />
        </article>
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://i.imgur.com/FmUqM1R.png"
          />
        </article>
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
          flexDirection: direction,
          flexWrap: boxWrap
        }}
      >
        <article className="box" />
        <article className="box" />
        <article className="box" />
        <article className="box" />
        <article className="box" />
        <article className="box" />
        <article className="box" />
        <article className="box" />
      </section>
    </section>
  );
}
