import { useState } from "react";
import {
  FaBars,
  FaUser,
  FaHeart,
  FaChartBar,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import Logo from "../public/logo.png";

import "./App.css";
function App() {
  const [catalog, setCatalog] = useState(false);
  return (
    <div className="container">
      <nav>
        <img src={Logo} alt="" width={102} height={30} />
        <div className="katalog" onClick={() => setCatalog(!catalog)}>
          <FaBars />
          Katalog
        </div>
        <div className="search-wrapper">
          <input
            className="search"
            type="text"
            placeholder="Katalog bo'yicha qidirish"
          />
          <FaSearch className="search-btn" />
        </div>
        <ul className="nav-right">
          <li className="nav-right-list">
            <FaChartBar />
            Taqqoslash
          </li>
          <li className="nav-right-list">
            <FaHeart />
            Sevimlilar
          </li>
          <li className="nav-right-list">
            <FaShoppingCart />
            Savatcha
          </li>
          <li className="nav-right-list">
            <FaUser />
            Kirish
          </li>
        </ul>
      </nav>
      <div className={`katalog-parda ${catalog ? "parda-open" : ""}`}>
        <h1>There's nothing added yet!!!</h1>
      </div>
    </div>
  );
}

export default App;
