import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";

import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
