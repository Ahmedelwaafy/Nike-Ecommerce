import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { Store } from "./App/Store";
import { Toaster } from "react-hot-toast";

const client = new QueryClient({});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={Store}>
        <Toaster position="top-center" reverseOrder={false} />

        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
