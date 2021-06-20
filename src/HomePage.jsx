import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import requests from './Request_fetch';
import Row from './Row.jsx';
import './HomePage.css'

function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchURL ={requests.NetflixOriginals}/>
            <Row title="TRENDING" fetchURL ={requests.Trending}/>
            <Row title="ACTION MOVIES" fetchURL ={requests.ActionMovies}/>
            <Row title="HORROR MOVIES" fetchURL ={requests.HorrorMovies}/>
            <Row title="ADVENTURE MOVIES" fetchURL ={requests.AdventureMovies}/>
            <Row title="COMEDY MOVIES" fetchURL ={requests.ComedyMovies}/>
            <Row title="TOP RATED MOVIES" fetchURL ={requests.TopRated} Poster/>
            <Row title="THRILLER MOVIES" fetchURL ={requests.ThrillerMovies}/>
            <Row title="ANIMATION MOVIES" fetchURL ={requests.AnimationMovies}/>
        </div>
    )
}

export default HomePage;
