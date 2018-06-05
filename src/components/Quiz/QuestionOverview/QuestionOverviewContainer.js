import React from 'react'
import './QuestionOverview.css'
import QuestionOverviewBox from './QuestionOverviewBox'

class QuestionOverviewContainer extends React.Component {
  constructor(props){
    super(props)
    this.content = null
    this.renderUserProgress = this.renderUserProgress.bind(this)
  }

  componentWillMount(){
    this.content = (
      <div className='loadingContainer'>
        <div className='loading'>
          <img className='loadingSVG' src ={require("./../../../static/icons/loadingIcon.svg")} alt='loading' />
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.content = this.renderUserProgress()
    setTimeout(() => this.forceUpdate(), 1000)
  }

  renderUserProgress() {
    let output = []
    for (let i = 1; i < (this.props.numberOfQuestions + 1); i++) {
      output.push(<QuestionOverviewBox i={i} progress={this.props.progress} incorrect={this.props.incorrect} key={i} />)
    }
    return output
  }

  render () {
    return (
      <div className="OverviewContainer">
        <div className="QuOvContainer">
          <div className="QuOvBodyContainer">
            <div className="QuOvBody">
              {this.content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverviewContainer
