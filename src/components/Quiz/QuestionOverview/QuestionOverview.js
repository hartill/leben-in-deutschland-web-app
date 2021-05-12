import React from 'react'
import './QuestionOverview.css'
import { ReactComponent as LoadingIcon } from './../../../static/icons/loadingIcon.svg'

class QuestionOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
    this.renderUserProgress = this.renderUserProgress.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 800)
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < this.props.numberOfQuestions + 1; i++) {
      let answerOverview = []
      let questionId = i.toString()
      let correctCount = false
      if (this.props.progress) {
        correctCount = this.props.progress.indexOf(questionId) < 0 ? false : true
      }
      let incorrectCount = 0
      if (this.props.incorrect) {
        if (this.props.incorrect.indexOf(questionId) >= 0) {
          incorrectCount = this.props.incorrect.reduce(function (n, val) {
            return n + (val === questionId)
          }, 0)
        }
      }
      let boxStyle = ''

      if (incorrectCount > 0) {
        boxStyle = 'incorrect'
        answerOverview.push(
          <div className="incorrectAnswerCount" key="1">
            {incorrectCount > 1 ? incorrectCount + 'x' : null}
          </div>
        )
      }

      if (correctCount) {
        boxStyle = 'correct'
      }

      output.push(
        <div className="QuestionOverviewBox" key={i}>
          <div className="QuestionOverviewBoxInner">
            <div className={'QuestionOverviewBoxInnerInner ' + boxStyle}>
              <div className="QuestionOverviewBoxHeader">{i}</div>
              <div className="QuestionOverviewBoxContent">{answerOverview}</div>
            </div>
          </div>
        </div>
      )
    }
    return output
  }

  render() {
    let content = this.state.loading ? (
      <div className="loading">
        <LoadingIcon width={38} />
      </div>
    ) : (
      this.renderUserProgress()
    )
    return (
      <div className="OverviewContainer">
        <div className="QuOvContainer">
          <div className="QuOvBodyContainer">
            <div className="QuOvBody">{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverview
