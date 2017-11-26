import React from 'react';
import MenuContainer from "../MenuContainer";
import bodymovin from 'bodymovin'
import animationData from './../../api/grid-to-cross-animation.json'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.anim
  }

  animationIsAttached = false;

  componentDidMount () {
    const animationProperties = {
      container: this.animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData
    }

    this.anim = bodymovin.loadAnimation(animationProperties)
  }



  componentWillUpdate(nextProps) {
    if (nextProps.viewProgress !== this.props.viewProgress) {
      if(nextProps.viewProgress) {
        this.anim.setDirection(-1)
        this.anim.goToAndPlay(10, true)
      } else {
        this.anim.setDirection(1)
        this.anim.goToAndPlay(0, true)
      }
    }
  }

  render () {
    return (
      <div className="headerContainer">
        <MenuContainer/>
        <div className="headerCenterSection">
          <h1>{this.props.title}</h1>
        </div>
        <div className= "headerRightSection">
          <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
            <div style={{width: 16, height: 16}} ref={(animationDiv) => { this.animationContainer = animationDiv; }}/>
            {/*
              this.props.viewProgress === true ?
              <img src ={require("./../../static/icons/close-icon.svg")} alt='close' /> :
              <img src ={require("./../../static/icons/qu-overview-icon.svg")} alt='overview' />
            */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
