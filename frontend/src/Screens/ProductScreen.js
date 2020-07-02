import React from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

const ProductScreen = (props) => {
  // const propId = props.match.params.id;
  // const num = Number(propId);

  // console.log(num);

  // const product = data.products.find((product) => product._id === num);
  // console.log(product);
  const [qty, setQty] = React.useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  function handleAddCart() {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  }

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
              <li>
                Status:{" "}
                {product.countInStock === 0 ? "Unavailable" : "Available"}
              </li>
              {product.countInStock > 0 && (
                <li>
                  Qty:{" "}
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </li>
              )}
              <li>
                {product.countInStock > 0 && (
                  <button onClick={handleAddCart} className="button">
                    Add to cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
