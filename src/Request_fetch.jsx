const API_KEY = "af511712f362327f96565bc09abad684";

const requests = {
    Trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    NetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    TopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    ActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    AdventureMovies:`discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US`,
    HorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    ComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    AnimationMovies:`discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
    ThrillerMovies:`discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US`
};

export default requests;