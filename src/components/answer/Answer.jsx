import React, { Component } from "react";
import EasySnippet from "./EasySnippet";
import HardSnippet from "./HardSnippet";

export default class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jcVal: "",
      acVal: "",
      fwVal: "",
      btnColor: "$darkBlueBackground"
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      this.props.updateUserAnswer(this.state);
      if (
        this.props.id < 21 &&
        this.state.jcVal === this.props.justifyContent &&
        this.state.acVal === this.props.alignContent
      ) {
        this.setState({ btnColor: "#65a565" });
      } else if (
        this.state.jcVal === this.props.justifyContent &&
        this.state.acVal === this.props.alignContent &&
        this.state.fwVal === this.props.flexWrap
      ) {
        this.setState({ btnColor: "#65a565" });
      }
    });
  };

  handleSubmit = e => {
    //todo deconstruct
    e.preventDefault();
    if (
      this.props.id < 21 &&
      this.state.jcVal === this.props.justifyContent &&
      this.state.acVal === this.props.alignContent
    ) {
      this.props.determineQuestion();
      this.props.incrementRound();
      this.setState({ jcVal: "", acVal: "", btnColor: "$darkBlueBackground", fwVal: "" });
    } else if (
      this.state.jcVal === this.props.justifyContent &&
      this.state.acVal === this.props.alignContent &&
      this.state.fwVal === this.props.flexWrap
    ) {
      this.props.determineQuestion();
      this.props.incrementRound();
      this.setState({ jcVal: "", acVal: "", btnColor: "$darkBlueBackground", fwVal: "" });
    }
  };

  render() {
    console.log(this.state.fwVal);
    const btnColor = this.state.btnColor;
    let hardSnippet;
    if (this.props.id > 20) {
      hardSnippet = (
        <HardSnippet {...this.state} handleChange={this.handleChange} />
      );
    }
    return (
      <section className="answer--container">
        <section className="code-snippet--container">
          <form onSubmit={this.handleSubmit}>
            <div className="form--container">
              <p className="code-snippet--title"> #garden{" {"} </p>
              <div className="user-form">
                <p className="code-snippet--body">display : flex;</p>
                <p className="code-snippet--body">
                  flex-direction: {this.props.flexDirection};
                </p>
                <EasySnippet {...this.state} handleChange={this.handleChange} />
                {hardSnippet}
                <p className="code-snippet--title">{"}"}</p>
              </div>
              <div className="submit--container">
                <input
                  type="submit"
                  className="search-btn"
                  value="Next"
                  style={{ backgroundColor: btnColor }}
                />
              </div>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
