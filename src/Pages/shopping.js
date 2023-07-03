import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Shopping() {
  const params = useParams();

  console.log(params);
  return (
    <div
      className="page"
      style={{
        background: "orange",
      }}
    >
      <ul>
        <Link to="/blog/mens-tshirt">
          <li>Mens T-shirt</li>
        </Link>
        <Link to="/blog/womens-tshirt">
          <li>Womens T-shirt</li>
        </Link>
        <Link to="/blog/electronics">
          <li>Electronics Appliances</li>
        </Link>
        <Link to="/blog/kitchen-appliances">
          <li>Kitchen Equipments</li>
        </Link>
      </ul>
    </div>
  );
}
