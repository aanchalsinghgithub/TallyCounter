import React, { useState } from "react";

function TallyCounter({ onDelete }) {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("Tally Counter");
  const [visible, setVisible] = useState(false);

  const [input, setInput] = useState(0);
  const [visi, setVisi] = useState(false);
  const [show, setShow] = useState(true);
  const Display = () => {
    if (inputText.trim() !== "") {
      setDisplayedText(inputText);
      setInputText("");
      setVisible(false);
    }
  };

  const setDisplayNum = () => {
    setCount(parseInt(input, 10)); // Parse input as an integer
    setInput(0); // Reset the input state to 0
    setVisi(false);
  };

  return (
    <div className="card text-center my-3 custom-card">
      <div className="card-body">
        <h1>{displayedText}</h1>
        <div className="my-3">
          <h2 className="my-3">{count}</h2>
          <button
            className="btn btn-success mx-3"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger mx-3"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="btn btn-secondary mx-3"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          {visi && (
            <>
              <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text"
              />
              <button onClick={setDisplayNum}>Set</button>
            </>
          )}
          <button
            className="btn btn-primary mx-3"
            onClick={() => setVisi(true)}
          >
            Start Value
          </button>
          {visible && (
            <>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text"
              />
              <button onClick={Display}>Set</button>
            </>
          )}
          <button
            className="btn btn-primary mx-3"
            onClick={() => setVisible(true)}
          >
            Counter Name
          </button>
        </div>
      </div>
    </div>
  );
}
export default TallyCounter;
