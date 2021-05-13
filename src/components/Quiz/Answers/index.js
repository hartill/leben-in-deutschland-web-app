import React from 'react'
import { AnswerOption, AnswerInput } from './styles'

function Answers({ question, showAnswer, selectedAnswer, onAnswerSelected }) {
  let answerMarkup = []
  let answerHighlight = ''
  let disabled = false
  let checked = false
  let active = ''
  if (showAnswer === true) {
    disabled = true
    active = 'disabled'
  }
  for (let i = 0; i < question.answers.length; i++) {
    if (showAnswer === true) {
      if (selectedAnswer !== null) {
        if (selectedAnswer === '' + i + '') {
          answerHighlight = 'incorrectAnswer'
        }
        if (question.answers[i].key === 1) {
          answerHighlight = 'correctAnswer'
        }
      } else {
        if (question.answers[i].key === 1) {
          answerHighlight = 'showCorrectAnswer'
        }
      }
    }
    answerMarkup.push(
      <AnswerOption className={answerHighlight + ' ' + active} key={i}>
        <AnswerInput>
          <input
            type="radio"
            name={question.id}
            id={i}
            value={question.answers[i].key}
            onChange={onAnswerSelected}
            disabled={disabled}
            checked={checked}
          />
        </AnswerInput>
        <span>{question.answers[i].content}</span>
      </AnswerOption>
    )
    answerHighlight = ''
  }

  return <>{answerMarkup}</>
}

export default Answers
