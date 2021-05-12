import React from 'react'
import SelectLocation from '../../components/home/SelectLocation'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { HomePageDiv, HomeContainer, MenuItem } from './styles'

export function Home({ userLocation, handleLocationChange }) {
  return (
    <HomePageDiv>
      <Header title={'Leben in Deutschland Test'} />
      <SelectLocation userLocation={userLocation} handleLocationChange={handleLocationChange} />
      <HomeContainer>
        <Link to="/trainieren">
          <MenuItem className="ubung">Trainieren</MenuItem>
        </Link>
        <Link to="/probeprufung">
          <MenuItem className="prufung">Probeprüfung</MenuItem>
        </Link>
        <Link to="/fragenkatalog">
          <MenuItem className="alleFragen">Fragenkatalog</MenuItem>
        </Link>
      </HomeContainer>
      <div />
    </HomePageDiv>
  )
}

export default Home
