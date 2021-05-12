import React from 'react'
import UserProgressBar from './../Quiz/UserProgressBar'
import './footer.css'
import Modal from './../Modal'
import { ReactComponent as ForwardArrowIcon } from './../../svg/forwards-arrow.svg'

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isModalOpen: false
    }
    this.renderButton = this.renderButton.bind(this)
    this.handleCloseAndRestart = this.handleCloseAndRestart.bind(this)
  }

  handleCloseAndRestart() {
    this.closeModal()
    this.props.restart()
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  renderButton() {
    let output=[]
    if ((this.props.viewProgress) || (this.props.completed)) {
      output.push(
        <div className='ExamResetButton' key='1113'>
          <button className='ResetButton' onClick={() => this.openModal()}>
            Neustart?
          </button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <p>Neustart?</p>
            <div className='confirmationButtons'>
              <button onClick={() => this.handleCloseAndRestart()}>Ja</button>
              <button onClick={() => this.closeModal()}>Nein</button>
            </div>
          </Modal>
        </div>
      )
    } else if (this.props.showAnswer) {
      output.push(
        <button className='NextButton' onClick={this.props.nextQuestion} key='2113'>
          <ForwardArrowIcon />
        </button>
      )
    } else {
      output.push(
        <button className='NextButton' onClick={this.props.displayAnswers} key='3113'>
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
