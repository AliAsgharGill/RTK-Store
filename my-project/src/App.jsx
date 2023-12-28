import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
