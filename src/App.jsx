import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Form } from "./components/form/form";
import { placeholderMeme } from "./assets";
import "./App.css";

function App() {
  const [meme, setMeme] = useState(placeholderMeme);

  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <section className="results">
          <img className="meme" src={meme} />
          <p className="text1">Top text</p>
          <p className="text2">Bottom text</p>
        </section>
      </main>
    </div>
  );
}

export default App;
