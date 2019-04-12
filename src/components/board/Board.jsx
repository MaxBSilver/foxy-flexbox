import React from 'react'

export default function Board(props) {
  console.log(props.roundNumber)
  const foxAlign = props.acGuess;
  const boxAlign = props.acAnswer;
  const foxJustify = props.jcGuess;
  const boxJustify = props.jcAnswer;
  return (
    <section className = "board--container">
      <section className ="fox--container" style = {{justifyContent : foxJustify, alignItems : foxAlign}}>
       <article className = "fox"><img className = "fox-img" alt="fox" src="https://ya-webdesign.com/images/kawaii-cats-png-6.png"></img></article>
      </section>
      <section className ="box--container" style = {{justifyContent : boxJustify, alignItems : boxAlign}}>
      <article className = "box"></article>
      </section>
    </section>
  )
}
