import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { ExamNextButton, ExamResetButton } from './styles'

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
          <ExamResetButton onClick={() => openModal()} key={80984}>
            Neustart?
          </ExamResetButton>
          <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} />
        </>
      )
    } else if (showAnswer) {
      output.push(
        <ExamNextButton onClick={nextQuestion} key={1283}>
          <ForwardArrowIcon />
        </ExamNextButton>
      )
    } else {
      output.push(
        <ExamNextButton className="innactive" key={1209}>
          <ForwardArrowIcon />
        </ExamNextButton>
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
