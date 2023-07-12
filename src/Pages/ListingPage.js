import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../Redux/Reducers/ProductsSlice";

function ListingPage() {
  const dispatcher = useDispatch();
  const { productsData = {} } = useSelector((state) => state);
  const { products = [] } = productsData;
  console.log("SELECTOR", productsData);

  function handleGetMyFood() {
    fetch("./mocks/products.json")
      .then((response) => response.json())
      .then((result) => {
        if (result.data) {
          dispatcher(saveProducts(result.data));
        }
      })
      .catch((err) => console.log("ERROR IN FECTHING FOODS::", err));
  }

  return (
    <div className="listing-page-container">
      <div className="listing-section">
        {products.length > 0 ? (
          products.map((d, i) => (
            <div className="food-card" key={`food-card-${i}`}>
              {d.name}
            </div>
          ))
        ) : (
          <img src={"./Assets/cokecan.png"} />
        )}
      </div>
      <div className="bottom-bar">
        <button className="btn btn-lg primary-button" onClick={handleGetMyFood}>
          GET MY FOOD
        </button>
      </div>
    </div>
  );
}

export default ListingPage;
