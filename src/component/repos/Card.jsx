
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './repo.css';

const Card = ({ repo }) => {
  return (
    <div className='banner'>
      <a href={repo.html_url}>{repo.name}</a>
      
      {/* Add more details as needed */}
    </div>
  );
};

export default Card;
