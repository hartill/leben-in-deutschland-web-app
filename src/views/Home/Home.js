import React, { Component } from 'react'
import SelectLocation from './SelectLocation'
import Header from './../../components/Header'
import { Link } from 'react-router-dom'

import './home.css'

const Home = ({ userLastPage, userLocation, handleLocationChange }) => {
  return (
    <div id="homePage">
      <Header title={'Leben in Deutschland Test'} buttonsDisabled={true} userLastPage={userLastPage} />
      <div className="SelectLocationContainer">
        <SelectLocation userLocation={userLocation} handleLocationChange={handleLocationChange} />
      </div>
      <div className="HomeContainer">
        <Link to="/trainieren" className="menu-item ubung">
          Trainieren
        </Link>
        <Link to="/probeprufung" className="menu-item prufung">
          Probeprüfung
        </Link>
        <Link to="/fragenkatalog" className="menu-item alleFragen">
          Fragenkatalog
        </Link>
      </div>
      <div className="menu-footer" />
    </div>
  )
}

export default Home
