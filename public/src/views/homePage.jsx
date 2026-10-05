import Card from '../components/Card';
// import Paginate from '../components/pagination';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function HomePage(){
  const [Movies, setMovies] = useState([])
  async function fetchMovie() {
    try {
      const {data} = await axios.get(`https://121-cinema.scribblehaus.site/pub/movie/`)
      setMovies(data.movies)
      console.log(data.movies);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovie()
    console.log("homePage get");
  },[])

  return(
    <>
      <title>Home | 121-Cinema</title>
      <div className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          {/* <Filter /> */}
        </div>
        <div className="flex">
          <span className="p-6 font-bold">Sort By: </span>
          <select
            className="rounded pl-3 pr-5 pb-1 bg-gray-200 hover:bg-gray-400"
            name="sort"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap p-6 gap-5" name="body-div">
        {/* {console.log(Movies, "<<<<<<<<<<<<<<<<<<<")} */}
        {Movies.map((movies, index) => {
          return <Card  movie={movies} index={index} key={movies.id}/>
        })}
      </div>
      <div className="flex flex-row justify-center gap-5 mt-6" name="paginate-div">
        {/* <Paginate /> */}
      </div>
    </>
  )
}

