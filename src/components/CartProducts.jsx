import React from "react";
import { useSelector } from "react-redux";

import CartProduct from "./CartProduct";

const CartProducts = () => {
  const cartProducts = useSelector((state) => state.cart.cartproducts);

  return (
    <>
      <h5 className="text-center mb-5 mt-5">Your cart Products</h5>

      <div className="row row-cols-4">
        {cartProducts.map((ele) => (
          <CartProduct
            id={ele.id}
            key={ele.id}
            title={ele.title}
            price={ele.price}
            img={ele.img}
            category={ele.category}
            quantity={ele.quantity}
          />
        ))}
      </div>
    </>
  );
};

export default CartProducts;
