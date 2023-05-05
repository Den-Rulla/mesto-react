import React from "react";

export default function PopupWithForm(props) {
  return (
    <section
      className={`popup ${
        props.isOpen ? `popup_opened` : ""
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={props.onClose}
        ></button>
        <h3 className={`popup__title popup__title_type_${props.name}`}>
          {props.title}
        </h3>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={`popup-${props.name}-form`}
          action="#"
        >
          {props.children}
          <button
            className={`popup__submit-btn popup__submit-btn_type_${props.name}`}
            type="submit"
          >
            {props.submitBtnText}
          </button>
        </form>
      </div>
    </section>
  );
}
