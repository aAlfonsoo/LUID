import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goBack, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, fruitVeg1, fruitVeg2, fruitVeg3, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg8, fruitVeg9, fruitVeg10, fruitVeg11, fruitVeg12, fruitVeg13, fruitVeg14, fruitVeg15, translationTitle1, translationTitle2, translationTitle3, translationTitle4, translationTitle5, translationTitle6, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8, phrase9, phrase10, phrase11, phrase12, phrase13, phrase14, phrase15, phrase16, phrase17, phrase18, phrase19, genVocab1, genVocab2, genVocab3, genVocab4, genVocab5, genVocab6, genVocab7, genVocab8, genVocab9, genVocab10, genVocab11, genVocab12, genVocab13, genVocab14, genVocab15, genVocab16, genVocab17 } from "../assets/images";
import "../App.modules.css";
import { numberS1, numberS2, numberS3, numberS4, numberS5, numberS6, numberS7, numberS8, numberS9, numberS10, phraseS1, phraseS2, phraseS3, phraseS4, phraseS5, phraseS6, phraseS7, phraseS8, phraseS9, phraseS10, phraseS11, phraseS12, phraseS13, phraseS14, phraseS15, phraseS16, phraseS17, phraseS18, phraseS19, animalS1, animalS2, animalS3, animalS4, animalS5, animalS6, animalS7, animalS8, animalS9, animalS10, animalS11, animalS12, animalS13, animalS14, animalS15, animalS16, colorS1, colorS2, colorS3, colorS4, colorS5, colorS6, colorS7, colorS8, colorS9, colorS10, colorS11, fruitVegS1, fruitVegS2, fruitVegS3, fruitVegS4, fruitVegS5, fruitVegS6, fruitVegS7, fruitVegS8, fruitVegS9, fruitVegS10, fruitVegS11, fruitVegS12, fruitVegS13, fruitVegS14, fruitVegS15, genVocabS1, genVocabS2, genVocabS3, genVocabS4, genVocabS5, genVocabS6, genVocabS7, genVocabS8, genVocabS9, genVocabS10, genVocabS11, genVocabS12, genVocabS13, genVocabS14, genVocabS15, genVocabS16, genVocabS17 } from "../assets/musics";

function Translations() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audioSrc) => {
    if (!audioSrc) return; // Prevent errors if no audio source exists

    // Stop currently playing audio (if any)
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create and play new audio
    const newAudio = new Audio(audioSrc);
    newAudio.play();
    setCurrentAudio(newAudio);

    // Clear the reference when the audio ends
    newAudio.onended = () => setCurrentAudio(null);
  };

  const translationTitles = {
    numbers: translationTitle1,
    phrases: translationTitle2,
    colours: translationTitle3,
    animals: translationTitle4,
    fruitsVeg: translationTitle5,
    genVocab: translationTitle6,
  };

  const categoryTitleImage = translationTitles[category];

  const translations = {
    numbers: [
      { tagalog: "Isa", kapampangan: "Metung", image: number1, sound: numberS1 },
      { tagalog: "Dalawa", kapampangan: "Adwa", image: number2, sound: numberS2 },
      { tagalog: "Tatlo", kapampangan: "Atlu, Tres", image: number3, sound: numberS3 },
      { tagalog: "Apat", kapampangan: "Apat, Kwatru", image: number4, sound: numberS4 },
      { tagalog: "Lima", kapampangan: "Lima, Singku", image: number5, sound: numberS5 },
      { tagalog: "Anim", kapampangan: "Anam, Seis", image: number6, sound: numberS6 },
      { tagalog: "Pito", kapampangan: "Pito, Sieti", image: number7, sound: numberS7 },
      { tagalog: "Walo", kapampangan: "Walu, Ostsu", image: number8, sound: numberS8 },
      { tagalog: "Siyam", kapampangan: "Siam", image: number9, sound: numberS9 },
      { tagalog: "Sampu", kapampangan: "Apulu", image: number10, sound: numberS10 },
    ],
    phrases: [
      { tagalog: "Ano?", kapampangan: "Nanu?", image: phrase17, sound: phraseS1 },
      { tagalog: "Kailan?", kapampangan: "Kapilan?", image: phrase18, sound: phraseS2 },
      { tagalog: "Saan?", kapampangan: "Nokarin?", image: phrase19, sound: phraseS3 },
      { tagalog: "Magkano?", kapampangan: "Magkanu?", image: phrase9, sound: phraseS4 },
      { tagalog: "Taga saan ka?", kapampangan: "Taga nu ka rin ka?", image: phrase10, sound: phraseS5 },
      { tagalog: "Nawawala ako", kapampangan: "Mawawala ku", image: phrase15, sound: phraseS6 },
      { tagalog: "Hindi ko naiintindihan", kapampangan: "Ali ku aintindyan", image: phrase16, sound: phraseS7 },
      { tagalog: "Magandang umaga", kapampangan: "Mayap a abak", image: phrase1, sound: phraseS8 },
      { tagalog: "Magandang umaga po", kapampangan: "Mayap a abak pu", image: phrase2, sound: phraseS9 },
      { tagalog: "Magandang hapon", kapampangan: "Mayap a gatpanapun", image: phrase3, sound: phraseS10 },
      { tagalog: "Magandang hapon po", kapampangan: "Mayap a gatpanapun pu", image: phrase4, sound: phraseS11 },
      { tagalog: "Magandang gabi", kapampangan: "Mayap a bengi", image: phrase5, sound: phraseS12 },
      { tagalog: "Magandang gabi po", kapampangan: "Mayap a bengi pu", image: phrase6, sound: phraseS13 },
      { tagalog: "Kamusta", kapampangan: "Komusta", image: phrase7, sound: phraseS14 },
      { tagalog: "Kamusta po kayo", kapampangan: "Komusta kayu pu", image: phrase8, sound: phraseS15 },
      { tagalog: "Salamat", kapampangan: "Salamat", image: phrase11, sound: phraseS16 },
      { tagalog: "Salamat po", kapampangan: "Salamat pu", image: phrase12, sound: phraseS17 },
      { tagalog: "Walang anuman", kapampangan: "Alang nanu man", image: phrase13, sound: phraseS18 },
      { tagalog: "Wala pong anuman", kapampangan: "Alang nanu man pu", image: phrase14, sound: phraseS19 },
    ],
    colours: [
      { tagalog: "Asul", kapampangan: "Mairo", image: color1, sound: colorS1 },
      { tagalog: "Putî", kapampangan: "Tayum", image: color2, sound: colorS2 },
      { tagalog: "Berde", kapampangan: "Aluntiang", image: color3, sound: colorS3 },
      { tagalog: "Dalandan", kapampangan: "Kuliawan", image: color4, sound: colorS4 },
      { tagalog: "Rosas", kapampangan: "Diwa", image: color5, sound: colorS5 },
      { tagalog: "Kayumanggí", kapampangan: "Komanggi", image: color6, sound: colorS6 },
      { tagalog: "Biyoleta", kapampangan: "Ubi", image: color7, sound: colorS7 },
      { tagalog: "Abuhín", kapampangan: "Abu", image: color8, sound: colorS8 },
      { tagalog: "Diláw", kapampangan: "Dilo", image: color9, sound: colorS9 },
      { tagalog: "Pulá", kapampangan: "Malutu", image: color10, sound: colorS10 },
      { tagalog: "Itím", kapampangan: "Tuling", image: color11, sound: colorS11 },
    ],
    animals: [
      { tagalog: "Aso", kapampangan: "Asu", image: animal1, sound: animalS1 },
      { tagalog: "Baka", kapampangan: "Baka", image: animal2, sound: animalS2 },
      { tagalog: "Manok", kapampangan: "Manuk", image: animal3, sound: animalS3 },
      { tagalog: "Daga", kapampangan: "Dagis", image: animal4, sound: animalS4 },
      { tagalog: "Baboy", kapampangan: "Babi", image: animal5, sound: animalS5 },
      { tagalog: "Donkey", kapampangan: "Dangki", image: animal6, sound: animalS6 },
      { tagalog: "Paruparo", kapampangan: "Talubang, Mariposa", image: animal7, sound: animalS7 },
      { tagalog: "Elepante", kapampangan: "Gaja, Gadia, Gayda, Elepanti", image: animal8, sound: animalS8 },
      { tagalog: "Palaka", kapampangan: "Tugak", image: animal9, sound: animalS9 },
      { tagalog: "Kambing", kapampangan: "Kambing", image: animal10, sound: animalS10 },
      { tagalog: "Kabayo", kapampangan: "Kabayu", image: animal11, sound: animalS11 },
      { tagalog: "Leon", kapampangan: "Leun", image: animal12, sound: animalS12 },
      { tagalog: "Pating", kapampangan: "Limpasut, Pating", image: animal13, sound: animalS13 },
      { tagalog: "Tupa", kapampangan: "Tupa", image: animal14, sound: animalS14 },
      { tagalog: "Ahas", kapampangan: "Ubigan, Lubingan", image: animal15, sound: animalS15 },
      { tagalog: "Balyena", kapampangan: "Lomba-lomba, Balyena", image: animal16, sound: animalS16 },
    ],
    fruitsVeg: [
      { tagalog: "Ubas", kapampangan: "Ubas", image: fruitVeg1, sound: fruitVegS1 },
      { tagalog: "Lemon", kapampangan: "Kalamunding, Kalamansi", image: fruitVeg2, sound: fruitVegS2 },
      { tagalog: "Kabute", kapampangan: "Payung-payungan", image: fruitVeg3, sound: fruitVegS3 },
      { tagalog: "Sibuyas", kapampangan: "Sibuyas", image: fruitVeg4, sound: fruitVegS4 },
      { tagalog: "Peras", kapampangan: "Peras", image: fruitVeg5, sound: fruitVegS5 },
      { tagalog: "Mansanas", kapampangan: "Apol", image: fruitVeg6, sound: fruitVegS6 },
      { tagalog: "Saging", kapampangan: "Saging", image: fruitVeg7, sound: fruitVegS7 },
      { tagalog: "Repolyo", kapampangan: "Ripolyu", image: fruitVeg8, sound: fruitVegS8 },
      { tagalog: "Carrot", kapampangan: "Carrot", image: fruitVeg9, sound: fruitVegS9 },
      { tagalog: "Mais", kapampangan: "Mais, Mayis", image: fruitVeg10, sound: fruitVegS10 },
      { tagalog: "Pinya", kapampangan: "Pinya", image: fruitVeg11, sound: fruitVegS11 },
      { tagalog: "Patatas", kapampangan: "Papas, Patatas", image: fruitVeg12, sound: fruitVegS12 },
      { tagalog: "Kalabasa", kapampangan: "Kulubasa, Kulabasa", image: fruitVeg13, sound: fruitVegS13 },
      { tagalog: "Istroberi", kapampangan: "Istroberi, Istraberi", image: fruitVeg14, sound: fruitVegS14 },
      { tagalog: "Kamatis", kapampangan: "Kamatis", image: fruitVeg15, sound: fruitVegS15 },
    ],
    genVocab: [
      { tagalog: "Kama", kapampangan: "Pagkeran", image: genVocab1, sound: genVocabS1 },
      { tagalog: "Bisikleta", kapampangan: "Bisikleta", image: genVocab2, sound: genVocabS2 },
      { tagalog: "Ibon", kapampangan: "Ayup", image: genVocab3, sound: genVocabS3 },
      { tagalog: "Aklat", kapampangan: "Libru", image: genVocab4, sound: genVocabS4 },
      { tagalog: "Kandila", kapampangan: "Kandila", image: genVocab5, sound: genVocabS5 },
      { tagalog: "Kotse", kapampangan: "Kotsi", image: genVocab6, sound: genVocabS6 },
      { tagalog: "Isda", kapampangan: "Asan", image: genVocab7, sound: genVocabS7 },
      { tagalog: "Bulaklak", kapampangan: "Bulaklak", image: genVocab8, sound: genVocabS8 },
      { tagalog: "Bahay", kapampangan: "Bale/Tuknangan", image: genVocab9, sound: genVocabS9 },
      { tagalog: "Isla", kapampangan: "Pulo", image: genVocab10, sound: genVocabS10 },
      { tagalog: "Susi", kapampangan: "Llave", image: genVocab11, sound: genVocabS11 },
      { tagalog: "Pahayagan", kapampangan: "Diaryu", image: genVocab12, sound: genVocabS12 },
      { tagalog: "Lapis", kapampangan: "Lapis", image: genVocab13, sound: genVocabS13 },
      { tagalog: "Punungkahoy", kapampangan: "Tanaman", image: genVocab14, sound: genVocabS14 },
      { tagalog: "Bundok", kapampangan: "Bundok", image: genVocab15, sound: genVocabS15 },
      { tagalog: "Tulay", kapampangan: "Tete", image: genVocab16, sound: genVocabS16 },
      { tagalog: "Bote", kapampangan: "Boti", image: genVocab17, sound: genVocabS17 },
    ]
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="image-buttonGoBack goBack" onClick={handleGoBack}>
        <img src={goBack} alt="Go Back" className="goBack-image" />
      </button>
      <img src={categoryTitleImage} alt="Translation Category Title" className="category-title-image" />
      <div className="translations-table-wrapper">
        <table className="translations-table">
          <thead>
            <tr>
              <th></th>
              <th>Tagalog</th>
              <th>Kapampangan</th>
            </tr>
          </thead>
          <tbody>
            {(translations[category] || []).map((translation, index) => (
              <tr key={index} onClick={() => playAudio(translation.sound)}>
                <td>
                  <img src={translation.image} alt={`${translation.tagalog} image`} />
                </td>
                <td>{translation.tagalog}</td>
                <td>{translation.kapampangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Translations;
