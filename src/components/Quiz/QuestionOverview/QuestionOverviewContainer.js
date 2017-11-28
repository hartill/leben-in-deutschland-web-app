import React from 'react'
import './QuestionOverview.css'
import QuestionOverview from './QuestionOverview'

class QuestionOverviewContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleLoaded = this.handleLoaded.bind(this)
    this.state = {
      loading: true
    }
  }

  handleLoaded(){
    this.setState({
      loading: false
    })
  }

  render () {
    let loading = (
      <div className='loading'>
        <img className='loadingSVG' src ={require("./../../../static/icons/loading.svg")} alt='loading' />
      </div>
    )
    return (
      <div className="OverviewContainer">
        <div className="QuOvContainer">
          <div className="QuOvBodyContainer">
            <div className="QuOvBody">
              {this.state.loading ? loading : null}
              <QuestionOverview
                loading={this.state.loading}
                handleLoaded={this.handleLoaded}
                progress={this.props.progress}
                incorrect={this.props.incorrect}
                numberOfQuestions={this.props.numberOfQuestions}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionOverviewContainer
