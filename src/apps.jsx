import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import data from "./data.json";
import { useState, useEffect } from "react";

function Profile({ image, name, alt }) {
  let [buttonText, setButtonText] = useState("hide");
  let [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    if (imageVisible) {
      setImageVisible(false);
    } else {
      setImageVisible(true);
    }
  }, [buttonText]);

  return (
    <li className={imageVisible ? "profile-visible" : "profile-hidden"}>
      <button
        onClick={(e) => {
          if (buttonText === "hide") {
            setButtonText("show");
          } else {
            setButtonText("hide");
          }
        }}
      >
        {buttonText === "hide" ? "Hide Image" : "Show Image"}
      </button>
      <h2>{name}</h2>
      <img src={image} alt={alt}></img>
    </li>
  );
}

let avengers_list = data.map((avenger) => {
  return (
    <Profile
      name={avenger.name}
      image={avenger.image}
      alt={avenger.alt}
      key={avenger.id}
    />
  );
});

function App() {
  return <ul>{avengers_list}</ul>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
