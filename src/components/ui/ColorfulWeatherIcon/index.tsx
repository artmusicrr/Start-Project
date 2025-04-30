import React from 'react';
import {
  ThunderstormIcon,
  RainIcon,
  SnowIcon,
  AtmosphereIcon,
  ClearDayIcon,
  ClearNightIcon,
  CloudsIcon,
  ExtremeIcon,
  IconInner,
} from './styled';

export interface ColorfulWeatherIconProps {
  weatherId: number;
  isDay?: boolean;
  size?: number;
  className?: string;
}

const ColorfulWeatherIcon: React.FC<ColorfulWeatherIconProps> = props => {
  const { weatherId, isDay = true, size = 60, className = '' } = props;

  function getEmoji(): string {
    // Thunderstorm (200-299)
    if (weatherId >= 200 && weatherId < 300) {
      return '⚡️';
    }

    // Drizzle (300-399) or Rain (500-599)
    if ((weatherId >= 300 && weatherId < 400) || (weatherId >= 500 && weatherId < 600)) {
      const isHeavy =
        weatherId === 302 ||
        weatherId === 312 ||
        weatherId === 314 ||
        weatherId === 502 ||
        weatherId === 503 ||
        weatherId === 504;
      return isHeavy ? '🌧️' : '🌦️';
    }

    // Snow (600-699)
    if (weatherId >= 600 && weatherId < 700) {
      return '❄️';
    }

    // Atmosphere - fog, mist, etc (700-799)
    if (weatherId >= 700 && weatherId < 800) {
      return '🌫️';
    }

    // Clear sky (800)
    if (weatherId === 800) {
      return isDay ? '☀️' : '🌙';
    }

    // Clouds (801-899)
    if (weatherId > 800 && weatherId < 900) {
      if (weatherId === 801) {
        return isDay ? '🌤️' : '☁️';
      }

      if (weatherId === 802) {
        return '⛅️';
      }

      return '☁️';
    }

    // Extreme weather (default)
    return '🌪️';
  }

  const renderIcon = () => {
    // Thunderstorm (200-299)
    if (weatherId >= 200 && weatherId < 300) {
      return (
        <ThunderstormIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </ThunderstormIcon>
      );
    }

    // Drizzle (300-399) or Rain (500-599)
    if ((weatherId >= 300 && weatherId < 400) || (weatherId >= 500 && weatherId < 600)) {
      return (
        <RainIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </RainIcon>
      );
    }

    // Snow (600-699)
    if (weatherId >= 600 && weatherId < 700) {
      return (
        <SnowIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </SnowIcon>
      );
    }

    // Atmosphere - fog, mist, etc (700-799)
    if (weatherId >= 700 && weatherId < 800) {
      return (
        <AtmosphereIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </AtmosphereIcon>
      );
    }

    // Clear sky (800)
    if (weatherId === 800) {
      return isDay ? (
        <ClearDayIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </ClearDayIcon>
      ) : (
        <ClearNightIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </ClearNightIcon>
      );
    }

    // Clouds (801-899)
    if (weatherId > 800 && weatherId < 900) {
      return (
        <CloudsIcon className={className}>
          <IconInner size={size}>
            <span>{getEmoji()}</span>
          </IconInner>
        </CloudsIcon>
      );
    }

    // Extreme weather (default)
    return (
      <ExtremeIcon className={className}>
        <IconInner size={size}>
          <span>{getEmoji()}</span>
        </IconInner>
      </ExtremeIcon>
    );
  };

  return renderIcon();
};

export default ColorfulWeatherIcon;
