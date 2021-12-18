import axios from 'axios';
import React, { useState,useEffect } from 'react'
import requests from './request';
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import './Banner.css'

// A large background banner
function Banner() {

    const [movie, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`); //It will append endpoint to the base url 
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);
     function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "...":str;
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

     const handleClick =(movie) => {
           if(trailerUrl){
               setTrailerUrl('');
           }else{
               movieTrailer(movie?.name || "")
               .then( (url) => {
                   const urlParams = new URLSearchParams(new URL(url).search);
                   setTrailerUrl(urlParams.get("v"));
                
               })
               .catch((error) => console.log(error));
           }

       }
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"center center",
        }}>
            <div className="banner-contents">
                <h1 className="Banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={()=>handleClick(movie)} >Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-desc">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            <div className="Banner-faded"></div>
            {trailerUrl && <Youtube className='yt' videoId={trailerUrl} opts={opts}></Youtube>}
        </header>
    )
}
export default Banner
