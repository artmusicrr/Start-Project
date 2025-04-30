import React from 'react';

interface SunIconProps {
  size?: number;
  color?: string;
}

export const SunIcon: React.FC<SunIconProps> = ({ size = 60, color = '#f39c12' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" fill={color} />
    <path d="M12 2V4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 20V22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M4 12H2" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M22 12H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M19.78 4.22L17.66 6.34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M6.34 17.66L4.22 19.78" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M19.78 19.78L17.66 17.66" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M6.34 6.34L4.22 4.22" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface CloudIconProps {
  size?: number;
  color?: string;
}

export const CloudIcon: React.FC<CloudIconProps> = ({ size = 60, color = '#bdc3c7' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5 15C20.433 15 22 13.433 22 11.5C22 9.567 20.433 8 18.5 8C18.399 8 18.3 8.009 18.201 8.018C17.778 5.722 15.804 4 13.5 4C10.651 4 8.5 6.373 8.5 9C8.5 9.01 8.5 9.021 8.5 9.031C8.5 9.021 8.5 9.01 8.5 9C6.015 9 4 11.015 4 13.5C4 15.985 6.015 18 8.5 18H18.5Z"
      fill={color}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface RainIconProps {
  size?: number;
  color?: string;
}

export const RainSvgIcon: React.FC<RainIconProps> = ({ size = 60, color = '#3498db' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 18V20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18V22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 18V20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 12C20.433 12 22 10.433 22 8.5C22 6.567 20.433 5 18.5 5C18.399 5 18.3 5.009 18.201 5.018C17.778 2.722 15.804 1 13.5 1C10.651 1 8.5 3.373 8.5 6C8.5 6.01 8.5 6.021 8.5 6.031C8.5 6.021 8.5 6.01 8.5 6C6.015 6 4 8.015 4 10.5C4 12.985 6.015 15 8.5 15H18.5C18.5 15 18.5 13.9 18.5 12Z"
      fill="#bdc3c7"
      stroke="#bdc3c7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface SnowIconProps {
  size?: number;
  color?: string;
}

export const SnowSvgIcon: React.FC<SnowIconProps> = ({ size = 60, color = '#ecf0f1' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 18V22" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M8.5 20H15.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M16 16H16.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M8 16H8.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path
      d="M18.5 12C20.433 12 22 10.433 22 8.5C22 6.567 20.433 5 18.5 5C18.399 5 18.3 5.009 18.201 5.018C17.778 2.722 15.804 1 13.5 1C10.651 1 8.5 3.373 8.5 6C8.5 6.01 8.5 6.021 8.5 6.031C8.5 6.021 8.5 6.01 8.5 6C6.015 6 4 8.015 4 10.5C4 12.985 6.015 15 8.5 15H18.5C18.5 15 18.5 13.9 18.5 12Z"
      fill="#bdc3c7"
      stroke="#bdc3c7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ThunderstormIconProps {
  size?: number;
  color?: string;
}

export const ThunderstormSvgIcon: React.FC<ThunderstormIconProps> = ({
  size = 60,
  color = '#9b59b6',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 17L10 20H13L11 23"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M18.5 12C20.433 12 22 10.433 22 8.5C22 6.567 20.433 5 18.5 5C18.399 5 18.3 5.009 18.201 5.018C17.778 2.722 15.804 1 13.5 1C10.651 1 8.5 3.373 8.5 6C8.5 6.01 8.5 6.021 8.5 6.031C8.5 6.021 8.5 6.01 8.5 6C6.015 6 4 8.015 4 10.5C4 12.985 6.015 15 8.5 15H18.5C18.5 15 18.5 13.9 18.5 12Z"
      fill="#bdc3c7"
      stroke="#bdc3c7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
