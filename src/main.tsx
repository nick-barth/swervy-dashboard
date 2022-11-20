import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  Link,
  RouterProvider,
  createReactRouter,
  createRouteConfig,
} from "@tanstack/react-router";

import "./index.css";

import Login from "./routes/login";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "login",
    component: Login,
  }),
]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <main>
          <Outlet />
        </main>
      </RouterProvider>
    </>
  );
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
