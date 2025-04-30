import React, { useEffect, useState } from 'react';
import { HomeContainer, WeatherCardsList, WeatherCard, WeatherIcon, WeatherInfo } from './styled';
import { Icon } from '@iconify/react';
import WeatherDetailModal from '../../components/ui/WeatherDetailModal';
import OpenWeatherMapIcon from '../../components/ui/OpenWeatherMapIcon';
import { WeatherItem, WeatherData } from './types';

const Home: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedWeather, setSelectedWeather] = useState<WeatherItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getLocationFromIP = async () => {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      if (data.latitude && data.longitude) {
        setLocation({ lat: data.latitude, lon: data.longitude });
      } else {
        setError('Não foi possível obter localização via IP.');
      }
    } catch {
      setError('Erro ao consultar localização aproximada via IP.');
    }
  };

  // Função para abrir o modal com os detalhes da previsão
  const handleCardClick = (item: WeatherItem) => {
    setSelectedWeather(item);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      getLocationFromIP();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      err => {
        console.warn('Erro GPS:', err.message);
        getLocationFromIP();
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      const fetchWeather = async () => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=d4a49eacfa033a8d61f972cf1b0df6e1&units=metric&lang=pt_br`
          );
          const data = await res.json();
          setWeather(data);
        } catch {
          setError('Erro ao buscar previsão do tempo.');
        }
      };
      fetchWeather();
    }
  }, [location]);

  return (
    <HomeContainer>
      <h1>Previsão do Tempo</h1>

      {error && (
        <p
          style={{
            color: '#ff6b6b',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            padding: '12px 20px',
            borderRadius: '8px',
            marginTop: '20px',
            border: '1px solid rgba(255, 107, 107, 0.3)',
          }}
        >
          <Icon
            icon="clarity:error-solid"
            style={{ marginRight: '8px', verticalAlign: 'middle' }}
          />
          {error}
        </p>
      )}

      {!location && !error && (
        <p style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
          <Icon icon="eos-icons:loading" width="24" style={{ marginRight: '10px' }} />
          Detectando localização...
        </p>
      )}

      {weather && weather.city && (
        <>
          <p>
            Previsão para <strong>{weather.city.name}</strong>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginLeft: '8px',
                fontSize: '1rem',
                opacity: 0.7,
              }}
            >
              <Icon icon="mdi:map-marker" style={{ marginRight: '4px' }} />
            </span>
          </p>

          <WeatherCardsList>
            {weather.list
              .filter((item: WeatherItem) =>
                // Filtrar apenas os registros das 12h
                item.dt_txt.includes('12:00:00')
              )
              .slice(0, 5) // Limitar a 5 cards
              .map((item: WeatherItem) => (
                <WeatherCard
                  key={item.dt}
                  weatherId={item.weather[0].id}
                  isNight={item.weather[0].icon.includes('n')}
                  onClick={() => handleCardClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <WeatherIcon>
                    <OpenWeatherMapIcon
                      weatherId={item.weather[0].id}
                      iconCode={item.weather[0].icon}
                      size={80}
                    />
                  </WeatherIcon>
                  <WeatherInfo>
                    <div className="day">
                      <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '3px' }}>
                        {new Date(item.dt_txt)
                          .toLocaleDateString('pt-BR', { weekday: 'short' })
                          .toUpperCase()}
                      </div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                        {new Date(item.dt_txt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                        })}
                      </div>
                    </div>
                    <div className="description">
                      <span className="temp">{Math.round(item.main.temp)}°C</span>
                      <span className="condition">{item.weather[0].description}</span>
                    </div>
                  </WeatherInfo>
                </WeatherCard>
              ))}
          </WeatherCardsList>
        </>
      )}

      {/* Modal de Detalhes do Tempo */}
      <WeatherDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        weatherData={selectedWeather}
      />
    </HomeContainer>
  );
};

export default Home;
