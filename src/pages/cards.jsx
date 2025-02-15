import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confetti, speaker, dictionaryTutorial, goBack, flashCards, excellent, verygood, good, okay, number1, number2, number3, number4, number5, number6, number7, color1, color2, color3, color4, color7, color10, color11, animal1, animal2, animal3, animal4, animal5, animal6, animal12, fruitVeg1, fruitVeg2, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg10, genVocab1, genVocab2, genVocab3, genVocab6, genVocab7, genVocab9, genVocab11 } from "../assets/images";
import "../App.modules.css";
import { bgMusic, numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, phraseS1, phraseS2, phraseS3, phraseS4, phraseS5, phraseS6, phraseS7, phraseS8, phraseS9, phraseS10, phraseS11, phraseS12, phraseS13, phraseS14, phraseS15, phraseS16, phraseS17, phraseS18, phraseS19, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Cards() {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const pictureDictionary = [
    {
      id: 1,
      color: "#90f1ef",
      image: animal1,
      cardName: "Asu",
      word: "Asu",
      choices: [animalS2, animalS3, animalS1],
      correctAnswer: animalS1,
    },
    {
      id: 2,
      color: "#ff70a6",
      image: animal2,
      cardName: "Baka",
      word: "Baka",
      choices: [animalS16, animalS12, animalS2],
      correctAnswer: animalS2,
    },
    {
      id: 3,
      color: "#ff9770",
      image: animal3,
      cardName: "Manuk",
      word: "Manuk",
      choices: [animalS3, animalS5, animalS6],
      correctAnswer: animalS3,
    },
    {
      id: 4,
      color: "#ffd670",
      image: animal4,
      cardName: "Dagis",
      word: "Dagis",
      choices: [animalS1, animalS4, animalS3],
      correctAnswer: animalS4,
    },
    {
      id: 5,
      color: "#e9ff70",
      image: animal5,
      cardName: "Babi",
      word: "Babi",
      choices: [animalS5, animalS9, animalS8],
      correctAnswer: animalS5,
    },
    {
      id: 6,
      color: "#90c3f1",
      image: animal6,
      cardName: "Dangki",
      word: "Dangki",
      choices: [animalS11, animalS6, animalS7],
      correctAnswer: animalS6,
    },
    {
      id: 12,
      color: "#8fa6f1",
      image: animal12,
      cardName: "Leun",
      word: "Leun",
      choices: [animalS1, animalS12, animalS15],
      correctAnswer: animalS12,
    },
    {
      id: 17,
      color: "#d3f18f",
      image: fruitVeg1,
      cardName: "Ubas",
      word: "Ubas",
      choices: [fruitVegS12, fruitVegS11, fruitVegS1],
      correctAnswer: fruitVegS1,
    },
    {
      id: 18,
      color: "#8ff1df",
      image: fruitVeg2,
      cardName: "Kalamunding",
      word: "Kalamunding",
      choices: [fruitVegS2, fruitVegS4, fruitVegS1],
      correctAnswer: fruitVegS2,
    },
    {
      id: 20,
      color: "#bd90f1",
      image: fruitVeg4,
      cardName: "Sibuyas",
      word: "Sibuyas",
      choices: [fruitVegS15, fruitVegS13, fruitVegS4],
      correctAnswer: fruitVegS4,
    },
    {
      id: 21,
      color: "#f190bd",
      image: fruitVeg5,
      cardName: "Peras",
      word: "Peras",
      choices: [fruitVegS5, fruitVegS14, fruitVegS15],
      correctAnswer: fruitVegS5,
    },
    {
      id: 22,
      color: "#f1d690",
      image: fruitVeg6,
      cardName: "Apol",
      word: "Apol",
      choices: [fruitVegS6, fruitVegS7, fruitVegS9],
      correctAnswer: fruitVegS6,
    },
    {
      id: 23,
      color: "#c4f190",
      image: fruitVeg7,
      cardName: "Saging",
      word: "Saging",
      choices: [fruitVegS7, fruitVegS8, fruitVegS11],
      correctAnswer: fruitVegS7,
    },
    {
      id: 26,
      color: "#af90f1",
      image: fruitVeg10,
      cardName: "Mais",
      word: "Mais",
      choices: [fruitVegS10, fruitVegS13, fruitVegS1],
      correctAnswer: fruitVegS10,
    },
    {
      id: 32,
      color: "#909bf1",
      image: genVocab1,
      cardName: "Pagkeran",
      word: "Pagkeran",
      choices: [genVocabS1, genVocabS11, genVocabS17],
      correctAnswer: genVocabS1,
    },
    {
      id: 33,
      color: "#b390f1",
      image: genVocab2,
      cardName: "Bisikleta",
      word: "Bisikleta",
      choices: [genVocabS1, genVocabS2, genVocabS16],
      correctAnswer: genVocabS2,
    },
    {
      id: 34,
      color: "#f190b3",
      image: genVocab3,
      cardName: "Ayup",
      word: "Ayup",
      choices: [genVocabS16, genVocabS4, genVocabS3],
      correctAnswer: genVocabS3,
    },
    {
      id: 37,
      color: "#90f1e4",
      image: genVocab6,
      cardName: "Kotsi",
      word: "Kotsi",
      choices: [genVocabS5, genVocabS6, genVocabS3],
      correctAnswer: genVocabS6,
    },
    {
      id: 38,
      color: "#8b90f1",
      image: genVocab7,
      cardName: "Asan",
      word: "Asan",
      choices: [genVocabS7, genVocabS17, genVocabS1],
      correctAnswer: genVocabS7,
    },
    {
      id: 40,
      color: "#f190c6",
      image: genVocab9,
      cardName: "Bale",
      word: "Bale",
      choices: [genVocabS13, genVocabS9, genVocabS14],
      correctAnswer: genVocabS9,
    },
    {
      id: 42,
      color: "#e4f190",
      image: genVocab11,
      cardName: "Llave",
      word: "Llave",
      choices: [genVocabS10, genVocabS1, genVocabS11],
      correctAnswer: genVocabS11,
    },
  ];


  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null); // Store currently playing audio
  const [bgAudio] = useState(new Audio(bgMusic));
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const shuffled = [...pictureDictionary].sort(() => Math.random() - 0.5).slice(0, 10); // Limit to 10 items
    setQuestions(shuffled);
    if (!showTutorial) {
      // Play background music
      bgAudio.loop = true;
      bgAudio.volume = 0.030; // Adjust volume if needed
      bgAudio.play().catch((err) => console.error("Audio playback failed:", err));
      // Cleanup function: stop audio when leaving
      return () => {
        bgAudio.pause();
        bgAudio.currentTime = 0;
      };
    }
  }, [showTutorial]);

  const currentItem = questions[currentIndex];

  // Handle playing audio and selection
  const handleChoiceSelection = (choice) => {
    if (isPlaying) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }

    // Lower the background music volume
    bgAudio.volume = 0.0040; // Adjust to a lower value

    const audio = new Audio(choice);
    setCurrentAudio(audio);
    setIsPlaying(true);
    setSelectedChoice(choice);

    audio.play();
    audio.onended = () => {
      setIsPlaying(false);
      bgAudio.volume = 0.030; // Restore original volume
    };
  };


  // Finalize answer when submitting
  const handleFinalize = () => {
    if (selectedChoice && !isLocked) {
      setIsLocked(true);
      if (selectedChoice === currentItem.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
        // Show confetti for a specific time (e.g., 3 seconds)
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
        }, 1900); // Adjust time as needed
      }
    }
  };

  // Move to the next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedChoice(null);
      setIsLocked(false);
    } else {
      setShowPopup(true);
    }
  };

  // Get result image
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