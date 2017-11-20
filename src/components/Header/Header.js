import React from 'react';
import MenuContainer from "../MenuContainer";

class Header extends React.Component {
  render () {
    return (
      <div className="headerContainer">
        <div className= "headerLeftSection">
          {
            //<MenuContainer/>
          }
        </div>
        <div className="headerCenterSection">
          <h1>Leben In Deutschland Test</h1>
        </div>
      </div>
    )
  }
}

export default Header
