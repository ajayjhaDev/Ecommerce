import React from "react";
import CartHeader from "../components/CartHeader";
import CartProducts from "../components/CartProducts";
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
