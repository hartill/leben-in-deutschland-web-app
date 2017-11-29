import React from 'react'
import ExamUserProgress from './../ExamUserProgress/'
import './examFooter.css';

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    let output=[]
    if ((this.props.viewProgress) || (this.props.examCompleted)) {
      output.push(
        <button className='ExamResetButton' onClick={this.props.restart} key='100'>
          Neustart?
        </button>
      )
    } else if (this.props.showAnswer) {
      output.push(
        <button className='ExamNextButton' onClick={this.props.nextQuestion} key='200'>
          <img src ={require("./../../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </button>
      )
    } else {
      output.push(
        <div className ='Deactive' key='300'>
          <img src ={require("./../../../static/icons/next-qu-icon.svg")} alt='next-question' />
        </div>
      )
    }
    return output
  }

  render () {
    return (
      <div className="Footer">
        <ExamUserProgress examProgress={this.props.examProgress} numberOfQuestions={this.props.numberOfQuestions} />
        {this.renderButton()}
      </div>
    )
  }
}

export default Footer
