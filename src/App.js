import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./app.css";
import { useState } from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="top">
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-x1 hover:bg-light-gray"
                style={{ background: "blue", borderRadius: "50%" }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
              sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar2</div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
              ${activeMenu ? "md:ml-72" : "flex-2"}`}></div>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            navbar
          </div>
          <div>tesdt</div>
          <Routes>
            /*DASHBOARD*/
            <Route path="/" element="Ecommerce" />
            <Route path="/ecommerce" element="Ecommerce" />
            <Route path="/" element="Ecommerce" />
            <Route path="/" element="Ecommerce" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
