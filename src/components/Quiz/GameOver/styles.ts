import styled from '@emotion/styled'
import { theme } from '../../../theme'

const GameOverContainer = styled.div`
  flex:1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.midGrey};
`

const GameOverBar = styled.div`
  height: 100px;
  width: 100%;

  &.black {
    background-color: ${theme.colors.darkFont};
  }

  &.red {
    background-color: ${theme.colors.red};
  }

  &.yellow {
    background-color: ${theme.colors.yellow};
  }
`

export { GameOverContainer, GameOverBar }
