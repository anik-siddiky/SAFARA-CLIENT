import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layouts/ErrorLayout";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />
            },


        ]
    },

    {
        path: '*',
        element: <ErrorLayout />,
        children: [
            {
                path: '*',
                element: <Error/>
            }
        ]
    }
])

export default router;