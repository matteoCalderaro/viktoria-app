import React from "react";
import { CSSTransition } from "react-transition-group";

function Intro(props) {
  return (
    <>


      <CSSTransition in={true} timeout={1000} classNames="slide-top" appear>
        <div className="text-intro">
          Ein plötzlich auftretender starker Wind auf dem Gardasee zwingt Johann
          Wolfgang Goethe auf seiner berühmten Reise durch Italien am 13.9.1786
          zu einem Kurzaufenthalt in Malcesine. Fasziniert von der Schönheit der
          Skaliger Burg, sucht der Dichter einen ruhigen Platz und zeichnet das
          Schloss.&#128580;
        </div>
      </CSSTransition>


      <CSSTransition
        in={true}
        timeout={1000}
        classNames="slide-vertical"
        appear
      >
        <button className="btn-intro" onClick={props.toggle}>
          <span>&#128073;</span>
          <span>Give Me a try</span>
        </button>
      </CSSTransition>

    </>
  );
}
export default Intro;
