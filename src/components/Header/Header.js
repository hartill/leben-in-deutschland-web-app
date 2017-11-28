import React from 'react';
import bodymovin from 'bodymovin'
import nothingToGridToCrossData from './../../svg/nothing-to-grid-to-cross.json'
import arrowToNothingData from './../../svg/arrow-to-nothing.json'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props){
    super(props)
    this.anim = null
    this.anim2 = null
  }

  componentDidMount() {
    const animationProperties = {
      container: this.animationContainer,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: nothingToGridToCrossData
    }

    this.anim = !this.props.disabled ? bodymovin.loadAnimation(animationProperties) : null

    const animationProperties2 = {
      container: this.animationContainer2,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: arrowToNothingData
    }

    this.anim2 = bodymovin.loadAnimation(animationProperties2)

    if(this.props.buttonsDisabled) {
      this.anim2.setDirection(1)
      this.anim2.goToAndPlay(0, true)
      this.anim.setDirection(-1)
      this.anim.playSegments([10,0], true)
    }

    if(!this.props.buttonsDisabled) {
      this.anim2.setDirection(-1)
      this.anim2.goToAndPlay(10, true)
      this.anim.setDirection(1)
      this.anim.playSegments([0,10], true)
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.viewProgress !== this.props.viewProgress) {
      if(nextProps.viewProgress) {
        this.anim.setDirection(1)
        this.anim.playSegments([10,21], true)
      } else {
        this.anim.setDirection(-1)
        this.anim.playSegments([21,10], true)
      }
    }
  }

  render () {
    return (
      <div className="headerContainer">
        <Link to='/' className='headerLeftSection pointer'>
          <div className='animatedIcon' ref={(animationDiv2) => { this.animationContainer2 = animationDiv2 }}/>
        </Link>
        <div className="headerCenterSection">
          <h1>{this.props.title}</h1>
        </div>
        <div className= "headerRightSection pointer" onClick={this.props.handleViewProgress}>
          <div className='animatedIcon' ref={(animationDiv) => { this.animationContainer = animationDiv }}/>
        </div>
      </div>
    )
  }
}

export default Header
