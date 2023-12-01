import { createBrowserRouter } from "react-router-dom";
import { MainPage, ProjectsPage, CategoryPage, ErrorPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/projects/:category",
        element: <CategoryPage />,
        errorElement: <ErrorPage />
    }
]);

export default router;
