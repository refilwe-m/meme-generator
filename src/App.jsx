import React from "react";
import { Header } from "./components/header/header";
import { Form } from "./components/form/form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
