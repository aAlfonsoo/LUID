import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goBack, pictureDictionaries, excellent, verygood, good, okay, number1, number2, number3, number4, number5, number6, number7, color1, color2, color3, color4, color7, color10, color11, animal1, animal2, animal3, animal4, animal5, animal6, animal12, fruitVeg1, fruitVeg2, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg10, genVocab1, genVocab2, genVocab3, genVocab6, genVocab7, genVocab9, genVocab11 } from "../assets/images";
import "../App.modules.css";

function Dictionaries() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const pictureDictionary = [
        { id: 1, word: "Metung", image: number1, choices: ["Atlu", "Apat", "Adwa", "Metung"], correctAnswer: "Metung" },
        { id: 2, word: "Adwa", image: number2, choices: ["Adwa", "Metung", "Atlu", "Apat"], correctAnswer: "Adwa" },
        { id: 3, word: "Atlu", image: number3, choices: ["Apat", "Adwa", "Atlu", "Metung"], correctAnswer: "Atlu" },
        { id: 4, word: "Apat", image: number4, choices: ["Apat", "Metung", "Atlu", "Adwa"], correctAnswer: "Apat" },
        { id: 5, word: "Lima", image: number5, choices: ["Walu", "Anam", "Pito", "Lima"], correctAnswer: "Lima" },
        { id: 6, word: "Anam", image: number6, choices: ["Anam", "Pito", "Walu", "Lima"], correctAnswer: "Anam" },
        { id: 7, word: "Pito", image: number7, choices: ["Siyam", "Pito", "Anam", "Walu"], correctAnswer: "Pito" },
        { id: 8, word: "Mairo", image: color1, choices: ["Malutu", "Tayum", "Mairo", "Aluntiang"], correctAnswer: "Mairo" },
        { id: 9, word: "Tayum", image: color2, choices: ["Mairo", "Tayum", "Malutu", "Aluntiang"], correctAnswer: "Tayum" },
        { id: 10, word: "Aluntiang", image: color3, choices: ["Malutu", "Tayum", "Aluntiang", "Kuliawan"], correctAnswer: "Aluntiang" },
        { id: 11, word: "Kuliawan", image: color4, choices: ["Aluntiang", "Kuliawan", "Malutu", "Mairo"], correctAnswer: "Kuliawan" },
        { id: 12, word: "Ubi", image: color7, choices: ["Mairo", "Malutu", "Ubi", "Tayum"], correctAnswer: "Ubi" },
        { id: 13, word: "Malutu", image: color10, choices: ["Malutu", "Tayum", "Kuliawan", "Aluntiang"], correctAnswer: "Malutu" },
        { id: 14, word: "Tuling", image: color11, choices: ["Kuliawan", "Aluntiang", "Malutu", "Tuling"], correctAnswer: "Tuling" },
        { id: 15, word: "Asu", image: animal1, choices: ["Dagis", "Baka", "Manuk", "Asu"], correctAnswer: "Asu" },
        { id: 16, word: "Baka", image: animal2, choices: ["Manuk", "Asu", "Dagis", "Baka"], correctAnswer: "Baka" },
        { id: 17, word: "Manuk", image: animal3, choices: ["Manuk", "Asu", "Baka", "Dagis"], correctAnswer: "Manuk" },
        { id: 18, word: "Dagis", image: animal4, choices: ["Baka", "Asu", "Manuk", "Dagis"], correctAnswer: "Dagis" },
        { id: 19, word: "Babi", image: animal5, choices: ["Dagis", "Baka", "Babi", "Asu"], correctAnswer: "Babi" },
        { id: 20, word: "Dangki", image: animal6, choices: ["Babi", "Dangki", "Asu", "Manuk"], correctAnswer: "Dangki" },
        { id: 21, word: "Leun", image: animal12, choices: ["Baka", "Leun", "Dagis", "Manuk"], correctAnswer: "Leun" },
        { id: 22, word: "Ubas", image: fruitVeg1, choices: ["Kalamunding", "Saging", "Ubas", "Sibuyas"], correctAnswer: "Ubas" },
        { id: 23, word: "Kalamunding", image: fruitVeg2, choices: ["Kalamunding", "Ubas", "Saging", "Sibuyas"], correctAnswer: "Kalamunding" },
        { id: 24, word: "Sibuyas", image: fruitVeg4, choices: ["Saging", "Kalamunding", "Ubas", "Sibuyas"], correctAnswer: "Sibuyas" },
        { id: 25, word: "Peras", image: fruitVeg5, choices: ["Saging", "Mais", "Peras", "Ubas"], correctAnswer: "Peras" },
        { id: 26, word: "Apol", image: fruitVeg6, choices: ["Mais", "Saging", "Peras", "Apol"], correctAnswer: "Apol" },
        { id: 27, word: "Saging", image: fruitVeg7, choices: ["Peras", "Apol", "Mais", "Saging"], correctAnswer: "Saging" },
        { id: 28, word: "Mais", image: fruitVeg10, choices: ["Saging", "Mais", "Apol", "Peras"], correctAnswer: "Mais" },
        { id: 29, word: "Pagkeran", image: genVocab1, choices: ["Pagkeran", "Ayup", "Bisikleta", "Kotsi"], correctAnswer: "Pagkeran" },
        { id: 30, word: "Bisikleta", image: genVocab2, choices: ["Bisikleta", "Pagkeran", "Ayup", "Kotsi"], correctAnswer: "Bisikleta" },
        { id: 31, word: "Ayup", image: genVocab3, choices: ["Ayup", "Pagkeran", "Kotsi", "Bisikleta"], correctAnswer: "Ayup" },
        { id: 32, word: "Kotsi", image: genVocab6, choices: ["Kotsi", "Pagkeran", "Bisikleta", "Ayup"], correctAnswer: "Kotsi" },
        { id: 33, word: "Asan", image: genVocab7, choices: ["Asan", "Llave", "Bale", "Ayup"], correctAnswer: "Asan" },
        { id: 34, word: "Bale", image: genVocab9, choices: ["Llave", "Bale", "Ayup", "Asan"], correctAnswer: "Bale" },
        { id: 35, word: "Llave", image: genVocab11, choices: ["Ayup", "Asan", "Bale", "Llave"], correctAnswer: "Llave" }
    ];


    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(false);


    useEffect(() => {
        const shuffled = [...pictureDictionary]
            .sort(() => Math.random() - 0.5)
            .slice(0, 25);
        setQuestions(shuffled);
    }, []);

    const currentItem = questions[currentIndex];

    const handleChoiceSelection = (choice) => {
        setSelectedChoice(choice);
        if (choice === currentItem.correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }
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
            <button className="image-button goBack" onClick={handleGoBack}>
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
                currentItem && (
                    <div className="picture-dictionary-container">
                        <img src={pictureDictionaries} alt="Picture Dictionaries" className="title-image" />
                        <h3 style={{ marginTop: "-150px" }}>Score: {score}</h3>
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
                        <div className="navigation-container">
                            <button
                                onClick={handleNext}
                                disabled={selectedChoice === null}
                                className="nav-button"
                            >
                                {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next"}
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Dictionaries;