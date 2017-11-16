import React, { Component } from "react"
import './Menu.css'

class MenuButton extends Component {
  render() {
    return (
      <img src ={require("./../../static/icons/menu-icon.svg")} alt='menu-toggle'
      onMouseDown={this.props.handleMouseDown}
      className='toggle'
      />
    )
  }
}

export default MenuButton
