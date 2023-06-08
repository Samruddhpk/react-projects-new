import React from "react";
import { useGlobalContext } from "../../context";
import { FaBars } from "react-icons/fa";
import "./home.scss";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>

      <button className="modal-btn" onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
