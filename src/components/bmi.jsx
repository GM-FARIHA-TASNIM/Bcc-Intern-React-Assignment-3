import React, { useRef, useState } from "react";
import "../App.css";

function Task2UncontrolledBMI() {
  const heightRef = useRef();
  const weightRef = useRef();
  const [bmi, setBmi] = useState(null);

  const handleCalculate = () => {
    const h = parseFloat(heightRef.current.value);
    const w = parseFloat(weightRef.current.value);
    if (!h || !w) return alert("Please enter both height and weight!");
    const result = (w / (h / 100) ** 2).toFixed(2);
    setBmi(result);
  };

  return (
    <div className="bmi-container">
      <h2>Uncontrolled Form (BMI Calculator)</h2>
      <input type="number" placeholder="Height (cm)" ref={heightRef} />
      <input type="number" placeholder="Weight (kg)" ref={weightRef} />
      <button onClick={handleCalculate}>Calculate BMI</button>
      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
}

export default Task2UncontrolledBMI;
