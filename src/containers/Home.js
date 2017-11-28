import React, { Component } from "react"
import SelectLocation from './../components/SelectLocation'
import Header from './../components/Header'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    let title = 'Leben in Deutschland Test'
    return (
      <div id="flyoutMenu">
        <Header
          title={title}
          disabled={true}
        />
        <div className='MenuContainer'>
          <SelectLocation
            userLocation={this.props.userLocation}
            handleChange={this.props.handleLocationChange}
          />
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

export default Home
