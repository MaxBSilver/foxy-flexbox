import React from 'react';
import Answer from '../answer/Answer';
import Board from '../board/Board';
import Prompt from '../prompt/Prompt';


class Main extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         question : '',
         roundNumber : 0,
         jcGuess : '',
         acGuess : '',
         isLoading : true
      }
    }

    componentDidMount = () => {
        this.determineQuestion();
    }

    determineQuestion = () => {
        const { roundNumber } = this.state;
        this.setState({ question : this.props.data[roundNumber], jcGuess : '', acGuess : '', isLoading : false}, () => {
            this.incrementRound();
        })
    }

    incrementRound = () => {
        let incrementedRound = this.state.roundNumber
        incrementedRound = incrementedRound += 1
        this.setState({roundNumber : incrementedRound})
    }

    updateUserAnswer = (guess) => {
      const {acVal, jcVal} = guess;
      this.setState({jcGuess : jcVal, acGuess : acVal})
    }

  render() {
      const {question, jcGuess, acGuess} = this.state;
    return !this.state.isLoading ? (
    <main>
        <section className="left--container">
         <Prompt {...question.prompt}/>
         <Answer {...question} updateUserAnswer = {this.updateUserAnswer} determineQuestion = {this.determineQuestion}/>
        </section>
        <section className="right--container">
         <Board jcAnswer = {question.jcAnswer} jcGuess = {jcGuess} acAnswer = {question.acAnswer} acGuess = {acGuess} prompts = {question.prompt}/>     
        </section>
    </main>
    )
    : <div></div>
  }
}

export default Main
