import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const ProductScreen = (props) => {
  const propId = props.match.params.id;
  const num = Number(propId);

  console.log(num);

  const product = data.products.find((product) => product._id === num);
  console.log(product);
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4> {product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              Price:<b> ${product.price}</b>
            </li>
            <li>
              Desc:
              {product.description}
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li>
              <button className="button">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
