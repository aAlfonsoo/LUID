import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  goBack,
  spellingGames,
  excellent,
  verygood,
  good,
  okay,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  number10,
  color1,  
  color2,  
  color3,  
  color4,  
  color5,  
  color6,  
  color7,  
  color8,  
  color9,  
  color10,  
  color11,  
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6,
  animal7,
  animal8,
  animal9,
  animal10,
  animal11,
  animal12,
  animal13,
  animal14,
  animal15,
  animal16,  
  fruitVeg1,  
  fruitVeg2,  
  fruitVeg3,  
  fruitVeg4,  
  fruitVeg5,  
  fruitVeg6,  
  fruitVeg7,  
  fruitVeg8,  
  fruitVeg9,  
  fruitVeg10,  
  fruitVeg11,  
  fruitVeg12,  
  fruitVeg13,  
  fruitVeg14,  
  fruitVeg15,    
  genVocab1,
  genVocab2,
  genVocab3,
  genVocab4,
  genVocab5,
  genVocab6,
  genVocab7,
  genVocab8,
  genVocab9,
  genVocab10,
  genVocab11,
  genVocab12,
  genVocab13,
  genVocab14,
  genVocab15,
  genVocab16,
  genVocab17,  
  spellingTutorial,
  speaker,
  confetti,
} from "../assets/images";
import "../App.modules.css";
import { bgMusic, numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, phraseS1, phraseS2, phraseS3, phraseS4, phraseS5, phraseS6, phraseS7, phraseS8, phraseS9, phraseS10, phraseS11, phraseS12, phraseS13, phraseS14, phraseS15, phraseS16, phraseS17, phraseS18, phraseS19, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Spelling() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const location = useLocation(); // Get the category from navigation state
  const { category } = location.state || {}; 
  // Initialize words data
 
  // Define category-based word sets
  const wordsByCategory = {
    numbers: [
      { word: "METUNG", image: number1, sound: numberS1 },
      { word: "ADWA", image: number2, sound: numberS2 },
      { word: "ATLU", image: number3, sound: numberS3 },
      { word: "KWATRU", image: number4, sound: numberS4 },
      { word: "SINGKU", image: number5, sound: numberS5 },
      { word: "APULU", image: number10, sound: numberS10 },
      { word: "SIAM", image: number9, sound: numberS9 },
      { word: "WALU", image: number8, sound: numberS8 },
      { word: "PITO", image: number7, sound: numberS7 },
      { word: "ANAM", image: number6, sound: numberS6 },
    ],
    colours: [
      { word: "TULING", image: color11, sound: colorS11 },
      { word: "MALUTU", image: color10, sound: colorS10 },
      { word: "DILO", image: color9, sound: colorS9 },
      { word: "ABU", image: color8, sound: colorS8 },
      { word: "UBI", image: color7, sound: colorS7 },
      { word: "KOMANGGI", image: color6, sound: colorS6 },
      { word: "DIWA", image: color5, sound: colorS5 },
      { word: "KULIAWAN", image: color4, sound: colorS4 },
      { word: "ALUNTIANG", image: color3, sound: colorS3 },
      { word: "TAYUM", image: color2, sound: colorS2 },
      { word: "MAIRO", image: color1, sound: colorS1 },
    ],    
    animals: [
      { word: "ASU", image: animal1, sound: animalS1 },
      { word: "BAKA", image: animal2, sound: animalS2 },
      { word: "MANUK", image: animal3, sound: animalS3 },
      { word: "DAGIS", image: animal4, sound: animalS4 },
      { word: "BABI", image: animal5, sound: animalS5 },
      { word: "DANGKI", image: animal6, sound: animalS6 },
      { word: "MARIPOSA", image: animal7, sound: animalS7 },
      { word: "ELEPANTI", image: animal8, sound: animalS8 },
      { word: "TUGAK", image: animal9, sound: animalS9 },
      { word: "KAMBING", image: animal10, sound: animalS10 },
      { word: "KABAYU", image: animal11, sound: animalS11 },
      { word: "LEUN", image: animal12, sound: animalS12 },
      { word: "PATING", image: animal13, sound: animalS13 },
      { word: "TUPA", image: animal14, sound: animalS14 },
      { word: "LUBINGAN", image: animal15, sound: animalS15 },
      { word: "BALYENA", image: animal16, sound: animalS16 },
    ],    
    fruitsVeg: [
      { word: "UBAS", image: fruitVeg1, sound: fruitVegS1 },
      { word: "KALAMUNDING", image: fruitVeg2, sound: fruitVegS2 },
      { word: "PAYUNG-PAYUNGAN", image: fruitVeg3, sound: fruitVegS3 },
      { word: "SIBUYAS", image: fruitVeg4, sound: fruitVegS4 },
      { word: "PERAS", image: fruitVeg5, sound: fruitVegS5 },
      { word: "APOL", image: fruitVeg6, sound: fruitVegS6 },
      { word: "SAGING", image: fruitVeg7, sound: fruitVegS7 },
      { word: "RIPOLYU", image: fruitVeg8, sound: fruitVegS8 },
      { word: "CARROT", image: fruitVeg9, sound: fruitVegS9 },
      { word: "MAYIS", image: fruitVeg10, sound: fruitVegS10 },
      { word: "PINYA", image: fruitVeg11, sound: fruitVegS11 },
      { word: "PAPAS", image: fruitVeg12, sound: fruitVegS12 },
      { word: "KULABASA", image: fruitVeg13, sound: fruitVegS13 },
      { word: "ISTRABERI", image: fruitVeg14, sound: fruitVegS14 },
      { word: "KAMATIS", image: fruitVeg15, sound: fruitVegS15 },
    ],    
    genVocab: [
      { word: "PAGKERAN", image: genVocab1, sound: genVocabS1 },
      { word: "BISIKLETA", image: genVocab2, sound: genVocabS2 },
      { word: "AYUP", image: genVocab3, sound: genVocabS3 },
      { word: "LIBRU", image: genVocab4, sound: genVocabS4 },
      { word: "KANDILA", image: genVocab5, sound: genVocabS5 },
      { word: "KOTSI", image: genVocab6, sound: genVocabS6 },
      { word: "ASAN", image: genVocab7, sound: genVocabS7 },
      { word: "BULAKLAK", image: genVocab8, sound: genVocabS8 },
      { word: "BALE", image: genVocab9, sound: genVocabS9 },
      { word: "PULO", image: genVocab10, sound: genVocabS10 },
      { word: "LLAVE", image: genVocab11, sound: genVocabS11 },
      { word: "DIARYU", image: genVocab12, sound: genVocabS12 },
      { word: "LAPIS", image: genVocab13, sound: genVocabS13 },
      { word: "TANAMAN", image: genVocab14, sound: genVocabS14 },
      { word: "BUNDOK", image: genVocab15, sound: genVocabS15 },
      { word: "TETE", image: genVocab16, sound: genVocabS16 },
      { word: "BOTI", image: genVocab17, sound: genVocabS17 },
    ],
  };

  // Get words based on category or default to an empty array
  const allWords = wordsByCategory[category] || [];

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Letters available for selection

  // Add the `words` state
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [prefilledIndexes, setPrefilledIndexes] = useState([]);
  const [showTutorial, setShowTutorial] = useState(true);
  const [bgAudio] = useState(new Audio(bgMusic));
  const [currentAudio, setCurrentAudio] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!showTutorial) {
      // Shuffle and select words
      const shuffledWords = [...allWords].sort(() => Math.random() - 0.5);
      const selectedWords = shuffledWords.slice(0, 5); // Select 5 random words
      setWords(selectedWords);

      const firstWord = selectedWords[0].word;
      initializeGame(firstWord);

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
  }, [showTutorial]); // Runs when showTutorial changes

  const playAudio = (audioSrc) => {
    if (!audioSrc) return; // Prevent errors if no audio source exists

    // Stop any currently playing audio
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Lower background music volume
    if (bgAudio) {
      bgAudio.volume = 0.004; // Reduce volume
    }

    // Create new audio instance
    const audio = new Audio(audioSrc);
    audio.play().catch((err) => console.error("Audio playback failed:", err));

    // Restore background music volume when audio ends
    audio.onended = () => {
      if (bgAudio) {
        bgAudio.volume = 0.03; // Restore original volume
      }
      setCurrentAudio(null);
    };

    setCurrentAudio(audio);
  };

  const initializeGame = (word) => {
    const wordLength = word.length;

    // Determine missing letters (at most 3, at least 1)
    const numMissing = Math.floor(Math.random() * 3) + 1; // Randomly choose 1, 2, or 3
    const tempMissingIndexes = [];

    while (tempMissingIndexes.length < numMissing) {
      const randIndex = Math.floor(Math.random() * wordLength);
      if (!tempMissingIndexes.includes(randIndex)) {
        tempMissingIndexes.push(randIndex);
      }
    }

    setPrefilledIndexes(
      word.split("").map((_, index) => (tempMissingIndexes.includes(index) ? null : index))
    );

    // Extract missing letters
    const correctLetters = word.split("");
    const missingLetters = correctLetters.filter((_, index) =>
      tempMissingIndexes.includes(index)
    );

    // Determine extra random letters
    const extraLetterCount = numMissing <= 2 ? 2 : 1;
    const tempLetters = [...letters];
    let extraChoices = [];

    while (extraChoices.length < extraLetterCount) {
      const randomLetter =
        tempLetters[Math.floor(Math.random() * tempLetters.length)];
      if (!correctLetters.includes(randomLetter) && !extraChoices.includes(randomLetter)) {
        extraChoices.push(randomLetter);
      }
    }

    // Combine and shuffle choices
    const randomChoices = [...missingLetters, ...extraChoices].sort(
      () => Math.random() - 0.5
    );

    setAvailableLetters(randomChoices);
    setUserInput(
      correctLetters.map((letter, index) =>
        tempMissingIndexes.includes(index) ? "_" : letter
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

      // Show confetti for a specific time (e.g., 3 seconds)
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 1900); // Adjust time as needed
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
          <h2 className="spellingText">Malaus ka king pamagleletrang piyalung!</h2>
          <video height="420" controls>
            <source src={spellingTutorial} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="spellingText2">Instructions: Fill in the missing letters to complete the words that best represents the image.</p>
          <button className="return-button" onClick={() => setShowTutorial(false)}>
            Start Game
          </button>
        </div>
      ) : showPopup ? (
        <div className="popup">
          <img src={getResultImage()} alt="Congrats!" className="result-image" />
          <button className="return-button" onClick={() => navigate(-1)}>Return to Home</button>
        </div>
      ) : (
        <div className="spelling-container">
          <img src={spellingGames} alt="Spelling Games" className="title-image-spelling" />
          <h3 style={{
            marginTop: "0px",
            marginBottom: "0px",
            fontSize: "32px",
            fontWeight: "bold",
          }}>
            Score: {score}
          </h3>
          <div className="image-container">
            <img src={words[currentWordIndex]?.image} alt="Item Image" className="spelling-image" />
            <img
              src={speaker}
              alt="Play Sound"
              className="speaker-icon"
              onClick={() => playAudio(words[currentWordIndex]?.sound)}
            />

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
