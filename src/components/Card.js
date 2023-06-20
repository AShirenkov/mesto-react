import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = `card__like opacity-button ${isLiked && 'card__like_active'}`;

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
        <button type='button' className={cardLikeButtonClassName}></button>
        <p className='card__like-count'>{card.likes.length}</p>
      </div>

      {isOwn && <button className='card__trash-button opacity-button' onClick={handleClick} />}
    </div>
  );
}

export default Card;
