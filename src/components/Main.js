import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, initialCards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar-image"
            src={userAvatar}
            alt="Аватар"
          />
          <button
            className="profile__avatar-edit-btn"
            type="button"
            onClick={props.onAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-cover">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              onClick={props.onEditProfile}
              type="button"
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddCard}
        ></button>
      </section>
      <section className="elements">
        <ul className="cards-list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              onDeleteCard={props.onDeleteCard}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
