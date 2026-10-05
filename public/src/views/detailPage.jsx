import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function DetailPage(){
  const [Movies, setMovie] = useState([])
  const {id} = useParams([])
    async function fetchDetail() {
        try {
            const {data} = await axios.get(`https://121-cinema.scribblehaus.site/pub/movie/${id}`)
            setMovie(data.movies)
            console.log(data.movies);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchDetail()
    },[])

    return(
        <>
            <title>Movie Detail | 121-Cinema</title>
            <div
                className="flex flex-wrap m-6 justify-center space-between"
                name="body-div"
            >
                <div className="flex flex-row 2rem bg-teal-700" name="content-container">
                    <div className="flex flex-col" name="left-col">
                    <img
                        src={Movies.imgUrl}
                        alt="Movie Poster"
                        name="movie-poster"
                    />
                    </div>
                    <div className="flex flex-col" name="right-col">
                    <div
                        className="bg-teal-600 p-3 shadow-sm pt-6 pb-6"
                        name="header-part"
                    >
                        <p
                        className="font-bold pl-6 text-3xl text-white"
                        name="movie-title"
                        >
                        {Movies.title}
                        </p>
                    </div>
                    <div className="p-3 pt-6" name="footer-part">
                        <div
                        className="text-xl font-bold pl-6 pb-5 text-white"
                        name="rating-div"
                        >
                        <span name="rating-text">Rating:</span>
                        <span className="pl-1" name="movie-rating">
                            {Movies.rating}
                        </span>
                        <span name="/10"> / 10</span>
                        </div>
                        <p className="mb-4 pl-6 pr-6 text-white">
                        {Movies.synopsis}
                        </p>
                        <div
                        className="flex mb-2 pl-6 pr-6 gap-2"
                        name="footer-part-movie-genre"
                        >
                        {Movies.genreId}
                        </div>
                        <div>
                            <a href={Movies.trailerUrl}>
                                <button>
                                    Watch Trailer
                                </button>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}