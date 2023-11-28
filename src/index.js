import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Redux configuration
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter } from "react-router-dom";
import EventList from "./components/EventList";
import { RouterProvider } from "react-router-dom";
import EventForm from "./components/EventForm";

// // Router

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <EventForm/>
      },
      {
        path: "list",
        element: <EventList />,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
