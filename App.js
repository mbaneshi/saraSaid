import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [numberEntered, setnumberEntered] = useState("");
  const [biggestNumber, setBiggestNumber] = useState("");

  const myfunction = (x) => {
    var array = x.split("");
    var isSorted = (array) => {
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          return false;
        }
      }
      return true;
    };

    while (!isSorted(array)) {
      x = +x - 1;
      x = x.toString();
      array = x.split("");
    }
    setBiggestNumber(+x);
  };
  //Function to handle the input
  useEffect(() => {
    myfunction(numberEntered);
  }, [numberEntered]);

  const handleChange = (e) => {
    setnumberEntered(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Biggest Number Sara Said</h1>
      <input
        type="text"
        placeholder="Enter number "
        onChange={(e) => handleChange(e)}
      />

      <h2 className="title">The Biggest Number is {biggestNumber}</h2>
    </div>
  );
}

export default App;
