import React from 'react'
import ExamUserProgress from './../ExamUserProgress/'
import './examFooter.css'
import Modal from './../../../components/Modal'
import { ReactComponent as ForwardArrowIcon } from './../../../svg/forwards-arrow.svg'

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

  renderButton() {
    let output=[]
    if ((this.props.viewProgress) || (this.props.examCompleted)) {
      output.push(
        <div className='ExamResetButton' key='100'>
          <button className='ExamResetButton' onClick={() => this.openModal()}>
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
        <button className='ExamNextButton' onClick={this.props.nextQuestion} key='200'>
          <ForwardArrowIcon />
        </button>
      )
    } else {
      output.push(
        <div className ='Deactive' key='300'>
          <ForwardArrowIcon />
        </div>
      )
    }
    return output
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
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
