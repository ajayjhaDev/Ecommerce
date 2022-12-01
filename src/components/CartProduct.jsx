import React from "react";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const CartProduct = ({ id, quantity, title, price, img, category }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <>
      <div className="card col mx-auto" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt={"products"}
          height={"150px"}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {category}

            <strong className="ms-5">{`${price}$`}</strong>
            <br />

            <strong className="ms-5">{`Total Quantity: ${quantity}`}</strong>
          </p>
          <button
            type="button"
            className="add btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Order Now
          </button>
          <br />

          <button
            type="button"
            className="add btn btn-danger mt-3"
            onClick={() => handleRemove(id)}
          >
            remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
