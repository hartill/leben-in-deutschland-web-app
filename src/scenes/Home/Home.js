import React, { Component } from "react"
import SelectLocation from './SelectLocation'
import Header from './../../components/Header'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    let title = 'Leben in Deutschland Test'
    return (
      <div id="homePage">
        <Header
          title={title}
          buttonsDisabled={true}
          userLastPage={this.props.userLastPage}
        />
        <div className='HomeContainer'>
          <SelectLocation
            userLocation={this.props.userLocation}
            handleChange={this.props.handleLocationChange}
          />
          <Link to='/ubung' className='menu-item ubung'>
            Übung
          </Link>
          <Link to='/probeprufung' className='menu-item prufung'>
            Probeprüfung
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
