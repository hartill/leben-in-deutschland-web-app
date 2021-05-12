import React from 'react'
import './FooterQc.css'
import { ReactComponent as ForwardArrowIcon } from './../../../svg/forwards-arrow.svg'

class FooterQc extends React.Component {
  render() {
    return (
      <div className="Footer">
        <button className="AQNextButton" onClick={this.props.nextQuestion} key="2">
          <ForwardArrowIcon />
        </button>
      </div>
    )
  }
}

export default FooterQc
