import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components";
import { Home, Translations, Books, Cards, Dictionaries, Spelling, TranslationsNav, GamesNav, BooksNav, SpellingNav, CardsNav, DictionariesNav } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route index element={<Home />} />
          <Route path="translationsNav" element={<TranslationsNav />} />
          <Route path="gamesNav" element={<GamesNav />} />
          <Route path="booksNav" element={<BooksNav />} />
          <Route path="spellingNav" element={<SpellingNav />} />
          <Route path="cardsNav" element={<CardsNav />} />
          <Route path="dictionariesNav" element={<DictionariesNav />} />
          <Route path="translations" element={<Translations />} />
          <Route path="books" element={<Books />} />
          <Route path="cards" element={<Cards />} />
          <Route path="dictionaries" element={<Dictionaries />} />
          <Route path="spelling" element={<Spelling />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;