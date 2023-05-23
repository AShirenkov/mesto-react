import React from 'react';
function Main() {
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
    <main className='content'>
      <section className='profiles'>
        <div className='profile'>
          <div className='profile__common'>
            <div className='profile__avatar'>
              <button
                type='submit'
                onClick={handleEditAvatarClick}
                className='profile__avatar-button opacity-button'
              ></button>
            </div>

            <div className='profile__info'>
              <h1 className='profile__name'>TestName</h1>
              <h2 className='profile__descr'>TestDescr</h2>
              <button
                type='button'
                onClick={handleEditProfileClick}
                className='profile__edit-button opacity-button'
              ></button>
            </div>
          </div>
          <button
            type='button'
            onClick={handleAddPlaceClick}
            className='profile__card-add-button opacity-button'
          ></button>
        </div>
      </section>

      <section className='cards'></section>
    </main>
  );
}

export default Main;
