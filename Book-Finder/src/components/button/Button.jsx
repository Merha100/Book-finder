import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <div>
      <button style={{backgroundColor: props.backgroundColor,
        color:props.color}}
      onClick={props.handleClick}>{props.value}</button>
    </div>
  )
}

export default Button;