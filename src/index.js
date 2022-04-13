import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import "./styles/index.css";
import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Home />);
