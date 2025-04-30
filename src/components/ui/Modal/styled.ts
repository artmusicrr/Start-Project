import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContainer = styled.div`
  background-color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.primary_new.surface.main : '#FFFFFF'};
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease-out;
  position: relative;
`;

export const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid
    ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: ${props => (props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.text.main)};
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
  transition: color 0.2s;

  &:hover {
    color: ${props => (props.theme.isDark ? '#FFFFFF' : '#000000')};
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
  color: ${props => (props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.text.main)};
  font-size: 1rem;
  line-height: 1.5;
`;

export const ModalFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid
    ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
