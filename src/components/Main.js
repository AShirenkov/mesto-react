import React from 'react';
import Card from './Card';
//import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, cards }) {
  const currentUser = React.useContext(CurrentUserContext);

  /*React.useEffect(() => {
    api
      .getInitialCards()
      .then(values => {
        setСards(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);*/

  return (
    <main className='content'>
      <section className='profiles'>
        <div className='profile'>
          <div className='profile__common'>
            <div className='profile__avatar'>
              <button
                type='submit'
                onClick={onEditProfile}
                className='profile__avatar-button opacity-button'
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              ></button>
            </div>

            <div className='profile__info'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <h2 className='profile__descr'>{currentUser.about}</h2>
              <button
                type='button'
                onClick={onEditAvatar}
                className='profile__edit-button opacity-button'
              ></button>
            </div>
          </div>
          <button
            type='button'
            onClick={onAddPlace}
            className='profile__card-add-button opacity-button'
          ></button>
        </div>
      </section>

      <section className='cards'>
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} />
        ))}
      </section>
    </main>
  );
}

export default Main;
