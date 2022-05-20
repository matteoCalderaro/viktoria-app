import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function About(props) {
  const [todos] = useState([
    {
        id: 1,
        name: "Anche la pizza con l'ananas non va bene",
        isComplete: false,
        isEditing: false
    },
    {
      id: 2,
      name: "Mai bere il capuccino dopo lo 11:00 (ordinare Aperol Spritz)",
      isComplete: false,
      isEditing: false
    },
    {
      id: 3,
      name: "Non cenare mai prima delle 19:30 (vietatissimo!)",
      isComplete: true,
      isEditing: false
    },
    {
      id: 4,
      name: "Non farsi rubare la bicicletta",
      isComplete: true,
      isEditing: false
    },
    {
      id: 5,
      name: "Parlare in italiano il più possile (ma non sempre)",
      isComplete: true,
      isEditing: false
    },
    {
      id: 6,
      name: "Cazzeggiare e gironzolare per il Garda trentino",
      isComplete: true,
      isEditing: false
    },

  ]);
  return (
    <>
      <div className="todo-container">
        <div className="todoHeader">
          <span>&#128073;Tipps und Tricks</span>
          <img
            className="diary-button-img"
            src="https://cdn.bio.link/uploads/thumbnails/2021-10-22/2sdB60AQ6LQbd4vDploaded_s51fx6uf.gif"
            alt="diary"
          />
        </div>
        <div className="todo-masthead">

        <div className="todo-box">
          <CSSTransition in={true} timeout={1000} classNames="slide-top" appear>
            <div>
              {todos.map((e) => (
                <ul className="listaTodos">
                  <li>{e.name}</li>
                </ul>
              )).sort((a,b)=>b-a)}
            </div>
          </CSSTransition>
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="slide-vertical"
          appear
        >
          <p className="cazzo" onClick={props.toggleState}>
            &larr;
          </p>

        </CSSTransition>


        <p className="footer">Se mi viene in mente qualcos'altro aggiorno la lista &#128527;</p>

        </div>
        </div>

      </div>
    </>
  );
}
