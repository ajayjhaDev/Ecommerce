import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Product = ({ id, title, price, img, category }) => {
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();
  const handleAddToCart = (items) => {
    dispatch(cartActions.AddProducts(items));

    alert(`${items.title} has been Added to Cart`);
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
          </p>
          <button
            className="add btn btn-primary"
            onClick={() =>
              handleAddToCart({ id, title, img, price, category, quantity })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
