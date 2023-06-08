import { useState } from "react";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
