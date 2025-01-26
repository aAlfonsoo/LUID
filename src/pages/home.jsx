import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { spellingGames, flashCards, pictureDictionaries, numbers, phrases, colours, animals, fruitsVeg, genVocab, book1, book2, book3, singsing, pampanga, maranun, } from "../assets/images";
import { music1, music2, music3 } from "../assets/musics";

function Home() {
  const navigate = useNavigate();

  const redirectTranslation = (category) => {
    navigate('/translations', { state: { category } });
  };

  const redirectBook = (category) => {
    navigate('/books', { state: { category } });
  };

  const redirectCard = () => {
    navigate('/cards');
  };

  const redirectSpelling = () => {
    navigate('/spelling');
  };

  const redirectDictionary = () => {
    navigate('/dictionaries');
  };


  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliders, setSliders] = useState({
    music1: 0,
    music2: 0,
    music3: 0,
  });

  const audioRefs = {
    music1: useRef(null),
    music2: useRef(null),
    music3: useRef(null),
  };

  const playMusic = (music) => {
    const audio = audioRefs[music].current;

    if (currentMusic === music && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (currentMusic && currentMusic !== music) {
        audioRefs[currentMusic].current.pause();
      }
      audio.play();
      setCurrentMusic(music);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = (music) => {
    const audio = audioRefs[music].current;
    setSliders((prev) => ({
      ...prev,
      [music]: audio.currentTime,
    }));
  };

  const handleSliderChange = (e, music) => {
    const newTime = e.target.value;
    const audio = audioRefs[music].current;
    audio.currentTime = newTime;
    setSliders((prev) => ({
      ...prev,
      [music]: newTime,
    }));
  };

  return (
    <div>
      <button className="image-button spelling-games">
        <img src={spellingGames} alt="Spelling Games" className="game-image" onClick={redirectSpelling} />
      </button>
      <button className="image-button flash-cards" onClick={redirectCard}>
        <img src={flashCards} alt="Flash Cards" className="game-image" />
      </button>
      <button className="image-button picture-dictionaries" onClick={redirectDictionary}>
        <img src={pictureDictionaries} alt="Picture Dictionaries" className="game-image" />
      </button>
      <button className="image-button numbers" onClick={() => redirectTranslation('numbers')}>
        <img src={numbers} alt="Numbers" className="game-image2" />
      </button>
      <button className="image-button phrases" onClick={() => redirectTranslation('phrases')}>
        <img src={phrases} alt="Phrases" className="game-image2" />
      </button>
      <button className="image-button colours" onClick={() => redirectTranslation('colours')}>
        <img src={colours} alt="Colours" className="game-image2" />
      </button>
      <button className="image-button animals" onClick={() => redirectTranslation('animals')}>
        <img src={animals} alt="Animals" className="game-image2" />
      </button>
      <button className="image-button fruitsVeg" onClick={() => redirectTranslation('fruitsVeg')}>
        <img src={fruitsVeg} alt="Phrases" className="game-image2" />
      </button>
      <button className="image-button genVocab" onClick={() => redirectTranslation('genVocab')}>
        <img src={genVocab} alt="Phrases" className="game-image2" />
      </button>
      <button className="image-button book1" onClick={() => redirectBook('book1')}>
        <img src={book1} alt="Book 1" className="game-image3" />
      </button>
      <button className="image-button book2" onClick={() => redirectBook('book2')}>
        <img src={book2} alt="Book 2" className="game-image3" />
      </button>
      <button className="image-button book3" onClick={() => redirectBook('book3')}>
        <img src={book3} alt="Book 3" className="game-image3" />
      </button>

      <img src={singsing} className="singsing" />
      <img src={pampanga} className="pampanga" />
      <img src={maranun} className="maranun" />

      <div style={{ marginTop: "20px" }}>
        <div>
          <button
            style={{
              bottom: "280px", right: "620px"
            }}
            onClick={() => playMusic("music1")}
            className={`music-button ${currentMusic === "music1" && isPlaying ? "playing" : "paused"
              }`}
          >
            {currentMusic === "music1" && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            style={{
              bottom: "299px", right: "155px"
            }}
            type="range"
            min="0"
            max={audioRefs.music1.current?.duration || 0}
            value={sliders.music1}
            onChange={(e) => handleSliderChange(e, "music1")}
            className="custom-slider"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            style={{
              bottom: "170px", right: "620px"
            }}
            onClick={() => playMusic("music2")}
            className={`music-button ${currentMusic === "music2" && isPlaying ? "playing" : "paused"
              }`}
          >
            {currentMusic === "music2" && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            style={{
              bottom: "189px", right: "155px"
            }}
            type="range"
            min="0"
            max={audioRefs.music2.current?.duration || 0}
            value={sliders.music2}
            onChange={(e) => handleSliderChange(e, "music2")}
            className="custom-slider"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button
            style={{
              bottom: "60px", right: "620px"
            }}
            onClick={() => playMusic("music3")}
            className={`music-button ${currentMusic === "music3" && isPlaying ? "playing" : "paused"
              }`}
          >
            {currentMusic === "music3" && isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            style={{
              bottom: "79px", right: "155px"
            }}
            type="range"
            min="0"
            max={audioRefs.music3.current?.duration || 0}
            value={sliders.music3}
            onChange={(e) => handleSliderChange(e, "music3")}
            className="custom-slider"
          />
        </div>
      </div>

      <audio
        ref={audioRefs.music1}
        src={music1}
        onTimeUpdate={() => handleTimeUpdate("music1")}
        onLoadedMetadata={() => handleTimeUpdate("music1")}
      />
      <audio
        ref={audioRefs.music2}
        src={music2}
        onTimeUpdate={() => handleTimeUpdate("music2")}
        onLoadedMetadata={() => handleTimeUpdate("music2")}
      />
      <audio
        ref={audioRefs.music3}
        src={music3}
        onTimeUpdate={() => handleTimeUpdate("music3")}
        onLoadedMetadata={() => handleTimeUpdate("music3")}
      />
    </div>
  );
}

export default Home;