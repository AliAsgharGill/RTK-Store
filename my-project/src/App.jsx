import "./App.css";
import Products from "./components/Products";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "about",
    element: <div>About</div>,
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
