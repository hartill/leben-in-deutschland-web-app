import styled from '@emotion/styled'
import { theme } from '../../../theme'

const QuizHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: ${theme.colors.blue};
  height: 3.75rem;
  justify-content: space-between;
  color: #fff;
`
const QuestionNumber = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 3.75rem;
`

const QuestionCategory = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  text-align: left;
  padding: 0 1rem;
`

const QuizBodyContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 1;
  background-color: #fff;
  padding: 1rem;

  @media screen and (max-width: 42rem) {
    height: 100%;
    flex-shrink: 1;
  }
`

const QuestionText = styled.div`
  padding: 1rem 0;
`

export { QuizHeader, QuestionNumber, QuestionCategory, QuizBodyContainer, QuestionText }
