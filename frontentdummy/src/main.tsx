import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./i18n/config.js";
import App from "./App";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense fallback={<div>UI Language Loading...</div>}>
      <App />
    </React.Suspense>
  </StrictMode>
);
