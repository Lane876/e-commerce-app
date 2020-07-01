import React from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <ul className="products">
      {products.map((product, i) => (
        <li key={i}>
          <div className="product">
            <Link to={"/products/" + product._id}>
              <img className="product-image" src={product.image} alt="cover" />
            </Link>
            <div className="product-name">
              <Link to={"/products/" + product._id}>{product.name}</Link>
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

export default HomeScreen;
