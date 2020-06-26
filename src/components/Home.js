import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

const Home = () => {
  return (
    <ul className="products">
      {data.map((product, i) => (
        <li key={i}>
          <div className="product">
            <Link to={"/products/" + product.id}>
              <img className="product-image" src={product.image} alt="cover" />
            </Link>
            <div className="product-name">
              <Link to={"/products/" + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews})
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
