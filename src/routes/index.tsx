import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PageOne from '../pages/PageOne';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pageone" element={<PageOne />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};
