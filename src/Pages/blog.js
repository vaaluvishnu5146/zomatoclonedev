import React from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const params = useParams();

  return (
    <div
      className="page"
      style={{
        background: "bisque",
      }}
    >
      blog for {params.productCategory}
    </div>
  );
}
