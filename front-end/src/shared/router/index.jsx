import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/index.jsx";
import Register from "../pages/register/index.jsx";
import Home from "../pages/Home.jsx";
import Tasks from "../pages/Tasks.jsx";
import TaskDetails from "../pages/TaskDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/tasks/:id",
    element: <TaskDetails />,
  },
]);
