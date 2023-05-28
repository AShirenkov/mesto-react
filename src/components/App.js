import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  function handleEditAvatarClick() {
    console.log('Не дави на меня!');
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    console.log('Ты мне солнце заслонил!');
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    console.log('Ну ты чего, нормально же общались!');
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditProfileClick}
      />
      <Footer />

      <PopupWithForm
        //title, name, chilbuttonNamedren
        name='profile'
        title='Редактировать профиль'
        buttonName='Сохранить'
      >
        <input
          required
          name='nameProfile'
          type='text'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          className='popup__input-text popup__input-text_type_name'
        />
        <span className='popup__input-text-error popup__input-text-error_type_nameProfile'>
          111
        </span>
        <input
          required
          name='descriptionProfile'
          type='text'
          placeholder='Род деятельности'
          minLength='2'
          maxLength='200'
          className='popup__input-text popup__input-text_type_description'
        />
        <span className='popup__input-text-error popup__input-text-error_type_descriptionProfile'>
          111
        </span>
      </PopupWithForm>

      <PopupWithForm
        //title, name, children
        name='avatar'
        title='Обновить аватар'
        buttonName='Сохранить'
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
    </div>
  );
}

export default App;
