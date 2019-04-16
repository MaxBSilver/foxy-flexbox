import React from "react";
import Answer from "../answer/Answer";
import Board from "../board/Board";
import Prompt from "../prompt/Prompt";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      roundNumber: 0,
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
    if (incrementedRound < 20) {
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

  updateUserAnswer = guess => {
    const { acVal, jcVal } = guess;
    this.setState({
      userGuessOne: jcVal,
      userGuessTwo: acVal
    });
  };

  render() {
    const { question, userGuessOne, userGuessTwo, roundNumber } = this.state;
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
            justifyContent={question.justifyContent}
            userGuessOne={userGuessOne}
            alignContent={question.alignContent}
            userGuessTwo={userGuessTwo}
            prompts={question.prompt}
            roundNumber={roundNumber}
            difficulty={question.difficulty}
            display={question.display}
            flexDirection={question.flexDirection}
          />
        </section>
      </main>
    ) : (
      <div />
    );
  }
}

export default Main;
