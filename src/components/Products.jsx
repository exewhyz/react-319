import { useState } from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    name: "DEll",
    price: "100000",
  },
  {
    name: "HP",
    price: "200000",
  },
  {
    name: "Lenovo",
    price: "300000",
  },
];

const Products = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {products.map((product, index) => {
        return (
          <ProductItem key={index} name={product.name} price={product.price} />
        );
      })}
    </div>
  );
};

export default Products;
