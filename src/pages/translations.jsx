import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goBack, number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10, animal11, animal12, animal13, animal14, animal15, animal16, fruitVeg1, fruitVeg2, fruitVeg3, fruitVeg4, fruitVeg5, fruitVeg6, fruitVeg7, fruitVeg8, fruitVeg9, fruitVeg10, fruitVeg11, fruitVeg12, fruitVeg13, fruitVeg14, fruitVeg15, translationTitle1, translationTitle2, translationTitle3, translationTitle4, translationTitle5, translationTitle6, color1, color2, color3, color4, color5, color6, color7, color8, color9, color10, color11, phrase1, phrase2, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8, phrase9, phrase10, phrase11, phrase12, phrase13, phrase14, phrase15, phrase16, phrase17, phrase18, phrase19, genVocab1, genVocab2, genVocab3, genVocab4, genVocab5, genVocab6, genVocab7, genVocab8, genVocab9, genVocab10, genVocab11, genVocab12, genVocab13, genVocab14, genVocab15, genVocab16, genVocab17 } from "../assets/images";
import "../App.modules.css";

function Translations() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state || {};

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
      { tagalog: "Isa", kapampangan: "Metung", image: number1 },
      { tagalog: "Dalawa", kapampangan: "Adwa", image: number2 },
      { tagalog: "Tatlo", kapampangan: "Atlu, Tres", image: number3 },
      { tagalog: "Apat", kapampangan: "Apat, Kwatru", image: number4 },
      { tagalog: "Lima", kapampangan: "Lima, Singku", image: number5 },
      { tagalog: "Anim", kapampangan: "Anam, Seis", image: number6 },
      { tagalog: "Pito", kapampangan: "Pito, Sieti", image: number7 },
      { tagalog: "Walo", kapampangan: "Walu, Ostsu", image: number8 },
      { tagalog: "Siyam", kapampangan: "Siam", image: number9 },
      { tagalog: "Sampu", kapampangan: "Apulu", image: number10 },
    ],
    phrases: [
      { tagalog: "Ano", kapampangan: "Nanu", image: phrase17 },
      { tagalog: "Kailan", kapampangan: "Kapilan", image: phrase18 },
      { tagalog: "Saan", kapampangan: "Nokarin", image: phrase19 },
      { tagalog: "Magkano", kapampangan: "Magkanu", image: phrase9 },
      { tagalog: "Taga saan ka", kapampangan: "Taga nu ka rin ka", image: phrase10 },
      { tagalog: "Nawawala ako", kapampangan: "Mawawala ku", image: phrase15 },
      { tagalog: "Hindi ko naiintindihan", kapampangan: "Ali ku aintindyan", image: phrase16 },
      { tagalog: "Magandang umaga", kapampangan: "Mayap a abak", image: phrase1 },
      { tagalog: "Magandang umaga po", kapampangan: "Mayap a abak pu", image: phrase2 },
      { tagalog: "Magandang hapon", kapampangan: "Mayap a gatpanapun", image: phrase3 },
      { tagalog: "Magandang hapon po", kapampangan: "Mayap a gatpanapun pu", image: phrase4 },
      { tagalog: "Magandang gabi", kapampangan: "Mayap a bengi", image: phrase5 },
      { tagalog: "Magandang gabi po", kapampangan: "Mayap a bengi pu", image: phrase6 },
      { tagalog: "Kamusta", kapampangan: "Komusta", image: phrase7 },
      { tagalog: "Kamusta po kayo", kapampangan: "Komusta kayu pu", image: phrase8 },
      { tagalog: "Salamat", kapampangan: "Salamat", image: phrase11 },
      { tagalog: "Salamat po", kapampangan: "Salamat pu", image: phrase12 },
      { tagalog: "Walang anuman", kapampangan: "Alang nanu man", image: phrase13 },
      { tagalog: "Wala pong anuman", kapampangan: "Alang nanu man pu", image: phrase14 },
    ],
    colours: [
      { tagalog: "Asul", kapampangan: "Mairo", image: color1 },
      { tagalog: "Putî", kapampangan: "Tayum", image: color2 },
      { tagalog: "Berde", kapampangan: "Aluntiang", image: color3 },
      { tagalog: "Dalandan", kapampangan: "Kuliawan", image: color4 },
      { tagalog: "Rosas", kapampangan: "Diwa", image: color5 },
      { tagalog: "Kayumanggí", kapampangan: "Komanggi", image: color6 },
      { tagalog: "Biyoleta", kapampangan: "Ubi", image: color7 },
      { tagalog: "Abuhín", kapampangan: "Abu", image: color8 },
      { tagalog: "Diláw", kapampangan: "Dilo", image: color9 },
      { tagalog: "Pulá", kapampangan: "Malutu", image: color10 },
      { tagalog: "Itím", kapampangan: "Tuling", image: color11 },
    ],
    animals: [
      { tagalog: "Aso", kapampangan: "Asu", image: animal1 },
      { tagalog: "Baka", kapampangan: "Baka", image: animal2 },
      { tagalog: "Manok", kapampangan: "Manuk", image: animal3 },
      { tagalog: "Daga", kapampangan: "Dagis", image: animal4 },
      { tagalog: "Baboy", kapampangan: "Babi", image: animal5 },
      { tagalog: "Donkey", kapampangan: "Dangki", image: animal6 },
      { tagalog: "Paruparo", kapampangan: "Talubang, Mariposa", image: animal7 },
      { tagalog: "Elepante", kapampangan: "Gaja, Gadia, Gayda, Elepanti", image: animal8 },
      { tagalog: "Palaka", kapampangan: "Tugak", image: animal9 },
      { tagalog: "Kambing", kapampangan: "Kambing", image: animal10 },
      { tagalog: "Kabayo", kapampangan: "Kabayu", image: animal11 },
      { tagalog: "Leon", kapampangan: "Leun", image: animal12 },
      { tagalog: "Pating", kapampangan: "Limpasut, Pating", image: animal13 },
      { tagalog: "Tupa", kapampangan: "Tupa", image: animal14 },
      { tagalog: "Ahas", kapampangan: "Ubigan, Lubingan", image: animal15 },
      { tagalog: "Balyena", kapampangan: "Lomba-lomba, Balyena", image: animal16 },
    ],
    fruitsVeg: [
      { tagalog: "Ubas", kapampangan: "Ubas", image: fruitVeg1 },
      { tagalog: "Lemon", kapampangan: "Kalamunding, Kalamansi", image: fruitVeg2 },
      { tagalog: "Kabute", kapampangan: "Payung-payungan", image: fruitVeg3 },
      { tagalog: "Sibuyas", kapampangan: "Sibuyas", image: fruitVeg4 },
      { tagalog: "Peras", kapampangan: "Peras", image: fruitVeg5 },
      { tagalog: "Mansanas", kapampangan: "Apol", image: fruitVeg6 },
      { tagalog: "Saging", kapampangan: "Saging", image: fruitVeg7 },
      { tagalog: "Repolyo", kapampangan: "Ripolyu", image: fruitVeg8 },
      { tagalog: "Carrot", kapampangan: "Carrot", image: fruitVeg9 },
      { tagalog: "Mais", kapampangan: "Mais, Mayis", image: fruitVeg10 },
      { tagalog: "Pinya", kapampangan: "Pinya", image: fruitVeg11 },
      { tagalog: "Patatas", kapampangan: "Papas, Patatas", image: fruitVeg12 },
      { tagalog: "Kalabasa", kapampangan: "Kulubasa, Kulabasa", image: fruitVeg13 },
      { tagalog: "Istroberi", kapampangan: "Istroberi, Istraberi", image: fruitVeg14 },
      { tagalog: "Kamatis", kapampangan: "Kamatis", image: fruitVeg15 },
    ],
    genVocab: [
      { tagalog: "Kama", kapampangan: "Pagkeran", image: genVocab1 },
      { tagalog: "Bisikleta", kapampangan: "Bisikleta", image: genVocab2 },
      { tagalog: "Ibon", kapampangan: "Ayup", image: genVocab3 },
      { tagalog: "Aklat", kapampangan: "Libru", image: genVocab4 },
      { tagalog: "Kandila", kapampangan: "Kandila", image: genVocab5 },
      { tagalog: "Kotse", kapampangan: "Kotsi", image: genVocab6 },
      { tagalog: "Isda", kapampangan: "Asan", image: genVocab7 },
      { tagalog: "Bulaklak", kapampangan: "Bulaklak", image: genVocab8 },
      { tagalog: "Bahay", kapampangan: "Bale/Tuknangan", image: genVocab9 },
      { tagalog: "Isla", kapampangan: "Pulo", image: genVocab10 },
      { tagalog: "Susi", kapampangan: "Llave", image: genVocab11 },
      { tagalog: "Pahayagan", kapampangan: "Diaryu", image: genVocab12 },
      { tagalog: "Lapis", kapampangan: "Lapis", image: genVocab13 },
      { tagalog: "Punungkahoy", kapampangan: "Tanaman", image: genVocab14 },
      { tagalog: "Bundok", kapampangan: "Bundok", image: genVocab15 },
      { tagalog: "Tulay", kapampangan: "Tete", image: genVocab16 },
      { tagalog: "Bote", kapampangan: "Boti", image: genVocab17 },
    ]
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button className="image-button goBack" onClick={handleGoBack}>
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
              <tr key={index}>
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
