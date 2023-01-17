import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProductDetails = (props) => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      console.log(response);
      setSingleProduct(response);
    };
    getProduct();
  }, [id]);

  const productItem = singleProduct.find((p) => p.id === singleProduct.id);
  console.log([productItem]);
  return (
    <div>
      <div className="left-container">
        <img src={productItem.image} alt="product-img" />
      </div>
      <div className="right-container">
        <p className="productItem-category">{productItem.category}</p>
        <p className="productItem-title">{productItem.title}</p>
        <p className="productItem-rating">{productItem.rating}</p>
        <p className="productItem-rating">{productItem.price}</p>
        <p className="productItem-description">{productItem.description}</p>
      </div>
      <div className="cart-button">
        <button>Add to Cart</button>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductDetails;
