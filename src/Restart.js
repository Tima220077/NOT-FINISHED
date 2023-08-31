import React, { useEffect, useState } from "react";
import JSONQuestions from "./questions.json";
import App from "./App";
import Thing from "./Thing";

export default function Restart() {
  return (
    <main>
      <p>scored 5 out of 5</p>
      <button>RESTART</button>
    </main>
  );
}
