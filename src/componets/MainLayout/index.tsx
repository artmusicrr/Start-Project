import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  LayoutContainer, 
  Header, 
  Content, 
  Nav, 
  NavList, 
  NavItem,
  MobileMenuButton,
  MenuIcon,
  ThemeToggle
} from './styled';

interface MainLayoutProps {
  children: React.ReactNode;
}

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
          </MobileMenuButton>          <ThemeToggle 
            onClick={toggleTheme} 
            isDarkMode={themeMode === 'dark'}
            aria-label={themeMode === 'dark' ? "Alternar para modo claro" : "Alternar para modo escuro"}
          >
            {themeMode === 'dark' ? "☀️" : "🌙"}
          </ThemeToggle>
          <NavList open={menuOpen}>
            <NavItem>
              <Link to="/" onClick={() => setMenuOpen(false)}>Página Inicial</Link>
            </NavItem>
            <NavItem>
              <Link to="/pageone" onClick={() => setMenuOpen(false)}>Página Um</Link>
            </NavItem>
            {/* Adicione mais links aqui conforme necessário */}
          </NavList>
        </Nav>
      </Header>
      <Content>
        {children}
      </Content>
    </LayoutContainer>
  );
};
