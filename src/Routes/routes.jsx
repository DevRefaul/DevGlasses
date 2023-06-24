import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Components/Root/Root";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        errorElement: <div>Error Page</div>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

export default routes;