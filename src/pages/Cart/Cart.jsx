import React from "react";
import "./cart.css";
import { getProductFromProductArray } from "../../utils";

const Cart = (props) => {
  const amount = props.cart.reduce((price, item) => {
    return price + item.qty * item.price;
  }, 0);
  const totalAmount = amount.toFixed(2);
  console.log(totalAmount);

  const handleAdd = (item) => {
    let returnedValue = getProductFromProductArray(props.cart, item);
    returnedValue.qty++;

    const newValue = props.cart.filter((product) => product.id !== item.id);
    props.setCart([...newValue, returnedValue]);
    console.log([...props.cart, returnedValue]);
  };

  console.log(props.cart, "hello");

  const handleSub = (item) => {
    const returnedValue = props.cart.find((product) => {
      return product.id === item.id;
    });
    if (returnedValue.qty === 1) {
      props.setCart(
        props.cart.filter((product) => {
          return product.id !== item.id;
        })
      );
    } else {
      props.setCart(
        props.cart.map((product) => {
          return product.id === item.id
            ? { ...returnedValue, qty: returnedValue.qty - 1 }
            : product;
        })
      );
    }
  };
  return (
    <div className="cart-bg">
      <div className="cart-container">
        <span className="cart-title">Shopping Cart</span>
        {props.cart.map((item) => {
          return (
            <div key={item.title}>
              <img className="item-image" src={item.image} alt="productimage" />
              <div className="name-price">
                <span className="item-name">{item.title}</span>
                <span className="item-price">₹ {item.price}</span>
                <span className="item-rating">Rating {item.rating.rate}★</span>
              </div>
              <div className="item-button-div">
                <button
                  className="item-button"
                  onClick={() => {
                    handleSub(item);
                  }}
                >
                  -
                </button>
                <span className="quantity">{item.qty}</span>
                <button
                  className="item-button"
                  onClick={() => {
                    handleAdd(item);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <hr></hr>
        <div className="total">Total Amount = ₹ {totalAmount}</div>
      </div>
    </div>
  );
};

export default Cart;
