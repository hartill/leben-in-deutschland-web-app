import React from 'react'
import SelectLocation from '../../components/SelectLocation'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import { HomePageDiv, HomeContainer, MenuItem } from './styles'

interface IHome {
  selectedLocation: string
  handleLocationChange: Function
}

const Home: React.FC<IHome> = ({ selectedLocation, handleLocationChange }) => {
  const confirmLocationChange = (e: any) => {
    const continueWithLocationChange = window.confirm('Ihr Fortschritt wird zurückgesetzt')
    if (continueWithLocationChange) {
      handleLocationChange(e)
    }
  }

  return (
    <HomePageDiv>
      <Header title={'Leben in Deutschland Test'} />
      <SelectLocation selectedLocation={selectedLocation} handleLocationChange={confirmLocationChange} />
      <HomeContainer>
        <Link to="/trainieren">
          <MenuItem className="ubung">Trainieren</MenuItem>
        </Link>
        <Link to="/probe-prufung">
          <MenuItem className="prufung">Probeprüfung</MenuItem>
        </Link>
        <Link to="/fragen-katalog">
          <MenuItem className="alleFragen">Fragenkatalog</MenuItem>
        </Link>
      </HomeContainer>
      <div />
    </HomePageDiv>
  )
}

export default Home
