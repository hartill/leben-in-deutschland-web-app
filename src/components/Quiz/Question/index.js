import React from 'react'
import Answers from '../Answers'
import { QuizHeader, QuestionNumber, QuestionCategory, QuizBodyContainer, QuestionText } from './styles'
import { theme } from '../../../theme'

function Question({ question, headerColor, showAnswer, selectedAnswer, onAnswerSelected, renderImage }) {
  const image = question.image ? question.image : null

  return (
    <>
      <QuizHeader style={{ backgroundColor: headerColor ? headerColor : theme.colors.blue }}>
        <QuestionNumber>{question.id}</QuestionNumber>
        <QuestionCategory>{question.category}</QuestionCategory>
      </QuizHeader>
      <QuizBodyContainer>
        <QuestionText>{question.question}</QuestionText>
        {question.image ? renderImage(image) : null}
        <Answers question={question} showAnswer={showAnswer} selectedAnswer={selectedAnswer} onAnswerSelected={onAnswerSelected} />
      </QuizBodyContainer>
    </>
  )
}

export default Question
