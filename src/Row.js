//It is a component which will use to display all the movies in a row..

import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
import './Row.css';


const baseUrl = "https://image.tmdb.org/t/p/original/"




function Row({ title, fetchUrl}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`); //It will append endpoint to the base url 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

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
        <>
        <div className="row">
            <h2>{title}</h2>

            <div className="row-posters">
                {movies.map((movie) => (
                    <img key={movie.id}  onClick={()=>handleClick(movie)} className="row-poster" src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
                ))}
                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
            </div>
        </>
    )
}

export default Row
