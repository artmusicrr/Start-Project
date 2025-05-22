import styled from 'styled-components';

export const PageOneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  border: 1px solid
    ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.primary_new.surface.disabled
        : props.theme.tokens.colors.primary_new.surface.main};

  background-color: ${props =>
    props.theme.isDark
      ? props.theme.tokens.colors.primary_new.base.dark
      : props.theme.tokens.colors.primary_new.base.contrast};
  color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.text.main : props.theme.tokens.colors.text.main};
  padding: 25px;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 0 4px 12px ${props => (props.theme.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)')};
  h1 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.main};
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.text.secondary
        : props.theme.tokens.colors.text.secondary};
    line-height: 1.5;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.primary_new.surface.main : '#fff'};
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  max-width: 900px;
  margin: 20px 0;
  background-color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.primary_new.surface.main : '#fff'};
  border-radius: 10px;
  box-shadow: 0 4px 12px ${props => (props.theme.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)')};
  overflow: hidden;
`;

export const NewsImage = styled.img`
  width: 200px;
  height: 140px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const NewsContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.text.main
        : props.theme.tokens.colors.text.main};
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.text.secondary
        : props.theme.tokens.colors.text.secondary};
  }

  small {
    font-size: 0.8rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.text.disabled
        : props.theme.tokens.colors.text.disabled};
  }

  a {
    margin-top: auto;
    font-size: 0.9rem;
    color: ${props => props.theme.tokens.colors.secondary_new.base.main};
    text-decoration: underline;
  }
`;
