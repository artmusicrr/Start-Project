import styled from 'styled-components';

export const WeatherDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.main};
  }
`;

export const WeatherDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const WeatherDetailItem = styled.div`
  background-color: ${props =>
    props.theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'};
  border-radius: 8px;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props =>
      props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

export const WeatherLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: ${props => (props.theme.isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)')};
  margin-bottom: 4px;
`;

export const WeatherValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props =>
    props.theme.isDark ? props.theme.tokens.colors.text.main : props.theme.tokens.colors.text.main};
`;
