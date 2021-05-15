import styled from '@emotion/styled'
import forwardsArrow from './../../svg/forwards-arrow.svg'
import { theme } from '../../theme'

const HomePageDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow-y: auto;
`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  background: url(${forwardsArrow}) 98% 50% no-repeat;
  background-size: 1rem 1rem;
  margin-bottom: 1.5rem;

  &.ubung {
    background-color: ${theme.colors.blue};
  }

  &.prufung {
    background-color: ${theme.colors.red};
  }

  &.alleFragen {
    background-color: ${theme.colors.green};
  }
`

const HomeContainer = styled.div`
  width: 100%;
  max-width: ${theme.size.maxColumnWidth};
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  padding: 0px 15px;
`

export { HomePageDiv, HomeContainer, MenuItem }
