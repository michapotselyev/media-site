import { createBrowserRouter } from "react-router-dom";
import { MainPage, ProjectsPage, CategoryPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Сталася Помилка</div>
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
        errorElement: <div>Сталася Помилка</div>
    },
    {
        path: "/projects/:category",
        element: <CategoryPage />,
        errorElement: <div>Сталася Помилка</div>
    }
]);

export default router;
