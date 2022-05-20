import { useState } from "react";
import App from "../App";
import About from "../pages/About";



export default function Root() {
  const [todosVisible, setTodosVisible] = useState(false);

  function toggleApp() {
    return setTodosVisible((prev) => !prev);
  }
  function toggleState() {
    return setTodosVisible((prev) => !prev);
  }

  return (
    <>


      <section className="timer-container">
        {!todosVisible ? (
          <App toggleApp={toggleApp} />
        ) : (
          <About toggleState={toggleState} />
        )}
      </section>

    </>
  );
}
