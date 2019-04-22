import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header.js'
import Artist from './Components/Artist.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header header="Header"/>;
        <Artist image="https://www.denverpost.com/wp-content/uploads/2016/03/20151116_the_lumineers_shot_03_054.jpg?w=460" 
        name="The Lumineers" songName="Ophelia" alt="The Lumineers"/>
      </div>
    )
  }
}

export default App;