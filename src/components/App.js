import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className='App'>
      <div className='page'>
        <div className='page__content'>
          <Header />
          <Main />
          <Footer />

          <div className='popup popup_type_profile'>
            <div className='popup__container'>
              <h2 className='popup__title'>Редактировать профиль</h2>
              <form name='formEditProfile' className='popup__edit-form'>
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
                <button type='submit' className='popup__save-button'>
                  Сохранить
                </button>
              </form>

              <button type='button' className='popup__close-button opacity-button'></button>
            </div>
          </div>

          <div className='popup popup_type_avatar'>
            <div className='popup__container'>
              <h2 className='popup__title'>Обновить аватар</h2>
              <form name='formEditAvatar' className='popup__edit-form'>
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
                <button type='submit' className='popup__save-button'>
                  Сохранить
                </button>
              </form>

              <button type='button' className='popup__close-button opacity-button'></button>
            </div>
          </div>

          <div className='popup popup_type_card'>
            <div className='popup__container'>
              <h2 className='popup__title'>Новое место</h2>/
              <form name='formAddCard' className='popup__edit-form'>
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
                <button type='submit' className='popup__save-button opacity-button'>
                  Создать
                </button>
              </form>
              <button type='button' className='popup__close-button opacity-button'></button>
            </div>
          </div>
          <div className='popup popup_type_remove-card'>
            <div className='popup__container'>
              <h2 className='popup__title'>Вы уверены?</h2>/
              <form name='formRemoveCard' className='popup__edit-form'>
                <button type='submit' className='popup__save-button opacity-button'>
                  Да
                </button>
              </form>
              <button type='button' className='popup__close-button opacity-button'></button>
            </div>
          </div>
          <div className='popup popup_type_img popup_background-color_black-09'>
            <div className='popup__img-container'>
              <img src='#' alt='' className='popup__card-img' />
              <p className='popup__text-img '>Горный Алтай</p>

              <button type='button' className='popup__close-button opacity-button'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
