import React from 'react'
import { ScrollContainer } from '../../layout'
import { QuizOverviewContainer, QuestionBox, QuestionBoxInner } from './styles'

function CatalogueOverview({ i, question, numberOfQuestions, handleQuestionSelected }) {
  let markup = []
  for (let i = 1; i < numberOfQuestions + 1; i++) {
    let questionId = i
    let extraClass = parseFloat(question.id) === questionId ? 'active' : ''
    markup.push(
      <QuestionBox
        key={i}
        onClick={() => {
          handleQuestionSelected(questionId)
        }}
      >
        <QuestionBoxInner className={extraClass}>{questionId}</QuestionBoxInner>
      </QuestionBox>
    )
  }

  return (
    <ScrollContainer>
      <QuizOverviewContainer>{markup}</QuizOverviewContainer>
    </ScrollContainer>
  )
}

export default CatalogueOverview
