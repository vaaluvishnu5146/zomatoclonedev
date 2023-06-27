import React from "react";

function PriceCard({ data = {} }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {data.priceType}
          </h5>
          <h6 className="card-price text-center">
            ${data.pricing}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {data.features.map((d, index) => (
              <li
                key={`pricing-card-list-item-${data.pricing}-${d.feature}-${index}`}
                className={d.isAvailable ? "" : "text-muted"}
              >
                <span className="fa-li">
                  <i
                    className={`fas ${d.isAvailable ? "fa-check" : "fa-times"}`}
                  ></i>
                </span>
                {d.feature}
              </li>
            ))}
          </ul>
          <div className="d-grid">
            <button
              onClick={() => alert(data.pricing)}
              className="btn btn-primary text-uppercase"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
