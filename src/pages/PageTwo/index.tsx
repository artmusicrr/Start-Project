import React, { useEffect, useState } from 'react';
import { PageOneContainer, NewsCard, NewsImage, NewsContent } from './styled';

type Article = {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
};

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [query] = useState('tecnologia');

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&lang=pt&country=br&max=10&apikey=6d9e4aef622bcb9b61c0b7022b798766`
      );
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error('Erro ao buscar notícias:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <PageOneContainer>
      <h1>Notícias de Tecnologia</h1>
      {loading && <p>Carregando notícias...</p>}
      {!loading &&
        articles.map((article, idx) => (
          <NewsCard key={idx}>
            <NewsImage src={article.image || '/fallback.jpg'} alt={article.title} />
            <NewsContent>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <small>
                {new Date(article.publishedAt).toLocaleDateString()} - {article.source.name}
              </small>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Ler mais →
              </a>
            </NewsContent>
          </NewsCard>
        ))}
    </PageOneContainer>
  );
};

export default NewsPage;
