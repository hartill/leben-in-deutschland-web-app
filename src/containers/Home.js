import React, { Component } from "react"
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div id="flyoutMenu">
        <div className='menuHeaderContainer'>
          <div className='menuHeaderLeftSection'>
          </div>
          <div className='menuHeaderCenterSection'>
            Leben in Deutschland Test
          </div>
          <div className='menuHeaderRightSection' />
        </div>
        <div className='MenuContainer'>
          <Link to='/ubung' className='menu-item ubung'>
            Übung
          </Link>
          <Link to='/prufung' className='menu-item prufung'>
            Prüfung
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
