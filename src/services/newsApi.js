export async function fetchArticles(){

  const res = await fetch(`https://newsapi.org/v2/everything?q=news&apiKey=${process.env.NEWS_API_KEY}`);
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
  }));

}

export async function searchArticles(searchQuery){

  const res = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${process.env.NEWS_API_KEY}`);
  const { articles } = await res.json();

  return articles.map(article => ({
    title: article.title,
    author: article.author,
    description: article.description,
    url: article.url,
    image: article.urlToImage,
  }));

}
