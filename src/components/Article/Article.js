import React, { useState, useEffect } from 'react';
import './Article.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header.js';

function Article() {
  const location = useLocation();

  return (
    <>
      <Header />
      <section className='detailLayout' data-cy='detailLayout'>
        <h2 className='DetailTitle' data-cy='DetailTitle'>{location.state.data.title}</h2>
        <p>{location.state.data.abstract}</p>
        <p>{location.state.data.published_date}</p>
        <p>{location.state.data.byline}</p>
        <p>{location.state.data.subsection}</p>
        <a href={location.state.data.url}>full article</a>
      </section>
    </>
  )
}

export default Article;
