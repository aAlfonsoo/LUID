import React from 'react';
import "../App.modules.css";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPause } from "react-icons/fa";
import { translationsIcon, gamesIcon, booksIcon, rowTitle4, } from "../assets/images";
import { music1, music2, music3, music4, music5, music6, music7, music8, music9, music10, music11, music12, music13, } from "../assets/musics";

function Home() {
  const navigate = useNavigate();

  const redirectTranslation = () => {
    navigate('/translationsNav');
  };

  const redirectGame = () => {
    navigate('/gamesNav');
  };

  const redirectBook = () => {
    navigate('/booksNav');
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
      <div className="homehomeContainer">
        <div className="buttonIcon-container">
          <button className="image-button translationz" onClick={redirectTranslation}>
            <img src={translationsIcon} alt="Translations" className="homeButtonImage" />
          </button>
        </div>
        <div className="buttonIcon-container">
          <button className="image-button gamez">
            <img src={gamesIcon} alt="Games" className="homeButtonImage" onClick={redirectGame} />
          </button>
        </div>
        <div className="buttonIcon-container">
          <button className="image-button bookz" onClick={redirectBook}>
            <img src={booksIcon} alt="Books" className="homeButtonImage" />
          </button>
        </div>
      </div>
      <div className="row4">
        <img src={rowTitle4} alt="Music" className="rowTitle" />
        <div className="button-container">
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
                  backgroundColor: "#ffebcd",
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
                flex: "1",
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