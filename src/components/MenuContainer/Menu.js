import React, { Component } from "react"
import './Menu.css'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    var visibility = "hide"

    if (this.props.menuVisibility) {
      visibility = "show"
    }

    return (
      <div id="flyoutMenu" className={visibility}>
        <div className='menu-header'>
          <img
            src ={require("./../../static/icons/close-icon-02.png")}
            alt='next-question'
            onMouseDown={this.props.handleMouseDown}
            className='close-menu'
          />
        </div>
        <div className='Container'>
          <Link to='/ubung' className='menu-item ubung'>
            Ubung
          </Link>
          <Link to='/prufung' className='menu-item prufung'>
            Prufung
          </Link>
          <Link to='/alle-fragen' className='menu-item alleFragen'>
            Alle Fragen
          </Link>
        </div>
        <div className='menu-footer' />
      </div>
    )
  }
}

export default Menu
