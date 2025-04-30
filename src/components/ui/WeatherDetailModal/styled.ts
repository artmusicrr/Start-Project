import styled from 'styled-components';

// Adicionando export vazio para garantir que o arquivo seja tratado como módulo
export {};

export const WeatherDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const WeatherIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  gap: 15px;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid
    ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 0;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    color: ${props =>
      props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.primary_new.base.main};
  }
`;

export const WeatherDetailSection = styled.div`
  margin-bottom: 0.7rem;
`;

export const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${props =>
    props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.primary_new.base.main};
  border-bottom: 1px solid
    ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  padding-bottom: 0.3rem;
`;

export const WeatherDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WeatherDetailItem = styled.div`
  background-color: ${props =>
    props.theme.isDark ? 'rgba(30, 30, 40, 0.7)' : 'rgba(0, 0, 0, 0.03)'};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;
  height: 100%;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: ${props =>
      props.theme.isDark ? 'rgba(50, 50, 80, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export const WeatherLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${props => (props.theme.isDark ? '#DDE4F0' : 'rgba(0, 0, 0, 0.6)')};
  margin-bottom: 3px;
`;

export const WeatherValue = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${props => (props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.text.main)};
  overflow-wrap: break-word;
  word-break: break-word;
  text-align: center;
`;
