import React,{useState,useEffect} from 'react'
import './Row.css';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title,fetchURL}) {

    const [movies,SetMovies] = useState([]);
    const [ytURL,SetUrl] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original/";

    const ShowTrailer = (movie) =>{
        if(ytURL)
        {
            SetUrl("");
        }
        else
        {
            movieTrailer(movie?.name||movie?.title||movie?.original_name||"").then( (url) =>{
                const urlParams = new URLSearchParams(new URL(url).search)
                SetUrl(urlParams.get('v'));
            }).catch( ()=>{
                console.log("Currently unavailable");
            })
        }
    }

    const opts={
        height: "400px",
        width: "100%",
        playerVars:{
            autoplay: 1
        }
    };

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            SetMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.log(movies);
    return (
        <div className="rows">
            <h2>{title}</h2>
            <div className="row">
                {movies.map( (movie) => (
                    <img className={"poster"}
                    onClick = { () => ShowTrailer(movie)}
                    key={movie.id}
                    src={`${baseURL}${movie.poster_path}`}
                    alt={movie.name} />
                ))}
            </div>
            {ytURL && <Youtube videoId={ytURL} opts={opts}/>}
        </div>
    )
}

export default Row
