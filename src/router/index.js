import { createBrowserRouter } from "react-router-dom";
import { MainPage, ServicePage, PortfolioPage, ErrorPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/service",
        children: [
            {
                path: "/service/:id",
                element: <ServicePage />,
                errorElement: <ErrorPage />
            }
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/portfolio",
        element: <PortfolioPage />,
        errorElement: <ErrorPage />
    }
]);

export default router;
