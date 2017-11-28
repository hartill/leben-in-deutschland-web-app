import React from 'react';
import './AQOverview.css';

class AQOverview extends React.Component {
  constructor(props){
    super(props)
    this.content = null
    this.renderQuestions = this.renderQuestions.bind(this)
  }

  componentWillMount(){
    this.content = (
      <div className='loading'>
        <img className='loadingSVG' src ={require("./../../../static/icons/loadingIcon.svg")} alt='loading' />
      </div>
    )
  }

  componentDidMount(){
    this.content = this.renderQuestions()
    setTimeout(() => this.forceUpdate(), 800)
  }

  renderQuestions() {
    let output = []
    for (let i = 1; i < (this.props.numberOfQuestions + 1); i++) {
      let questionId = i
      let questionActive = parseFloat(this.props.question.id) === questionId ? ' QuestionActive' : ''
      output.push(
        <div className='AQOverviewBox' key={i} onClick={() => { this.props.handleQuestionSelected(questionId) }}>
          <div className='AQOverviewBoxInner'>
            <div className={'AQOverviewBoxInnerInner' + questionActive}>
              {questionId}
            </div>
          </div>
        </div>
      )
    }
    return output
  }

  render () {
    return (
      <div className="OverviewContainer">
        <div className="AQOvContainer">
          <div className="AQOvBodyContainer">
            <div className="AQOvBody">
              {this.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AQOverview
