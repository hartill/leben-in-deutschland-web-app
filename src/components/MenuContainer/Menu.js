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
        <div className='menuHeaderContainer'>
          <div className='menuHeaderLeftSection'>
            <img
              src ={require("./../../static/icons/close-icon.svg")}
              alt='next-question'
              onMouseDown={this.props.handleMouseDown}
              className='close-menu'
            />
          </div>
          <div className='menuHeaderCenterSection'>
            Leben in Deutschland Test
          </div>
          <div className='menuHeaderRightSection' />
        </div>
        <div className='MenuContainer'>
          <Link to='/ubung' className='menu-item ubung' onClick={this.props.handleMouseDown}>
            Ubüng
          </Link>
          <Link to='/prufung' className='menu-item prufung' onClick={this.props.handleMouseDown}>
            Prüfung
          </Link>
          <Link to='/alle-fragen' className='menu-item alleFragen' onClick={this.props.handleMouseDown}>
            Alle Fragen
          </Link>
        </div>
        <div className='menu-footer' />
      </div>
    )
  }
}

export default Menu
