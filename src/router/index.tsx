import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Movie from "../pages/tv-show/TVShow";
import TVShow from "../pages/tv-show/TVShow";
import { ErrorFallback } from "../components/molecules/ErrorFallback/ErrorFallback";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorFallback />,
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: "/tv-show", 
        element: <TVShow /> 
      },
      { 
        path: "movie/:id", 
        element: <Movie /> 
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
