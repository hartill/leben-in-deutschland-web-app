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
          <ModalTitle>{title}</ModalTitle>
          <ConfirmationButtonContainer>
            <ConfirmationButton onClick={() => onConfirm()} style={{ marginRight: '12px' }}>
              Ja
            </ConfirmationButton>
            <ConfirmationButton onClick={() => onClose()}>Nein</ConfirmationButton>
          </ConfirmationButtonContainer>
        </ModalContainer>
      </Backdrop>
    </>
  )
}

export default Modal
