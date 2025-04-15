import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GiftExpertApp } from "./components/GiftExpertApp";

import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* titulo */}
    <GiftExpertApp />
    {/* Input */}

    {/* Listado de Gifs */}
  </StrictMode>
);
