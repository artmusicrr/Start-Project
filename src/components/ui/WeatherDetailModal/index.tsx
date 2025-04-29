import React from 'react';
import Modal from '../Modal';
import {
  WeatherDetailContainer,
  WeatherDetailGrid,
  WeatherDetailItem,
  WeatherIconContainer,
  WeatherLabel,
  WeatherValue,
} from './styled';
import { Icon } from '@iconify/react';

interface WeatherDetail {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  visibility: number;
  pop: number; // Probabilidade de precipitação
}

interface WeatherDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  weatherData: WeatherDetail | null;
}

const WeatherDetailModal: React.FC<WeatherDetailModalProps> = ({
  isOpen,
  onClose,
  weatherData,
}) => {
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
          <p>{weatherData.weather[0].description}</p>
        </WeatherIconContainer>

        <WeatherDetailGrid>
          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:thermometer" width="20" height="20" /> Temperatura:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.temp.toFixed(1)}°C</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:thermometer-lines" width="20" height="20" /> Sensação Térmica:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.feels_like.toFixed(1)}°C</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:arrow-down-thin" width="20" height="20" /> Temperatura Mínima:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.temp_min.toFixed(1)}°C</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:arrow-up-thin" width="20" height="20" /> Temperatura Máxima:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.temp_max.toFixed(1)}°C</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:water-percent" width="20" height="20" /> Umidade:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.humidity}%</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:gauge" width="20" height="20" /> Pressão:
            </WeatherLabel>
            <WeatherValue>{weatherData.main.pressure} hPa</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:cloud-percent" width="20" height="20" /> Cobertura de Nuvens:
            </WeatherLabel>
            <WeatherValue>{weatherData.clouds.all}%</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:weather-windy" width="20" height="20" /> Velocidade do Vento:
            </WeatherLabel>
            <WeatherValue>{weatherData.wind.speed} m/s</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:compass" width="20" height="20" /> Direção do Vento:
            </WeatherLabel>
            <WeatherValue>
              {weatherData.wind.deg}° ({getWindDirection(weatherData.wind.deg)})
            </WeatherValue>
          </WeatherDetailItem>

          {weatherData.wind.gust && (
            <WeatherDetailItem>
              <WeatherLabel>
                <Icon icon="mdi:weather-windy-variant" width="20" height="20" /> Rajadas de Vento:
              </WeatherLabel>
              <WeatherValue>{weatherData.wind.gust} m/s</WeatherValue>
            </WeatherDetailItem>
          )}

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:eye" width="20" height="20" /> Visibilidade:
            </WeatherLabel>
            <WeatherValue>{weatherData.visibility / 1000} km</WeatherValue>
          </WeatherDetailItem>

          <WeatherDetailItem>
            <WeatherLabel>
              <Icon icon="mdi:weather-pouring" width="20" height="20" /> Probabilidade de Chuva:
            </WeatherLabel>
            <WeatherValue>{formatRainProbability(weatherData.pop)}</WeatherValue>
          </WeatherDetailItem>
        </WeatherDetailGrid>
      </WeatherDetailContainer>
    </Modal>
  );
};

export default WeatherDetailModal;
