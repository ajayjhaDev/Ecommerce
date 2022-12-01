import React from "react";
import CartHeader from "../components/cartHeader";
import CartProducts from "../components/cartProducts";
import Modal from "../components/Modal";

const Cart = () => {
  return (
    <>
      <CartHeader />
      <CartProducts />
      <Modal />
    </>
  );
};

export default Cart;
