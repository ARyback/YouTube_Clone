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
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
//39:10
  //0. Search by video_id
  //1. Test in postman find a video by id.
  //Per my discussion with Pascal, I am trying to develop a function getVideoById which will generate in Postman a video by id.
  //Per Pascal, my hint is that search might change along with the query but API_KEY_1 and part=snippet will remain.
  //2. Find related videos by id. Needs id of video and then do a search.
  //Search related to find id
  //Needs id and search
  //Go through
  const [videos, setVideos] = useState(null);
  const [videoById, setVideoById] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

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
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCGevXFAna3PguGM_CMNVNHSwsmS_QhOi4&part=snippet&id=UGdif-dwu-8&type=video`
      )
      .then((response) => setVideoById(response.data.items));
  }

  async function getRelatedVideos() {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=t705_V-RDcQ&type=video&key=${API_KEY_1}&safeSearch=strict&maxResults=10&part=snippet`
      )
      .then((response) => setRelatedVideos(response.data.items));
  }
  {/* 30:19 */}
  <SearchPage />
  <button onClick={() => getVideos()}>Click to get videos</button>
  <button onClick={() => getVideoById()}>Click to get videos by id</button>
  <button onClick={() => getRelatedVideos()}>Click to get related videos</button>
  <div>
    {/* <h1>{videos[0].snippet.title}</h1> */}
    {videos && (
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    )}
  </div>
  <div>
    {videoById && (
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoById[0].id}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    )}
  </div>
  <div>
    {relatedVideos && (
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${relatedVideos[0].id.videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    )}
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

<SearchBar userInput={userInput} setUserInput={setUserInput} handleChange={handleChange}/>
<button onClick={() => getVideos()}>Click to get videos</button>
  {videos && (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videos[0].id.videoId}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  )} */}
  {/* {videos && (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videos[1].id.videoId}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  )}
  {videos && (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videos[2].id.videoId}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  )}
  {videos && (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videos[3].id.videoId}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  )}
  {videos && (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${videos[4].id.videoId}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  )} */}
    
export default Miscellaneous;