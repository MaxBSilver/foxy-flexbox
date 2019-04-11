import React, { Component } from 'react';
import axios from 'axios';

export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          justifyData : [],
          alignData : [],
          isLoading : true
         
      }
    }

    componentDidMount() {
      this.fetch()
    }
    
    fetch = () => {
        console.log('fetching')
        axios("https://gist.githubusercontent.com/MaxBSilver/826e01609a4df3ee1a50c9fed01e355b/raw/983c42081ad596ee3c62520f27627e1a673222ba/foxy-flex-box.json")
        .then(res => {
            this.setState({
                justifyData : res.data.justify,
                alignData : res.data.align,
                isLoading : false
            })
        })
    }
    
    render() {
        return !this.state.isLoading 
        ?<div>
        </div>
        :<div>
            <h1>Loading</h1>
        </div>
    }
}

export default Main
