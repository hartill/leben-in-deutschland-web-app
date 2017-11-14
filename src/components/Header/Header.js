import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className="headerContainer">
        <div className= "headerLeftSection">
        </div>
        <div className="headerCenterSection">
          <img src ={require("./../../static/logo/leben-in-deutschland-logo-01.png")} alt='leben-in-deutschland-logo' className='site-logo'/>
          <h1>Leben In Deutschland Test</h1>
        </div>
      </div>
    )
  }
}

export default Header
