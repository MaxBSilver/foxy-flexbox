import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data : [],
      currentRound : 0,
      isLoading : true
    }
  }
  
  componentDidMount() {
    this.fetch()
  }

  fetch = () => {
      console.log('fetching')
      axios("https://gist.githubusercontent.com/MaxBSilver/826e01609a4df3ee1a50c9fed01e355b/raw/a9a4bde79c6da065e83e1ab7b925da3286a2dc12/foxy-flex-box.json")
      .then(res => {
          this.setState({
              data : res.data,
              isLoading : false
          })
      })
  }

  updateCurrentRound = (roundNumber) => {
    this.setState({currentRound : roundNumber})
  }
  
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Header />
          <Main {...this.state}/>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default App;
