import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: ${props => props.theme.isDark 
    ? props.theme.tokens.colors.primary_new.base.dark 
    : props.theme.tokens.colors.primary_new.surface.main};
  color: ${props => props.theme.isDark 
    ? props.theme.tokens.colors.text.contrast 
    : props.theme.tokens.colors.text.main};
  padding: 1rem 0;
  box-shadow: 0 3px 6px ${props => props.theme.isDark 
    ? 'rgba(0, 0, 0, 0.5)' 
    : 'rgba(0, 0, 0, 0.15)'};
  position: fixed;
  top: 0;
  border-bottom: 1px solid ${props => props.theme.isDark
    ? props.theme.tokens.colors.secondary_new.base.main
    : props.theme.tokens.colors.primary_new.base.main};
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeToggle = styled.button<{ isDarkMode: boolean }>`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.isDarkMode 
    ? props.theme.tokens.colors.text.contrast 
    : props.theme.tokens.colors.text.main};  background-color: ${props => props.isDarkMode 
    ? props.theme.tokens.colors.secondary_new.base.main 
    : props.theme.tokens.colors.terciary[100]};
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 0 2px 4px ${props => props.isDarkMode 
    ? 'rgba(0, 0, 0, 0.3)' 
    : 'rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    background-color: ${props => props.isDarkMode 
      ? props.theme.tokens.colors.secondary_new.action.hover 
      : props.theme.tokens.colors.terciary[90]};
  }
  
  @media (max-width: 768px) {
    right: 70px;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 3px;
  background-color: #333;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 3px;
    background-color: #333;
    transition: transform 0.3s ease;
  }
  
  &:before {
    top: -8px;
  }
  
  &:after {
    bottom: -8px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul<{ open?: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    position: fixed;
    top: 0;
    right: ${({ open }) => open ? '0' : '-100%'};
    width: 250px;
    background-color: ${props => props.theme.colors.headerBg};
    padding: 60px 20px 20px;
    height: 100vh;
    z-index: 10;
    box-shadow: -2px 0 5px ${props => props.theme.isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'};
    transition: right 0.3s ease, background-color 0.3s;
    overflow-y: auto;
  }
`;

export const NavItem = styled.li`
  a {
    color: ${props => props.theme.isDark ? '#e0e0e0' : '#333'};
    text-decoration: none;
    font-weight: 500;
    padding: 8px 0;
    position: relative;
    display: block;
    
    &:hover {
      //color: ${props => props.theme.colors.primary};
      color:  ${props => props.theme.isDark
        ? props.theme.tokens.colors.text.terciary
        : props.theme.tokens.colors.text.secondary};
      
      &:after {
        width: 100%;
      }
    }      &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: ${props => props.theme.isDark
        ? props.theme.tokens.colors.text.terciary
        : props.theme.tokens.colors.text.secondary};
      transition: width 0.3s ease;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem 1rem;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px; /* Compensar a altura do header fixo */
  
  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem;
    margin-top: 70px; /* Ajuste para telas menores */
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    margin-top: 60px; /* Ajuste para telas muito pequenas */
  }
`;
