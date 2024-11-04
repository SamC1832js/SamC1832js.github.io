import React, { useEffect, useState } from "react";
import "./Enter.css";

function Enter() {
  const [dashOffsets, setDashOffsets] = useState({
    circle1: 30,
    circle2: 40,
    circle3: 50,
    circle4: 60,
    circle5: 70,
  });
  const [circleVisible, setCircleVisible] = useState(true);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  function calHalfDasharray(radius) {
    return Math.PI * radius;
  }

  useEffect(() => {
    const radii = [50, 70, 90, 110, 130];
    const directions = [-1, -1.4, -1.8, -2.2, -2.6];

    const intervals = radii.map((radius, index) => {
      const circumference = 2 * Math.PI * radius;

      const reverseIndex = radii.length - 1 - index;

      const delay = index * 10;

      return setTimeout(() => {
        const intervalId = setInterval(() => {
          setDashOffsets((prevOffsets) => {
            const newOffset =
              prevOffsets[`circle${reverseIndex + 1}`] +
              directions[reverseIndex] * 18;
            return {
              ...prevOffsets,
              [`circle${reverseIndex + 1}`]: newOffset,
            };
          });
        }, 50);
        return () => clearInterval(intervalId);
      }, delay);
    });

    setTimeout(() => setBackgroundOpacity(0), 2000);
    const timer = setTimeout(() => setCircleVisible(false), 3000);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="enter-container">
      <div
        className="background-overlay"
        style={{ opacity: backgroundOpacity }}
      ></div>
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
