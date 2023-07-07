import React from "react";
import { Circle, CircleC, Rectangle } from "../Components/Shapes/shapes";

export default function Home() {
  return (
    <div
      className="page"
      style={{
        background: "transparent",
      }}
    >
      Home Page
      <Circle color="green" />
      <CircleC color="yellow" />
      <Rectangle color="orange" />
    </div>
  );
}
