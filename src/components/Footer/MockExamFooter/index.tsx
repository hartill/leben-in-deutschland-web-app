import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { NextButton, ResetButton } from '../styles'
import { theme } from '../../../theme'

interface IMockExamFooter {
  viewProgress: Boolean
  examCompleted: Boolean
  restart: Function
  showAnswer: Boolean
  examProgress: any
  numberOfQuestions: number
  nextQuestion: Function
}

const MockExamFooter: React.FC<IMockExamFooter> = ({ viewProgress, examCompleted, restart, showAnswer, examProgress, numberOfQuestions, nextQuestion }) => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleCloseAndRestart = () => {
    closeModal()
    restart()
  }

  let buttonMarkup = []
  if (viewProgress || examCompleted) {
    buttonMarkup.push(
      <ResetButton onClick={() => openModal()} key={'jhofshjio'}>
        Neustart?
      </ResetButton>
    )
  } else if (showAnswer) {
    buttonMarkup.push(
      <NextButton onClick={() => nextQuestion()} key={'1283'}>
        <ForwardArrowIcon />
      </NextButton>
    )
  } else {
    buttonMarkup.push(
      <NextButton className="innactive" key={'ffsfdfdd'}>
        <ForwardArrowIcon />
      </NextButton>
    )
  }

  return (
    <FooterContainer>
      <ProgressBar progressLength={examProgress.length} totalNumberOfQuestions={numberOfQuestions} progressColor={theme.colors.blue} key={'72873'}/>
      {buttonMarkup}
      <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} key={'4498'} />
    </FooterContainer>
  )
}

export default MockExamFooter
