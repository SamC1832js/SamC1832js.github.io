import React, { useEffect, useState, useRef } from "react";
import "./Enter.css";

function Enter() {
  const [dashOffsets, setDashOffsets] = useState({
    circle1: 30,
    circle2: 40,
    circle3: 50,
    circle4: 60,
    circle5: 70,
  });
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  const radii = [50, 70, 90, 110, 130];
  const directions = [-1.03, -1.45, -1.88, -2.3, -2.73];

  function calculateDashArray(radius) {
    return Math.PI * radius;
  }
  useEffect(() => {
    const animateCircle = async (circleIndex) => {
      const direction = directions[circleIndex];
      const key = `circle${circleIndex + 1}`;
      let speed = 4;
      function animate() {
        setDashOffsets((prevOffsets) => ({
          ...prevOffsets,
          [key]: prevOffsets[key] + direction * speed,
        }));
        requestAnimationFrame(animate);
      }

      animate();
    };

    (async function startAnimation() {
      for (let i = radii.length; i >= 0; i--) {
        animateCircle(i);
        await new Promise((resolve) => setTimeout(resolve, 40));
      }
    })();

    setTimeout(() => setBackgroundOpacity(0), 1500);

    return () => cancelAnimationFrame(animateCircle);
  }, []);

  return (
    <div className="enter-container">
      <div
        className="background-overlay"
        style={{ opacity: backgroundOpacity }}
      ></div>
      <svg height="300" width="300" className="circle-overlay">
        {radii.map((radius, index) => (
          <circle
            key={index}
            cx="150"
            cy="150"
            r={radius}
            className={`circle${index + 1}`}
            strokeDasharray={calculateDashArray(radius)}
            strokeDashoffset={dashOffsets[`circle${index + 1}`]}
          ></circle>
        ))}
      </svg>
    </div>
  );
}

export default Enter;
