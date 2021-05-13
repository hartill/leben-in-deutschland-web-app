import React from 'react'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { CatalogueNextButton } from './styles'

function FooterQc({ nextQuestion }) {
  return (
    <FooterContainer>
      <CatalogueNextButton onClick={nextQuestion}>
        <ForwardArrowIcon />
      </CatalogueNextButton>
    </FooterContainer>
  )
}

export default FooterQc
