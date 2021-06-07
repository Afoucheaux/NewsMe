import React from 'react';
import './Article.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header.js';

function Article() {
  const location = useLocation();

  return (
    <>
      <Header hiddenOne={'hidden'} hiddenTwo={''}/>
      <section className='detailLayout' data-cy='detailLayout'>
        <article className='detailStyling'>
          <h2 className='detailTitle' data-cy='DetailTitle'>{location.state.data.title}</h2>
          <p className='details'>{location.state.data.abstract}</p>
          <p className='details'>{location.state.data.published_date}</p>
          <p className='details'>{location.state.data.byline}</p>
          <p className='details'>{location.state.data.subsection}</p>
          <a className='details' href={location.state.data.url}>full article</a>
        </article>
      </section>
    </>
  )
}

export default Article;
