import React from 'react';
import './quiz.css';

class UserProgressBar extends React.Component {
  render () {
    let userProgress = this.props.progress.length
    let userProgressPercent = 100 - (userProgress / 300 * 100)
    let userProgressStyle = {
      right: userProgressPercent + '%',
    }
    return (
      <div className="UserScore">
        <div className='UserProgress' style={userProgressStyle}></div>
        <div className='Score'>
          {userProgress} / 300
        </div>
      </div>
    )
  }
}

export default UserProgressBar
