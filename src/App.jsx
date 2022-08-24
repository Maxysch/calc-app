import React, { useState } from "react";
import words from "lodash.words";
import Result from "./components/Result";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items.at(-1) : "0";
  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          console.log(number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("clear");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("Delete");
            setStack(stack.slice(0, -1));
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log(operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log(equal);
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
