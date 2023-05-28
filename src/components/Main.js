import React from 'react';
import Card from './Card';
import api from '../utils/Api';
function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setСards] = React.useState([]);

  React.useEffect(() => {
    api
      .getMyUser()
      .then(values => {
        setUserName(values.name);
        setUserDescription(values.about);
        setUserAvatar(values.avatar);
      })
      .catch(err => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then(values => {
        setСards(values);
        console.log(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
                style={{ backgroundImage: `url(${userAvatar})` }}
              ></button>
            </div>

            <div className='profile__info'>
              <h1 className='profile__name'>{userName}</h1>
              <h2 className='profile__descr'>{userDescription}</h2>
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
          <Card card={card} />
        ))}
      </section>
    </main>
  );
}

export default Main;
