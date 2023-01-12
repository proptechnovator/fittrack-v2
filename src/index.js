
//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import React from "react";
import App from "./App.js";
import './styles/index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
);