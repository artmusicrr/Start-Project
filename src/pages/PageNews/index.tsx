import React, { useEffect, useState } from 'react';
import {
  PageOneContainer,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsGrid,
  NewsSection,
} from './styled';
import { Alert } from '@mui/material';

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

type CacheItem = {
  data: Article[];
  timestamp: number;
};

const categories = ['internacional', 'política'];

// Tempo de expiração do cache em milissegundos (30 minutos)
const CACHE_EXPIRATION = 30 * 60 * 1000;

// Armazenamento de cache
const newsCache: Record<string, CacheItem> = {};

const NewsPage: React.FC = () => {
  const [newsByCategory, setNewsByCategory] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategoryNews = async (category: string, retryCount = 0): Promise<Article[]> => {
    // Verificar se há dados em cache e se ainda são válidos
    const cacheKey = `news_${category}`;
    const cachedData = newsCache[cacheKey];
    const now = Date.now();

    if (cachedData && now - cachedData.timestamp < CACHE_EXPIRATION) {
      console.log(`Usando dados em cache para a categoria: ${category}`);
      return cachedData.data;
    }

    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=${category}&lang=pt&country=br&max=5&apikey=6d9e4aef622bcb9b61c0b7022b798766`
      );

      // Tratar erro 429 (Too Many Requests)
      if (res.status === 429) {
        if (retryCount < 3) {
          // Esperar um tempo antes de tentar novamente (backoff exponencial)
          const delay = Math.pow(2, retryCount) * 1000;
          console.log(`Limite de requisições atingido. Tentando novamente em ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchCategoryNews(category, retryCount + 1);
        } else {
          throw new Error(`Limite de requisições à API excedido para a categoria ${category}`);
        }
      }

      if (!res.ok) {
        throw new Error(`Erro ao buscar notícias: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      const articles = data.articles?.slice(0, 5) || [];

      // Armazenar no cache
      newsCache[cacheKey] = {
        data: articles,
        timestamp: now,
      };

      return articles;
    } catch (error) {
      console.error(`Erro ao buscar notícias para ${category}:`, error);
      // Retornar cache expirado se disponível, em caso de erro
      if (cachedData) {
        console.log(`Usando cache expirado para ${category} devido a erro na API`);
        return cachedData.data;
      }
      throw error;
    }
  };

  const fetchAllNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const result: Record<string, Article[]> = {};

      // Buscar notícias para cada categoria com um intervalo entre as requisições
      for (const category of categories) {
        try {
          const articles = await fetchCategoryNews(category);
          console.log(
            'Categoria:',
            category,
            'Qtd:',
            articles.length,
            'Primeiro título:',
            articles[0]?.title
          );
          result[category] = articles;

          // Adicionar um pequeno delay entre as requisições para evitar atingir limites da API
          if (categories.indexOf(category) < categories.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        } catch (categoryError) {
          console.error(`Erro na categoria ${category}:`, categoryError);
          result[category] = [];
        }
      }

      setNewsByCategory(result);
    } catch (err) {
      console.error('Erro ao buscar notícias:', err);
      setError('Não foi possível carregar as notícias. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageOneContainer>
      <h1>Notícias Diversas</h1>
      {loading && <p>Carregando notícias...</p>}
      {error && (
        <Alert severity="error" style={{ marginBottom: '20px' }}>
          {error}
        </Alert>
      )}

      {!loading &&
        categories.map(category => (
          <NewsSection key={category}>
            <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
            <NewsGrid>
              {newsByCategory[category]?.map((article, idx) => (
                <NewsCard key={idx}>
                  <NewsImage src={article.image || '/fallback.jpg'} alt={article.title} />
                  <NewsContent>
                    <h3>{article.title}</h3>
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
            </NewsGrid>
          </NewsSection>
        ))}
    </PageOneContainer>
  );
};

export default NewsPage;
