import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuizOverviewContainer = styled.div`
  min-width: ${theme.size.minColumnWidth};
  max-width: ${theme.size.maxColumnWidth};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 2px 0;
  }
`

const QuestionBox = styled.div`
  position: relative;
  float: left;
  width: 10%;
  padding-top: 10%;
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
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);

  &.correct {
    background-color: ${theme.colors.green};
  }

  &.incorrect {
    background-color: ${theme.colors.red};
  }

  &.active {
    background-color: ${theme.colors.blue};
  }
`

const QuestionOverviewBoxHeader = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const QuestionOverviewBoxContent = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
`

const IncorrectAnswerCount = styled.div`
  flex: 1 0;
  background-color: ${theme.colors.red};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export { QuizOverviewContainer, QuestionBox, QuestionBoxInner, QuestionOverviewBoxHeader, QuestionOverviewBoxContent, IncorrectAnswerCount }
