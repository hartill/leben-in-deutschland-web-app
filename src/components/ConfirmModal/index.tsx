import React from 'react'
import { Backdrop, ModalContainer, ConfirmationButton, ConfirmationButtonContainer, ModalTitle } from './styles'

interface IConfirmModal {
  isOpen: Boolean
  onClose: Function
  title: String
  onConfirm: Function
}

const ConfirmModal: React.FC<IConfirmModal> = ({ isOpen, onClose, title, onConfirm }) => {
  if (!isOpen) return null

  return (
    <Backdrop onClick={(e) => onClose()}>
      <ModalContainer>
        <ModalTitle key={'80jjj'}>{title}</ModalTitle>
        <ConfirmationButtonContainer key={'3404'}>
          <ConfirmationButton onClick={() => onConfirm()} style={{ marginRight: '12px' }} key={'80984'}>
            Ja
          </ConfirmationButton>
          <ConfirmationButton onClick={() => onClose()} key={'8ufhhfjkh'}>
            Nein
          </ConfirmationButton>
        </ConfirmationButtonContainer>
      </ModalContainer>
    </Backdrop>
  )
}

export default ConfirmModal
