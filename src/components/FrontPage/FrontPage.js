import React, { useState, useEffect } from 'react';
import './FrontPage.css';
import { getNews } from '../../apiCalls.js';
import NewsCard from '../NewsCard/NewsCard.js';
import Header from '../Header/Header.js';

function FrontPage() {
  const [articlesList, setArticlesList] = useState([]);
  const [typeOfNews, setTypeOfNews] = useState('home');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading('Loading ...')
    getNews(typeOfNews)
    .then(data => handleNewsCall(data.results))
    .catch(err => setError(err))
 }, [typeOfNews])

 const handleNewsCall = (data) => {
    setArticlesList(data)
    setLoading('')
 }

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
      {error && <p className='errorMessage'>{error}</p>}
      {loading && <p className='loadingMessage'>{loading}</p>}
      <section className='cardsListLayout'>
        {buildNewsCards}
      </section>
    </>

  )
}

export default FrontPage;
