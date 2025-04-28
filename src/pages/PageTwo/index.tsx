import React from 'react';
import { PageOneContainer } from './styled';

const PageTwo: React.FC = () => {
  //   useEffect(() => {
  //     console.log('Página Inicial carregada!');
  //   }, []);
  return (
    <PageOneContainer>
      <h1>Página PageTwo</h1>
      <p>Bem-vindo a PageTwo!</p>
    </PageOneContainer>
  );
};

export default PageTwo;
