import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleAvatarClick() {
    setIsAvatarPopupOpen(true);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
  }

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    item: {},
  });

  function closeAllPopups() {
    setIsProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      item: {},
    });
  }

  return (
    <div className="App">
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onAvatar={handleAvatarClick}
          onDeleteCard={handleDeleteCardClick}
          onCardClick={setSelectedCard}
        />

        <Footer />

        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          submitBtnText="Сохранить"
          isOpen={isProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_name"
            name="name"
            type="text"
            placeholder="Ваше имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error name-error"></span>
          <input
            className="popup__input popup__input_type_job"
            name="job"
            type="text"
            placeholder="Кем работаете?"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error job-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="card-add"
          title="Новое место"
          submitBtnText="Создать"
          isOpen={isAddCardPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_card-title"
            name="name"
            type="text"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__error name-error"></span>
          <input
            className="popup__input popup__input_type_card-img-link"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          submitBtnText="Сохранить"
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__input popup__input_type_avatar-link"
            name="avatar-link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error avatar-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete-card"
          title="Вы уверены?"
          submitBtnText="Да"
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
