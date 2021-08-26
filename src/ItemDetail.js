import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  //   console.log(match);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const fetchItem = async () => {
    // const fetchItem = await fetch(
    //   `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    // );
    // console.log({ fetchItem });
    await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
    ).then((response) => console.log(response));
    //   .then((data) => setItem(data));

    // const item = await fetchItem.json();
    // setItem(item);
    console.log(item);
    // console.log(`item= ${item[1]}`);
    console.log(`item.drinks= ${item.idDrink}`);
  };
  return (
    <div className="Item">
      {/* <h1>{item.strDrink}</h1> */}
      <h1>{}</h1>
    </div>
  );
}

export default ItemDetail;
