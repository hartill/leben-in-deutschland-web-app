import React from 'react'
import UserProgressBar from './../Quiz/UserProgressBar'
import './footer.css'

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    let output=[]
    if ((this.props.viewProgress) || (this.props.completed)) {
      output.push(
        <button className='ResetButton' onClick={this.props.restart} key='13'>
          Neustart?
        </button>
      )
    } else if (this.props.showAnswer) {
      output.push(
        <button className='NextButton' onClick={this.props.nextQuestion} key='23'>
          <img src ={require("./../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </button>
      )
    } else {
      output.push(
        <button className='NextButton' onClick={this.props.displayAnswers} key='33'>
          <p>Ich weiß nicht</p>
        </button>
      )
    }
    return output
  }

  render () {
    return (
      <div className="Footer">
        <UserProgressBar progress={this.props.progress} numberOfQuestions={this.props.numberOfQuestions} />
        {this.renderButton()}
      </div>
    )
  }
}

export default Footer
