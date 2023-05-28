import React from 'react';
function PopupWithForm({ title, name, children, buttonName }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{title}</h2>
        <form name={`form-${name}`} className='popup__edit-form'>
          {children}
          <button type='submit' className='popup__save-button opacity-button'>
            {buttonName}
          </button>
        </form>
        <button type='button' className='popup__close-button opacity-button'></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
