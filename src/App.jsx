import React from "react";
import Result from "./components/Result";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import "./App.css";

const App = () => {
  return (
    <main className="react-calculator">
      <Result value={"520"} />
      <Numbers onClickNumber={(text) => console.log(text)} />
      <Functions
        onContentClear={() => console.log("clear")}
        onDelete={() => console.log("Delete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log(operation)}
        onClickEqual={(equal) => console.log(equal)}
      />
    </main>
  );
};

export default App;
