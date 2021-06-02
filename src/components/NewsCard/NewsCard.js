import React from 'react';
import './NewsCard.css';
import { useLocation, Link } from 'react-router-dom';

function NewsCard({ title,  published_date, byLine, data }) {

  return (
  <Link className='NewsCard' data-cy='NewsCard' to={{pathname: '/article', state:{data}}}>
    <h2 className='articleTitle' data-cy='articleTitle'>{title}</h2>
    <p className='byLine' data-cy='byLine'>{byLine}</p>
    <p className='date' data-cy='date'>{published_date}</p>
  </Link>
  )
}

export default NewsCard;
