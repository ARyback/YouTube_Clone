// General Imports
import { Routes, Route, useHref } from "react-router-dom";
import "./App.css";
import { API_KEY_1 } from "./API_KEY";
import React, { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import SearchingPage from "./pages/SearchingPage/SearchingPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";


function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <SearchPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/" element={<SearchPage />} />
        <Route path="/search/:userInputId" element={<SearchingPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
