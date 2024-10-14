import DefaultLayout from "layouts/DefaultLayouts";
import HomePage from "pages/Home";
import React from "react";
import "./styles/globals.css";

function App() {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
}

export default App;
