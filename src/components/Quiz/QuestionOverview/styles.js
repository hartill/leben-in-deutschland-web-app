import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuizOverviewContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (max-width: 48rem) {
    padding: 1rem 0;
  }
`

const QuestionBox = styled.div`
  position: relative;
  flex: 0 0 9%;
  margin: 3px;
  box-sizing: margin-box;
  font-size: 0.8rem;
  overflow: hidden;

  &:before {
    content: '';
    display: table;
    padding-top: 100%;
  }

  @media screen and (max-width: 48rem) {
    flex: 0 0 16%;
  }
`

const QuestionBoxInner = styled.div`
  color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  background-color: rgba(0, 0, 0, 0.2);

  &.correct {
    background-color: ${theme.colors.green};
  }

  &.incorrect {
    background-color: ${theme.colors.red};
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
  color: #fff;
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

export {
  QuizOverviewContainer,
  QuestionBox,
  QuestionBoxInner,
  QuestionOverviewBoxHeader,
  QuestionOverviewBoxContent,
  IncorrectAnswerCount,
}
