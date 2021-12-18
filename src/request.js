const key = "ccb92c93aff4bb923502c220a1ca2848";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${key}&language=en-US&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
    fetchActioMovies: `/discover/movie?api_key=${key}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${key}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${key}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${key}&language=en-US&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${key}& language=en-US&with_genres=99`,
}

export default requests;