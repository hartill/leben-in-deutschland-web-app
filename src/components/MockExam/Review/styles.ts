import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuestionOverviewContainer = styled.div`
  min-width: 15rem;
  max-width: ${theme.size.maxColumnWidth};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 0;

  @media screen and (max-width: 48rem) {
    padding: 2px 0;
  }
`

const QuestionBox = styled.div`
  position: relative;
  float: left;
  width: 16%;
  padding-top: 16%;
  font-size: 0.8rem;
  overflow: hidden;

  @media screen and (max-width: 48rem) {
    width: 20%;
    padding-top: 20%;
  }
`

const QuestionBoxInner = styled.div`
  margin: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  color: ${theme.colors.white};
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
