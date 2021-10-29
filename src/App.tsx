import React from "react";

import './App.css';

import GlobalFonts from "./fonts/fonts";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
