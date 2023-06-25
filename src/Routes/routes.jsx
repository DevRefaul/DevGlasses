import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root/Root";
import AllOrders from "../Pages/AllOrders/AllOrders";
import ExpressDelivey from "../Pages/ExpressDelivey/ExpressDelivey";
import RegularDelivey from "../Pages/RegularDelivey/RegularDelivey";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";

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
        element: <ExpressDelivey />,
      },
      {
        path: "/regulardelivery",
        element: <RegularDelivey />,
      },
    ],
  },
]);

export default routes;
