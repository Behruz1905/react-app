import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import AppB from "./AppB.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppB />
  </StrictMode>
);
