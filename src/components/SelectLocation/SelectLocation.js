import React from 'react'
import './selectLocation.css'

class SelectLocation extends React.Component {
  render() {
    return (
      <form className='selectLocation'>
        <label>
          Standort:
        </label>
        <select value={this.props.userLocation} onChange={this.props.handleChange}>
          <option value="none">Nicht ausgewählt</option>
          <option value="badenWurttemberg">Baden-Württemberg</option>
        </select>
      </form>
    )
  }
}

export default SelectLocation
