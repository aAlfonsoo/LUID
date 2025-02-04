import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  goBack,
  spellingGames,
  excellent,
  verygood,
  good,
  okay,
  number5,
  number6,
  number7,
  number8,
  number9,
  number10,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  animal11,
  animal12,
  animal13,
  animal14,
  animal15,
  animal16,
  fruitVeg10,
  fruitVeg11,
  fruitVeg12,
  fruitVeg13,
  fruitVeg14,
  fruitVeg15,
  genVocab12,
  genVocab13,
  genVocab14,
  genVocab15,
  genVocab16,
  genVocab17,
} from "../assets/images";
import "../App.modules.css";

function Spelling() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // Initialize words data
  const allWords = [
    { word: "APULU", image: number10 },
    { word: "SIAM", image: number9 },
    { word: "WALU", image: number8 },
    { word: "PITO", image: number7 },
    { word: "ANAM", image: number6 },
    { word: "LIMA", image: number5 },
    { word: "TULING", image: color11 },
    { word: "MALUTU", image: color10 },
    { word: "DILO", image: color9 },
    { word: "ABU", image: color8 },
    { word: "UBI", image: color7 },
    { word: "KOMANGGI", image: color6 },
    { word: "BALYENA", image: animal16 },
    { word: "LUBINGAN", image: animal15 },
    { word: "TUPA", image: animal14 },
    { word: "PATING", image: animal13 },
    { word: "LEUN", image: animal12 },
    { word: "KABAYU", image: animal11 },
    { word: "KAMATIS", image: fruitVeg15 },
    { word: "ISTROBERI", image: fruitVeg14 },
    { word: "KULUBASA", image: fruitVeg13 },
    { word: "PAPAS", image: fruitVeg12 },
    { word: "PINYA", image: fruitVeg11 },
    { word: "MAIS", image: fruitVeg10 },
    { word: "BOTI", image: genVocab17 },
    { word: "TETE", image: genVocab16 },
    { word: "BUNDOK", image: genVocab15 },
    { word: "TANAMAN", image: genVocab14 },
    { word: "LAPIS", image: genVocab13 },
    { word: "DIARYU", image: genVocab12 },
  ];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Letters available for selection

  // Add the `words` state
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [prefilledIndexes, setPrefilledIndexes] = useState([]);

  useEffect(() => {
    const shuffledWords = [...allWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, 5); // Select 5 random words
    setWords(selectedWords);

    const firstWord = selectedWords[0].word;
    initializeGame(firstWord);
  }, []);

  const initializeGame = (word) => {
    const wordLength = word.length;

    // Determine prefilled letters
    const minPrefilled = 2;
    const maxPrefilled = Math.floor(wordLength / 2);
    const numPrefilled =
      Math.floor(Math.random() * (maxPrefilled - minPrefilled + 1)) + minPrefilled;

    const tempPrefilledIndexes = [];
    while (tempPrefilledIndexes.length < numPrefilled) {
      const randIndex = Math.floor(Math.random() * wordLength);
      if (!tempPrefilledIndexes.includes(randIndex)) {
        tempPrefilledIndexes.push(randIndex);
      }
    }

    setPrefilledIndexes(tempPrefilledIndexes);

    // Generate random choices
    const tempLetters = [...letters];
    const correctLetters = word.split("");

    let randomChoices = [...correctLetters];
    while (randomChoices.length < wordLength + 2) {
      const randomLetter =
        tempLetters[Math.floor(Math.random() * tempLetters.length)];
      if (!randomChoices.includes(randomLetter)) {
        randomChoices.push(randomLetter);
      }
    }

    setAvailableLetters(randomChoices.sort(() => Math.random() - 0.5));
    setUserInput(
      word.split("").map((letter, index) =>
        tempPrefilledIndexes.includes(index) ? letter : "_"
      )
    );
  };

  const handleLetterClick = (letter) => {
    const emptyIndex = userInput.findIndex(
      (char, index) => char === "_" && !prefilledIndexes.includes(index)
    );
    if (emptyIndex !== -1) {
      const updatedInput = [...userInput];
      updatedInput[emptyIndex] = letter;
      setUserInput(updatedInput);
      setAvailableLetters((prev) => {
        const index = prev.indexOf(letter);
        if (index !== -1) {
          const updatedLetters = [...prev];
          updatedLetters.splice(index, 1);
          return updatedLetters;
        }
        return prev;
      });
    }
  };

  const handleUndoClick = (index) => {
    if (!prefilledIndexes.includes(index) && userInput[index] !== "_") {
      const updatedInput = [...userInput];
      const removedLetter = updatedInput[index];
      updatedInput[index] = "_";
      setUserInput(updatedInput);
      setAvailableLetters((prev) => [...prev, removedLetter]);
    }
  };

  const handleNext = () => {
    const word = userInput.join("");
    if (word === words[currentWordIndex].word) {
      setScore((prev) => prev + 1);
    }
    if (currentWordIndex < words.length - 1) {
      const nextIndex = currentWordIndex + 1;
      setCurrentWordIndex(nextIndex);
      initializeGame(words[nextIndex].word);
    } else {
      setShowPopup(true);
    }
  };

  const getResultImage = () => {
    const percentage = (score / words.length) * 100;
    if (percentage === 100) return excellent;
    if (percentage >= 75) return verygood;
    if (percentage >= 50) return good;
    return okay;
  };

  return (
    <div>
      <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
        <img src={goBack} alt="Go Back" className="goBack-image" />
      </button>

      {showPopup ? (
        <div className="popup">
          <img src={getResultImage()} alt="Congrats!" className="result-image" />
          <button className="return-button" onClick={() => navigate(-1)}>
            Return to Home
          </button>
        </div>
      ) : (
        <div className="spelling-container">
          <img src={spellingGames} alt="Spelling Games" className="title-image-spelling" />
          <h3 style={{ marginTop: "5px" }}>Score: {score}</h3>
          <div className="image-container">
            <img src={words[currentWordIndex]?.image} alt="Image" className="spelling-image" />
          </div>
          <div className="spelling-word">
            {userInput.map((letter, index) => (
              <span
                key={index}
                className={`spelling-letter ${prefilledIndexes.includes(index) ? "prefilled" : ""}`}
                onClick={() => handleUndoClick(index)}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="available-letters">
            {availableLetters.map((letter, index) => (
              <button key={index} className="letter-button" onClick={() => handleLetterClick(letter)}>
                {letter}
              </button>
            ))}
          </div>
          <div className="navigation-container">
            <button
              onClick={handleNext}
              disabled={userInput.includes("_")}
              className="nav-button"
            >
              {currentWordIndex === words.length - 1 ? "Finish Quiz" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Spelling;
