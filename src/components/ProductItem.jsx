import React, { useState } from "react";

const ProductItem = ({ name, price }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true)
    setTimeout(()=>{
      setCount((prev) => prev + 1);
      setLoading(false)
    },2000)
  };
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
      <p>Quantity: {count}</p>
      <button disabled={loading} onClick={handleClick}>{loading ? "Adding to Cart" : "Add to Cart"}</button>
    </div>
  );
};

export default ProductItem;
