import React, { useState, useEffect } from 'react';
import './FrontPage.css';
import { getNews } from '../../apiCalls.js';
import NewsCard from '../NewsCard/NewsCard.js';
import Header from '../Header/Header.js';

function FrontPage() {
  const [articlesList, setArticlesLIst] = useState([]);
  const [typeOfNews, setTypeOfNews] = useState('home');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews(typeOfNews)
    .then(data => setArticlesLIst(data.results))
 }, [typeOfNews])

 const buildNewsCards = articlesList.map((article, i) => {
   return (
     <NewsCard
       key={i}
       id={i}
       title={article.title}
       published_date={article.published_date}
       byLine={article.byline}
       data={article}
     />
   )
 })

  return (
    <>
    <Header setTypeOfNews={setTypeOfNews} hiddenOne={''} hiddenTwo={'hidden'}/>
      <section>
        {buildNewsCards}
      </section>
    </>

  )
}

export default FrontPage;
