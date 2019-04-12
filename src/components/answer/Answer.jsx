import React, { Component } from 'react'

export class Answer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      value : ''
       
    }
  }
  
  handleChange = (e) => {
    this.setState({value: e.target.value}, () => {
      
        this.props.updateUserAnswer(this.state.value)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.value === this.props.answer) {
    this.props.determineQuestion()
    this.setState({value : ''})
    }
  }
  
  render() {
    return (
      <section className = "answer--container">
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          className="search-input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Search'
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
