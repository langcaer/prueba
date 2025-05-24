import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { APITester } from "./components/APITester";

import "./styles/index.css";
import logo from "./assets/logo.svg";
import reactLogo from "./assets/react.svg";

const elem = document.body;
const app = (
  <StrictMode>
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>
      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <APITester />
    </div>
  </StrictMode>
);

if (import.meta.hot) {
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  createRoot(elem).render(app);
}
