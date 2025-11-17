import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Tasks from "../pages/Tasks.jsx";
import TaskDetails from "../pages/TaskDetails.jsx";
import Login from "../pages/login/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
