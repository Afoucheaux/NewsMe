import React from 'react';
import './NewsCard.css';

function NewsCard({ title,  published_date, byLine }) {

  return (
  <button className='NewsCard' data-cy='NewsCard'>
    <h2 className='articleTitle' data-cy='articleTitle'>{title}</h2>
    <p className='byLine' data-cy='byLine'>{byLine}</p>
    <p className='date' data-cy='date'>{published_date}</p>
  </button>
  )
}

export default NewsCard;
