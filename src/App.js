import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import Header from "./components/header/Header";
import Main from "./components/main/Main";

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
      "https://gist.githubusercontent.com/MaxBSilver/72738c4b15db04fb0748f5a07ffea45f/raw/6e7f5bb2b0acdb82af04c1591094a075d59fef14/foxy-flexbox.json"
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
        </React.Fragment>
      </div>
    ) : (
      <div />
    );
  }
}

export default App;
