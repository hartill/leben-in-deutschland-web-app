import React from 'react'
import './selectLocation.css'

class SelectLocation extends React.Component {
  render() {
    return (
      <form className='selectLocation'>
        <select value={this.props.userLocation} onChange={this.props.handleChange}>
          <option value="none">Standort wählen</option>
          <option value="badenWurttemberg">Baden-Württemberg</option>
          <option value="bayern">Bayern</option>
          <option value="berlin">Berlin</option>
        </select>
      </form>
    )
  }
}

export default SelectLocation
