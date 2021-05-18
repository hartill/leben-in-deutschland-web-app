import styled from '@emotion/styled'
import { theme } from '../../../theme'

const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  height: 100%;
`

const ProgressIndicator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${theme.colors.green};
  height: 100%;
`

const DisplayScore = styled.div`
  z-index: 1;
`

export { ProgressContainer, ProgressIndicator, DisplayScore }
