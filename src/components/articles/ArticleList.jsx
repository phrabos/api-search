import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList({ articles }) {
  return (
    <ul aria-label="articles">
      {articles.map(article => {
        return (
          <li 
            key={article.title + article.url}
            data-testid="article-li"
            style={{
              listStyle: 'none',
              border: '1px solid salmon',
              borderRadius: '2px',
              marginBottom: '2px',
              width: '50%',
              backgroundColor: 'lightgray'
            }}
          >
            <Article article={article}/>
          </li>
        );
      })}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      image: PropTypes.string,

    })
  ).isRequired,
};

export default ArticleList;
