import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.jsx";
import App from "./Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import { getHomePhone } from "./services/data.js";
import { getPhones } from "./services/data.js";
import { getPhoneById } from "./services/data.js";

import PhoneDetails from "./pages/PhoneDetails.jsx";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: async () => {
          return getHomePhone();
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Product />,
        loader: async () => {
          return getPhones();
        },
      },
      {
        path: "/products/:id",
        element: <PhoneDetails />,
        // loader: async () => {
        //   return getPhoneById();
        // },
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} loader={getHomePhone} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
