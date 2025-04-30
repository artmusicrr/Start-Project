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
  TemperatureRangeContainer,
  HourlyTempGrid,
  HourlyTemp,
  TimeLabel,
  TempValue,
} from './styled';
import { Icon } from '@iconify/react';
import { useTheme } from '../../../contexts/ThemeContext';
import ColorfulWeatherIcon from '../ColorfulWeatherIcon';
import { WeatherDetailModalProps } from './types';

const WeatherDetailModal: React.FC<WeatherDetailModalProps> = ({
  isOpen,
  onClose,
  weatherData,
  allDayData = [],
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

  // Verificar se é dia ou noite baseado no código do ícone
  const isDay = weatherData.weather[0].icon.includes('d');

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

  // Função para gerar uma cor baseada na temperatura
  const getTemperatureColor = (temp: number, minTemp: number, maxTemp: number): string => {
    // Converter para uma escala de 0-1
    const range = maxTemp - minTemp;
    const normalizedTemp = range === 0 ? 0.5 : (temp - minTemp) / range;

    // Cores: azul (frio) -> ciano -> verde -> amarelo -> laranja -> vermelho (quente)
    if (normalizedTemp < 0.2) {
      return '#3498db'; // Azul (frio)
    } else if (normalizedTemp < 0.4) {
      return '#1abc9c'; // Ciano
    } else if (normalizedTemp < 0.6) {
      return '#2ecc71'; // Verde
    } else if (normalizedTemp < 0.75) {
      return '#f1c40f'; // Amarelo
    } else if (normalizedTemp < 0.9) {
      return '#e67e22'; // Laranja
    } else {
      return '#e74c3c'; // Vermelho (quente)
    }
  };

  // Função para extrair apenas as previsões do mesmo dia
  const getDayForecasts = () => {
    if (!allDayData || allDayData.length === 0) {
      // Se não recebemos dados do dia, retorna um array apenas com o weatherData atual
      return weatherData ? [weatherData] : [];
    }

    // Extrair apenas a data (sem hora) do dt_txt
    const currentDate = weatherData?.dt_txt.split(' ')[0];

    // Filtrar apenas as previsões do mesmo dia
    return allDayData.filter(item => {
      const itemDate = item.dt_txt.split(' ')[0];
      return itemDate === currentDate;
    });
  };

  // Obter previsões do mesmo dia
  const dayForecasts = getDayForecasts();

  // Formatar hora para exibição mais amigável
  const formatHour = (dtTxt: string) => {
    const date = new Date(dtTxt);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  // Estilo para textos no modo escuro
  const darkTextStyle = isDarkMode ? { color: '#DDE4F0' } : {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Detalhes do Tempo - ${formatDateTime(weatherData.dt_txt)}`}
    >
      <WeatherDetailContainer>
        <WeatherIconContainer>
          <ColorfulWeatherIcon weatherId={weatherData.weather[0].id} isDay={isDay} size={70} />
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

          {/* Range de temperaturas ao longo do dia */}
          {dayForecasts.length > 1 && (
            <TemperatureRangeContainer>
              <WeatherLabel
                style={{ ...darkTextStyle, justifyContent: 'center', marginBottom: '8px' }}
              >
                <Icon icon="mdi:chart-line" width="20" height="20" style={{ marginRight: '5px' }} />
                Variação de Temperatura (3h em 3h)
              </WeatherLabel>
              <HourlyTempGrid>
                {dayForecasts.map(forecast => {
                  // Cálculo para o gráfico de temperaturas
                  const temps = dayForecasts.map(f => f.main.temp);
                  const minTemp = Math.min(...temps);
                  const maxTemp = Math.max(...temps);
                  const range = maxTemp - minTemp;

                  // Calcular a altura da barra com base na temperatura
                  // Normaliza para valores entre 20% e 100%
                  const heightPercentage =
                    range === 0 ? 50 : 20 + ((forecast.main.temp - minTemp) / range) * 80;

                  // Cor com base na temperatura
                  const tempColor = getTemperatureColor(forecast.main.temp, minTemp, maxTemp);

                  return (
                    <HourlyTemp key={forecast.dt}>
                      <TimeLabel style={darkTextStyle}>{formatHour(forecast.dt_txt)}</TimeLabel>
                      <div
                        style={{
                          width: '8px',
                          height: `${heightPercentage}%`,
                          minHeight: '10px',
                          background: tempColor,
                          borderRadius: '4px',
                          margin: '4px 0',
                          boxShadow: `0 0 5px ${tempColor}70`,
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <TempValue style={darkTextStyle}>
                        {Math.round(forecast.main.temp)}°C
                      </TempValue>
                    </HourlyTemp>
                  );
                })}
              </HourlyTempGrid>
            </TemperatureRangeContainer>
          )}
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
                <Icon icon="mdi:weather-cloudy" width="20" height="20" /> Nebulosidade
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
              <WeatherValue style={darkTextStyle}>
                {weatherData.wind.speed.toFixed(1)} m/s
              </WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:compass" width="20" height="20" /> Direção
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {getWindDirection(weatherData.wind.deg)} ({weatherData.wind.deg}°)
              </WeatherValue>
            </WeatherDetailItem>

            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:eye-outline" width="20" height="20" /> Visibilidade
              </WeatherLabel>
              <WeatherValue style={darkTextStyle}>
                {(weatherData.visibility / 1000).toFixed(1)} km
              </WeatherValue>
            </WeatherDetailItem>
          </WeatherDetailGrid>
        </WeatherDetailSection>

        <WeatherDetailSection>
          <SectionTitle style={darkTextStyle}>Precipitação</SectionTitle>
          <WeatherDetailGrid>
            <WeatherDetailItem>
              <WeatherLabel style={darkTextStyle}>
                <Icon icon="mdi:weather-pouring" width="20" height="20" /> Probabilidade
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
