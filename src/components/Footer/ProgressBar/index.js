import React from 'react'
import {UserProgressContainer} from './styles'

export function UserProgressBar({ progress, numberOfQuestions }) {
  let userProgress = progress.length
  let userProgressPercent = 100 - (userProgress / numberOfQuestions) * 100
  let userProgressStyle = {
    right: userProgressPercent + '%',
  }
  return (
    <UserProgressContainer>
      <div className="UserProgress" style={userProgressStyle}></div>
      <div className="Score">
        {userProgress} / {numberOfQuestions}
      </div>
    </UserProgressContainer>
  )
}

export default UserProgressBar
