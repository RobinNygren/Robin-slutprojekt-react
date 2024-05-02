import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";
import MyBooks from "./routes/MyBooks";
import BookDetails from "./routes/BookDetails";
import AuthorDetails from "./routes/AuthorDetails";
import Statistics from "./routes/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-books",
        element: <MyBooks />,
      },
      {
        path: "books/:id",
        element: <BookDetails />,
      },
      {
        path: "authors/:id",
        element: <AuthorDetails />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
