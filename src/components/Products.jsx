import React, { useEffect } from "react";
import Product from "./Product";

import { useSelector, useDispatch } from "react-redux";

import { getAllProducts } from "../store/productsAyncActions";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <h5 className="text-center mb-5 mt-5" id="products">
        Buy Our Products Now
      </h5>

      <div className="row row-cols-4">
        {products.map((ele) => (
          <Product
            id={ele.id}
            key={ele.id}
            title={ele.title}
            price={ele.price}
            img={ele.image}
            category={ele.category}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
