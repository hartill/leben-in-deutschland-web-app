import React from 'react';
import MenuContainer from "../MenuContainer";

class Header extends React.Component {

  render () {
    return (
      <div className="headerContainer">
        <MenuContainer/>
        <div className="headerCenterSection">
          <h1>{this.props.title}</h1>
        </div>
        <div className= "headerRightSection">
          <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
            {
              this.props.viewProgress === true ?
              <img src ={require("./../../static/icons/close-icon.svg")} alt='close' /> :
              <img src ={require("./../../static/icons/qu-overview-icon.svg")} alt='overview' />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Header
