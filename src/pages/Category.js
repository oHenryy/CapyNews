import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import api from '../api';

function Category({ match }) {
  const [articles, setArticles] = useState([]);
  const category = match.params.category;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/top-headlines', {
          params: {
            country: 'us',
            category: category,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar artigos:', error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <NewsList articles={articles} />
    </div>
  );
}

export default Category;
