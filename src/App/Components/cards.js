import React from 'react'
import "./Feature.css";

function Cards({ icon, header,paragraph }) {
  return (
    <div className="cards">
      <h2>{icon}</h2>
      <h3 className='header-paragraph'>{header}</h3>
      <p className='header-paragraph'>{paragraph}</p>
    </div>
  );
}

export default Cards;