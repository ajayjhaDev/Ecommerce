import App from "./App";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
