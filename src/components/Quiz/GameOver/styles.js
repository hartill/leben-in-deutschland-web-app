import styled from '@emotion/styled'
import { theme } from '../../../theme'

const GameOverContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
`

const GameOverBar = styled.div`
  height: 100px;

  &.black {
    background-color: #222;
  }

  &.red {
    backgroundcolor: ${theme.colors.red};
  }

  &.yellow {
    background-color: ${theme.colors.yellow};
  }
`

export { GameOverContainer, GameOverBar }
