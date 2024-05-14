import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Search from "./routes/Search";
import BookDetails from "./routes/BookDetails";
import AuthorDetails from "./routes/AuthorDetails";
import Statistics from "./routes/Statistics";
import { GlobalStateProvider } from "./components/GlobalStateProvider";
import Favorites from "./routes/Favorites";

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
        path: "favorites",
        element: <Favorites />,
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
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  </React.StrictMode>
);
