import React from 'react';
import './QuestionOverview.css';
import UserProgressBar from './../UserProgressBar'

class QuestionOverview extends React.Component {
  constructor(props){
    super(props);
    this.renderUserProgress = this.renderUserProgress.bind(this);
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < 301; i++) {
      let answerOverview = []
      let questionId = i.toString()
      let correctCount = this.props.progress.includes(questionId)
      let incorrectCount = 0
      if (this.props.incorrect.includes(questionId)) {
        incorrectCount  = this.props.incorrect.reduce(function(n, val) {
            return n + (val === questionId)
        }, 0)
      }
      let boxStyle = ''

      if (incorrectCount > 0) {
        boxStyle = 'incorrect'
        answerOverview.push(
          <div className='incorrectAnswerCount' key='1'>
            {incorrectCount > 1 ? incorrectCount + 'x' : null}
          </div>
        )
      }

      if (correctCount) {
        boxStyle = 'correct'
      }

      output.push(
        <div className='QuestionOverviewBox' key={`${i}`}>
          <div className='QuestionOverviewBoxInner'>
            <div className={'QuestionOverviewBoxInnerInner ' + boxStyle}>
              <div className='QuestionOverviewBoxHeader'>
                {i}
              </div>
              <div className='QuestionOverviewBoxContent'>
                {answerOverview}
              </div>
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
            <div className='OverviewIcon' onClick={this.props.handleViewProgress}>
              <img src ={require("./../../../static/icons/close-icon.svg")} alt='next-question' />
            </div>
          </div>
          <div className="QuizBodyContainer">
            <div className="QuizBody QuestionOverview">
              <div className="QuestionOverviewContainer">
                {this.renderUserProgress()}
              </div>
            </div>
          </div>
          <div className='QuizFooter'>
            <UserProgressBar progress={this.props.progress}/>
            <button className='ResetButton' onClick={this.props.restart} >
              Neustart?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverview
