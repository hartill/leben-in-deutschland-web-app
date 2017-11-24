import React from 'react';

class ExamUserProgress extends React.Component {
  render () {
    let numberOfQuestions = this.props.numberOfQuestions
    let userProgress = this.props.examProgress.length
    let userProgressPercent = userProgress / 30 * 100
    let inverseUserProgress = 100 - userProgressPercent
    let userProgressStyle = {
      right: inverseUserProgress + '%',
    }
    return (
      <div className="ExamUserProgressContainer">
        <div className='ExamUserProgress' style={userProgressStyle} />
        <div className='ExamScore'>
          {userProgress} / {numberOfQuestions}
        </div>
      </div>
    )
  }
}

export default ExamUserProgress
