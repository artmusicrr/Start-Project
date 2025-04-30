import React from 'react';
import Modal from '../Modal';
import {
  WeatherDetailContainer,
  WeatherDetailGrid,
  WeatherDetailItem,
  WeatherIconContainer,
  WeatherLabel,
  WeatherValue,
  WeatherDetailSection,
  SectionTitle,
} from './styled';
import { Icon } from '@iconify/react';
import { useTheme } from '../../../contexts/ThemeContext';
import { WeatherDetailModalProps } from './types';

const WeatherDetailModal: React.FC<WeatherDetailModalProps> = ({
  isOpen,
  onClose,
  weatherData,
}) => {
  // Obtém o tema atual do contexto usando o hook useTheme
  const { themeMode } = useTheme();
  const isDarkMode = themeMode === 'dark';

  if (!weatherData) return null;

  // Formatação da data e hora
  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Base URL para os ícones de clima do OpenWeatherMap (usando HTTPS)
  const weatherIconBaseUrl = 'https://openweathermap.org/img/wn/';

  // Converte direção do vento em graus para texto
  const getWindDirection = (deg: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((deg % 360) / 45) % 8;
    return directions[index];
  };

  // Formatação da probabilidade de chuva em porcentagem
  const formatRainProbability = (pop: number): string => {
    return `${Math.round(pop * 100)}%`;
  };

  // Estilo para texto no modo escuro
  const darkTextStyle = isDarkMode ? { color: '#DDE4F0' } : {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Previsão do Tempo - ${formatDateTime(weatherData.dt_txt)}`}
    >
      <WeatherDetailContainer>
        <WeatherIconContainer>
          <img
            src={`${weatherIconBaseUrl}${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            style={{ width: '100px', height: '100px' }}
          />
          <p style={darkTextStyle}>{weatherData.weather[0].description}</p>
        </WeatherIconContainer>

        <WeatherDetailSection>
          <SectionTitle style={darkTextStyle}>Temperatura</SectionTitle>
          <WeatherDetailGrid>
            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:thermometer" width="20" height="20" /> Atual
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {weatherData.main.temp.toFixed(1)}°C
              </WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:thermometer-lines" width="20" height="20" /> Sensação Térmica
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {weatherData.main.feels_like.toFixed(1)}°C
              </WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:thermometer-low" width="20" height="20" /> Mínima/Máxima
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {weatherData.main.temp_min.toFixed(1)}°C / {weatherData.main.temp_max.toFixed(1)}°C
              </WeatherValue>
            </WeatherDetailItem>
          </WeatherDetailGrid>
        </WeatherDetailSection>

        <WeatherDetailSection>
          <SectionTitle style={darkTextStyle}>Condições Atmosféricas</SectionTitle>
          <WeatherDetailGrid>
            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:water-percent" width="20" height="20" /> Umidade
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>{weatherData.main.humidity}%</WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:gauge" width="20" height="20" /> Pressão
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>{weatherData.main.pressure} hPa</WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:cloud-percent" width="20" height="20" /> Cobertura de Nuvens
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>{weatherData.clouds.all}%</WeatherValue>
            </WeatherDetailItem>
          </WeatherDetailGrid>
        </WeatherDetailSection>

        <WeatherDetailSection>
          <SectionTitle style={darkTextStyle}>Vento e Visibilidade</SectionTitle>
          <WeatherDetailGrid>
            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:weather-windy" width="20" height="20" /> Velocidade
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>{weatherData.wind.speed} m/s</WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:compass" width="20" height="20" /> Direção
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {weatherData.wind.deg}° ({getWindDirection(weatherData.wind.deg)})
              </WeatherValue>
            </WeatherDetailItem>

            {weatherData.wind.gust ? (
              <WeatherDetailItem>
                <WeatherLabel style={darkTextStyle}>
                  <Icon icon="mdi:weather-windy-variant" width="20" height="20" /> Rajadas
                </WeatherLabel>
                <WeatherValue style={darkTextStyle}>{weatherData.wind.gust} m/s</WeatherValue>
              </WeatherDetailItem>
            ) : (
              <WeatherDetailItem>
                <WeatherLabel style={darkTextStyle}>
                  <Icon icon="mdi:eye" width="20" height="20" /> Visibilidade
                </WeatherLabel>
                <WeatherValue style={darkTextStyle}>
                  {weatherData.visibility / 1000} km
                </WeatherValue>
              </WeatherDetailItem>
            )}
          </WeatherDetailGrid>
        </WeatherDetailSection>

        <WeatherDetailSection>
          <SectionTitle style={darkTextStyle}>Precipitação</SectionTitle>
          <WeatherDetailGrid>
            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:weather-pouring" width="20" height="20" /> Probabilidade de Chuva
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {formatRainProbability(weatherData.pop)}
              </WeatherValue>
            </WeatherDetailItem>
          </WeatherDetailGrid>
        </WeatherDetailSection>
      </WeatherDetailContainer>
    </Modal>
  );
};

export default WeatherDetailModal;
