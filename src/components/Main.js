import React from 'react';
function Main() {
  return (
    <main className='content'>
      <section className='profiles'>
        <div className='profile'>
          <div className='profile__common'>
            <div className='profile__avatar'>
              <button type='submit' className='profile__avatar-button opacity-button'></button>
            </div>

            <div className='profile__info'>
              <h1 className='profile__name'>TestName</h1>
              <h2 className='profile__descr'>TestDescr</h2>
              <button type='button' className='profile__edit-button opacity-button'></button>
            </div>
          </div>
          <button type='button' className='profile__card-add-button opacity-button'></button>
        </div>
      </section>

      <section className='cards'></section>
    </main>
  );
}

export default Main;
