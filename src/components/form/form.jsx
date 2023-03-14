import React, { useState, useRef } from "react";
import { placeholderMeme } from "../../assets";

const URL = "https://api.imgflip.com/get_memes";
const getImages = async () => {
  const response = await fetch(URL);
  const res = await response.json();
  return res.data.memes;
};

const getRandomImage = async () => {
  const images = await getImages();
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex].url;
};

export const Form = () => {
  const [meme, setMeme] = useState(placeholderMeme);
  const [topText, setTopText] = useState("Top text");
  const [bottomText, setBottomText] = useState("Bottom text");
  const refTop = useRef();
  const refBottom = useRef();

  return (
    <div>
      <section className="input-fields">
        <input
          placeholder="Top text"
          ref={refTop}
          onChange={() => {
            setTopText(refTop.current.value);
          }}
        />
        <input
          placeholder="Bottom text"
          ref={refBottom}
          onChange={() => {
            setBottomText(refBottom.current.value);
          }}
        />
      </section>

      <button
        className="button"
        onClick={async () => {
          const newMeme = await getRandomImage();
          setMeme(newMeme);
        }}
      >
        Get a new meme image
      </button>
      <section className="results">
        <img className="meme" src={meme} />
        <p className="text1">{topText}</p>
        <p className="text2">{bottomText}</p>
      </section>
    </div>
  );
};
