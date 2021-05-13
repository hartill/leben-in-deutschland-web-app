import styled from '@emotion/styled'
import { theme } from '../../theme'

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.red};
  border: none;
  padding: 0px;
  color: #fff;
  font-size: 1rem;
  flex-shrink: 0;
  flex-basis: 50%;
  height: 100%;
  cursor: pointer;

  &.innactive {
    background-color: ${theme.colors.primary};
    cursor: default;
    opacity: 0.4;
  }
`

const FullWidthNextButton = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  border: none;
  padding: 0px;
  cursor: pointer;
`

const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  background-color: ${theme.colors.red};
  border: none;
  padding: 0px;
  transition: background-color 0.3s;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`

export { NextButton, ResetButton, FullWidthNextButton }
