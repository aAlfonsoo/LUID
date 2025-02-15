import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { booksIcon, goBack, rowTitle1, rowTitle2, rowTitle3, rowTitle4, spellingGames, flashCards, pictureDictionaries, numbers, phrases, colours, animals, fruitsVeg, genVocab, book1, book2, book3, } from "../assets/images";
import { music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, } from "../assets/musics";

function BooksNav() {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);

    const redirectBook = (category) => {
        navigate('/books', { state: { category } });
    };

    return (
        <div>
            <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
                <img src={goBack} alt="Go Back" className="goBack-image" />
            </button>
            <img src={booksIcon} alt="Translations" className="navImage" />
            <div className="homeContainer">
                {/* Books Section */}
                <div className="row3">
                    <div className="button-container">
                        <button className="image-button book1" onClick={() => redirectBook('bookA')}>
                            <img src={book1} alt="Book 1" className="game-image3" />
                        </button>
                        <button className="image-button book2" onClick={() => redirectBook('bookB')}>
                            <img src={book2} alt="Book 2" className="game-image3" />
                        </button>
                        <button className="image-button book3" onClick={() => redirectBook('bookC')}>
                            <img src={book3} alt="Book 3" className="game-image3" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BooksNav;