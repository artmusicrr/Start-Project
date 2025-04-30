import styled from 'styled-components';

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconInner = styled.div<{ size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  span {
    font-size: ${props => Math.floor(props.size * 0.8)}px;
    line-height: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// Estilizações específicas para tipos de clima
export const ThunderstormIcon = styled(IconContainer)`
  color: #9b59b6;
  filter: drop-shadow(0 0 5px rgba(155, 89, 182, 0.6));
`;

export const RainIcon = styled(IconContainer)`
  color: #3498db;
  filter: drop-shadow(0 0 5px rgba(52, 152, 219, 0.6));
`;

export const SnowIcon = styled(IconContainer)`
  color: #ecf0f1;
  filter: drop-shadow(0 0 5px rgba(236, 240, 241, 0.7));
`;

export const AtmosphereIcon = styled(IconContainer)`
  color: #bdc3c7;
  filter: drop-shadow(0 0 3px rgba(189, 195, 199, 0.5));
`;

export const ClearDayIcon = styled(IconContainer)`
  color: #f39c12;
  filter: drop-shadow(0 0 6px rgba(243, 156, 18, 0.7));
`;

export const ClearNightIcon = styled(IconContainer)`
  color: #f1c40f;
  filter: drop-shadow(0 0 6px rgba(241, 196, 15, 0.5));
`;

export const CloudsIcon = styled(IconContainer)`
  color: #95a5a6;
  filter: drop-shadow(0 0 4px rgba(149, 165, 166, 0.5));
`;

export const ExtremeIcon = styled(IconContainer)`
  color: #e74c3c;
  filter: drop-shadow(0 0 8px rgba(231, 76, 60, 0.7));
`;
