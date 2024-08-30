import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ articles }) {
  return (
    <div className="news-list">
      {articles.map(article => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default NewsList;
