export const NewsSection = styled.section`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.main};
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-align: left;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;
import styled from 'styled-components';

export const PageOneContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px ${props => (props.theme.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)')};
  background-color: ${props =>
    props.theme.isDark
      ? props.theme.tokens.colors.primary_new.base.dark
      : props.theme.tokens.colors.primary_new.base.contrast};
  color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.text.main : props.theme.tokens.colors.text.main};
  box-sizing: border-box;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.main};
    font-weight: bold;
    text-align: center;
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

export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.primary_new.surface.main : '#fff'};
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.primary_new.surface.main : '#fff'};
  border-radius: 10px;
  box-shadow: 0 4px 12px ${props => (props.theme.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)')};
  overflow: hidden;
  height: 100%;
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
