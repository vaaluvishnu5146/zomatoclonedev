import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { products = [] } = useSelector((state) => state.productsData);
  console.log("PRODUCTS", products);
  return (
    <div
      className="page"
      style={{
        background: "red",
      }}
    >
      Home Page
    </div>
  );
}
