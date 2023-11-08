import React, { useState } from "react";
import TallyCounter from "./TallyCounter.js";
function App() {
  const [counterList, setCounterList] = useState([]);

  const addCounter = () => {
    setCounterList([
      ...counterList,
      <TallyCounter
        key={counterList.length}
        onDelete={() => deleteCounter(counterList.length)}
      />,
    ]);
  };

  const deleteCounter = (index) => {
    const updatedList = [...counterList];
    updatedList.splice(index, 1);
    setCounterList(updatedList);
  };
  return (
    <div className="container my-5">
      {counterList.map((counter, index) => (
        <div key={index}>{counter}</div>
      ))}
      <button className="btn btn-info" onClick={addCounter}>
        Add Tally Counter
      </button>
    </div>
  );
}

export default App;
