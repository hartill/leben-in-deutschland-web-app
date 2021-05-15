import React from 'react'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { FullWidthNextButton } from '../styles'

interface IFooterQc {
  nextQuestion: Function
}

const FooterCatalogue: React.FC<IFooterQc> = ({ nextQuestion }) => {
  return (
    <FooterContainer>
      <FullWidthNextButton onClick={() => nextQuestion()}>
        <ForwardArrowIcon />
      </FullWidthNextButton>
    </FooterContainer>
  )
}

export default FooterCatalogue
