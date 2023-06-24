import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement: <div>Error Page</div>
    }
])

export default routes;