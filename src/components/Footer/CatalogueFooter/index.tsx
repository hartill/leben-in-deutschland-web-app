import React from 'react'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { FullWidthNextButton } from '../styles'

interface ICatalogueFooter {
  nextQuestion: Function
}

const CatalogueFooter: React.FC<ICatalogueFooter> = ({ nextQuestion }) => {
  return (
    <FooterContainer>
      <FullWidthNextButton onClick={() => nextQuestion()}>
        <ForwardArrowIcon />
      </FullWidthNextButton>
    </FooterContainer>
  )
}

export default CatalogueFooter
