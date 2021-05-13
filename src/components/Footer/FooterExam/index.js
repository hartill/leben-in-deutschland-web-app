import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { NextButton, ResetButton } from '../styles'

function Footer({ viewProgress, examCompleted, restart, showAnswer, examProgress, numberOfQuestions, nextQuestion }) {
  const [isModalOpen, setIsModalOpen] = useState(null)

  const handleCloseAndRestart = () => {
    closeModal()
    restart()
  }

  const renderButton = () => {
    let output = []
    if (viewProgress || examCompleted) {
      output.push(
        <>
          <ResetButton onClick={() => openModal()} key={80984}>
            Neustart?
          </ResetButton>
          <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} />
        </>
      )
    } else if (showAnswer) {
      output.push(
        <NextButton onClick={nextQuestion} key={1283}>
          <ForwardArrowIcon />
        </NextButton>
      )
    } else {
      output.push(
        <NextButton className="innactive" key={1209}>
          <ForwardArrowIcon />
        </NextButton>
      )
    }
    return output
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <FooterContainer>
      <ProgressBar progress={examProgress} numberOfQuestions={numberOfQuestions} key={72873} />
      {renderButton()}
    </FooterContainer>
  )
}

export default Footer
