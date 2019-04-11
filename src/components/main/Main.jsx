import React from 'react';
import Answer from '../answer/Answer';
import Board from '../board/Board';
import Prompt from '../prompt/Prompt';


class Main extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         question : '',
         roundNumber : 0
      }
    }

    componentDidMount = () => {
        this.determineQuestion();
    }

    determineQuestion = () => {
        const { roundNumber } = this.state;
        this.setState({ question : this.props.data[roundNumber]}, () => {
            this.incrementRound();
        })
    }

    incrementRound = () => {
        let incrementedRound = this.state.roundNumber
        incrementedRound = incrementedRound += 1
        this.setState({roundNumber : incrementedRound})
    }

  render() {
      const {question} = this.state;
      console.log(question)
    return (
    <main>
        <Prompt {...question}/>
        <Answer {...question}/>
        <Board {...question}/>     
    </main>
    )
  }
}

export default Main
