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
      let correctCount = this.props.progress.reduce(function(n, val) {
          return n + (val === questionId)
      }, 0)
      let incorrectCount  = this.props.incorrect.reduce(function(n, val) {
          return n + (val === questionId)
      }, 0)

      if (incorrectCount > 0) {
        answerOverview.push(
          <div className='incorrectAnswerCount' key='1'>
            {incorrectCount > 1 ? incorrectCount + ' x' : null}
          </div>
        )
      }

      if (correctCount > 0) {
        answerOverview.push(
          <div className='correctAnswerCount' key='2'>
            <span>{correctCount > 1 ? correctCount + ' x' : null}</span>
          </div>
        )
      }

      output.push(
        <div className='QuestionOverviewBox' key={`${i}`}>
          <div className='QuestionOverviewBoxInner'>
            <div className='QuestionOverviewBoxHeader'>
              {i}
            </div>
            <div className='QuestionOverviewBoxContent'>
              {answerOverview}
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
            <div className='QuestionCount' onClick={this.props.handleViewProgress}>
              <img src ={require("./../../../static/icons/close-icon-02.png")} alt='next-question' />
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
              Fortschritt zurücksetzen
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverview
