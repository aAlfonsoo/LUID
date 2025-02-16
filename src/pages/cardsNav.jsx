import React from 'react';
import "../App.modules.css";
import { useNavigate } from 'react-router-dom';
import { goBack, flashCards, numbers, colours, animals, fruitsVeg, genVocab, } from "../assets/images";

function CardsNav() {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);
    const redirectTranslation = (category) => {
        navigate('/cards', { state: { category } });
    };

    return (
        <div>
            <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <img src={flashCards} alt="Flash Cards" className="navImage" />
            <div className="homeContainer">
                <div className="row">
                    <div className="button-container">
                        <button className="image-button numbers" onClick={() => redirectTranslation('numbers')}>
                            <img src={numbers} alt="Numbers" className="game-image2" />
                        </button>
                        <button className="image-button colours" onClick={() => redirectTranslation('colours')}>
                            <img src={colours} alt="Colours" className="game-image2-2" />
                        </button>
                        <button className="image-button animals" onClick={() => redirectTranslation('animals')}>
                            <img src={animals} alt="Animals" className="game-image2" />
                        </button>
                    </div>
                </div>
                <div className="row2">
                    <div className="button-container">
                        <button className="image-button fruitsVeg" onClick={() => redirectTranslation('fruitsVeg')}>
                            <img src={fruitsVeg} alt="Fruits & Vegetables" className="game-image2-4" />
                        </button>
                        <button className="image-button genVocab" onClick={() => redirectTranslation('genVocab')}>
                            <img src={genVocab} alt="General Vocabulary" className="game-image2-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsNav;