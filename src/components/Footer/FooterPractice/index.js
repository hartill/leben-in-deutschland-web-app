import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from './../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
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
        <>
          <ResetButton onClick={() => openModal()}>Neustart?</ResetButton>
          <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} />
        </>
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
