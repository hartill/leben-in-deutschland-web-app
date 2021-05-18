import React from 'react'
import { ProgressContainer, ProgressIndicator, DisplayScore } from './styles'

interface IProgressBar {
  progressLength: number
  totalNumberOfQuestions: number
  progressColor: string
}

const ProgressBar: React.FC<IProgressBar> = ({ progressLength, totalNumberOfQuestions, progressColor }) => {
  const userProgressPercent = Math.round(100 - (progressLength / totalNumberOfQuestions) * 100)
  const userProgressStyle = {
    right: userProgressPercent + '%',
    backgroundColor: progressColor,
  }
  return (
    <ProgressContainer key={'njk'}>
      <ProgressIndicator style={userProgressStyle} key={'3grgg'}></ProgressIndicator>
      <DisplayScore key={'okkk'}>
        {progressLength} / {totalNumberOfQuestions}
      </DisplayScore>
    </ProgressContainer>
  )
}

export default ProgressBar
