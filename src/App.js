import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import items from "./data";
import Catagories from "./Catagories";
import Menu from "./Menu";

const allCatagories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState(allCatagories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-5'>Menu</h2>
      <hr
        className='bg-warning mx-auto'
        style={{ height: "3px", width: "4rem" }}
      ></hr>
      <Catagories catagories={catagories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
