import styled from 'styled-components';

export const WeatherDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const WeatherIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    width: 100px;
    height: 100px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0;
    color: ${props =>
      props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.primary_new.base.main};
  }
`;

export const WeatherDetailSection = styled.div`
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${props =>
    props.theme.isDark
      ? props.theme.tokens.colors.secondary_new.base.main
      : props.theme.tokens.colors.primary_new.base.main};
  border-bottom: 1px solid
    ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
  padding-bottom: 0.5rem;
`;

export const WeatherDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WeatherDetailItem = styled.div`
  background-color: ${props =>
    props.theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;
  height: 100%;
  min-height: 85px;
  justify-content: center;

  &:hover {
    background-color: ${props =>
      props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export const WeatherLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.85rem;
  color: ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)')};
  margin-bottom: 3px;
`;

export const WeatherValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => (props.theme.isDark ? '#DDE4F0' : props.theme.tokens.colors.text.main)};
  overflow-wrap: break-word;
  word-break: break-word;
`;
