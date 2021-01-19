import React from "react";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Body from "./layout/Body";

function Route2() {
  return (
    <div>
      <Navigation />
      <div class="main">
        <Header />
        <div className="bodyarea">
          <div className="row mr-0 ml-0 p-4">
            <h1>Route2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route2;
