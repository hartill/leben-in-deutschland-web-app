import React from 'react'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { FullWidthNextButton } from '../styles'

function FooterQc({ nextQuestion }) {
  return (
    <FooterContainer>
      <FullWidthNextButton onClick={nextQuestion}>
        <ForwardArrowIcon />
      </FullWidthNextButton>
    </FooterContainer>
  )
}

export default FooterQc
