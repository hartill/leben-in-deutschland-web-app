import React from 'react'
import { Container } from '../../layout'
import { QuizContainer } from '../../Quiz/styles'
import { QuizHeader, QuestionCategory, QuizBodyContainer } from '../../Quiz/Question/styles'
import { ResultBoxRow, ResultBox, ResultBoxResult } from './styles'
import { theme } from '../../../theme'

interface IResults {
  examProgress: any
  numberOfQuestions: number
}

const Results: React.FC<IResults> = ({ examProgress, numberOfQuestions }) => {
  let correctAnswers = 0
  let incorrectAnswers = 0
  for (let i = 0; i < examProgress.length; i++) {
    examProgress[i].userScore === 1 ? (correctAnswers += 1) : (incorrectAnswers += 1)
  }
  let percentageCorrect = (correctAnswers / numberOfQuestions) * 100
  let testPassed = percentageCorrect >= 50 ? true : false
  let headerBackgroundColor = testPassed ? theme.colors.green : theme.colors.red

  const title = testPassed ? 'Du hast bestanden' : 'Du hast nicht bestanden'

  return (
    <Container>
      <QuizContainer>
        <QuizHeader style={{ backgroundColor: headerBackgroundColor }}>
          <QuestionCategory>{title}</QuestionCategory>
        </QuizHeader>
        <QuizBodyContainer>
          <ResultBox>
            <ResultBoxRow key={1}>
              <span>Ergebnis:</span>
              <ResultBoxResult>{percentageCorrect.toFixed(0)}%</ResultBoxResult>
            </ResultBoxRow>
            <ResultBoxRow key={2}>
              <span>Korrekte Antworten:</span>
              <ResultBoxResult style={{ backgroundColor: theme.colors.green }}>{correctAnswers}</ResultBoxResult>
            </ResultBoxRow>
            <ResultBoxRow key={3}>
              <span>Falsche Antworten:</span>
              <ResultBoxResult style={{ backgroundColor: theme.colors.red }}>{incorrectAnswers}</ResultBoxResult>
            </ResultBoxRow>
          </ResultBox>
        </QuizBodyContainer>
      </QuizContainer>
    </Container>
  )
}

export default Results
