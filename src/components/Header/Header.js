import React from 'react';
import MenuContainer from "../MenuContainer";
import bodymovin from 'bodymovin'
import animationData from './../../api/grid-to-cross-animation.json'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.anim = null
  }

  //animationIsAttached = false;

  componentDidMount () {
    const animationProperties = {
      container: this.animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData
    }

    this.anim = !this.props.disabled ? bodymovin.loadAnimation(animationProperties) : null
  }

  componentWillUpdate(nextProps) {
    if (nextProps.viewProgress !== this.props.viewProgress) {
      if(nextProps.viewProgress) {
        this.anim.setDirection(1)
        this.anim.goToAndPlay(0, true)
      } else {
        this.anim.setDirection(-1)
        this.anim.goToAndPlay(10, true)
      }
    }
  }

  render () {
    if (this.props.disabled) {
      return (
        <div className="headerContainer">
          <div className= "headerLeftSection" />
          <div className="headerCenterSection">
            <h1>{this.props.title}</h1>
          </div>
          <div className= "headerRightSection" />
        </div>
      )
    } else {
      return (
        <div className="headerContainer">
          <MenuContainer/>
          <div className="headerCenterSection">
            <h1>{this.props.title}</h1>
          </div>
          <div className= "headerRightSection">
            <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
              <div className='animatedIcon' ref={(animationDiv) => { this.animationContainer = animationDiv; }}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Header
