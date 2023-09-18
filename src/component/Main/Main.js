import ImagesContainer from "../Image-container/Container";
import "./Main.css";

import React from "react";

const Main = (props) => {
  return (
    <main>
      <div className="title-section">
        <h1>Model 3</h1>
        <div className="text">
          <p>Starting at $32,740</p>
          <p>After Federal Tax Credit</p>
        </div>
      </div>
      <div className="action-area">
        <button className="btn-dark">Explore Inventory</button>
        <button className="btn-light">Customer Order</button>
        <p>
          3 months free Supercharging when you take delivery of a new Inventory
          vehicle by June 30.
        </p>
      </div>
    </main>
  );
};

export default Main;
