//import { useState } from 'react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import EditProfilePopup from './EditProfilePopup';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setСards] = React.useState([]);

  React.useEffect(() => {
    api
      .getMyUser()
      .then(values => {
        setCurrentUser(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then(values => {
        setСards(values);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (isLiked) {
      api.removeLike(card._id).then(newCard => {
        setСards(state => state.map(c => (c._id === card._id ? newCard : c)));
      });
    } else {
      api.setLike(card._id).then(newCard => {
        setСards(state => state.map(c => (c._id === card._id ? newCard : c)));
      });
    }
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(setСards(cards.filter(i => i._id !== card._id)))
      .catch(err => {
        console.log(err);
      });
  }

  function handleUpdateUser(objUser) {
    api
      .setUserInfo(objUser)
      .then(values => {
        setCurrentUser(values);
        //popupUserInfo.close();
      })
      .catch(err => {
        console.log(err);
      });
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    console.log(card._id);
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditProfileClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          //title, name, children
          name='avatar'
          title='Обновить аватар'
          buttonName='Сохранить'
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            required
            name='linkAvatar'
            type='url'
            placeholder='Ссылка на аватар'
            className='popup__input-text popup__input-text_type_link-Avatar'
          />
          <span className='popup__input-text-error popup__input-text-error_type_linkAvatar'>
            Введите адрес картинки
          </span>
        </PopupWithForm>

        <PopupWithForm
          //title, name, children
          name='card'
          title='Новое место'
          buttonName='Создать'
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            required
            name='name'
            type='text'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            className='popup__input-text popup__input-text_type_name-place'
          />
          <span className='popup__input-text-error popup__input-text-error_type_name'>
            Вы пропустили это поле
          </span>
          <input
            required
            name='link'
            type='url'
            placeholder='Ссылка на картинку'
            className='popup__input-text popup__input-text_type_url-place'
          />
          <span className='popup__input-text-error popup__input-text-error_type_link'>
            Введите адрес сайта
          </span>
        </PopupWithForm>

        <PopupWithForm
          //title, name, children
          name='remove-card'
          title='Вы уверены?'
          buttonName='Да'
        ></PopupWithForm>
        <ImagePopup
          //title, name, children
          card={selectedCard}
          onClose={closeAllPopups}
        ></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
