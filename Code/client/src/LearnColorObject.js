import axios from 'axios';
import React, { Component } from 'react';
import './Main.css';
import ColorObject from './component/ColorObject';
import ShowName from './component/showname'



class LearnColorObject extends Component {
  constructor() {
  super();
  this.state = {
    selectedId: '',
    selectedColor: '',
    selectedColorName: '',
    selectedObjectName: '',
  };
    this.handleClick=this.handleClick.bind(this);
    this.getColor=this.getColor.bind(this);
}

componentDidMount() {
  this.getColor();
  console.log('componentDidMount');
}

handleClick(e){
  e.preventDefault();
  console.log("you clicked");
  this.getColor();
  }

getColor() {
  axios.get('/color')
  .then(response => {
    console.log("im here")
    console.log(response)
    this.setState({ 
      selectedId: response.data._id,
      selectedColor: response.data.color,
      selectedColorName: response.data.names,
    });
  })
  axios.get('/objects')
  .then(response => {
    console.log("object is here")
    console.log(response)
    this.setState({ 
      selectedObjectName: response.data.objectName,
    });
  })
  .catch(error => {
    console.log(error);
  });
  console.log('Axios done');
}

render(){
  const colorName=this.state.selectedColorName;
  const objectName=this.state.selectedObjectName;
  const showname=colorName+" "+objectName;
  return(
    <div>
          <ColorObject 
            selectedClassName={ `${this.state.selectedObjectName}` }
            selectedColor={this.state.selectedColor}
            handleClick={this.handleClick}
          />
          <ShowName 
            selectedColor={this.state.selectedColor}
            selectedColorName={showname}
          />
      </div>
)}
}

export default LearnColorObject;
