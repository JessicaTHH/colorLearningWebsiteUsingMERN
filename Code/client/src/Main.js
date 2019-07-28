import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import LearnColor from "./LearnColor";
import PlayGame from "./PlayGame";
import LearnColorObject from "./LearnColorObject";
 
class Main extends Component {
  render() {
    return (
          <HashRouter>
        <div>
          <h1>Happy Learn Colors</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/learncolor">Learn Colors</NavLink></li>
            <li><NavLink to="/playgame">Play Game</NavLink></li>
            <li><NavLink to="/learncolorobject">Colored Objects</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/learncolor" component={LearnColor}/>
            <Route path="/playgame" component={PlayGame}/>
            <Route path="/learncolorobject" component={LearnColorObject}/>

          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
