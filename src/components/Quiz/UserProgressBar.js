import React from 'react';

class UserProgressBar extends React.Component {
  render () {
    let userProgress = this.props.progress.length
    let numberOfQuestions = this.props.numberOfQuestions
    let userProgressPercent = 100 - (userProgress / numberOfQuestions * 100)
    let userProgressStyle = {
      right: userProgressPercent + '%',
    }
    return (
      <div className="UserProgressContainer">
        <div className='UserProgress' style={userProgressStyle}></div>
        <div className='Score'>
          {userProgress} / {numberOfQuestions}
        </div>
      </div>
    )
  }
}

export default UserProgressBar
