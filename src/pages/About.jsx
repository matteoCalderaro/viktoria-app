import React from "react";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function About(props) {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Matteo",
      isComplete: false,
      isEditing: false
    },
    {
      id: 2,
      name: "Matteo",
      isComplete: true,
      isEditing: false
    }
  ]);
  return (
    <>
      <div className="todo-container">
        <div className="todoHeader">
          <span>&#128073;You Must Do</span>
          <img
            className="diary-button-img"
            src="https://cdn.bio.link/uploads/thumbnails/2021-10-22/2sdB60AQ6LQbd4vDploaded_s51fx6uf.gif"
            alt="diary"
          />
        </div>
        <div className="todo-box">
          <CSSTransition in={true} timeout={1000} classNames="slide-top" appear>
            <div>
              {todos.map((e) => (
                <ul>
                  <li>{e.name}</li>
                </ul>
              ))}
            </div>
          </CSSTransition>
        <CSSTransition
          in={true}
          timeout={1000}
          classNames="slide-vertical"
          appear
        >
          <p className="cazzo" onClick={props.toggleApp}>
            &larr;
          </p>
        </CSSTransition>
        </div>
      </div>
    </>
  );
}
