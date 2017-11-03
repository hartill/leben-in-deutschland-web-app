import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className="headerContainer">
        <div className= "headerLeftSection">
          <img src ={require("./../../static/images/leben-in-deutschland-logo.png")} alt='leben-in-deutschland-logo' />
        </div>
        <div className="headerCenterSection">
          <h1>Leben In Deutschland Test</h1>
        </div>
      </div>
    )
  }
}

export default Header
