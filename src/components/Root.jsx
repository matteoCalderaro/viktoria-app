import { useState } from "react";
import App from "../App";
import About from "../pages/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Root() {
  const [todosVisible, setTodosVisible] = useState(false);

  function toggleApp() {
    return setTodosVisible((prev) => !prev);
  }
  return (
    <>


      <section className="timer-container">
        {!todosVisible ? (
          <App toggleApp={toggleApp} />
        ) : (
          <About toggleApp={toggleApp} />
        )}
      </section>

    </>
  );
}