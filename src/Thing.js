import React, { useEffect, useState } from "react";
import JSONQuestions from "./questions.json";
import { ReactDOM } from "react";
import App from "./App";

export default function Thing() {
  const [right, setRight] = useState(null);
  const [fright, setFright] = useState(null);
  //works
  const [answer, setAnswer] = useState([]);
  //works
  const [question, setQuestion] = useState(null);
  //works
  const [displ, setDispl] = useState(true);
  //wroks
  const [inx, setInx] = useState(0);
  // not
  function newQuestion() {
    if (inx > 4) {
      console.log("a");
      //don't work
    } else {
      setInx(inx + 1);
      console.log(inx); //problem
      const rand = Math.floor(Math.random() * JSONQuestions.length);
      console.log(JSONQuestions[rand].question);
      let qstn = JSONQuestions[rand];

      setRight();
      //color, display
      setDispl(false);
      setAnswer([qstn.A, qstn.B, qstn.C, qstn.D]);
      setQuestion(qstn.question);
      setFright(qstn.answer);
      //to place here
    }
  }
  function getQuestion() {
    setDispl(true);
    setRight(fright);
    //setcolor,set index, right answer
  }
  return (
    <main>
      <p>{question}</p>
      <ul onClick={getQuestion}>
        <li className={right == "A" && "true"}>{answer[0]}</li>
        <li className={right == "B" && "true"}>{answer[1]}</li>
        <li className={right == "C" && "true"}>{answer[2]}</li>
        <li className={right == "D" && "true"}>{answer[3]}</li>
      </ul>
      <button
        style={{ display: displ ? "block" : "none" }}
        onClick={newQuestion}
      >
        NEXT
      </button>
    </main>
  );
}
