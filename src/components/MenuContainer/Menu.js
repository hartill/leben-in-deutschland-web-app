import React, { Component } from "react"
import './Menu.css'

class Menu extends Component {
  render() {
    var visibility = "hide"

    if (this.props.menuVisibility) {
      visibility = "show"
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
        <div className='Container'>
          <h2><a href="#">Practice</a></h2>
          <h2><a href="#">Mock Exam</a></h2>
          <h2><a href="#">Alle Fragen</a></h2>
        </div>
      </div>
    )
  }
}

export default Menu
