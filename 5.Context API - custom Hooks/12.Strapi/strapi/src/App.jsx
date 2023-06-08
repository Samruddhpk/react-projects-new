import { useGlobalContext } from "./context";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";
import Submenu from "./components/Submenu/Submenu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
}

export default App;
