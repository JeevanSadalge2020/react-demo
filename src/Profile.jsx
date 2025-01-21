import { useState, useEffect } from "react";

export default function Profile({ image, name, alt }) {
  let [buttonText, setButtonText] = useState("hide");
  let [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // This runs for change in button text. Checks for below condition every time button text changes
    if (imageVisible) setImageVisible(false);
    else setImageVisible(true);
  }, [buttonText]);

  useEffect(() => {
    // This sets images to SHOW by default
    setImageVisible(true);
  }, []);

  return (
    <li
      className={
        imageVisible ? "profile-visible profile" : "profile-hidden profile"
      }
    >
      <button
        onClick={(e) => {
          if (buttonText === "hide") {
            setButtonText("show");
          } else {
            setButtonText("hide");
          }
        }}
      >
        {buttonText === "hide" ? "Hide" : "Show"}
      </button>
      <h2>{name}</h2>
      <img src={image} alt={alt}></img>
    </li>
  );
}
