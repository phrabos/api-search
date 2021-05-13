import React from 'react';
import PropTypes from 'prop-types';

function Article({ article }) {
  return (
    <>
      <p>{article.title}</p>
      <p>{article.description}</p>
      <p>{article.url}</p>
      <img 
        src={article.image}
        alt={article.title}
        style={{
          width: '200px',
          border: '1px solid black',
          borderRadius: '2px',
          // height: '200px',
        }}
      />
      <p>Author: {article.author}</p>
      
    </>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string,

  })
};

export default Article;

