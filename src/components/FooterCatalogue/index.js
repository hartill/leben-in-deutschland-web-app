import React from 'react'
import './FooterQc.css'
import { ReactComponent as ForwardArrowIcon } from '../../svg/forwards-arrow.svg'
import { FooterContainer } from '../layout'

function FooterQc({ nextQuestion }) {
  return (
    <FooterContainer>
      <button className="AQNextButton" onClick={nextQuestion} key="2">
        <ForwardArrowIcon />
      </button>
    </FooterContainer>
  )
}

export default FooterQc
