import { useState } from "react";
import data from "./data.js";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section>
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="form-container">
        <label htmlFor="number">paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          min="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          generate
        </button>
      </form>

      <article>
        {text.map((item, index) => {
          return (
            <p key={index} className="para">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
