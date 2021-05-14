import React from 'react'
import { Backdrop, ModalContainer, ConfirmationButton, ConfirmationButtonContainer, ModalTitle } from './styles'

function Modal({ isOpen, onClose, title, onConfirm }) {
  const close = (e) => {
    e.preventDefault()

    if (onClose) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <Backdrop onClick={(e) => close(e)}>
        <ModalContainer>
          <ModalTitle key={'80jjj'}>{title}</ModalTitle>
          <ConfirmationButtonContainer>
            <ConfirmationButton onClick={() => onConfirm()} style={{ marginRight: '12px' }} key={'80984'}>
              Ja
            </ConfirmationButton>
            <ConfirmationButton onClick={() => onClose()} key={'8ufhhfjkh'}>Nein</ConfirmationButton>
          </ConfirmationButtonContainer>
        </ModalContainer>
      </Backdrop>
    </>
  )
}

export default Modal
