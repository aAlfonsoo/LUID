import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./components";
import { Home, Translations, Books, Cards, Dictionaries, Spelling } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route index element={<Home />} />
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