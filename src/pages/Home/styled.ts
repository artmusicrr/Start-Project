import styled from 'styled-components';

export const HomeContainer = styled.div`
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
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.main};
    font-weight: bold;
    text-shadow: ${props =>
      props.theme.isDark
        ? '0 2px 10px rgba(130, 207, 255, 0.3)'
        : '0 2px 10px rgba(43, 108, 223, 0.2)'};
    position: relative;
    display: inline-block;

    &:after {
      content: '🌡️';
      font-size: 1.8rem;
      position: absolute;
      bottom: 8px;
      margin-left: 10px;
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.text.secondary
        : props.theme.tokens.colors.text.secondary};
    line-height: 1.5;

    strong {
      background: ${props =>
        props.theme.isDark
          ? 'linear-gradient(45deg, #e9c46a, #f4a261)'
          : 'linear-gradient(45deg, #e76f51, #f4a261)'};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
      font-size: 1.3rem;
    }
  }
`;

export const WeatherCardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  padding: 15px 5px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

// Interface para as propriedades de WeatherCard
interface WeatherCardProps {
  weatherId?: number;
  isNight?: boolean;
}

export const WeatherCard = styled.li<WeatherCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  border-radius: 18px;
  width: 180px;
  background-color: ${props => {
    const isDark = props.theme.isDark;
    const weatherId = props.weatherId || 0;
    const isNight = props.isNight || false;

    // Cores de fundo baseadas no tipo de clima
    if (weatherId >= 200 && weatherId < 300) {
      // Tempestade
      return isDark ? 'rgba(74, 35, 90, 0.7)' : 'rgba(155, 89, 182, 0.15)';
    } else if (weatherId >= 300 && weatherId < 600) {
      // Chuva/Chuvisco
      return isDark ? 'rgba(28, 40, 51, 0.7)' : 'rgba(52, 152, 219, 0.15)';
    } else if (weatherId >= 600 && weatherId < 700) {
      // Neve
      return isDark ? 'rgba(30, 30, 40, 0.7)' : 'rgba(236, 240, 241, 0.5)';
    } else if (weatherId >= 700 && weatherId < 800) {
      // Névoa
      return isDark ? 'rgba(30, 30, 40, 0.7)' : 'rgba(189, 195, 199, 0.3)';
    } else if (weatherId === 800) {
      // Céu limpo
      return isNight
        ? isDark
          ? 'rgba(30, 39, 46, 0.7)'
          : 'rgba(44, 62, 80, 0.15)' // Noite
        : isDark
          ? 'rgba(40, 34, 0, 0.7)'
          : 'rgba(241, 196, 15, 0.15)'; // Dia
    } else {
      // Nublado
      return isDark ? 'rgba(30, 30, 40, 0.7)' : 'rgba(149, 165, 166, 0.2)';
    }
  }};
  box-shadow: 0 3px 10px ${props => (props.theme.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)')};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(7px);
  border-top: 4px solid
    ${props => {
      const weatherId = props.weatherId || 0;
      const isNight = props.isNight || false;

      // Cores da borda baseada no tipo de clima
      if (weatherId >= 200 && weatherId < 300) {
        // Tempestade
        return '#9B59B6';
      } else if (weatherId >= 300 && weatherId < 600) {
        // Chuva/Chuvisco
        return '#3498DB';
      } else if (weatherId >= 600 && weatherId < 700) {
        // Neve
        return '#ECF0F1';
      } else if (weatherId >= 700 && weatherId < 800) {
        // Névoa
        return '#BDC3C7';
      } else if (weatherId === 800) {
        // Céu limpo
        return isNight ? '#F5F5F5' : '#F39C12';
      } else {
        // Nublado
        return '#95A5A6';
      }
    }};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.theme.isDark
        ? 'linear-gradient(45deg, rgba(50, 50, 80, 0.1), transparent)'
        : 'linear-gradient(45deg, rgba(255, 255, 255, 0.4), transparent)'};
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px
      ${props => (props.theme.isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.15)')};
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

export const WeatherIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    transform: scale(1.1);
    filter: saturate(1.2);
    will-change: transform, filter, color;
    transition:
      transform 0.3s ease,
      filter 0.3s ease,
      color 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
    filter: saturate(1.4);
  }
`;

// Interface para as propriedades de WeatherInfo
interface WeatherInfoProps {
  weatherId?: number;
  isNight?: boolean;
}

export const WeatherInfo = styled.div<WeatherInfoProps>`
  flex: 1;

  .day {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
    text-transform: capitalize;
    color: ${props =>
      props.theme.isDark
        ? props.theme.tokens.colors.secondary_new.base.main
        : props.theme.tokens.colors.primary_new.base.dark};
    letter-spacing: 0.5px;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .temp {
      font-size: 1.6rem;
      font-weight: bold;
      background: ${props => {
        const weatherId = props.weatherId || 0;
        const isNight = props.isNight || false;
        const isDark = props.theme.isDark;

        // Gradientes baseados no tipo de clima
        if (weatherId >= 200 && weatherId < 300) {
          // Tempestade - roxo para lilás
          return isDark
            ? 'linear-gradient(45deg, #8e44ad, #9b59b6)'
            : 'linear-gradient(45deg, #8e44ad, #9b59b6)';
        } else if (weatherId >= 300 && weatherId < 600) {
          // Chuva - azul escuro para azul claro
          return isDark
            ? 'linear-gradient(45deg, #2980b9, #3498db)'
            : 'linear-gradient(45deg, #2980b9, #3498db)';
        } else if (weatherId >= 600 && weatherId < 700) {
          // Neve - azul claro para branco
          return isDark
            ? 'linear-gradient(45deg, #a5b1c2, #d1d8e0)'
            : 'linear-gradient(45deg, #a5b1c2, #d1d8e0)';
        } else if (weatherId >= 700 && weatherId < 800) {
          // Névoa - cinza claro para quase branco
          return isDark
            ? 'linear-gradient(45deg, #7f8c8d, #95a5a6)'
            : 'linear-gradient(45deg, #7f8c8d, #95a5a6)';
        } else if (weatherId === 800) {
          // Céu limpo
          return isNight
            ? isDark // Noite - azul escuro para azul claro
              ? 'linear-gradient(45deg, #2c3e50, #34495e)'
              : 'linear-gradient(45deg, #2c3e50, #34495e)'
            : isDark // Dia - amarelo para laranja
              ? 'linear-gradient(45deg, #f39c12, #f1c40f)'
              : 'linear-gradient(45deg, #f39c12, #f1c40f)';
        }

        // Nublado (default) - cinza para azul acinzentado
        return isDark
          ? 'linear-gradient(45deg, #76b0e3, #81c7f5)'
          : 'linear-gradient(45deg, #2d6cdf, #4f95eb)';
      }};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: ${props =>
        props.theme.isDark
          ? '0 2px 10px rgba(130, 207, 255, 0.3)'
          : '0 2px 10px rgba(43, 108, 223, 0.3)'};
    }

    .condition {
      font-size: 1rem;
      font-weight: 500;
      color: ${props =>
        props.theme.isDark
          ? props.theme.tokens.colors.text.main
          : props.theme.tokens.colors.text.secondary};
      text-transform: capitalize;
      padding: 4px 10px;
      border-radius: 20px;
      background-color: ${props => {
        const weatherId = props.weatherId || 0;
        const isNight = props.isNight || false;
        const isDark = props.theme.isDark;

        // Cores de fundo personalizadas baseadas no tipo de clima
        if (weatherId >= 200 && weatherId < 300) {
          // Tempestade
          return isDark ? 'rgba(155, 89, 182, 0.2)' : 'rgba(155, 89, 182, 0.1)';
        } else if (weatherId >= 300 && weatherId < 600) {
          // Chuva/Chuvisco
          return isDark ? 'rgba(52, 152, 219, 0.2)' : 'rgba(52, 152, 219, 0.1)';
        } else if (weatherId >= 600 && weatherId < 700) {
          // Neve
          return isDark ? 'rgba(236, 240, 241, 0.2)' : 'rgba(236, 240, 241, 0.3)';
        } else if (weatherId >= 700 && weatherId < 800) {
          // Névoa
          return isDark ? 'rgba(189, 195, 199, 0.2)' : 'rgba(189, 195, 199, 0.2)';
        } else if (weatherId === 800) {
          // Céu limpo
          return isNight
            ? isDark
              ? 'rgba(245, 245, 245, 0.15)'
              : 'rgba(44, 62, 80, 0.1)' // Noite
            : isDark
              ? 'rgba(243, 156, 18, 0.2)'
              : 'rgba(243, 156, 18, 0.1)'; // Dia
        }

        // Nublado (default)
        return isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
      }};
      backdrop-filter: blur(4px);
    }
  }
`;
