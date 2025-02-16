import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { confetti, dictionaryTutorial, goBack, pictureDictionaries, excellent, verygood, good, okay, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, fruitVeg1, fruitVeg2, fruitVeg3, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg8, fruitVeg9, fruitVeg10, fruitVeg11, fruitVeg12, fruitVeg13, fruitVeg14, fruitVeg15, genVocab1, genVocab2, genVocab3, genVocab4, genVocab5, genVocab6, genVocab7, genVocab8, genVocab9, genVocab10, genVocab11, genVocab12, genVocab13, genVocab14, genVocab15, genVocab16, genVocab17, } from "../assets/images";
import "../App.modules.css";
import { bgMusic, numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Dictionaries() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    const location = useLocation();
    const { category } = location.state || {};

    const pictureDictionaryByCategory = {
        numbers: [
            { id: 1, word: "Metung", image: number1, sound: numberS1, choices: ["Atlu", "Apat", "Adwa", "Metung"], correctAnswer: "Metung" },
            { id: 2, word: "Adwa", image: number2, sound: numberS2, choices: ["Adwa", "Metung", "Atlu", "Apat"], correctAnswer: "Adwa" },
            { id: 3, word: "Atlu", image: number3, sound: numberS3, choices: ["Apat", "Adwa", "Atlu", "Metung"], correctAnswer: "Atlu" },
            { id: 4, word: "Apat", image: number4, sound: numberS4, choices: ["Apat", "Metung", "Atlu", "Adwa"], correctAnswer: "Apat" },
            { id: 5, word: "Lima", image: number5, sound: numberS5, choices: ["Walu", "Anam", "Pito", "Lima"], correctAnswer: "Lima" },
            { id: 6, word: "Anam", image: number6, sound: numberS6, choices: ["Anam", "Pito", "Walu", "Lima"], correctAnswer: "Anam" },
            { id: 7, word: "Pito", image: number7, sound: numberS7, choices: ["Siyam", "Pito", "Anam", "Walu"], correctAnswer: "Pito" },
            { id: 8, word: "Walu", image: number8, sound: numberS8, choices: ["Walu", "Pito", "Siyam", "Anam"], correctAnswer: "Walu" },
            { id: 9, word: "Siam", image: number9, sound: numberS9, choices: ["Siyam", "Walu", "Pito", "Apat"], correctAnswer: "Siyam" },
            { id: 10, word: "Apulu", image: number10, sound: numberS10, choices: ["Lima", "Apulu", "Anam", "Siyam"], correctAnswer: "Apulu" }
        ],
        colours: [
            { id: 1, word: "Mairo", image: color1, sound: colorS1, choices: ["Mairo", "Tayum", "Aluntiang", "Kuliawan"], correctAnswer: "Mairo" },
            { id: 2, word: "Tayum", image: color2, sound: colorS2, choices: ["Tayum", "Mairo", "Komanggi", "Ubi"], correctAnswer: "Tayum" },
            { id: 3, word: "Aluntiang", image: color3, sound: colorS3, choices: ["Dilo", "Diwa", "Aluntiang", "Tayum"], correctAnswer: "Aluntiang" },
            { id: 4, word: "Kuliawan", image: color4, sound: colorS4, choices: ["Kuliawan", "Malutu", "Komanggi", "Ubi"], correctAnswer: "Kuliawan" },
            { id: 5, word: "Diwa", image: color5, sound: colorS5, choices: ["Abu", "Dilo", "Diwa", "Tayum"], correctAnswer: "Diwa" },
            { id: 6, word: "Komanggi", image: color6, sound: colorS6, choices: ["Komanggi", "Ubi", "Tayum", "Dilo"], correctAnswer: "Komanggi" },
            { id: 7, word: "Ubi", image: color7, sound: colorS7, choices: ["Malutu", "Dilo", "Ubi", "Mairo"], correctAnswer: "Ubi" },
            { id: 8, word: "Abu", image: color8, sound: colorS8, choices: ["Tayum", "Diwa", "Abu", "Aluntiang"], correctAnswer: "Abu" },
            { id: 9, word: "Dilo", image: color9, sound: colorS9, choices: ["Dilo", "Komanggi", "Ubi", "Kuliawan"], correctAnswer: "Dilo" },
            { id: 10, word: "Malutu", image: color10, sound: colorS10, choices: ["Malutu", "Tayum", "Aluntiang", "Dilo"], correctAnswer: "Malutu" },
            { id: 11, word: "Tuling", image: color11, sound: colorS11, choices: ["Abu", "Malutu", "Tuling", "Mairo"], correctAnswer: "Tuling" }
        ],
        animals: [
            { id: 1, word: "Asu", image: animal1, sound: animalS1, choices: ["Asu", "Baka", "Manuk", "Dagis"], correctAnswer: "Asu" },
            { id: 2, word: "Baka", image: animal2, sound: animalS2, choices: ["Baka", "Asu", "Manuk", "Tupa"], correctAnswer: "Baka" },
            { id: 3, word: "Manuk", image: animal3, sound: animalS3, choices: ["Manuk", "Dagis", "Baka", "Asu"], correctAnswer: "Manuk" },
            { id: 4, word: "Dagis", image: animal4, sound: animalS4, choices: ["Baboy", "Dagis", "Asu", "Manuk"], correctAnswer: "Dagis" },
            { id: 5, word: "Babi", image: animal5, sound: animalS5, choices: ["Babi", "Dangki", "Dagis", "Tugak"], correctAnswer: "Babi" },
            { id: 6, word: "Dangki", image: animal6, sound: animalS6, choices: ["Tugak", "Dangki", "Talubang", "Babi"], correctAnswer: "Dangki" },
            { id: 7, word: "Talubang", image: animal7, sound: animalS7, choices: ["Elepanti", "Talubang", "Tugak", "Babi"], correctAnswer: "Talubang" },
            { id: 8, word: "Elepanti", image: animal8, sound: animalS8, choices: ["Elepanti", "Talubang", "Kambing", "Kabayo"], correctAnswer: "Elepanti" },
            { id: 9, word: "Tugak", image: animal9, sound: animalS9, choices: ["Tugak", "Talubang", "Kabayo", "Leun"], correctAnswer: "Tugak" },
            { id: 10, word: "Kambing", image: animal10, sound: animalS10, choices: ["Kambing", "Kabayo", "Tupa", "Baka"], correctAnswer: "Kambing" },
            { id: 11, word: "Kabayu", image: animal11, sound: animalS11, choices: ["Kabayu", "Leun", "Limpasut", "Balyena"], correctAnswer: "Kabayu" },
            { id: 12, word: "Leun", image: animal12, sound: animalS12, choices: ["Leun", "Tupa", "Babi", "Limpasut"], correctAnswer: "Leun" },
            { id: 13, word: "Limpasut", image: animal13, sound: animalS13, choices: ["Limpasut", "Balyena", "Tupa", "Ubigan"], correctAnswer: "Limpasut" },
            { id: 14, word: "Tupa", image: animal14, sound: animalS14, choices: ["Tupa", "Ubigan", "Leun", "Kabayu"], correctAnswer: "Tupa" },
            { id: 15, word: "Ubigan", image: animal15, sound: animalS15, choices: ["Ubigan", "Balyena", "Tupa", "Limpasut"], correctAnswer: "Ubigan" },
            { id: 16, word: "Balyena", image: animal16, sound: animalS16, choices: ["Balyena", "Tupa", "Ubigan", "Leun"], correctAnswer: "Balyena" }
        ],
        fruitsVeg: [
            { id: 1, word: "Ubas", image: fruitVeg1, sound: fruitVegS1, choices: ["Ubas", "Kalamunding", "Peras", "Sibuyas"], correctAnswer: "Ubas" },
            { id: 2, word: "Kalamunding", image: fruitVeg2, sound: fruitVegS2, choices: ["Kalamunding", "Peras", "Sibuyas", "Apol"], correctAnswer: "Kalamunding" },
            { id: 3, word: "Payung-payungan", image: fruitVeg3, sound: fruitVegS3, choices: ["Peras", "Sibuyas", "Payung-payungan", "Apol"], correctAnswer: "Payung-payungan" },
            { id: 4, word: "Sibuyas", image: fruitVeg4, sound: fruitVegS4, choices: ["Sibuyas", "Payung-payungan", "Apol", "Saging"], correctAnswer: "Sibuyas" },
            { id: 5, word: "Peras", image: fruitVeg5, sound: fruitVegS5, choices: ["Apol", "Saging", "Peras", "Ripolyu"], correctAnswer: "Peras" },
            { id: 6, word: "Apol", image: fruitVeg6, sound: fruitVegS6, choices: ["Saging", "Ripolyu", "Apol", "Carrot"], correctAnswer: "Apol" },
            { id: 7, word: "Saging", image: fruitVeg7, sound: fruitVegS7, choices: ["Ripolyu", "Carrot", "Saging", "Mayis"], correctAnswer: "Saging" },
            { id: 8, word: "Ripolyu", image: fruitVeg8, sound: fruitVegS8, choices: ["Carrot", "Mayis", "Ripolyu", "Pinya"], correctAnswer: "Ripolyu" },
            { id: 9, word: "Carrot", image: fruitVeg9, sound: fruitVegS9, choices: ["Mayis", "Pinya", "Carrot", "Papas"], correctAnswer: "Carrot" },
            { id: 10, word: "Mayis", image: fruitVeg10, sound: fruitVegS10, choices: ["Pinya", "Papas", "Mayis", "Kulubasa"], correctAnswer: "Mayis" },
            { id: 11, word: "Pinya", image: fruitVeg11, sound: fruitVegS11, choices: ["Papas", "Kulubasa", "Pinya", "Istroberi"], correctAnswer: "Pinya" },
            { id: 12, word: "Papas", image: fruitVeg12, sound: fruitVegS12, choices: ["Kulubasa", "Istroberi", "Papas", "Kamatis"], correctAnswer: "Papas" },
            { id: 13, word: "Kulubasa", image: fruitVeg13, sound: fruitVegS13, choices: ["Istroberi", "Kamatis", "Kulubasa", "Ubas"], correctAnswer: "Kulubasa" },
            { id: 14, word: "Istroberi", image: fruitVeg14, sound: fruitVegS14, choices: ["Kamatis", "Ubas", "Istroberi", "Kalamunding"], correctAnswer: "Istroberi" },
            { id: 15, word: "Kamatis", image: fruitVeg15, sound: fruitVegS15, choices: ["Ubas", "Kalamunding", "Kamatis", "Payung-payungan"], correctAnswer: "Kamatis" }
        ],
        genVocab: [
            { id: 1, word: "Pagkeran", image: genVocab1, sound: genVocabS1, choices: ["Pagkeran", "Bisikleta", "Ayup", "Libru"], correctAnswer: "Pagkeran" },
            { id: 2, word: "Bisikleta", image: genVocab2, sound: genVocabS2, choices: ["Bisikleta", "Ayup", "Libru", "Kandila"], correctAnswer: "Bisikleta" },
            { id: 3, word: "Ayup", image: genVocab3, sound: genVocabS3, choices: ["Ayup", "Libru", "Kandila", "Kotsi"], correctAnswer: "Ayup" },
            { id: 4, word: "Libru", image: genVocab4, sound: genVocabS4, choices: ["Libru", "Kandila", "Kotsi", "Asan"], correctAnswer: "Libru" },
            { id: 5, word: "Kandila", image: genVocab5, sound: genVocabS5, choices: ["Kandila", "Kotsi", "Asan", "Bulaklak"], correctAnswer: "Kandila" },
            { id: 6, word: "Kotsi", image: genVocab6, sound: genVocabS6, choices: ["Kotsi", "Asan", "Bulaklak", "Bale"], correctAnswer: "Kotsi" },
            { id: 7, word: "Asan", image: genVocab7, sound: genVocabS7, choices: ["Asan", "Bulaklak", "Bale", "Pulo"], correctAnswer: "Asan" },
            { id: 8, word: "Bulaklak", image: genVocab8, sound: genVocabS8, choices: ["Bulaklak", "Bale", "Pulo", "Llave"], correctAnswer: "Bulaklak" },
            { id: 9, word: "Bale", image: genVocab9, sound: genVocabS9, choices: ["Bale", "Pulo", "Llave", "Diaryu"], correctAnswer: "Bale" },
            { id: 10, word: "Pulo", image: genVocab10, sound: genVocabS10, choices: ["Pulo", "Llave", "Diaryu", "Lapis"], correctAnswer: "Pulo" },
            { id: 11, word: "Llave", image: genVocab11, sound: genVocabS11, choices: ["Llave", "Diaryu", "Lapis", "Tanaman"], correctAnswer: "Llave" },
            { id: 12, word: "Diaryu", image: genVocab12, sound: genVocabS12, choices: ["Diaryu", "Lapis", "Tanaman", "Bundok"], correctAnswer: "Diaryu" },
            { id: 13, word: "Lapis", image: genVocab13, sound: genVocabS13, choices: ["Lapis", "Tanaman", "Bundok", "Tete"], correctAnswer: "Lapis" },
            { id: 14, word: "Tanaman", image: genVocab14, sound: genVocabS14, choices: ["Tanaman", "Bundok", "Tete", "Boti"], correctAnswer: "Tanaman" },
            { id: 15, word: "Bundok", image: genVocab15, sound: genVocabS15, choices: ["Bundok", "Tete", "Boti", "Pagkeran"], correctAnswer: "Bundok" },
            { id: 16, word: "Tete", image: genVocab16, sound: genVocabS16, choices: ["Tete", "Boti", "Pagkeran", "Bisikleta"], correctAnswer: "Tete" },
            { id: 17, word: "Boti", image: genVocab17, sound: genVocabS17, choices: ["Boti", "Pagkeran", "Bisikleta", "Ayup"], correctAnswer: "Boti" }
        ],

    };

    const pictureDictionary = pictureDictionaryByCategory[category] || [];
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
            setShowConfetti(true);
            setTimeout(() => {
                setShowConfetti(false);
            }, 1900);
        }
        bgAudio.volume = 0.004;
        const soundEffect = new Audio(currentItem.sound);
        setCurrentAudio(soundEffect);
        soundEffect.play();
        soundEffect.onended = () => {
            bgAudio.volume = 0.030;
            setCurrentAudio(null);
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