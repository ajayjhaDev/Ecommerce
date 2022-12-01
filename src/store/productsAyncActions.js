import { productsActions } from "./products-slice";
import config from "../config";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    axios
      .get(config.URL)
      .then((res) => {
        dispatch(productsActions.getProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
