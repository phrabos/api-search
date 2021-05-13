import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { fetchArticles, searchArticles } from '../../services/newsApi';
import ArticleList from '../articles/ArticleList';
import Search from '../articles/Search';

export default class NewsSearach extends Component {

  state={
    loading: true,
    articles:[],
    searchQuery: '',
  }

  async componentDidMount(){
    const articles = await fetchArticles();
  
    this.setState({ 
      articles,
      loading: false,
    });
  }

  onSearchQueryChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const articles = await searchArticles(this.state.searchQuery);
    this.setState({ articles, loading: false, searchQuery: '' });
  }

  render() {
    const { articles, loading, searchQuery } = this.state;
    if(loading) return <h1>Loading...</h1>;
    return (
      <>
        <Search 
          searchQuery={searchQuery}
          onSearchQueryChange={this.onSearchQueryChange}
          onSubmit={this.onSubmit}
        />
        <ArticleList articles={articles}/>
      </>
    );
  }
}
