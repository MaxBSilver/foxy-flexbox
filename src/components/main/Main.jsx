import React from 'react';
import Answer from '../answer/Answer';
import Board from '../board/Board';
import Prompt from '../prompt/Prompt';


class Main extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
    <main>
        <Prompt {...this.state}/>
        <Answer {...this.state}/>
        <Board {...this.state}/>     
    </main>
    )
  }
}

export default Main
