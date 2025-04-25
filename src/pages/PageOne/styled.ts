import styled from 'styled-components';

export const PageOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 120px);
   border: 1px solid ${props => props.theme.isDark
    ? props.theme.tokens.colors.primary_new.surface.disabled
    : props.theme.tokens.colors.primary_new.surface.main};

  background-color: ${props => props.theme.isDark 
    ? props.theme.tokens.colors.primary_new.base.dark
    : props.theme.tokens.colors.primary_new.base.contrast};
   color: ${props => props.theme.isDark 
    ? props.theme.tokens.colors.text.main
    : props.theme.tokens.colors.text.main};
  padding: 25px;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 0 4px 12px ${props => props.theme.isDark 
    ? 'rgba(0,0,0,0.4)' 
    : 'rgba(0,0,0,0.1)'};
    h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${props => props.theme.isDark 
      ? props.theme.tokens.colors.secondary_new.base.main 
      : props.theme.tokens.colors.primary_new.base.main};
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    text-align: center;
    color: ${props => props.theme.isDark 
      ? props.theme.tokens.colors.text.secondary 
      : props.theme.tokens.colors.text.secondary};
    line-height: 1.5;
  }
    `;