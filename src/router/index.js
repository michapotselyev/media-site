import { createBrowserRouter } from "react-router-dom";
import { MainPage, ServicePage, PortfolioPage, ContactPage, ErrorPage } from "../pages";

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
    {
        path: "/portfolio",
        element: <PortfolioPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact-us",
        element: <ContactPage />,
        errorElement: <ErrorPage />
    },
]);

export default router;
