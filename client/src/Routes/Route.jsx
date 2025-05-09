// src/Routes/Router.jsx (or wherever your router is)
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Home/ErrorPage/NotFound";
import SignupForm from "../Pages/SignupForm";
import SignInForm from "../Pages/SignInForm";
import Apartment from "../Pages/Apartment/Apartment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartment/>,
      },
      {
        path: "/SignupForm",
        element: <SignupForm></SignupForm>,
      },
      {
        path: "/SignInForm",
        element: <SignInForm></SignInForm>,
      },
    ],
  },
]);

export default router;
