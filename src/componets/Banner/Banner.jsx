import React, { useEffect, useState } from 'react'
import './banner.css';
import requests from '../../utils/requests';
import axios from '../../utils/axios'

const Banner = () => {
const [movie, setMovie] = useState({})
useEffect(() => {
  (async() => {
    try{
      const request = await axios.get(requests.fetchNetflixOriginals)
      console.log(request)
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]);
      
    }catch (error) {
      console.log("error", error);
    }
  }) ()
}, []);
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n-1) + '...' : str;
}
  return (
    <div className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-reapt"
      }}
>
  <div className="banner-content">
    <h1 className="banner-titles">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>
    <div className="banner-buttons">
      <button className="banner-button play">Play</button>
      <button className="banner-button my">My List</button>
    </div>
    <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
    </div>
  <div className="banner-fadeButtom">
    </div>
    </div>
  )
}

export default Banner