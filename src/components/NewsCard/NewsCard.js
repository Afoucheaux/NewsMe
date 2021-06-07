import React from 'react';
import './NewsCard.css';
import { Link } from 'react-router-dom';

function NewsCard({ title,  published_date, byLine, data }) {

  return (

    <Link className='newsCard' data-cy='newsCard' to={{pathname: '/article', state:{data}}}>
      <article className='cardstyling'>
        <h2 className='articleTitle' data-cy='articleTitle'>{title}</h2>
        <p className='byLine' data-cy='byLine'>{byLine}</p>
        <p className='date' data-cy='date'>Published on {published_date}</p>
      </article>
    </Link>
  )
}

export default NewsCard;
