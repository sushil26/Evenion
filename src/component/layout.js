import React from "react";
import "./layout.css";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Body from "./layout/Body";

function MenuDemo() {
  return (
    <div>
      <Navigation />
      <div class="main">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default MenuDemo;
