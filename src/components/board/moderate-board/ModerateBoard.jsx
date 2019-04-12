import React from 'react';

export default function ModerateBoard(props) {
    const direction = props.flexDirection;
    const foxAlign = props.userGuessTwo;
    const boxAlign = props.alignContent;
    const foxJustify = props.userGuessOne;
    const boxJustify = props.justifyContent;
    return (
    <section className = "board--container">
        <section className ="fox--container" style = {{justifyContent : foxJustify, alignItems : foxAlign, flexDirection: direction}}>
            <article className = "fox"><img className = "fox-img" alt="fox" src="https://ya-webdesign.com/images/kawaii-cats-png-6.png"></img></article>
            <article className = "fox"><img className = "fox-img" alt="fox" src="https://ya-webdesign.com/images/kawaii-cats-png-6.png"></img></article>
        </section>
        <section className ="box--container" style = {{justifyContent : boxJustify, alignItems : boxAlign , flexDirection: direction}}>
            <article className = "box"></article>
            <article className = "box"></article>
        </section>
    </section>
  )
}
