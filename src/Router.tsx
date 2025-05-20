import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
// import { NotFounded } from "./pages/NotFounded";
import { Layout } from "./pages/Layout";
import { Career } from "./pages/Career";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Career /> },
    ],
  },

  //   { errorElement: <NotFounded /> },
]);
