import React, { Component } from "react"
import SelectLocation from './../components/SelectLocation'
import Header from './../components/Header'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

class Home extends Component {
  constructor(props) {
    super(props)
    this.cookies = new Cookies()
    this.state = {
      userLocation: this.cookies.get('userLocation') || 'none'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidUpdate(nextProps, nextState) {
    const expires = new Date()
    expires.setTime(expires.getTime()+(365*24*60*60*1000))
    expires.toUTCString()
    this.cookies.set('userLocation', this.state.userLocation, {expires: expires, path: '/' })
  }

  handleChange(event) {
    event.preventDefault()
    const target = event.target
    this.setState(prevState => ({
        userLocation: target.value
    }))
  }

  render() {
    let title = 'Leben in Deutschland Test'
    return (
      <div id="flyoutMenu">
        <Header
          title={title}
          disabled={true}
        />
        <div className='MenuContainer'>
          {/*<SelectLocation
            userLocation={this.state.userLocation}
            handleChange={this.handleChange}
          />*/}
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
