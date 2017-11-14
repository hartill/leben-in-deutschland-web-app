import React from 'react';
import './quiz.css';
import UserProgressBar from './UserProgressBar'

class QuestionOverview extends React.Component {
  constructor(props){
    super(props);
    this.renderUserProgress = this.renderUserProgress.bind(this);
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < 301; i++) {
      let questionId = i.toString()
      let correctCount = this.props.progress.reduce(function(n, val) {
          return n + (val === questionId)
      }, 0)
      let incorrectCount  = this.props.incorrect.reduce(function(n, val) {
          return n + (val === questionId)
      }, 0)
      let totalCount = correctCount - incorrectCount

      let questionCountStyle = 'yellowCount'
      if (totalCount < 0) {
        questionCountStyle = 'redCount'
      } else if (totalCount > 0) {
        questionCountStyle = 'greenCount'
      }
      output.push(
        <div className='QuestionOverviewBox' key={`${i}`}>
          <div className={'QuestionOverviewBoxInner ' + questionCountStyle}>
            {i}
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
            <div className='QuestionCount' onClick={this.props.handleViewProgress}>
              <img src ={require("./../../static/icons/close-icon-02.png")} alt='next-question' />
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody">
              <div className="QuestionOverviewContainer">
                {this.renderUserProgress()}
              </div>
            </div>
          </div>
          <div className='NextQuestion'>
            <UserProgressBar progress={this.props.progress}/>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverview
