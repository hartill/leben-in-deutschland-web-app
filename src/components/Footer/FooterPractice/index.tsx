import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from './../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { NextButton, ResetButton } from '../styles'
import { theme } from '../../../theme'

interface IFooterPractice {
  viewProgress: Boolean
  completed: Boolean
  showAnswer: Boolean
  nextQuestion: Function
  displayAnswers: Function
  progress: any
  numberOfQuestions: number
  restart: Function
}

const FooterPractice: React.FC<IFooterPractice> = ({
  viewProgress,
  completed,
  showAnswer,
  nextQuestion,
  displayAnswers,
  progress,
  numberOfQuestions,
  restart,
}) => {
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
        <ResetButton onClick={() => openModal()} key={'744'}>
          <span key={'jjkhkh'}>Neustart?</span>
        </ResetButton>
      )
    } else if (showAnswer) {
      output.push(
        <NextButton onClick={() => nextQuestion()} key={'3838'}>
          <ForwardArrowIcon />
        </NextButton>
      )
    } else {
      output.push(
        <NextButton onClick={() => displayAnswers()} key={'7467648'}>
          <p>Ich weiß nicht</p>
        </NextButton>
      )
    }
    return output
  }

  return (
    <FooterContainer key={'3404'}>
      <ProgressBar progress={progress} numberOfQuestions={numberOfQuestions} key={'74472'} progressColor={theme.colors.green} />
      {renderButton()}
      <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} key={'8488'} />
    </FooterContainer>
  )
}

export default FooterPractice
