import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../assets/images";
import "../App.modules.css";

function Cards() {
  const navigate = useNavigate();
  const [position, setPosition] = useState(1);

  const flashCards = [
    { id: 1, color: "#90f1ef", image: "img1", cardName: "card1" },
    { id: 2, color: "#ff70a6", image: "img2", cardName: "card2" },
    { id: 3, color: "#ff9770", image: "img3", cardName: "card3" },
    { id: 4, color: "#ffd670", image: "img4", cardName: "card4" },
    { id: 5, color: "#e9ff70", image: "img5", cardName: "card5" },
  ];

  const totalItems = flashCards.length;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    setPosition((prev) => (prev === totalItems ? 1 : prev + 1));
  };

  const handlePrevious = () => {
    setPosition((prev) => (prev === 1 ? totalItems : prev - 1));
  };

  return (
    <div>
      <button className="image-button goBack" onClick={handleGoBack}>
        <img src={goBack} alt="Go Back" className="goBack-image" />
      </button>

      <div className="carousel-container">
        <button className="arrow-button previous" onClick={handlePrevious}>
          &#9664;
        </button>

        <main id="carousel" style={{ "--position": position }}>
          {flashCards.map((card, index) => (
            <div
              key={card.id}
              className="item"
              style={{
                "--offset": index + 1,
                backgroundColor: card.color,
              }}
            > <img src={card.image} alt={card.cardName} /></div>
          ))}
        </main>

        <button className="arrow-button next" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </div>
  );
}

export default Cards;
