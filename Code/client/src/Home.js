import React, { Component } from 'react';
import './Main.css';
import HomeStripe from'./component/homeStripe';



class Home extends Component {
  
componentDidMount() {
  console.log('componentDidMount');
}

render(){
  return(
    <div>
        <div className="welcome">
          Hello there! Welcome to <span id="message">Happy Learn Colors!</span><br/>
          In <span id="message">LEARN COLORS</span> section, you will be learning 9 colors.<br/>
          Try our <span id="message">PLAY GAME</span> section to know how much you know about colors!<br/>
          Go to <span id="message">COLORED OBJECTS</span> to learn more about colored objects!<br/>
          No more chit-chats, let's get started!
        </div>
        <HomeStripe  />
      </div>
)}
}

export default Home;
