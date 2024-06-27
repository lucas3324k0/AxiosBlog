import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Paginas

import NewPost from "./Routes/NewPost/NewPost.jsx";
import Home from "./Routes/Home/Home.jsx";
import Posts from "./Routes/Posts/Posts.jsx";
import Admin from "./Routes/admin/Admin.jsx";
import EditPosts from "./Routes/EditPosts/EditPosts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "posts/:id",
        element: <Posts />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },{
        path: '/posts/edit/:id',
        element: <EditPosts />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
