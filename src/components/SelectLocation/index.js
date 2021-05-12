import React from 'react'
import { SelectLocationContainer } from './styles'

export function SelectLocation({ userLocation, handleLocationChange }) {
  return (
    <SelectLocationContainer>
      <form className="selectLocation">
        <select value={userLocation} onChange={handleLocationChange}>
          <option value="none">Standort wählen</option>
          <option value="badenWurttemberg">Baden-Württemberg</option>
          <option value="bayern">Bayern</option>
          <option value="berlin">Berlin</option>
          <option value="brandenburg">Brandenburg</option>
          <option value="bremen">Bremen</option>
          <option value="hamburg">Hamburg</option>
          <option value="hessen">Hessen</option>
          <option value="mecklenburgVorpommern">Mecklenburg-Vorpommern</option>
          <option value="niedersachsen">Niedersachsen</option>
          <option value="nordrheinWestfalen">Nordrhein-Westfalen</option>
          <option value="rheinlandPfalz">Rheinland-Pfalz</option>
          <option value="saarland">Saarland</option>
          <option value="sachsen">Sachsen</option>
          <option value="sachsenAnhalt">Sachsen-Anhalt</option>
          <option value="schleswigHolstein">Schleswig-Holstein</option>
          <option value="thuringen">Thüringen</option>
        </select>
      </form>
    </SelectLocationContainer>
  )
}

export default SelectLocation
