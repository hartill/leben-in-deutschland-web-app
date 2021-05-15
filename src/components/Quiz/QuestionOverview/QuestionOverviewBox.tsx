import React from 'react'
import { QuestionBox, QuestionBoxInner, QuestionOverviewBoxHeader, QuestionOverviewBoxContent, IncorrectAnswerCount } from './styles'

interface IQuestionOverviewBox {
  i: number
  progress: any
  incorrect: any
}

const QuestionOverviewBox: React.FC<IQuestionOverviewBox> = ({ i, progress, incorrect }) => {
  const questionId = i.toString()

  let incorrectCount = 0
  if (incorrect) {
    if (incorrect.indexOf(questionId) >= 0) {
      incorrectCount = incorrect.reduce(function (n: number, item: any) {
        return n + (item === questionId ? 1 : 0)
      }, 0)
    }
  }
  let boxStyle = ''

  let answerOverviewMarkup = []

  if (incorrectCount > 0) {
    boxStyle = 'incorrect'
    answerOverviewMarkup.push(<IncorrectAnswerCount key="1">{incorrectCount > 1 ? incorrectCount + 'x' : null}</IncorrectAnswerCount>)
  }

  if (progress && progress.indexOf(questionId) > -1) {
    boxStyle = 'correct'
  }
  return (
    <QuestionBox key={i}>
      <QuestionBoxInner className={boxStyle}>
        <QuestionOverviewBoxHeader>{questionId}</QuestionOverviewBoxHeader>
        <QuestionOverviewBoxContent>{answerOverviewMarkup}</QuestionOverviewBoxContent>
      </QuestionBoxInner>
    </QuestionBox>
  )
}

export default QuestionOverviewBox
