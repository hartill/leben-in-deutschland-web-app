import React from 'react'
import './AQOverview.css'
import { ReactComponent as LoadingIcon } from './../../../static/icons/loadingIcon.svg'
import {OverviewContainer} from '../../layout'

class AQOverview extends React.Component {
  constructor(props) {
    super(props)
    this.content = null
    this.renderQuestions = this.renderQuestions.bind(this)
  }

  componentWillMount() {
    this.content = (
      <div className="loadingContainer">
        <div className="loading">
          <LoadingIcon width={38} />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.content = this.renderQuestions()
    setTimeout(() => this.forceUpdate(), 800)
  }

  renderQuestions() {
    let output = []
    for (let i = 1; i < this.props.numberOfQuestions + 1; i++) {
      let questionId = i
      let questionActive = parseFloat(this.props.question.id) === questionId ? ' QuestionActive' : ''
      output.push(
        <div
          className="AQOverviewBox"
          key={i}
          onClick={() => {
            this.props.handleQuestionSelected(questionId)
          }}
        >
          <div className="AQOverviewBoxInner">
            <div className={'AQOverviewBoxInnerInner' + questionActive}>{questionId}</div>
          </div>
        </div>
      )
    }
    return output
  }

  render() {
    return (
      <OverviewContainer>
        <div className="AQOvContainer">
          <div className="AQOvBodyContainer">
            <div className="AQOvBody">{this.content}</div>
          </div>
        </div>
      </OverviewContainer>
    )
  }
}

export default AQOverview
