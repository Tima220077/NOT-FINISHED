import React, { useEffect, useState } from "react";
import "./App.css";
import Restart from "./Restart";
import Thing from "./Thing";

//array,states
//("https://type.fit/api/quotes"
function App() {
  const [test, setTest] = useState(false);
  const [right, setRight] = useState(0);

  return (
    <div>
      <h1>Quiz App</h1>
      {test ? <Restart /> : <Thing />}
    </div>
  );
}

export default App;
