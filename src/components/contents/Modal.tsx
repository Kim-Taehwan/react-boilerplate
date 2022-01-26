import React from 'react'
import BSModal, { ModalProps } from 'react-bootstrap/Modal'

// Recommended Usages
// https://react-bootstrap-v4.netlify.app/components/modal/#modals-live

interface Props extends ModalProps {
  show: boolean
  title?: React.ReactNode
  closeText?: string
  confirmText?: string
  onClose: () => void
  onConfirm?: () => void
  children: React.ReactNode
}

function Modal({ show, title, children, closeText, confirmText, onClose, onConfirm, ...rest }: Props) {
  function handleConfirm() {
    if (onConfirm) onConfirm()
    onClose()
  }

  return (
    <BSModal show={show} onHide={onClose} {...rest}>
      {title && (
        <BSModal.Header closeButton>
          <BSModal.Title>{title}</BSModal.Title>
        </BSModal.Header>
      )}
      <BSModal.Body>{children}</BSModal.Body>
      {(onClose || onConfirm) && (
        <BSModal.Footer className="justify-content-center">
          <button className="btn btn-outline-secondary" onClick={onClose}>
            {closeText || '닫기'}
          </button>
          <button className="btn btn-primary" onClick={handleConfirm}>
            {confirmText || '확인'}
          </button>
        </BSModal.Footer>
      )}
    </BSModal>
  )
}

export default Modal
