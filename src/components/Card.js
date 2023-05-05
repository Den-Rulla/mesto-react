import React from "react";

export default function Card({card, onCardClick, onDeleteCard}) {
  function handleCardClick() {
    onCardClick({
      isOpen: true,
      item: card
    });
  }

  return (
    <li className="card">
      <button
        className="card__delete-btn"
        type="button"
        onClick={onDeleteCard}
      ></button>
      <img className="card__image"
      onClick={handleCardClick}
      src={card.link}
      alt={card.name}
      />
      <div className="card__title-cover">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__likes-cover">
          <button className="card__like" type="button"></button>
          <p className="card__likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
