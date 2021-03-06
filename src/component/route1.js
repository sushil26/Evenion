import React from "react";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";

function Route1() {
  return (
    <div>
      <Navigation />
      <div class="main">
        <Header />
        <div className="bodyarea">
          <div className="row mr-0 ml-0 p-4">
            <h1>Route1</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route1;
