import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/article/${encodeURIComponent(article.url)}`}>Read More</Link>
    </div>
  );
}

export default NewsCard;
