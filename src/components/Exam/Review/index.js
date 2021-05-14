import React from 'react'
import { ScrollContainer } from '../../layout'
import { QuestionOverviewContainer, QuestionBox, QuestionBoxInner } from './styles'

function Review({ examProgress, numberOfQuestions }) {
  let markup = []
  for (let i = 0; i < examProgress.length; i++) {
    let questionId = examProgress[i].questionId
    let userScore = examProgress[i].userScore
    let boxStyle = ''

    if (userScore) {
      boxStyle = 'correct'
    } else {
      boxStyle = 'incorrect'
    }

    markup.push(
      <QuestionBox key={questionId}>
        <QuestionBoxInner className={boxStyle}>{questionId}</QuestionBoxInner>
      </QuestionBox>
    )
  }
  for (let i = 0; i < numberOfQuestions - examProgress.length; i++) {
    markup.push(
      <QuestionBox key={500 + i}>
        <QuestionBoxInner>?</QuestionBoxInner>
      </QuestionBox>
    )
  }

  return (
    <ScrollContainer>
      <QuestionOverviewContainer>{markup}</QuestionOverviewContainer>
    </ScrollContainer>
  )
}

export default Review
