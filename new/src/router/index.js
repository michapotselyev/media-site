import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <div>Сталася Помилка</div>
    }
]);

export default router;
