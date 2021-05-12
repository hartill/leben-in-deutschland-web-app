import React from 'react'
import './FooterQc.css'
import { ReactComponent as ForwardArrowIcon } from './../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../../components/layout'

class FooterQc extends React.Component {
  render() {
    return (
      <FooterContainer>
        <button className="AQNextButton" onClick={this.props.nextQuestion} key="2">
          <ForwardArrowIcon />
        </button>
      </FooterContainer>
    )
  }
}

export default FooterQc
