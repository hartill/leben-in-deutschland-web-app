import React from 'react';
import './QuestionOverview.css';

class QuestionOverview extends React.Component {
  constructor(props){
    super(props)
    this.renderUserProgress = this.renderUserProgress.bind(this)
  }

  componentDidMount(){
    this.props.handleLoaded()
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < (this.props.numberOfQuestions + 1); i++) {
      let answerOverview = []
      let questionId = i.toString()
      let correctCount = false
      if (this.props.progress) {
        correctCount = this.props.progress.indexOf(questionId) < 0 ? false : true
      }
      let incorrectCount = 0
      if (this.props.incorrect) {
        if (this.props.incorrect.indexOf(questionId) >= 0) {
          incorrectCount  = this.props.incorrect.reduce(function(n, val) {
              return n + (val === questionId)
          }, 0)
        }
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
        <div className='QuestionOverviewBox' key={i}>
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
      this.renderUserProgress(this.props.loading)
    )
  }
}

export default QuestionOverview
