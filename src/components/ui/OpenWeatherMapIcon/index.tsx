import React from 'react';

// Função para obter o ícone do clima a partir do código do OpenWeatherMap
export const getWeatherIconUrl = (iconCode: string): string => {
  // Constrói a URL do ícone usando HTTPS para evitar problemas de mixed content
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

interface WeatherIconProps {
  weatherId: number;
  iconCode: string;
  size?: number;
}

// Componente para exibir o ícone do clima
const OpenWeatherMapIcon: React.FC<WeatherIconProps> = ({ weatherId, iconCode, size = 64 }) => {
  const iconUrl = getWeatherIconUrl(iconCode);

  // Estilos base para a imagem
  const imgStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    transition: 'all 0.3s ease',
  };

  // Determina o efeito de sombra baseado no tipo de clima
  let shadowColor = 'rgba(0, 0, 0, 0.2)';
  let shadowSize = '5px';

  if (weatherId >= 200 && weatherId < 300) {
    // Tempestade
    shadowColor = 'rgba(155, 89, 182, 0.8)';
    shadowSize = '8px';
  } else if (weatherId >= 300 && weatherId < 600) {
    // Chuva/Chuvisco
    shadowColor = 'rgba(41, 128, 185, 0.7)';
    shadowSize = '7px';
  } else if (weatherId >= 600 && weatherId < 700) {
    // Neve
    shadowColor = 'rgba(236, 240, 241, 0.7)';
    shadowSize = '7px';
  } else if (weatherId >= 700 && weatherId < 800) {
    // Névoa
    shadowColor = 'rgba(189, 195, 199, 0.6)';
    shadowSize = '5px';
  } else if (weatherId === 800) {
    // Céu limpo
    if (iconCode.includes('n')) {
      // Noite
      shadowColor = 'rgba(245, 245, 245, 0.6)';
      shadowSize = '7px';
    } else {
      // Dia
      shadowColor = 'rgba(243, 156, 18, 0.8)';
      shadowSize = '10px';
    }
  } else {
    // Nublado
    shadowColor = 'rgba(149, 165, 166, 0.5)';
    shadowSize = '5px';
  }

  imgStyle.filter = `drop-shadow(0 0 ${shadowSize} ${shadowColor})`;

  return (
    <img
      src={iconUrl}
      alt="Ícone do tempo"
      style={imgStyle}
      onError={e => {
        // Fallback para caso a imagem não carregue
        e.currentTarget.src =
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill="currentColor" d="M7.95 11.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7z"/></svg>';
        e.currentTarget.style.opacity = '0.7';
      }}
    />
  );
};

export default OpenWeatherMapIcon;
