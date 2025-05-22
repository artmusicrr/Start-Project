import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { MainLayoutProps } from './types';
import {
  LayoutContainer,
  Header,
  Content,
  Nav,
  NavList,
  NavItem,
  MobileMenuButton,
  MenuIcon,
  ThemeToggle,
} from './styled';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <MobileMenuButton onClick={toggleMenu} aria-label="Menu">
            <MenuIcon />
          </MobileMenuButton>{' '}
          <ThemeToggle
            onClick={toggleTheme}
            isDarkMode={themeMode === 'dark'}
            aria-label={
              themeMode === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'
            }
          >
            {themeMode === 'dark' ? '☀️' : '🌙'}
          </ThemeToggle>
          <NavList open={menuOpen}>
            <NavItem>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Previsão do Tempo
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pageone" onClick={() => setMenuOpen(false)}>
                Cotação de Moedas
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pagetwo" onClick={() => setMenuOpen(false)}>
                Página Dois
              </Link>
            </NavItem>

            {/* Adicione mais links aqui conforme necessário */}
          </NavList>
        </Nav>
      </Header>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};
