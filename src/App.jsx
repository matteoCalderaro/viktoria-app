
import "./styles.css";

import { useState} from "react";
import Intro from "./components/Intro";
import SecondPage from "./components/SecondPage";
import {
  CSSTransition,
  SwitchTransition
} from "react-transition-group";


export default function App(props) {
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    return setIsVisible((prev) => !prev);
  }
  return (
    <section className="timer">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isVisible}
          timeout={300}
          classNames="slide-horizontal"
          unmountOnExit
        >
          {isVisible ? (
            <Intro toggle={toggle} />
          ) : (
            <SecondPage toggle={props.toggleApp} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
}
