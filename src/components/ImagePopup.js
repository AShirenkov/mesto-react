import React from 'react';
function ImagePopup() {
  return (
    <div className='popup popup_type_img popup_background-color_black-09'>
      <div className='popup__img-container'>
        <img src='#' alt='' className='popup__card-img' />
        <p className='popup__text-img '>Горный Алтай</p>

        <button type='button' className='popup__close-button opacity-button'></button>
      </div>
    </div>
  );
}

export default ImagePopup;
