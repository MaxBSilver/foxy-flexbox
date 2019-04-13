import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    console.log("fetching");
    axios(
      "https://gist.githubusercontent.com/MaxBSilver/72738c4b15db04fb0748f5a07ffea45f/raw/f6c9d685b9ac7ea0508bd0cf5e5e661423e42645/foxy-flexbox.json"
    ).then(res => {
      this.setState({
        data: res.data,
        isLoading: false
      });
    });
  };

  render() {
    return !this.state.isLoading ? (
      <div className="App">
        <React.Fragment>
          <Header />
          <Main {...this.state.data} />
          <Footer />
        </React.Fragment>
      </div>
    ) : (
      <div />
    );
  }
}

export default App;
