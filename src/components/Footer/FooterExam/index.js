import React, { useState } from 'react'
import ProgressBar from '../ProgressBar'
import ConfirmModal from '../../ConfirmModal'
import { ReactComponent as ForwardArrowIcon } from '../../../svg/forwards-arrow.svg'
import { FooterContainer } from '../../layout'
import { NextButton, ResetButton } from '../styles'
import { theme } from '../../../theme'

function Footer({ viewProgress, examCompleted, restart, showAnswer, examProgress, numberOfQuestions, nextQuestion }) {
  const [isModalOpen, setIsModalOpen] = useState(null)

  const handleCloseAndRestart = () => {
    closeModal()
    restart()
  }

  let buttonMarkup = []
  if (viewProgress || examCompleted) {
    buttonMarkup.push(
      <>
        <ResetButton onClick={() => openModal()} key={'jhofshjio'}>
          Neustart?
        </ResetButton>
        <ConfirmModal title="Neustart?" isOpen={isModalOpen} onClose={() => closeModal()} onConfirm={handleCloseAndRestart} key={'4498'} />
      </>
    )
  } else if (showAnswer) {
    buttonMarkup.push(
      <NextButton onClick={nextQuestion} key={'1283'}>
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

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <FooterContainer>
      <ProgressBar progress={examProgress} numberOfQuestions={numberOfQuestions} key={'72873'} progressColor={theme.colors.blue}/>
      {buttonMarkup}
    </FooterContainer>
  )
}

export default Footer
