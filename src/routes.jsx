import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/Home";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your main layout or wrapper
    children: [
      { path: "", element: <HomePage /> }, // Default route
      { path: "*", element: <NotFound /> }, // 404 Not Found route inside App layout
    ],
  },
]);

export default router;
