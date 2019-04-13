import React from "react";

export default function EasyBoard(props) {
  const direction = props.flexDirection;
  console.log(props.flexDirection);
  const foxAlign = props.userGuessTwo;
  const boxAlign = props.alignContent;
  const foxJustify = props.userGuessOne;
  const boxJustify = props.justifyContent;
  return (
    <section className="board--container" style={{ flexDirection: direction }}>
      <section
        className="fox--container"
        style={{ justifyContent: foxJustify, alignItems: foxAlign }}
      >
        <article className="fox">
          <img
            className="fox-img"
            alt="fox"
            src="https://ya-webdesign.com/images/kawaii-cats-png-6.png"
          />
        </article>
      </section>
      <section
        className="box--container"
        style={{ justifyContent: boxJustify, alignItems: boxAlign }}
      >
        <article className="box" >
        <img
      className="box-img"
      alt="box"
      src="https://cdn.pixabay.com/photo/2016/09/16/09/20/box-1673579_1280.png"
      />
        </article>
      </section>
    </section>
  );
}
