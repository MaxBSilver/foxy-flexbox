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
    if(this.state.jcVal === this.props.jcAnswer && this.state.acVal === this.props.acAnswer) {
    this.props.determineQuestion()
    this.setState({jcVal : '', acVal : ''});
    }
  }
  
  render() {
    return (
      <section className = "answer--container">
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className="search-input"
          name= 'jcVal'
          value={this.state.jcVal}
          onChange={this.handleChange}
          placeholder='Justify Content'
        />
        <input
          type='text'
          className="search-input"
          name= 'acVal'
          value={this.state.acVal}
          onChange={this.handleChange}
          placeholder='Align Content'
        />
        <input
          type='submit'
          className="search-btn"
          value='Search'
        />
      </form>

      </section>
        
    )
  }
}

export default Answer
