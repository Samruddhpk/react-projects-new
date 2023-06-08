import { useState } from "react";
import { useGlobalContext } from "./context";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

function App() {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
