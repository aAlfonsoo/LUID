import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { gamesIcon, goBack, rowTitle1, rowTitle2, rowTitle3, rowTitle4, spellingGames, flashCards, pictureDictionaries, numbers, phrases, colours, animals, fruitsVeg, genVocab, book1, book2, book3, } from "../assets/images";
import { music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, } from "../assets/musics";

function GamesNav() {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    const redirectCard = () => {
        navigate('/cardsNav');
    };

    const redirectSpelling = () => {
        navigate('/spellingNav');
    };

    const redirectDictionary = () => {
        navigate('/dictionariesNav');
    };

    return (
        <div>
            <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <img src={gamesIcon} alt="Translations" className="navImage" />
            <div className="homeContainer">
                {/* Games Section */}
                <div className="row2">
                    <div className="button-container">
                        <button className="image-button spelling-games">
                            <img src={spellingGames} alt="Spelling Games" className="game-image" onClick={redirectSpelling} />
                        </button>
                        <button className="image-button flash-cards" onClick={redirectCard}>
                            <img src={flashCards} alt="Flash Cards" className="game-image-1" />
                        </button>
                        <button className="image-button picture-dictionaries" onClick={redirectDictionary}>
                            <img src={pictureDictionaries} alt="Picture Dictionaries" className="game-image-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamesNav;