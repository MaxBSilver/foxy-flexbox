import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import axios from "axios";
library.add(faCaretRight, faCaretLeft);
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
      "https://gist.githubusercontent.com/MaxBSilver/72738c4b15db04fb0748f5a07ffea45f/raw/66fb464c3168b80d6d9a4c63b66f14acb91e4eb4/foxy-flexbox.json"
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
