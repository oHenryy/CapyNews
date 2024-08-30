import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function Article() {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Decodificando a URL para lidar com caracteres especiais e acentos
        const decodedUrl = decodeURIComponent(url);

        const response = await api.get('/everything', {
          params: {
            q: `"${decodedUrl}"`, // Usando o título entre aspas para busca exata
            pageSize: 1,
          },
        });

        const filteredArticle = response.data.articles.find(
          (article) => article.url === decodedUrl
        );

        if (filteredArticle) {
          setArticle(filteredArticle);
        } else {
          setError('Artigo não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar artigo:', error);
        setError('Erro ao buscar artigo. Por favor, tente novamente mais tarde.');
      }
    };

    fetchArticle();
  }, [url]);

  return (
    <div className="article-page">
      {error ? (
        <p>{error}</p>
      ) : article ? (
        <div>
          <h1>{article.title}</h1>
          <p><strong>Autor:</strong> {article.author || 'Desconhecido'}</p>
          <p><strong>Publicado em:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />}
          <p>{article.content || 'Conteúdo não disponível.'}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Leia mais no site original</a>
        </div>
      ) : (
        <p>Carregando artigo...</p>
      )}
    </div>
  );
}

export default Article;
