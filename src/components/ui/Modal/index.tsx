import React from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Fecha o modal apenas se o clique foi no overlay (e não no conteúdo do modal)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Impede que o ESC feche o modal
  React.useEffect(() => {
    const handleEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'hidden'; // Previne rolagem do body quando modal está aberto
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto'; // Restaura a rolagem quando modal fecha
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
