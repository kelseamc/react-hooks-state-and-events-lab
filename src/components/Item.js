import React, {useState} from "react";

function Item({ name, category }) {

  const [cartItem, setCartItem] = useState("")
  
  function handleAddItem(){
    setCartItem("in-cart")
  }


  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
