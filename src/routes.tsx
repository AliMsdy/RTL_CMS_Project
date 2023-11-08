//pages
import Comments from "./pages/Comments/Comments";
import Discounts from "./pages/Discounts/Discounts";
import Orders from "./pages/Orders/Orders";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";

//layout
import Layout from "./Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Products /> },
      {
        element: <Products />,
        path: "/products",
      },
      {
        element: <Comments />,
        path: "/comments",
      },
      {
        element: <Users />,
        path: "/users",
      },
      {
        element: <Orders />,
        path: "/orders",
      },
      {
        element: <Discounts />,
        path: "/discounts",
      },
    ],
  },
];

export default routes;
