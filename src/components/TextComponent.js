import React from 'react';

const TextComponent = (props) => {
    return (
      <span style={
        {
          fontSize: props.fontSize + 'px',
          color: props.color,
          textDecoration: props.textDecoration ? 'underline' : 'none'
        }  
      }>
        {props.text}
      </span>
    )
  }

  export default TextComponent