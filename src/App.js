import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        // {
        //   name: "Dracula",
        //   id: '123'
        // },
        // {
        //   name: "Frankenstein",
        //   id: '147'
        // },
        // {
        //   name: "Zombie",
        //   id: '159'
        // }
      ]
    };
  }

// 
componentDidMount(){
  // Javascript native fetch to make an API request
  fetch('https://jsonplaceholder.typicode.com/users')
  // fetch returns a promise which gives us 
  // the actual body of the response which we will
  // turn into a json file so javascript can 
  // understand and use it
  .then(response => response.json())
  // make another promise
  // then take the users we got from the response
  // and set our monsters array to that
  // .then(users => console.log(users))
  .then(users => this.setState({monsters: users}));
}

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
