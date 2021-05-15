import styled from '@emotion/styled'
import { theme } from '../../theme'

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow-y: hidden;

  @media screen and (max-width: 42rem) {
    justify-content: flex-start;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 3.75rem;
  height: 3.75rem;
`

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-y: auto;

  @media screen and (max-width: 42rem) {
    height: 100%;
    max-width: 100%;
    align-self: flex-start;
    background-color: ${theme.colors.white};
  }
`

const ScrollContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow-y: auto;

  @media screen and (max-width: 42rem) {
    height: 100%;
    max-width: 100%;
    align-self: flex-start;
  }
`

export { AppContainer, FooterContainer, Container, ScrollContainer }
