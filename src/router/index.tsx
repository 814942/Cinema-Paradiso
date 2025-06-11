import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Movie from "../pages/movie/Movie";
import TVShow from "../pages/tv-show/TVShow";
import Search from "../pages/search/Search";
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
      {
        path: "/search",
        element: <Search />
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
