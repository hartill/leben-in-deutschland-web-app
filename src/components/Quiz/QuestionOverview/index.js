import React from 'react'
import QuestionOverviewBox from './QuestionOverviewBox'
import { ScrollContainer } from '../../layout'
import { QuizOverviewContainer } from './styles'

function QuestionOverview({ numberOfQuestions, progress, incorrect }) {
  let content = []

  for (let i = 1; i < numberOfQuestions + 1; i++) {
    content.push(<QuestionOverviewBox i={i} progress={progress} incorrect={incorrect} key={i} />)
  }

  return (
    <ScrollContainer>
      <QuizOverviewContainer>{content}</QuizOverviewContainer>
    </ScrollContainer>
  )
}

export default QuestionOverview
