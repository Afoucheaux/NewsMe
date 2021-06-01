import React, { useState, useEffect } from 'react';
import './FrontPage.css';
import { getNews } from '../../apiCalls.js';

function FrontPage() {
  const [articleList, setArticleLIst] = useState([]);
  const [error, setError] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNews('home')
    .then(data => setArticleLIst(data.results))
  }, [])

  return (
    <p>Test1</p>
  )
}

export default FrontPage;
