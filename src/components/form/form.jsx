import React from "react";

export const Form = () => {
  return (
    <form>
      <section className="input-fields">
        <input placeholder="Top text" />
        <input placeholder="Bottom text" />
      </section>

      <button className="button">Get a new meme image</button>
    </form>
  );
};
