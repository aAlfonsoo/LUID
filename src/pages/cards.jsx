import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { confetti, speaker, dictionaryTutorial, goBack, flashCards, excellent, verygood, good, okay, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, fruitVeg1, fruitVeg2, fruitVeg3, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg8, fruitVeg9, fruitVeg10, fruitVeg11, fruitVeg12, fruitVeg13, fruitVeg14, fruitVeg15, genVocab1, genVocab2, genVocab3, genVocab4, genVocab5, genVocab6, genVocab7, genVocab8, genVocab9, genVocab10, genVocab11, genVocab12, genVocab13, genVocab14, genVocab15, genVocab16, genVocab17, } from "../assets/images";
import "../App.modules.css";
import { bgMusic, numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Cards() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const location = useLocation();
  const { category } = location.state || {};

  const pictureDictionaryByCategory = {
    numbers: [
      { id: 1, color: "#90f1ef", image: number1, cardName: "Metung", word: "Metung", choices: [numberS2, numberS3, numberS1], correctAnswer: numberS1 },
      { id: 2, color: "#ff70a6", image: number2, cardName: "Adwa", word: "Adwa", choices: [numberS6, numberS1, numberS2], correctAnswer: numberS2 },
      { id: 3, color: "#ff9770", image: number3, cardName: "Atlu", word: "Atlu", choices: [numberS3, numberS5, numberS6], correctAnswer: numberS3 },
      { id: 4, color: "#ffd670", image: number4, cardName: "Apat", word: "Apat", choices: [numberS1, numberS4, numberS3], correctAnswer: numberS4 },
      { id: 5, color: "#e9ff70", image: number5, cardName: "Lima", word: "Lima", choices: [numberS5, numberS9, numberS8], correctAnswer: numberS5 },
      { id: 6, color: "#90c3f1", image: number6, cardName: "Anam", word: "Anam", choices: [numberS3, numberS6, numberS7], correctAnswer: numberS6 },
      { id: 7, color: "#8fa6f1", image: number7, cardName: "Pito", word: "Pito", choices: [numberS1, numberS7, numberS5], correctAnswer: numberS7 },
      { id: 8, color: "#f190f1", image: number8, cardName: "Walu", word: "Walu", choices: [numberS1, numberS8, numberS5], correctAnswer: numberS8 },
      { id: 9, color: "#f1a690", image: number9, cardName: "Siam", word: "Siam", choices: [numberS1, numberS9, numberS3], correctAnswer: numberS9 },
      { id: 10, color: "#90f1b5", image: number10, cardName: "Apulu", word: "Apulu", choices: [numberS1, numberS10, numberS9], correctAnswer: numberS10 },
    ],
    colours: [
      { id: 1, color: "#1e90ff", image: color1, cardName: "Mairo", word: "Mairo", choices: [colorS2, colorS3, colorS1], correctAnswer: colorS1 },
      { id: 2, color: "#ffffff", image: color2, cardName: "Tayum", word: "Tayum", choices: [colorS4, colorS5, colorS2], correctAnswer: colorS2 },
      { id: 3, color: "#00ff00", image: color3, cardName: "Aluntiang", word: "Aluntiang", choices: [colorS6, colorS7, colorS3], correctAnswer: colorS3 },
      { id: 4, color: "#ffa500", image: color4, cardName: "Kuliawan", word: "Kuliawan", choices: [colorS8, colorS9, colorS4], correctAnswer: colorS4 },
      { id: 5, color: "#ff69b4", image: color5, cardName: "Diwa", word: "Diwa", choices: [colorS10, colorS11, colorS5], correctAnswer: colorS5 },
      { id: 6, color: "#8b4513", image: color6, cardName: "Komanggi", word: "Komanggi", choices: [colorS1, colorS2, colorS6], correctAnswer: colorS6 },
      { id: 7, color: "#800080", image: color7, cardName: "Ubi", word: "Ubi", choices: [colorS3, colorS4, colorS7], correctAnswer: colorS7 },
      { id: 8, color: "#808080", image: color8, cardName: "Abu", word: "Abu", choices: [colorS5, colorS6, colorS8], correctAnswer: colorS8 },
      { id: 9, color: "#ffff00", image: color9, cardName: "Dilo", word: "Dilo", choices: [colorS7, colorS8, colorS9], correctAnswer: colorS9 },
      { id: 10, color: "#ff0000", image: color10, cardName: "Malutu", word: "Malutu", choices: [colorS9, colorS10, colorS1], correctAnswer: colorS10 },
      { id: 11, color: "#000000", image: color11, cardName: "Tuling", word: "Tuling", choices: [colorS2, colorS3, colorS11], correctAnswer: colorS11 },
    ],
    animals: [
      { id: 1, color: "#90f1ef", image: animal1, cardName: "Asu", word: "Asu", choices: [animalS2, animalS3, animalS1], correctAnswer: animalS1 },
      { id: 2, color: "#ff70a6", image: animal2, cardName: "Baka", word: "Baka", choices: [animalS16, animalS12, animalS2], correctAnswer: animalS2 },
      { id: 3, color: "#ff9770", image: animal3, cardName: "Manuk", word: "Manuk", choices: [animalS3, animalS5, animalS6], correctAnswer: animalS3 },
      { id: 4, color: "#ffd670", image: animal4, cardName: "Dagis", word: "Dagis", choices: [animalS1, animalS4, animalS3], correctAnswer: animalS4 },
      { id: 5, color: "#e9ff70", image: animal5, cardName: "Babi", word: "Babi", choices: [animalS5, animalS9, animalS8], correctAnswer: animalS5 },
      { id: 6, color: "#90c3f1", image: animal6, cardName: "Dangki", word: "Dangki", choices: [animalS11, animalS6, animalS7], correctAnswer: animalS6 },
      { id: 7, color: "#f190f1", image: animal7, cardName: "Talubang", word: "Talubang", choices: [animalS1, animalS7, animalS15], correctAnswer: animalS7 },
      { id: 8, color: "#8fa6f1", image: animal8, cardName: "Gaja", word: "Gaja", choices: [animalS1, animalS8, animalS15], correctAnswer: animalS8 },
      { id: 9, color: "#f1a690", image: animal9, cardName: "Tugak", word: "Tugak", choices: [animalS12, animalS9, animalS13], correctAnswer: animalS9 },
      { id: 10, color: "#ff9770", image: animal10, cardName: "Kambing", word: "Kambing", choices: [animalS3, animalS10, animalS16], correctAnswer: animalS10 },
      { id: 11, color: "#ffd670", image: animal11, cardName: "Kabayu", word: "Kabayu", choices: [animalS11, animalS4, animalS3], correctAnswer: animalS11 },
      { id: 12, color: "#e9ff70", image: animal12, cardName: "Leun", word: "Leun", choices: [animalS5, animalS12, animalS8], correctAnswer: animalS12 },
      { id: 13, color: "#90c3f1", image: animal13, cardName: "Pating", word: "Pating", choices: [animalS13, animalS6, animalS7], correctAnswer: animalS13 },
      { id: 14, color: "#f190f1", image: animal14, cardName: "Tupa", word: "Tupa", choices: [animalS1, animalS14, animalS15], correctAnswer: animalS14 },
      { id: 15, color: "#8fa6f1", image: animal15, cardName: "Lubingan", word: "Lubingan", choices: [animalS4, animalS8, animalS15], correctAnswer: animalS15 },
      { id: 16, color: "#f1a690", image: animal16, cardName: "Balyena", word: "Balyena", choices: [animalS2, animalS5, animalS16], correctAnswer: animalS16 }
    ],
    fruitsVeg: [
      { id: 1, color: "#FF5733", image: fruitVeg1, cardName: "Ubas", word: "Ubas", choices: [fruitVegS1, fruitVegS2, fruitVegS15], correctAnswer: fruitVegS1 },
      { id: 2, color: "#FFBD33", image: fruitVeg2, cardName: "Kalamunding", word: "Kalamunding", choices: [fruitVegS2, fruitVegS1, fruitVegS13], correctAnswer: fruitVegS2 },
      { id: 3, color: "#33FF57", image: fruitVeg3, cardName: "Payung-payungan", word: "Payung-payungan", choices: [fruitVegS4, fruitVegS3, fruitVegS6], correctAnswer: fruitVegS3 },
      { id: 4, color: "#3385FF", image: fruitVeg4, cardName: "Sibuyas", word: "Sibuyas", choices: [fruitVegS4, fruitVegS8, fruitVegS9], correctAnswer: fruitVegS4 },
      { id: 5, color: "#FF33A8", image: fruitVeg5, cardName: "Peras", word: "Peras", choices: [fruitVegS12, fruitVegS10, fruitVegS5], correctAnswer: fruitVegS5 },
      { id: 6, color: "#FF3333", image: fruitVeg6, cardName: "Apol", word: "Apol", choices: [fruitVegS11, fruitVegS6, fruitVegS9], correctAnswer: fruitVegS6 },
      { id: 7, color: "#33FFF2", image: fruitVeg7, cardName: "Saging", word: "Saging", choices: [fruitVegS7, fruitVegS1, fruitVegS10], correctAnswer: fruitVegS7 },
      { id: 8, color: "#9D33FF", image: fruitVeg8, cardName: "Ripolyu", word: "Ripolyu", choices: [fruitVegS15, fruitVegS8, fruitVegS3], correctAnswer: fruitVegS8 },
      { id: 9, color: "#FFAC33", image: fruitVeg9, cardName: "Carrot", word: "Carrot", choices: [fruitVegS6, fruitVegS14, fruitVegS9], correctAnswer: fruitVegS9 },
      { id: 10, color: "#FFC1CC", image: fruitVeg10, cardName: "Mais", word: "Mais", choices: [fruitVegS10, fruitVegS15, fruitVegS12], correctAnswer: fruitVegS10 },
      { id: 11, color: "#33FFD6", image: fruitVeg11, cardName: "Pinya", word: "Pinya", choices: [fruitVegS1, fruitVegS11, fruitVegS2], correctAnswer: fruitVegS11 },
      { id: 12, color: "#B8FF33", image: fruitVeg12, cardName: "Papas", word: "Papas", choices: [fruitVegS2, fruitVegS12, fruitVegS4], correctAnswer: fruitVegS12 },
      { id: 13, color: "#FF6F61", image: fruitVeg13, cardName: "Kulabasa", word: "Kulabasa", choices: [fruitVegS13, fruitVegS3, fruitVegS7], correctAnswer: fruitVegS13 },
      { id: 14, color: "#FF85D6", image: fruitVeg14, cardName: "Istroberi", word: "Istroberi", choices: [fruitVegS9, fruitVegS1, fruitVegS14], correctAnswer: fruitVegS14 },
      { id: 15, color: "#5D33FF", image: fruitVeg15, cardName: "Kamatis", word: "Kamatis", choices: [fruitVegS15, fruitVegS1, fruitVegS5], correctAnswer: fruitVegS15 }
    ],
    genVocab: [
      { id: 1, color: "#FFA07A", image: genVocab1, cardName: "Pagkeran", word: "Pagkeran", choices: [genVocabS2, genVocabS16, genVocabS1], correctAnswer: genVocabS1 },
      { id: 2, color: "#32CD32", image: genVocab2, cardName: "Bisikleta", word: "Bisikleta", choices: [genVocabS5, genVocabS2, genVocabS3], correctAnswer: genVocabS2 },
      { id: 3, color: "#FFD700", image: genVocab3, cardName: "Ayup", word: "Ayup", choices: [genVocabS3, genVocabS4, genVocabS14], correctAnswer: genVocabS3 },
      { id: 4, color: "#00CED1", image: genVocab4, cardName: "Libru", word: "Libru", choices: [genVocabS4, genVocabS5, genVocabS17], correctAnswer: genVocabS4 },
      { id: 5, color: "#F08080", image: genVocab5, cardName: "Kandila", word: "Kandila", choices: [genVocabS6, genVocabS5, genVocabS8], correctAnswer: genVocabS5 },
      { id: 6, color: "#FF69B4", image: genVocab6, cardName: "Kotsi", word: "Kotsi", choices: [genVocabS7, genVocabS15, genVocabS6], correctAnswer: genVocabS6 },
      { id: 7, color: "#DA70D6", image: genVocab7, cardName: "Asan", word: "Asan", choices: [genVocabS7, genVocabS13, genVocabS8], correctAnswer: genVocabS7 },
      { id: 8, color: "#40E0D0", image: genVocab8, cardName: "Bulaklak", word: "Bulaklak", choices: [genVocabS12, genVocabS9, genVocabS8], correctAnswer: genVocabS8 },
      { id: 9, color: "#87CEEB", image: genVocab9, cardName: "Bale", word: "Bale", choices: [genVocabS10, genVocabS9, genVocabS3], correctAnswer: genVocabS9 },
      { id: 10, color: "#F4A460", image: genVocab10, cardName: "Pulo", word: "Pulo", choices: [genVocabS13, genVocabS10, genVocabS2], correctAnswer: genVocabS10 },
      { id: 11, color: "#ADFF2F", image: genVocab11, cardName: "Llave", word: "Llave", choices: [genVocabS12, genVocabS8, genVocabS11], correctAnswer: genVocabS11 },
      { id: 12, color: "#FFA500", image: genVocab12, cardName: "Diaryu", word: "Diaryu", choices: [genVocabS4, genVocabS12, genVocabS13], correctAnswer: genVocabS12 },
      { id: 13, color: "#6495ED", image: genVocab13, cardName: "Lapis", word: "Lapis", choices: [genVocabS13, genVocabS14, genVocabS6], correctAnswer: genVocabS13 },
      { id: 14, color: "#FF6347", image: genVocab14, cardName: "Tanaman", word: "Tanaman", choices: [genVocabS2, genVocabS16, genVocabS14], correctAnswer: genVocabS14 },
      { id: 15, color: "#B0E0E6", image: genVocab15, cardName: "Bundok", word: "Bundok", choices: [genVocabS16, genVocabS15, genVocabS1], correctAnswer: genVocabS15 },
      { id: 16, color: "#FFD1DC", image: genVocab16, cardName: "Tete", word: "Tete", choices: [genVocabS3, genVocabS17, genVocabS16], correctAnswer: genVocabS16 },
      { id: 17, color: "#8A2BE2", image: genVocab17, cardName: "Boti", word: "Boti", choices: [genVocabS17, genVocabS12, genVocabS1], correctAnswer: genVocabS17 }
    ],
  };

  const pictureDictionary = pictureDictionaryByCategory[category] || [];
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [bgAudio] = useState(new Audio(bgMusic));
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const shuffled = [...pictureDictionary].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    if (!showTutorial) {
      bgAudio.loop = true;
      bgAudio.volume = 0.030;
      bgAudio.play().catch((err) => console.error("Audio playback failed:", err));
      return () => {
        bgAudio.pause();
        bgAudio.currentTime = 0;
      };
    }
  }, [showTutorial]);

  const currentItem = questions[currentIndex];

  const handleChoiceSelection = (choice) => {
    if (isPlaying) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
    bgAudio.volume = 0.0040;
    const audio = new Audio(choice);
    setCurrentAudio(audio);
    setIsPlaying(true);
    setSelectedChoice(choice);
    audio.play();
    audio.onended = () => {
      setIsPlaying(false);
      bgAudio.volume = 0.030;
    };
  };

  const handleFinalize = () => {
    if (selectedChoice && !isLocked) {
      setIsLocked(true);
      if (selectedChoice === currentItem.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 1900);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedChoice(null);
      setIsLocked(false);
    } else {
      setShowPopup(true);
    }
  };

  const getResultImage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return excellent;
    if (percentage >= 75) return verygood;
    if (percentage >= 40) return good;
    return okay;
  };

  return (
    <div>
      <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
        <img src={goBack} alt="Go Back" className="goBack-image" />
      </button>
      {showConfetti && (
        <img
          src={confetti}
          alt="Confetti Celebration"
          className="confetti-gif"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "45%",
            height: "45%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
      )}
      {showTutorial ? (
        <div className="popup">
          <h2 className="spellingText">Malaus ka king kards!</h2>
          <video height="420" controls>
            <source src={dictionaryTutorial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="spellingText2">Instructions: Multiple Choice, choose the sound that best represents the card.</p>
          <button className="return-button" onClick={() => setShowTutorial(false)}>Start Game</button>
        </div>
      ) : showPopup ? (
        <div className="popup">
          <img src={getResultImage()} alt="Congrats!" className="result-image" />
          <button className="return-button" onClick={() => navigate(-1)}>Return to Home</button>
        </div>
      ) : (
        <div className="picture-dictionary-container">
          <img src={flashCards} alt="Picture Dictionaries" className="title-image2" />
          <h3 style={{
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "32px",
            fontWeight: "bold",
          }}>
            Score: {score}
          </h3>
          <div className="question-container">
            <div key={currentItem.id} className="item" style={{ backgroundColor: currentItem.color }}>
              <img src={currentItem.image} alt={currentItem.cardName} className="cardImage" />
              <td className="cardName">{currentItem.cardName}</td>
            </div>
            <div className="choices-container">
              {currentItem.choices.map((audioSrc, index) => (
                <button
                  key={index}
                  className={`choice-button 
                    ${isLocked && audioSrc === currentItem.correctAnswer ? "correct" : ""}
                    ${isLocked && selectedChoice === audioSrc && audioSrc !== currentItem.correctAnswer ? "incorrect" : ""}
                    ${!isLocked && selectedChoice === audioSrc ? "selected" : ""}`}
                  onClick={() => handleChoiceSelection(audioSrc)}
                  disabled={isLocked} // Prevent selection after finalizing
                >
                  <img src={speaker} alt="Play Sound" className="speaker-icon" />
                </button>
              ))}
            </div>
          </div>
          <div className="navigation-container">
            <button onClick={handleFinalize} disabled={isLocked || selectedChoice === null} className="nav-button">
              Submit
            </button>
            <button onClick={handleNext} disabled={!isLocked} className="nav-button">
              {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;