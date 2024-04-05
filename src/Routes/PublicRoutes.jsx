import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import PrivateRoutes from "./PrivateRoutes";

function PublicRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PublicRoutes;
