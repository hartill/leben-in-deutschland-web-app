import React from 'react'
import { UserProgressContainer, UserProgressIndicator, Score } from './styles'

export function UserProgressBar({ progress, numberOfQuestions, progressColor }) {
  const userProgressPercent = 100 - (progress.length / numberOfQuestions) * 100
  const userProgressStyle = {
    right: userProgressPercent + '%',
    backgroundColor: progressColor,
  }
  return (
    <UserProgressContainer key={'njk'}>
      <UserProgressIndicator style={userProgressStyle} key={'3grgg'}></UserProgressIndicator>
      <Score key={'okkk'}>
        {progress.length} / {numberOfQuestions}
      </Score>
    </UserProgressContainer>
  )
}

export default UserProgressBar
