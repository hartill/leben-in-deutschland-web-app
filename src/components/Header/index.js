import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderLeftSection, HeaderCenterSection, HeaderRightSection, IconContainer } from './styles'
import { ReactComponent as HomeIcon } from '../../svg/home.svg'
import { ReactComponent as ArrowBackIcon } from '../../svg/arrow_back.svg'
import { ReactComponent as ViewListIcon } from '../../svg/view_list.svg'

export function Header({ title, withHomeButton, withViewProgress, viewProgressOpen, handleViewProgress }) {
  const renderBackButton = () => {
    return (
      <IconContainer onClick={() => handleViewProgress(false)}>
        <ArrowBackIcon />
      </IconContainer>
    )
  }

  const renderHomeButton = () => {
    return (
      <Link to={'/'} style={{width: '24px', height: '24px'}}>
        <HomeIcon />
      </Link>
    )
  }

  const renderViewProgress = () => {
    return (
      <IconContainer onClick={() => handleViewProgress(true)}>
        <ViewListIcon />
      </IconContainer>
    )
  }

  return (
    <HeaderContainer>
      <HeaderLeftSection>
        {withViewProgress && viewProgressOpen ? renderBackButton() : null}
        {withHomeButton ? renderHomeButton() : null}
      </HeaderLeftSection>
      <HeaderCenterSection>
        <h1>{title}</h1>
      </HeaderCenterSection>
      <HeaderRightSection>{withViewProgress && !viewProgressOpen ? renderViewProgress() : null}</HeaderRightSection>
    </HeaderContainer>
  )
}

export default Header
