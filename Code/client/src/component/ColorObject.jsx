import React from 'react';


const ColorObject = (props) => (
  <div 
    style={{backgroundColor: props.selectedColor}} 
    className={ `${props.selectedClassName}` }
    onClick={props.handleClick}
  >
  </div> 
)


export default ColorObject;