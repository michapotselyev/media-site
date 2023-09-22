import { createBrowserRouter } from "react-router-dom";
import { MainPage,ErrorPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />
    }
]);

export default router;
