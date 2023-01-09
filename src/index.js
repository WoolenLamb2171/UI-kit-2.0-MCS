import React from "react";
import { render } from "react-dom";
import "./index.css";
import Button from "./Button.js";
import Container from "./Container.js";
import Input from "./Input.js";
import Link from "./Link.js";

function App() {
  return (
    <>
      <Container>
        <Input placeholder="хуz" />
        <Button type="кнопка" disabled={true}>
          Нажимай
        </Button>
        <Link href="chia.net">ЗАХОДИ</Link>
      </Container>
    </>
  );
}

console.log(
  <Button type="кнопка" disabled={true}>
    Нажимай
  </Button>
);

render(<App />, document.querySelector("#root"));
