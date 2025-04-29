import React, { useEffect, useState } from 'react';
import { HomeContainer, WeatherCardsList, WeatherCard, WeatherIcon, WeatherInfo } from './styled';
import { Icon } from '@iconify/react';

interface WeatherItem {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

interface WeatherData {
  city?: {
    name: string;
  };
  list: WeatherItem[];
}

const Home: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Função para determinar qual ícone exibir baseado no ID do tempo
  const getWeatherIcon = (weatherId: number, icon: string): JSX.Element => {
    // Verifica se é dia ou noite pelo código do ícone
    const isNight = icon.includes('n');

    // Cores temáticas para cada tipo de clima
    const iconColors = {
      thunderstorm: '#9B59B6', // Roxo para tempestade
      shower: '#3498DB', // Azul claro para chuviscos
      rain: '#2E86C1', // Azul médio para chuva
      snow: '#ECF0F1', // Branco para neve
      fog: '#BDC3C7', // Cinza claro para névoa
      sunny: '#F39C12', // Amarelo/dourado para sol
      moon: '#F5F5F5', // Branco azulado para lua
      cloud: '#95A5A6', // Cinza para nuvens
      partCloud: '#7F8C8D', // Cinza mais escuro para parcialmente nublado
      default: '#3498DB', // Azul padrão
    };

    // Estilos para adicionar brilho aos ícones baseados no tipo de clima
    const getIconStyle = (colorKey: keyof typeof iconColors) => {
      // Cores de brilho específicas para cada tipo
      const glowColors = {
        sunny: 'rgba(243, 156, 18, 0.8)', // Brilho mais intenso para o sol
        thunderstorm: 'rgba(155, 89, 182, 0.8)', // Brilho intenso para tempestade
        rain: 'rgba(41, 128, 185, 0.7)', // Brilho médio para chuva
        snow: 'rgba(236, 240, 241, 0.7)', // Brilho médio para neve
        cloud: 'rgba(149, 165, 166, 0.5)', // Brilho suave para nuvens
        moon: 'rgba(245, 245, 245, 0.6)', // Brilho moderado para lua
        default: 'rgba(52, 152, 219, 0.5)',
      };

      // Intensidade do brilho baseada no tipo de clima
      const glowIntensity = {
        sunny: '12px', // Sol tem brilho mais intenso
        thunderstorm: '10px', // Tempestade tem brilho forte
        rain: '8px', // Chuva tem brilho médio
        snow: '8px', // Neve tem brilho médio
        cloud: '5px', // Nuvens têm brilho suave
        moon: '8px', // Lua tem brilho moderado
        default: '6px',
      };

      // Determina a cor do brilho baseado no tipo de clima
      let glowColor, blurSize;
      if (
        colorKey === 'sunny' ||
        colorKey === 'thunderstorm' ||
        colorKey === 'rain' ||
        colorKey === 'snow' ||
        colorKey === 'cloud' ||
        colorKey === 'moon'
      ) {
        glowColor = glowColors[colorKey];
        blurSize = glowIntensity[colorKey];
      } else {
        glowColor = glowColors.default;
        blurSize = glowIntensity.default;
      }

      return {
        filter: `drop-shadow(0 0 ${blurSize} ${glowColor})`,
        transition: 'all 0.3s ease',
      };
    };

    // Com base no ID e se é dia ou noite
    if (weatherId >= 200 && weatherId < 300) {
      return (
        <Icon
          icon="wi:thunderstorm"
          width="64"
          height="64"
          color={iconColors.thunderstorm}
          style={getIconStyle('thunderstorm')}
        />
      );
    } else if (weatherId >= 300 && weatherId < 400) {
      return (
        <Icon
          icon="wi:showers"
          width="64"
          height="64"
          color={iconColors.shower}
          style={getIconStyle('shower')}
        />
      );
    } else if (weatherId >= 500 && weatherId < 600) {
      return (
        <Icon
          icon="wi:rain"
          width="64"
          height="64"
          color={iconColors.rain}
          style={getIconStyle('rain')}
        />
      );
    } else if (weatherId >= 600 && weatherId < 700) {
      return (
        <Icon
          icon="wi:snow"
          width="64"
          height="64"
          color={iconColors.snow}
          style={getIconStyle('snow')}
        />
      );
    } else if (weatherId >= 700 && weatherId < 800) {
      return (
        <Icon
          icon="wi:fog"
          width="64"
          height="64"
          color={iconColors.fog}
          style={getIconStyle('default')}
        />
      );
    } else if (weatherId === 800) {
      return isNight ? (
        <Icon
          icon="wi:night-clear"
          width="64"
          height="64"
          color={iconColors.moon}
          style={getIconStyle('moon')}
        />
      ) : (
        <Icon
          icon="wi:day-sunny"
          width="64"
          height="64"
          color={iconColors.sunny}
          style={getIconStyle('sunny')}
        />
      );
    } else if (weatherId === 801) {
      return isNight ? (
        <Icon
          icon="wi:night-alt-cloudy"
          width="64"
          height="64"
          color={iconColors.moon}
          style={getIconStyle('moon')}
        />
      ) : (
        <Icon
          icon="wi:day-cloudy"
          width="64"
          height="64"
          color={iconColors.partCloud}
          style={getIconStyle('cloud')}
        />
      );
    } else if (weatherId > 801 && weatherId < 900) {
      return (
        <Icon
          icon="wi:cloudy"
          width="64"
          height="64"
          color={iconColors.cloud}
          style={getIconStyle('cloud')}
        />
      );
    } else {
      return (
        <Icon
          icon="wi:cloud"
          width="64"
          height="64"
          color={iconColors.cloud}
          style={getIconStyle('cloud')}
        />
      ); // Fallback
    }
  };

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
                >
                  <WeatherIcon>
                    {getWeatherIcon(item.weather[0].id, item.weather[0].icon)}
                  </WeatherIcon>
                  <WeatherInfo
                    weatherId={item.weather[0].id}
                    isNight={item.weather[0].icon.includes('n')}
                  >
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
    </HomeContainer>
  );
};

export default Home;
