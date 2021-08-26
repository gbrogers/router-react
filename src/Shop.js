import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    const items = await data.json();
    console.log(items.drinks);
    setItems(items.drinks);
  };

  return (
    <div className="Shop">
      {items.map((item) => (
        <h1 key={item.idDrink}>
          <Link to={`/shop/${item.idDrink}`}>{item.strDrink}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
