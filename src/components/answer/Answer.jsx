import React, { Component } from 'react'

export class Answer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      jcVal : '',
      acVal : '',
       
    }
  }
  
  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({[name] : value}, () => {
        this.props.updateUserAnswer(this.state)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.jcVal === this.props.justifyContent && this.state.acVal === this.props.alignContent) {
    this.props.determineQuestion()
    this.setState({jcVal : '', acVal : ''});
    }
  }
  
  render() {
    return (
      <section className = "answer--container">
        <section className = "code-snippet--container">
        <p> #garden{" {"} </p>
        <p>display : flex;</p>
          <form onSubmit={this.handleSubmit} className ="form--container">
            <div className = "user-form">
            <div className = "input-one">
            <p className = "code-prompt"> justify-content : </p>
            <input
              type='text'
              className="search-input"
              name= 'jcVal'
              value={this.state.jcVal}
              onChange={this.handleChange}
              placeholder=''
            />
            </div>
            <div className = "input-two">
            <p className = "code-prompt"> align-content : </p>
            <input
              type='text'
              className="search-input"
              name= 'acVal'
              value={this.state.acVal}
              onChange={this.handleChange}
              placeholder=''
            />
            </div>
            </div>
            <p>{"}"}</p>
            <input
              type='submit'
              className="search-btn"
              value='Next'
            />
          </form>
        </section>
      </section>
        
    )
  }
}

export default Answer
