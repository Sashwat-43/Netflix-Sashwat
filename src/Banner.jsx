import React,{ useState,useEffect } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Request_fetch';


function Banner() {
    
    const [movie,SetMovie] = useState([]);

    useEffect( () =>{
        async function fetchMovie(){
            const request = await axios.get(requests.NetflixOriginals);
            console.log(request);
            const movieToBeSet = request.data.results[Math.floor(Math.random()*request.data.results.length - 1)];
            SetMovie(movieToBeSet);
        return request;
        }
        fetchMovie();
    },[])
    console.log(movie);

    const truncate_description = (str,n) => {
        if(str && str.length>n)
            return str.substr(0,n)+'...';
        else
            return str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center 0",
        }}>
        <div className="content">
            <h1 className="title">{movie?.name||movie?.title||movie?.original_name}</h1>
            <h1 className="description">
                {truncate_description(movie?.overview,200)}
            </h1>
        </div>
            <div className="fade">

            </div>
        </header>
    )
}

export default Banner
