import React, { useState } from "react";
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

  return (
    <div>
      <section className="input-fields">
        <input placeholder="Top text" />
        <input placeholder="Bottom text" />
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
        <p className="text1">Top text</p>
        <p className="text2">Bottom text</p>
      </section>
    </div>
  );
};
