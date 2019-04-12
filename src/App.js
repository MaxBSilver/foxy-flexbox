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
      isLoading : true
    }
  }
  
  componentDidMount() {
    this.fetch()
  }

  fetch = () => {
      console.log('fetching')
      axios("https://gist.githubusercontent.com/MaxBSilver/826e01609a4df3ee1a50c9fed01e355b/raw/78f841d724c9b0509bd8d4ac3053262605246da1/foxy-flex-box.json")
      .then(res => {
          this.setState({
              data : res.data,
              isLoading : false
          })
      })
  }

  
  render() {

    return !this.state.isLoading ? (
      <div className="App">
        <React.Fragment>
          <Header />
          <Main {...this.state.data}/>
          <Footer />
        </React.Fragment>
      </div>
    )
    : (
      <div></div>
    )
  }
}

export default App;
