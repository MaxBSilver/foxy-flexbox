import React from 'react'

export default function Board(props) {
  const foxStyle = props.userGuess;
  const boxStyle = props.question;
  return (
    <section className = "board--container">
      <section className ="fox--container" style = {{justifyContent : foxStyle}}>
       <article className = "fox"></article>
      </section>
      <section className ="box--container" style = {{justifyContent : boxStyle}}>
      <article className = "box"></article>
      </section>
    </section>
  )
}
