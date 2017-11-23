import React from 'react';
import './review.css';

class Review extends React.Component {
  constructor(props){
    super(props);
    this.renderUserProgress = this.renderUserProgress.bind(this);
  }

  renderUserProgress() {
    let output = []
    for (let i = 0; i < this.props.examProgress.length; i++) {
      let questionId = this.props.examProgress[i].questionId
      let userScore = this.props.examProgress[i].userScore
      let boxStyle = ''

      if (userScore) {
        boxStyle = 'correct'
      } else {
        boxStyle = 'incorrect'
      }

      output.push(
        <div className='ExamQuestionOverviewBox' key={questionId}>
          <div className='ExamQuestionOverviewBoxInner'>
            <div className={'ExamQuestionOverviewBoxInnerInner ' + boxStyle}>
              {questionId}
            </div>
          </div>
        </div>
      )
    }
    for (let i=0; i < (30 - this.props.examProgress.length); i++ ) {
      output.push(
        <div className='ExamQuestionOverviewBox' key={i}>
          <div className='ExamQuestionOverviewBoxInner'>
            <div className='ExamQuestionOverviewBoxInnerInner'>
              ?
            </div>
          </div>
        </div>
      )
    }
    return output
  }

  render () {
    return (
      <div className="Container">
        <div className="QuizContainer">
          <div className="QuizHeader">
            <div className="QuestionCategory">
              Fragenübersicht
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody QuestionOverview">
              {this.renderUserProgress()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Review
