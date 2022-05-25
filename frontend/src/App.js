// General Imports
import { Routes, Route, useHref } from "react-router-dom";
import "./App.css";
import { API_KEY_1 } from "./API_KEY";
import React, { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

function App() {
  //39:10 
  //Search: what we did below
  //Find by id: Test in postman find a video by id
  //Search related to find id
  //Needs id and search
  //Go through 
  const [videos, setVideos] = useState(null);
  const [videoById, setVideoById] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState();

  async function getVideos() {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=snowboarding&key=${API_KEY_1}&part=snippet`
      )
      .then((response) => setVideos(response.data.items));
  }

  async function getVideoById() {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=snowboarding&key=${API_KEY_1}&part=snippet`
      )
      .then((response) => setVideoById(response.data.items));
  }

  async function getRelatedVideos() {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=snowboarding&key=${API_KEY_1}&part=snippet`
      )
      .then((response) => setRelatedVideos(response.data.items));
  }

  return (
    <div>
      <button onClick={() => getVideos()}>Click to get videos</button>
      <button onClick={() => getVideoById()}>Click to get videos by id</button>
      <button onClick={() => getRelatedVideos()}>Click to get related videos</button>
      <div>
        {videos && <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>}
      </div>
      {/* <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
