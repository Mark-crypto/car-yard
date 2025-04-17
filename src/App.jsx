import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { SingleProduct } from "./pages/SingleProduct";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import Checkout from "./components/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export function App() {
  return <></>;
}
