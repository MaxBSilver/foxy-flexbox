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
         userGuess : '',
         isLoading : true
      }
    }

    componentDidMount = () => {
        this.determineQuestion();
    }

    determineQuestion = () => {
        const { roundNumber } = this.state;
        this.setState({ question : this.props.data[roundNumber], userGuess : '', isLoading : false}, () => {
            this.incrementRound();
        })
    }

    incrementRound = () => {
        let incrementedRound = this.state.roundNumber
        incrementedRound = incrementedRound += 1
        this.setState({roundNumber : incrementedRound})
    }

    updateUserAnswer = (guess) => {
      this.setState({userGuess : guess})
    }

  render() {
      const {question, userGuess} = this.state;
    return !this.state.isLoading ? (
    <main>
        <section className="left--container">
         <Prompt {...question.prompt}/>
         <Answer {...question} updateUserAnswer = {this.updateUserAnswer} determineQuestion = {this.determineQuestion}/>
        </section>
        <section className="right--container">
         <Board question = {question.answer} userGuess = {userGuess} />     
        </section>
    </main>
    )
    : <div></div>
  }
}

export default Main
