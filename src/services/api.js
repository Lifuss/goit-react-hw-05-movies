import axios from "axios"

axios.defaults.headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY3Yzk1ODEzYzhjNGMxOTc0NGY1NTM0OTNiNThiZiIsInN1YiI6IjY1MDk5YTRhZmEyN2Y0MDE0ZWIyZjM2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcXhs-LvYktYBLDy0cKPXkwiju7HU8RwqWXhXW2L-ws',
    accept: 'application/json'
}

export const getAllMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
    return data.results
}

export const getMovieById = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
    return data
}