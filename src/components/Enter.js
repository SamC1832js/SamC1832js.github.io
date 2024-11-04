import React, { useEffect, useState } from "react";
import "./Enter.css";

function Enter() {
  const [dashOffsets, setDashOffsets] = useState({
    circle1: 0,
    circle2: 0,
    circle3: 0,
    circle4: 0,
    circle5: 0,
  });

  function calHalfDasharray(radius) {
    return Math.PI * radius; // Half of the circumference
  }

  useEffect(() => {
    const radii = [50, 70, 90, 110, 130];
    const directions = [-1, -1.4, -1.8, -2.2, -2.6]; // Gradually increasing speed for outer circles

    const intervals = radii.map((radius, index) => {
      const circumference = 2 * Math.PI * radius;
      return setInterval(() => {
        setDashOffsets((prevOffsets) => {
          const newOffset =
            prevOffsets[`circle${index + 1}`] + directions[index] * 5;
          return { ...prevOffsets, [`circle${index + 1}`]: newOffset };
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);
  return (
    <div className="enter-container">
      <svg height="300" width="300">
        <circle
          cx="150"
          cy="150"
          r="50"
          className="circle1"
          strokeDasharray={calHalfDasharray(50)}
          strokeDashoffset={dashOffsets.circle1}
        ></circle>
        <circle
          cx="150"
          cy="150"
          r="70"
          className="circle2"
          strokeDasharray={calHalfDasharray(70)}
          strokeDashoffset={dashOffsets.circle2}
        ></circle>
        <circle
          cx="150"
          cy="150"
          r="90"
          className="circle3"
          strokeDasharray={calHalfDasharray(90)}
          strokeDashoffset={dashOffsets.circle3}
        ></circle>
        <circle
          cx="150"
          cy="150"
          r="110"
          className="circle4"
          strokeDasharray={calHalfDasharray(110)}
          strokeDashoffset={dashOffsets.circle4}
        ></circle>
        <circle
          cx="150"
          cy="150"
          r="130"
          className="circle5"
          strokeDasharray={calHalfDasharray(130)}
          strokeDashoffset={dashOffsets.circle5}
        ></circle>
      </svg>
    </div>
  );
}

export default Enter;
