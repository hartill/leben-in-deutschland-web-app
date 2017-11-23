import React from 'react';

class ExamUserProgress extends React.Component {
  render () {
    let numberOfQuestions = this.props.numberOfQuestions
    let correctAnswers = 0
    let incorrectAnswers = 0
    for (let i = 0; i < this.props.examProgress.length; i++) {
      this.props.examProgress[i].userScore === 1 ? correctAnswers += 1 : incorrectAnswers += 1
    }
    let percentageCorrect = correctAnswers / 30 * 100
    let inversePercentageCorrect = 100 - percentageCorrect
    let percentageIncorrect = incorrectAnswers / 30 * 100
    let inversePercentageIncorrect = 100 - percentageIncorrect
    let userProgress = this.props.examProgress.length
    let userProgressStyleCorrect = {
      right: inversePercentageCorrect + '%',
    }
    let userProgressStyleIncorrect = {
      left: inversePercentageIncorrect + '%',
    }
    return (
      <div className="ExamUserProgressContainer">
        <div className='ExamUserProgressCorrect' style={userProgressStyleCorrect} />
        <div className='ExamUserProgressIncorrect' style={userProgressStyleIncorrect} />
        <div className='ExamScore'>
          {userProgress} / {numberOfQuestions}
        </div>
      </div>
    )
  }
}

export default ExamUserProgress
