import React, { Component } from "react";


export default class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jcVal: "",
      acVal: "",
      btnColor: '#404b69'
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value }, () => {
      this.props.updateUserAnswer(this.state);
      if (
        this.state.jcVal === this.props.justifyContent &&
        this.state.acVal === this.props.alignContent
      ) {
        this.setState({btnColor: '#65a565'})
      }
    })
  };


  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.jcVal === this.props.justifyContent &&
      this.state.acVal === this.props.alignContent
    ) {
      this.props.determineQuestion();
      this.props.incrementRound();
      this.setState({ jcVal: "", acVal: "", btnColor: '#404b69'});
    }
  };
  

  render() {
    const btnColor = this.state.btnColor;
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
                    <div className="input-one">
                      <p className="code-prompt"> justify-content : </p>
                      <input
                        type="text"
                        className="search-input"
                        name="jcVal"
                        value={this.state.jcVal}
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="input-two">
                      <p className="code-prompt"> align-content : </p>
                      <input
                        type="text"
                        className="search-input"
                        name="acVal"
                        value={this.state.acVal}
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                  </div>
                  <p className="code-snippet--title">{"}"}</p>
                </div>
                <div className="submit--container">
                  <input type="submit" className="search-btn" value="Next" style={{backgroundColor : btnColor }}/>
                </div>
              </form>
            </section>
          </section>
    );
  }
}

