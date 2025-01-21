import { useState, useEffect } from "react";

export default function Profile({ image, name, alt }) {
  let [buttonState, setButtonState] = useState(true);
  useEffect(() => {
    let image = document.querySelector("img");
    if (!buttonState) {
      console.log("name", name);
      console.log("image", image);
      image.style.height = "0px";
    }
  }, [buttonState]);
  return (
    <li className="profile">
      <button onClick={(e) => setButtonState(!buttonState)}>
        {buttonState ? "Hide Image" : "Show Image"}
      </button>
      <h2>{name}</h2>
      <img src={image} alt={alt}></img>
    </li>
  );
}
