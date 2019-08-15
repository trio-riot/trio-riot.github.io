import React from 'react';
import '../containers/App.css';

const Card = ({ name, email, id, username }) => {

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${email}?200x200`} />
      <div>

    <h2 className=''>{name}</h2>
    <p>{email}</p>
      </div>
    </div>

  );
};


export default Card;