import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confetti, dictionaryTutorial, goBack, pictureDictionaries, excellent, verygood, good, okay, number1, number2, number3, number4, number5, number6, number7, color1, color2, color3, color4, color7, color10, color11, animal1, animal2, animal3, animal4, animal5, animal6, animal12, fruitVeg1, fruitVeg2, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg10, genVocab1, genVocab2, genVocab3, genVocab6, genVocab7, genVocab9, genVocab11 } from "../assets/images";
import "../App.modules.css";
import { bgMusic, numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, phraseS1, phraseS2, phraseS3, phraseS4, phraseS5, phraseS6, phraseS7, phraseS8, phraseS9, phraseS10, phraseS11, phraseS12, phraseS13, phraseS14, phraseS15, phraseS16, phraseS17, phraseS18, phraseS19, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Dictionaries() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const pictureDictionary = [
        { id: 1, word: "Metung", image: number1, sound: numberS1, choices: ["Atlu", "Apat", "Adwa", "Metung"], correctAnswer: "Metung" },
        { id: 2, word: "Adwa", image: number2, sound: numberS2, choices: ["Adwa", "Metung", "Atlu", "Apat"], correctAnswer: "Adwa" },
        { id: 3, word: "Atlu", image: number3, sound: numberS3, choices: ["Apat", "Adwa", "Atlu", "Metung"], correctAnswer: "Atlu" },
        { id: 4, word: "Apat", image: number4, sound: numberS4, choices: ["Apat", "Metung", "Atlu", "Adwa"], correctAnswer: "Apat" },
        { id: 5, word: "Lima", image: number5, sound: numberS5, choices: ["Walu", "Anam", "Pito", "Lima"], correctAnswer: "Lima" },
        { id: 6, word: "Anam", image: number6, sound: numberS6, choices: ["Anam", "Pito", "Walu", "Lima"], correctAnswer: "Anam" },
        { id: 7, word: "Pito", image: number7, sound: numberS7, choices: ["Siyam", "Pito", "Anam", "Walu"], correctAnswer: "Pito" },
        { id: 8, word: "Mairo", image: color1, sound: colorS1, choices: ["Malutu", "Tayum", "Mairo", "Aluntiang"], correctAnswer: "Mairo" },
        { id: 9, word: "Tayum", image: color2, sound: colorS2, choices: ["Mairo", "Tayum", "Malutu", "Aluntiang"], correctAnswer: "Tayum" },
        { id: 10, word: "Aluntiang", image: color3, sound: colorS3, choices: ["Malutu", "Tayum", "Aluntiang", "Kuliawan"], correctAnswer: "Aluntiang" },
        { id: 11, word: "Kuliawan", image: color4, sound: colorS4, choices: ["Aluntiang", "Kuliawan", "Malutu", "Mairo"], correctAnswer: "Kuliawan" },
        { id: 12, word: "Ubi", image: color7, sound: colorS7, choices: ["Mairo", "Malutu", "Ubi", "Tayum"], correctAnswer: "Ubi" },
        { id: 13, word: "Malutu", image: color10, sound: colorS10, choices: ["Malutu", "Tayum", "Kuliawan", "Aluntiang"], correctAnswer: "Malutu" },
        { id: 14, word: "Tuling", image: color11, sound: colorS11, choices: ["Kuliawan", "Aluntiang", "Malutu", "Tuling"], correctAnswer: "Tuling" },
        { id: 15, word: "Asu", image: animal1, sound: animalS1, choices: ["Dagis", "Baka", "Manuk", "Asu"], correctAnswer: "Asu" },
        { id: 16, word: "Baka", image: animal2, sound: animalS2, choices: ["Manuk", "Asu", "Dagis", "Baka"], correctAnswer: "Baka" },
        { id: 17, word: "Manuk", image: animal3, sound: animalS3, choices: ["Manuk", "Asu", "Baka", "Dagis"], correctAnswer: "Manuk" },
        { id: 18, word: "Dagis", image: animal4, sound: animalS4, choices: ["Baka", "Asu", "Manuk", "Dagis"], correctAnswer: "Dagis" },
        { id: 19, word: "Babi", image: animal5, sound: animalS5, choices: ["Dagis", "Baka", "Babi", "Asu"], correctAnswer: "Babi" },
        { id: 20, word: "Dangki", image: animal6, sound: animalS6, choices: ["Babi", "Dangki", "Asu", "Manuk"], correctAnswer: "Dangki" },
        { id: 21, word: "Leun", image: animal12, sound: animalS12, choices: ["Baka", "Leun", "Dagis", "Manuk"], correctAnswer: "Leun" },
        { id: 22, word: "Ubas", image: fruitVeg1, sound: fruitVegS1, choices: ["Kalamunding", "Saging", "Ubas", "Sibuyas"], correctAnswer: "Ubas" },
        { id: 23, word: "Kalamunding", image: fruitVeg2, sound: fruitVegS2, choices: ["Kalamunding", "Ubas", "Saging", "Sibuyas"], correctAnswer: "Kalamunding" },
        { id: 24, word: "Sibuyas", image: fruitVeg4, sound: fruitVegS4, choices: ["Saging", "Kalamunding", "Ubas", "Sibuyas"], correctAnswer: "Sibuyas" },
        { id: 25, word: "Peras", image: fruitVeg5, sound: fruitVegS5, choices: ["Saging", "Mais", "Peras", "Ubas"], correctAnswer: "Peras" },
        { id: 26, word: "Apol", image: fruitVeg6, sound: fruitVegS6, choices: ["Mais", "Saging", "Peras", "Apol"], correctAnswer: "Apol" },
        { id: 27, word: "Saging", image: fruitVeg7, sound: fruitVegS7, choices: ["Peras", "Apol", "Mais", "Saging"], correctAnswer: "Saging" },
        { id: 28, word: "Mais", image: fruitVeg10, sound: fruitVegS10, choices: ["Saging", "Mais", "Apol", "Peras"], correctAnswer: "Mais" }
    ];


    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [showTutorial, setShowTutorial] = useState(true);
    const [bgAudio] = useState(new Audio(bgMusic));
    const [currentAudio, setCurrentAudio] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setQuestions([...pictureDictionary].sort(() => Math.random() - 0.5).slice(0, 15));
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
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Reset the previous audio
        }

        setSelectedChoice(choice);
        if (choice === currentItem.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
            // Show confetti for a specific time (e.g., 3 seconds)
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 1900); // Adjust time as needed
        }

        bgAudio.volume = 0.004; // Lower background music volume

        const soundEffect = new Audio(currentItem.sound);
        setCurrentAudio(soundEffect); // Store the new audio reference
        soundEffect.play();
        soundEffect.onended = () => {
            bgAudio.volume = 0.030; // Restore background music volume
            setCurrentAudio(null); // Clear the reference when the sound ends
        };
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            setSelectedChoice(null);
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
                    <h2 className="spellingText">Malaus ka king diksyunaryung letratu!</h2>
                    <video height="420" controls>
                        <source src={dictionaryTutorial} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className="spellingText2">Instructions: Multiple Choice, choose the words that best represent the image.</p>
                    <button className="return-button" onClick={() => setShowTutorial(false)}>Start Game</button>
                </div>
            ) : showPopup ? (
                <div className="popup">
                    <img src={getResultImage()} alt="Congrats!" className="result-image" />
                    <button className="return-button" onClick={() => navigate(-1)}>Return to Home</button>
                </div>
            ) : (
                <div className="picture-dictionary-container">
                    <img src={pictureDictionaries} alt="Picture Dictionaries" className="title-image" />
                    <h3 style={{
                        marginTop: "0px",
                        marginBottom: "0px",
                        fontSize: "32px",
                        fontWeight: "bold",
                    }}>
                        Score: {score}
                    </h3>
                    <div className="question-container">
                        <img src={currentItem.image} alt="Image" className="question-image" />
                        <div className="choices-container">
                            {currentItem.choices.map((choice, index) => (
                                <button
                                    key={index}
                                    className={`choice-button ${selectedChoice
                                        ? choice === currentItem.correctAnswer
                                            ? "correct"
                                            : selectedChoice === choice
                                                ? "incorrect"
                                                : ""
                                        : ""
                                        }`}
                                    onClick={() => handleChoiceSelection(choice)}
                                    disabled={selectedChoice !== null}
                                >
                                    {choice}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={handleNext}
                            disabled={selectedChoice === null}
                            className="nav-button"
                        >
                            {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dictionaries;
