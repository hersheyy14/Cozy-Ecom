import "./card.css";
import { getProductFromProductArray } from "../../utils";
// import { Link } from "react-router-dom";

// import SingleProductDetails from "../SingleProduct/SingleProductDetails";

const Card = (props) => {
  const addToCart = (product) => {
    let returnedValue = getProductFromProductArray(props.cart, product);
    if (returnedValue === undefined) {
      props.setCart([...props.cart, { ...product, qty: 1 }]);
      console.log(props.setCart, "hello");
    } else {
      returnedValue.qty++;

      const newValue = props.cart.filter((item) => item.id !== product.id);
      props.setCart([returnedValue, ...newValue]);
    }
  };
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.image} className="card-img" alt="Product-img" />
      </div>
      <div className="card-body-b">
        <p className="card-title">{props.title.substring(0, 20)}...</p>
        <p className="card-desc">{props.description.substring(0, 30)}</p>
      </div>

      <div className="button-container">
        <span className="card-price">₹{props.price}</span>
        {/* <Link to={`/products/${props.id}`}> */}
        <button
          className="card-button"
          onClick={() => addToCart(props.product)}
        >
          Add to Cart
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Card;
