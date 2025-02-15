import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { translationsIcon, goBack, rowTitle1, rowTitle2, rowTitle3, rowTitle4, spellingGames, flashCards, pictureDictionaries, numbers, phrases, colours, animals, fruitsVeg, genVocab, book1, book2, book3, } from "../assets/images";
import { music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, } from "../assets/musics";

function DictionariesNav() {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    const redirectTranslation = (category) => {
        navigate('/dictionaries', { state: { category } });
    };

    return (
        <div>
            <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <img src={pictureDictionaries} alt="Picture Dictionaries" className="navImage" />
            <div className="homeContainer">
                {/* Translations Section */}
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

export default DictionariesNav;