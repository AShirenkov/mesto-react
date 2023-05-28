import React from 'react';
function Card({ card, onCardClick }) {
  function handleClick() {
    //console.log(card._id);
    onCardClick(card);
  }
  return (
    <div className='card'>
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClick}
        className='card__img  opacity-button'
      />
      <h2 className='card__title'>{card.name}</h2>
      <div className='card__like-container'>
        <button type='button' className='card__like opacity-button'></button>
        <p className='card__like-count'>{card.likes.length}</p>
      </div>

      <button className='card__trash-button opacity-button'></button>
    </div>
  );
}

export default Card;
