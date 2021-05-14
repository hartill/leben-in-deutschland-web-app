import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuestionOverviewContainer = styled.div`
  min-width: 15rem;
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0;
`

const QuestionBox = styled.div`
  position: relative;
  float: left;
  width: 20%;
  padding-top: 20%;
  font-size: 0.8rem;
  overflow: hidden;
`

const QuestionBoxInner = styled.div`
  margin: 3px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  &.correct {
    background-color: ${theme.colors.green};
  }

  &.incorrect {
    background-color: ${theme.colors.red};
  }
`

export { QuestionOverviewContainer, QuestionBox, QuestionBoxInner }
