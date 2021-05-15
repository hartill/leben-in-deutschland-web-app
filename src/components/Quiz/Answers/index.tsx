import React from 'react'
import { AnswerOption, AnswerInput } from './styles'

interface IAnswers {
  question: any
  showAnswer: Boolean
  selectedAnswer: string | undefined | null
  onAnswerSelected: Function
}

const Answers: React.FC<IAnswers> = ({ question, showAnswer, selectedAnswer, onAnswerSelected }) => {
  let answerMarkup = []
  let answerHighlight = ''
  let disabled = false
  let checked = false
  let active = ''
  if (showAnswer) {
    disabled = true
    active = 'disabled'
  }
  for (let i = 0; i < question.answers.length; i++) {
    if (showAnswer === true) {
      if (selectedAnswer !== null) {
        if (selectedAnswer === i.toString()) {
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
            id={i.toString()}
            value={question.answers[i].key}
            onChange={(event) => onAnswerSelected(event)}
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
