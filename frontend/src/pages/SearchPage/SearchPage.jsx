import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import { API_KEY_1 } from '../../API_KEY';
import axios from 'axios';

const SearchPage = (props) => {
 
const [videos, setVideos] = useState(null);

async function getVideos() {
  await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?q=snowboarding&key=${API_KEY_1}&part=snippet`
    )
    .then((response) => setVideos(response.data.items));
}

return (
  <div>
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
      )}
    </div>
    );
}

export default SearchPage;