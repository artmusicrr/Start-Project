import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DollarQuote from '../pages/DollarQuote';
import PageNews from '../pages/PageNews';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dollar-quote" element={<DollarQuote />} />
      <Route path="/page-news" element={<PageNews />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};
