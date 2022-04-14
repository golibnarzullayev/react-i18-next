import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { About } from "./components/About";
import AppLayout from "./components/AppLayout";
import { Home } from "./components/Home";

function App() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  if (ready) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout t={t} changeLanguage={changeLanguage} />}>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/about" element={<About t={t} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  return <span>Loading...</span>;
}


export default App;