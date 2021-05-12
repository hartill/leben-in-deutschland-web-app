import styled from '@emotion/styled'
import forwardsArrow from './../../svg/forwards-arrow.svg'

const HomePageDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #23212b;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow-y: auto;
`

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: url(${forwardsArrow}) 98% 50% no-repeat;
  background-size: 1rem 1rem;
  margin-bottom: 1.5rem;

  &.ubung {
    background-color: #37b1e3;
  }

  &.prufung {
    background-color: #dd5152;
  }

  &.alleFragen {
    background-color: #2cc990;
  }
`

const HomeContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  padding: 0px 15px;
`

export { HomePageDiv, HomeContainer, MenuItem }
