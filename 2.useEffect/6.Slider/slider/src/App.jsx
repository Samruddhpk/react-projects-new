import React from "react";
import Carousal from "./components/Carousal/Carousal";
import Slick from "./components/Slick Carousal/Slick";

const App = () => {
  return (
    <main>
      {/* <Carousal /> */}
      <h3 style={{ fontSize: "25px", fontWeight: "400" }}>
        <span style={{ color: "#8b5cf6" }}>/</span> Reviews
      </h3>
      <Slick />
    </main>
  );
};

export default App;
