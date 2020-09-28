import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";
import { Page } from "./stories/Page";
import { Header } from "./stories/Header";

function App() {
  return (
    <>
      <Header />
      <p></p>
      <div align="center">
        <Button label="Click Me" />
        <Button primary label="Click Me" />
        <Button size="large" label="Click Me" />
        <Button size="small" label="Click Me" />
      </div>
    </>
  );
}

export default App;
