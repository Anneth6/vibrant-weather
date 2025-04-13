import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        {/* <h1>Weather App</h1> */}
        <footer>
          This project was coded and created by{" "}
          <a href="https://github.com/Anneth6" target="_blank" rel="noreferrer">
            Ann Russell
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/Anneth6/vibrant-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://vibrant-weather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
