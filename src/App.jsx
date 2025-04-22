import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { SingleProduct } from "./pages/SingleProduct";
import { Products } from "./pages/Products";
import { Home } from "./pages/Home";
import { Error404 } from "./pages/Error404";
import PaymentSuccess from "./components/PaymentSuccess";
import CancelPayment from "./components/CancelPayment";

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
    path: "/success",
    element: <PaymentSuccess />,
  },
  {
    path: "/cancel",
    element: <CancelPayment />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export function App() {
  return <></>;
}
