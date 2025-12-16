import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About.jsx";
import Gallery from "./Component/Gallery/Gallery.jsx";
import Home from "./Component/Home/Home.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import NotFound from "./Component/NotFound/NotFound.jsx";
import Parent from "./Component/Parent/Parent.jsx";
import Products from "./Component/Products/Products.jsx";
import "./index.css";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/parent", element: <Parent /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
