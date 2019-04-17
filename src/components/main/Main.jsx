import React from "react";
import Answer from "../answer/Answer";
import Board from "../board/Board";
import Prompt from "../prompt/Prompt";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      roundNumber: JSON.parse(localStorage.getItem('round')) || 0,
      userGuessOne: "",
      userGuessTwo: "",
      difficulty: "",
      display: "",
      flexDirection: "",
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.determineQuestion();
  };

  determineQuestion = () => {
    this.selectQuestion();
    this.saveToLocalStorage();
  };

  selectQuestion = () => {
    const { roundNumber } = this.state;
    this.setState({
      question: this.props.data[roundNumber],
      userGuessOne: "",
      userGuessTwo: "",
      userGuessThree: "",
      isLoading: false
    });
  };

  incrementRound = () => {
    let incrementedRound = this.state.roundNumber;
    incrementedRound = incrementedRound += 1;
    if (incrementedRound < this.props.data.length) {
      this.setState({ roundNumber: incrementedRound }, () => {
        this.determineQuestion();
      });
    }
  };

  decrementRound = () => {
    let decrementedRound = this.state.roundNumber;
    decrementedRound = decrementedRound -= 1;
    if (decrementedRound >= 0) {
      this.setState({ roundNumber: decrementedRound }, () => {
        this.determineQuestion();
      });
    }
  };

  saveToLocalStorage = () => {
    localStorage.setItem('round', JSON.stringify(this.state.roundNumber))

  }

  updateUserAnswer = guess => {
    const { acVal, jcVal, fwVal } = guess;
    this.setState({
      userGuessOne: jcVal,
      userGuessTwo: acVal,
      userGuessThree: fwVal,
    });
  };

  render() {
    const { question, userGuessOne, userGuessTwo, userGuessThree, roundNumber } = this.state;
    return !this.state.isLoading ? (
      <main>
        <section className="left--container">
          <Prompt
            {...question}
            determineQuestion={this.determineQuestion}
            incrementRound={this.incrementRound}
            decrementRound={this.decrementRound}
          />
          <Answer
            {...question}
            updateUserAnswer={this.updateUserAnswer}
            determineQuestion={this.determineQuestion}
            incrementRound={this.incrementRound}
          />
        </section>
        <section className="right--container">
          <Board
            flexWrap = {question.flexWrap}
            justifyContent={question.justifyContent}
            userGuessOne={userGuessOne}
            alignContent={question.alignContent}
            userGuessTwo={userGuessTwo}
            prompts={question.prompt}
            roundNumber={roundNumber}
            difficulty={question.difficulty}
            display={question.display}
            flexDirection={question.flexDirection}
            userGuessThree={userGuessThree}
          />
        </section>
      </main>
    ) : (
      <div />
    );
  }
}

export default Main;
