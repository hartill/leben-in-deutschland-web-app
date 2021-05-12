import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Modal from '../Modal'
import { ReactComponent as ForwardArrowIcon } from './../../svg/forwards-arrow.svg'
import { FooterContainer } from '../layout'
import { NextButton, ResetButton } from './styles'

export function Footer({ viewProgress, completed, showAnswer, nextQuestion, displayAnswers, progress, numberOfQuestions, restart }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCloseAndRestart = () => {
    closeModal()
    restart()
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const renderButton = () => {
    let output = []
    if (viewProgress || completed) {
      output.push(
        <div className="ExamResetButton" key="1113">
          <ResetButton onClick={() => openModal()}>Neustart?</ResetButton>
          <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
            <p>Neustart?</p>
            <div className="confirmationButtons">
              <button onClick={() => handleCloseAndRestart()}>Ja</button>
              <button onClick={() => closeModal()}>Nein</button>
            </div>
          </Modal>
        </div>
      )
    } else if (showAnswer) {
      output.push(
        <NextButton onClick={nextQuestion} key="2113">
          <ForwardArrowIcon />
        </NextButton>
      )
    } else {
      output.push(
        <NextButton onClick={displayAnswers} key="3113">
          <p>Ich weiß nicht</p>
        </NextButton>
      )
    }
    return output
  }

  return (
    <FooterContainer>
      <ProgressBar progress={progress} numberOfQuestions={numberOfQuestions} />
      {renderButton()}
    </FooterContainer>
  )
}

export default Footer
