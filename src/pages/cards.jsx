import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, fruitVeg1, fruitVeg2, fruitVeg3, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg8, fruitVeg9, fruitVeg10, fruitVeg11, fruitVeg12, fruitVeg13, fruitVeg14, fruitVeg15, genVocab1, genVocab2, genVocab3, genVocab4, genVocab5, genVocab6, genVocab7, genVocab8, genVocab9, genVocab10, genVocab11, genVocab12, genVocab13, genVocab14, genVocab15, genVocab16, genVocab17 } from "../assets/images";
import "../App.modules.css";

function Cards() {
  const navigate = useNavigate();
  const [position, setPosition] = useState(1);

  const flashCards = [
    { id: 1, color: "#90f1ef", image: animal1, cardName: "Asu" },
    { id: 2, color: "#ff70a6", image: animal2, cardName: "Baka" },
    { id: 3, color: "#ff9770", image: animal3, cardName: "Manuk" },
    { id: 4, color: "#ffd670", image: animal4, cardName: "Dagis" },
    { id: 5, color: "#e9ff70", image: animal5, cardName: "Babi" },
    { id: 6, color: "#90c3f1", image: animal6, cardName: "Dangki" },
    { id: 7, color: "#d890f1", image: animal7, cardName: "Mariposa" },
    { id: 8, color: "#f19090", image: animal8, cardName: "Elepanti" },
    { id: 9, color: "#f1d490", image: animal9, cardName: "Tugak" },
    { id: 10, color: "#bff190", image: animal10, cardName: "Kambing" },
    { id: 11, color: "#8ff1b9", image: animal11, cardName: "Kabayu" },
    { id: 12, color: "#8fa6f1", image: animal12, cardName: "Leun" },
    { id: 13, color: "#a68ff1", image: animal13, cardName: "Pating" },
    { id: 14, color: "#f18ff0", image: animal14, cardName: "Tupa" },
    { id: 15, color: "#f18f8f", image: animal15, cardName: "Lubingan" },
    { id: 16, color: "#f1be8f", image: animal16, cardName: "Balyena" },
    { id: 17, color: "#d3f18f", image: fruitVeg1, cardName: "Ubas" },
    { id: 18, color: "#8ff1df", image: fruitVeg2, cardName: "Kalamunding" },
    { id: 19, color: "#90b1f1", image: fruitVeg3, cardName: "Payung-payungan" },
    { id: 20, color: "#bd90f1", image: fruitVeg4, cardName: "Sibuyas" },
    { id: 21, color: "#f190bd", image: fruitVeg5, cardName: "Peras" },
    { id: 22, color: "#f1d690", image: fruitVeg6, cardName: "Apol" },
    { id: 23, color: "#c4f190", image: fruitVeg7, cardName: "Saging" },
    { id: 24, color: "#90f1ab", image: fruitVeg8, cardName: "Ripolyu" },
    { id: 25, color: "#90f1f0", image: fruitVeg9, cardName: "Carrot" },
    { id: 26, color: "#af90f1", image: fruitVeg10, cardName: "Mais" },
    { id: 27, color: "#f190d9", image: fruitVeg11, cardName: "Pinya" },
    { id: 28, color: "#f1a190", image: fruitVeg12, cardName: "Papas" },
    { id: 29, color: "#f1ed90", image: fruitVeg13, cardName: "Kulubasa" },
    { id: 30, color: "#9bf190", image: fruitVeg14, cardName: "Istroberi" },
    { id: 31, color: "#90f1ca", image: fruitVeg15, cardName: "Kamatis" },
    { id: 32, color: "#909bf1", image: genVocab1, cardName: "Pagkeran" },
    { id: 33, color: "#b390f1", image: genVocab2, cardName: "Bisikleta" },
    { id: 34, color: "#f190b3", image: genVocab3, cardName: "Ayup" },
    { id: 35, color: "#f1b890", image: genVocab4, cardName: "Libru" },
    { id: 36, color: "#d9f190", image: genVocab5, cardName: "Kandila" },
    { id: 37, color: "#90f1e4", image: genVocab6, cardName: "Kotsi" },
    { id: 38, color: "#8b90f1", image: genVocab7, cardName: "Asan" },
    { id: 39, color: "#c690f1", image: genVocab8, cardName: "Bulaklak" },
    { id: 40, color: "#f190c6", image: genVocab9, cardName: "Bale" },
    { id: 41, color: "#f1b190", image: genVocab10, cardName: "Pulo" },
    { id: 42, color: "#e4f190", image: genVocab11, cardName: "Llave" },
    { id: 43, color: "#90f1d6", image: genVocab12, cardName: "Diaryu" },
    { id: 44, color: "#a690f1", image: genVocab13, cardName: "Lapis" },
    { id: 45, color: "#f190a6", image: genVocab14, cardName: "Tanaman" },
    { id: 46, color: "#f1c890", image: genVocab15, cardName: "Bundok" },
    { id: 47, color: "#cef190", image: genVocab16, cardName: "Tete" },
    { id: 48, color: "#90f1ee", image: genVocab17, cardName: "Boti" },
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
      <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
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
            > <img src={card.image} alt={card.cardName} className="cardImage" />
              <td className="cardName">{card.cardName}</td>
            </div>
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
