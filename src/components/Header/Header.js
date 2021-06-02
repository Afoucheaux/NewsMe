import React, { useState } from 'react';
import './Header.css'

function Header( { setTypeOfNews } ) {

  return (
    <section className='headerLayout' data-cy='headerLayout'>
      <article className='titleLayout' data-cy='titleLayout'>
        <h1 className='title' data-cy='title'>NEWS ME</h1>
      </article>
      <article className='buttonLayout' data-cy='buttonLayout'>
        <button onClick={(e) => setTypeOfNews('arts')}>Art</button>
        <button onClick={(e) => setTypeOfNews('business')}>Business</button>
        <button onClick={(e) => setTypeOfNews('fashion')}>Fashion</button>
        <button onClick={(e) => setTypeOfNews('opinion')}>Opinion</button>
        <button onClick={(e) => setTypeOfNews('food')}>test Api</button>
        <button onClick={(e) => setTypeOfNews('politics')}>Politics</button>
        <button onClick={(e) => setTypeOfNews('science')}>Science</button>
        <button onClick={(e) => setTypeOfNews('sports')}>Sports</button>
        <button onClick={(e) => setTypeOfNews('technology')}>Technology</button>
        <button onClick={(e) => setTypeOfNews('world')}>World</button>
      </article>
    </section>
  )
}

export default Header
