import React from "react";

export default function Rectangle({ color = "" }) {
  return (
    <div className="square" style={{ background: color }}>
      Rectangle
    </div>
  );
}
