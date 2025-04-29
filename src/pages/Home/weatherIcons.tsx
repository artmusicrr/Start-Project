import React from 'react';

// Componente de ícone com emojis para previsão do tempo
export const WeatherIconSimple: React.FC<{ weatherId: number; isNight: boolean }> = ({
  weatherId,
  isNight,
}) => {
  let emoji = '☁️'; // Padrão nublado

  if (weatherId >= 200 && weatherId < 300) {
    emoji = '⛈️'; // Tempestade
  } else if (weatherId >= 300 && weatherId < 400) {
    emoji = '🌦️'; // Chuvisco
  } else if (weatherId >= 500 && weatherId < 600) {
    emoji = '🌧️'; // Chuva
  } else if (weatherId >= 600 && weatherId < 700) {
    emoji = '❄️'; // Neve
  } else if (weatherId >= 700 && weatherId < 800) {
    emoji = '🌫️'; // Névoa
  } else if (weatherId === 800) {
    emoji = isNight ? '🌙' : '☀️'; // Céu limpo (dia/noite)
  } else if (weatherId === 801) {
    emoji = isNight ? '🌙☁️' : '🌤️'; // Parcialmente nublado (dia/noite)
  } else if (weatherId > 801 && weatherId < 900) {
    emoji = '☁️'; // Nublado
  }

  return (
    <div
      style={{
        fontSize: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        backdropFilter: 'blur(5px)',
        padding: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {emoji}
    </div>
  );
};
