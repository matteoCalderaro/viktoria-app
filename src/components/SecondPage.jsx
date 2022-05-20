import React from "react";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import rosa from '../logo/rosa.svg';

function SecondPage(props) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  let countdownDate = new Date("June 19, 2022, 08:00:00").getTime();
  console.log(countdownDate);

  let now = new Date().getTime();
  let distance = countdownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance > 0) {
    interval = setInterval(() => {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
      clearInterval(interval);
    }, 1000);
  } else {
    clearInterval(interval);
  }

  return (
    <>
      <div>
        <h2>Countdown Timer</h2>
        <div className="subtitle">
            <h3>Countdown to a really special day</h3>
            <img  src={rosa} className="App-logo subtitle-icon" alt="logo" />

        </div>

      </div>
      <div className="counter">
        <section>
          <p>{timerDays}</p>
          <p>Days</p>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <p>Hours</p>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <p>Minutes</p>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <p>Seconds</p>
        </section>
      </div>

      <>
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="slide-vertical"
          appear
        >
          <button className="diary-button" onClick={props.toggle}>
            <span>&#128073;Continue</span>

            {/* <img
              className="diary-button-img"
              src="https://cdn.bio.link/uploads/thumbnails/2021-10-22/2sdB60AQ6LQbd4vDploaded_s51fx6uf.gif"
              alt="diary"
            /> */}
          </button>
        </CSSTransition>
      </>
    </>
  );
}
export default SecondPage;
