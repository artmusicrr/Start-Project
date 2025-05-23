import React, { useEffect, useState } from 'react';
import {
  PageOneContainer,
  NewsCard,
  NewsImage,
  NewsContent,
  NewsGrid,
  NewsSection,
} from './styled';

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

const categories = ['internacional', 'política'];

const NewsPage: React.FC = () => {
  const [newsByCategory, setNewsByCategory] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState(false);

  const fetchCategoryNews = async (category: string): Promise<Article[]> => {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=${category}&lang=pt&country=br&max=5&apikey=6d9e4aef622bcb9b61c0b7022b798766`
    );
    const data = await res.json();
    return data.articles?.slice(0, 5) || [];
  };

  const fetchAllNews = async () => {
    setLoading(true);
    try {
      const result: Record<string, Article[]> = {};
      for (const category of categories) {
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
      }
      setNewsByCategory(result);
    } catch (err) {
      console.error('Erro ao buscar notícias:', err);
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
