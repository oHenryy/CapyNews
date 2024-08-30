import React, { useState, useEffect } from 'react';
import NewsList from '../components/NewsList';
import CategoryFilter from '../components/CategoryFilter';
import api from '../api';

function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await api.get('/top-headlines', {
          params: {
            country: 'br',  
            category: selectedCategory,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar artigos:', error);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <CategoryFilter 
        categories={['general', 'technology']} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <NewsList articles={articles} />
    </div>
  );
}

export default Home;
