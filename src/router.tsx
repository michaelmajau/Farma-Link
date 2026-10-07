import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Hero from "./components/Hero";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/sign-in", element: <Signin /> },
  { path: "/home", element: <Hero /> },
]);