import React from 'react';
import { HomeContainer } from './styled';

const Home: React.FC = () => {
//   useEffect(() => {
//     console.log('Página Inicial carregada!');
//   }, []);

  return (
    <HomeContainer>
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao nosso aplicativo!</p>
    </HomeContainer>
  );
};

export default Home;