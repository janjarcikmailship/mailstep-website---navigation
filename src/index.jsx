import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Navigation } from "./screens/Navigation";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
);
