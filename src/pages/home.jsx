import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { rowTitle1, rowTitle2, rowTitle3, rowTitle4, spellingGames, flashCards, pictureDictionaries, numbers, phrases, colours, animals, fruitsVeg, genVocab, book1, book2, book3, singsing, pampanga, maranun, } from "../assets/images";
import { music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, } from "../assets/musics";

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

  const [selectedMusic, setSelectedMusic] = useState("music1");

  const handleMusicChange = (e) => {
    const newMusic = e.target.value;

    // Pause the currently playing music
    if (currentMusic && isPlaying && audioRefs[currentMusic]?.current) {
      audioRefs[currentMusic].current.pause();
    }

    // Update selected music
    setSelectedMusic(newMusic);
  };

  const [currentMusic, setCurrentMusic] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliders, setSliders] = useState({
    music1: 0,
    music2: 0,
    music3: 0,
    music4: 0,
    music5: 0,
    music6: 0,
    music7: 0,
    music8: 0,
    music9: 0,
    music10: 0,
    music11: 0,
    music12: 0,
    music13: 0,
  });

  const audioRefs = {
    music1: useRef(null),
    music2: useRef(null),
    music3: useRef(null),
    music4: useRef(null),
    music5: useRef(null),
    music6: useRef(null),
    music7: useRef(null),
    music8: useRef(null),
    music9: useRef(null),
    music10: useRef(null),
    music11: useRef(null),
    music12: useRef(null),
    music13: useRef(null),
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
      <div className="homeContainer">
        {/* Translations Section */}
        <div className="row">
          <img src={rowTitle1} alt="Translations" className="rowTitle" />
          <div className="button-container">
            <button className="image-button numbers" onClick={() => redirectTranslation('numbers')}>
              <img src={numbers} alt="Numbers" className="game-image2" />
            </button>
            <button className="image-button phrases" onClick={() => redirectTranslation('phrases')}>
              <img src={phrases} alt="Phrases" className="game-image2-1" />
            </button>
            <button className="image-button colours" onClick={() => redirectTranslation('colours')}>
              <img src={colours} alt="Colours" className="game-image2-2" />
            </button>
            <button className="image-button animals" onClick={() => redirectTranslation('animals')}>
              <img src={animals} alt="Animals" className="game-image2" />
            </button>
            <button className="image-button fruitsVeg" onClick={() => redirectTranslation('fruitsVeg')}>
              <img src={fruitsVeg} alt="Fruits & Vegetables" className="game-image2-4" />
            </button>
            <button className="image-button genVocab" onClick={() => redirectTranslation('genVocab')}>
              <img src={genVocab} alt="General Vocabulary" className="game-image2-5" />
            </button>
          </div>
        </div>
        {/* Games Section */}
        <div className="row2">
          <img src={rowTitle2} alt="Games" className="rowTitle" />
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
        {/* Books Section */}
        <div className="row3">
          <img src={rowTitle3} alt="Books" className="rowTitle" />
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
      <div className="row4">
        <img src={rowTitle4} alt="Music" className="rowTitle" />
        <div className="button-container">
          {/* Wrap dropdown, button, and slider in a flex container */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "15px" }}>

            {/* Dropdown to select music */}
            <div style={{ position: "relative", width: "375px", marginLeft: "-420px", }}>
              <select
                value={selectedMusic}
                onChange={handleMusicChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "2px solid #ffcccb",
                  backgroundColor: "#ffebcd", // Pastel Peach
                  color: "#333",
                  fontWeight: "bold",
                  cursor: "pointer",
                  outline: "none",
                  boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                  appearance: "none",
                  textAlign: "center",
                }}
              >
                <option value="music1" style={{ backgroundColor: "#FFD1DC" }}>🎵 atin cu pung singsing</option>
                <option value="music2" style={{ backgroundColor: "#B5EAD7" }}>🎶 alpabetung filipino</option>
                <option value="music3" style={{ backgroundColor: "#C9C9FF" }}>🎼 abak a maranun</option>
                <option value="music4" style={{ backgroundColor: "#FFD1DC" }}>🎵 bale kubu</option>
                <option value="music5" style={{ backgroundColor: "#B5EAD7" }}>🎶 balen ning arayat</option>
                <option value="music6" style={{ backgroundColor: "#C9C9FF" }}>🎼 leron leron sinta</option>
                <option value="music7" style={{ backgroundColor: "#FFD1DC" }}>🎵 ligligan parul</option>
                <option value="music8" style={{ backgroundColor: "#B5EAD7" }}>🎶 mary had a little lamb(kapampangan)</option>
                <option value="music9" style={{ backgroundColor: "#C9C9FF" }}>🎼 mekeni tuki ka, malaus ka pampanga!</option>
                <option value="music10" style={{ backgroundColor: "#FFD1DC" }}>🎵 misasanmetung tamu</option>
                <option value="music11" style={{ backgroundColor: "#B5EAD7" }}>🎶 my toes, my knees, my shoulders, my head(kapampangan)</option>
                <option value="music12" style={{ backgroundColor: "#C9C9FF" }}>🎼 sampung mga daliri</option>
                <option value="music13" style={{ backgroundColor: "#FFD1DC" }}>🎵 this is the way(kapampangan)</option>
              </select>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => playMusic(selectedMusic)}
              className={`music-button ${currentMusic === selectedMusic && isPlaying ? "playing" : "paused"}`}
              style={{
                padding: "10px 15px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: "#b86588",
                cursor: "pointer",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
                fontSize: "18px",
                marginLeft: "-26px",
              }}
            >
              {currentMusic === selectedMusic && isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* Slider for music progress */}
            <input
              type="range"
              min="0"
              max={audioRefs[selectedMusic]?.current?.duration || 0}
              value={sliders[selectedMusic] || 0}
              onChange={(e) => handleSliderChange(e, selectedMusic)}
              className="custom-slider"
              style={{
                flex: "1", // Allow slider to grow
                maxWidth: "400px",
                marginLeft: "45px",
              }}
            />
          </div>
        </div>
      </div>
      <audio ref={audioRefs.music1} src={music1} onTimeUpdate={() => handleTimeUpdate("music1")} onLoadedMetadata={() => handleTimeUpdate("music1")} />
      <audio ref={audioRefs.music2} src={music2} onTimeUpdate={() => handleTimeUpdate("music2")} onLoadedMetadata={() => handleTimeUpdate("music2")} />
      <audio ref={audioRefs.music3} src={music3} onTimeUpdate={() => handleTimeUpdate("music3")} onLoadedMetadata={() => handleTimeUpdate("music3")} />
      <audio ref={audioRefs.music4} src={music4} onTimeUpdate={() => handleTimeUpdate("music4")} onLoadedMetadata={() => handleTimeUpdate("music4")} />
      <audio ref={audioRefs.music5} src={music5} onTimeUpdate={() => handleTimeUpdate("music5")} onLoadedMetadata={() => handleTimeUpdate("music5")} />
      <audio ref={audioRefs.music6} src={music6} onTimeUpdate={() => handleTimeUpdate("music6")} onLoadedMetadata={() => handleTimeUpdate("music6")} />
      <audio ref={audioRefs.music7} src={music7} onTimeUpdate={() => handleTimeUpdate("music7")} onLoadedMetadata={() => handleTimeUpdate("music7")} />
      <audio ref={audioRefs.music8} src={music8} onTimeUpdate={() => handleTimeUpdate("music8")} onLoadedMetadata={() => handleTimeUpdate("music8")} />
      <audio ref={audioRefs.music9} src={music9} onTimeUpdate={() => handleTimeUpdate("music9")} onLoadedMetadata={() => handleTimeUpdate("music9")} />
      <audio ref={audioRefs.music10} src={music10} onTimeUpdate={() => handleTimeUpdate("music10")} onLoadedMetadata={() => handleTimeUpdate("music10")} />
      <audio ref={audioRefs.music11} src={music11} onTimeUpdate={() => handleTimeUpdate("music11")} onLoadedMetadata={() => handleTimeUpdate("music11")} />
      <audio ref={audioRefs.music12} src={music12} onTimeUpdate={() => handleTimeUpdate("music12")} onLoadedMetadata={() => handleTimeUpdate("music12")} />
      <audio ref={audioRefs.music13} src={music13} onTimeUpdate={() => handleTimeUpdate("music13")} onLoadedMetadata={() => handleTimeUpdate("music13")} />
    </div>
  );
}

export default Home;