import React, { Component } from "react"
import SelectLocation from './SelectLocation'
import Header from './../../components/Header'
import { Link } from 'react-router-dom'
import './home.css'

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
          <Link to='/trainieren' className='menu-item ubung'>
            Trainieren
          </Link>
          <Link to='/probeprufung' className='menu-item prufung'>
            Probeprüfung
          </Link>
          <Link to='/fragenkatalog' className='menu-item alleFragen'>
            Fragenkatalog
          </Link>
        </div>
        <div className='menu-footer' />
      </div>
    )
  }
}

export default Home
