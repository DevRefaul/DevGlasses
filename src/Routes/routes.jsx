import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root/Root";
import AllOrders from "../Pages/AllOrders/AllOrders";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import ExpressDelivery from "../Pages/ExpressDelivery/ExpressDelivery";
import RegularDelivery from "../Pages/RegularDelivey/RegularDelivey";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/glasses/:name",
        element: <SingleProductPage />,
      },
      {
        path: "/allorders",
        element: <AllOrders />,
      },
      {
        path: "/expressdelivery",
        element: <ExpressDelivery />,
      },
      {
        path: "/regulardelivery",
        element: <RegularDelivery />,
      },
    ],
  },
]);

export default routes;
