import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { API_KEY_1 } from '../../API_KEY';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchResultsPage = (props) => {
//This should become a form that captures input single submit which needs some state to hold onto the search (snowboarding)
//Do not send as I type ... submit button
const [videos, setVideos] = useState(null);
const [userInput, setUserInput] = useState("");
const handleChange = (e) => {
  setUserInput(e.target.value);
};

//userINput in src get and in a useState variable
//Fix all functions designed with getVideos
const getVideos = async() => {
  await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?q=${userInput}&key=${API_KEY_1}&part=snippet`
    )
    .then((response) => setVideos(response.data.items));
}

return (
  <div>
    <h1>Submit Form</h1>
      <h2><SearchBar userInput={userInput} setUserInput={setUserInput} handleChange={handleChange}/></h2>
        <h3><button onClick={() => getVideos()}>Click to get videos</button></h3>
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
      {videos && (
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
      )}
    </div>
    );
}

export default SearchResultsPage;