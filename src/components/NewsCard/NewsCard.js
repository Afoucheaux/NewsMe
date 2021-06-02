import React from 'react';
import './NewsCard.css';
// import { useLocation, Link } from 'react-router-dom';

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
// <Link className='get-results' data-cy='get-results' to={{pathname:`/user/${name}`, state:{gameInfo, allRounds}}}>submit</Link>
