import React, { useState, useEffect } from "react";

// SYNTAX 1
export function Circle(props) {
  const { color = "" } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed", count);
  }, [count]);

  return (
    <div
      className="circle"
      style={{ background: color }}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </div>
  );
}

// SYNTAX 2
export const CircleC = ({ color = "" }) => {
  return (
    <div className="circle" style={{ background: color }}>
      Circle C
    </div>
  );
};

export function Rectangle({ color = "" }) {
  return (
    <div className="square" style={{ background: color }}>
      Rectangle
    </div>
  );
}
