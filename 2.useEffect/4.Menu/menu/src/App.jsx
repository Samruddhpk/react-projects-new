import Menu from "./components/Menu";
import data from "./data.js";
import Title from "./components/Title";
import { useState } from "react";
import Categories from "./components/Categories";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  const title = "our menu";
  return (
    <main>
      <Title title={title} />
      <Categories categories={categories} filterItems={filterItems} />
      <Menu menu={menu} />
    </main>
  );
}

export default App;
