import { useState } from "react";
import ColorList from "./components/ColorList/ColorList";
import Form from "./components/Form/Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColors = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="App">
      <Form addColors={addColors} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
