import styled from '@emotion/styled'
import { theme } from '../../../theme'

const ResultBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: center;
`

const ResultBoxRow = styled.div`
  flex-basis: 60px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`

const ResultBoxResult = styled.div`
  flex-basis: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${theme.colors.blue};
`

export { ResultBox, ResultBoxRow, ResultBoxResult }
