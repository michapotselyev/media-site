import { createBrowserRouter } from "react-router-dom";
import { MainPage, ServicePage, ErrorPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/service/:id",
        element: <ServicePage />,
        errorElement: <ErrorPage />
    },
]);

export default router;
