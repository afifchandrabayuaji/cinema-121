export default function Card({ movie, index }) {

  {console.log(movie);}
  return (
    <>
      <div>
        <div
          className="rounded shadow-lg hover:shadow-2xl max-w-90 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-linear"
          name="card-1"
        >
          <img
            className="w-full"
            src={movie.imgUrl}
            alt=""
            name="card-img"
          />
          <div className="px-6 py-4" name="card-body">
            <span
              className="font-bold text-xl hover:underline"
              name="card-title"
            >
              {movie.title}
            </span>
            <p className="text-gray-800 line-clamp-3" name="card-subtitle">
              {movie.synopsis}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2" name="card-footer">
            <button className="rounded-full inline-block bg-gray-200 hover:bg-gray-400 px-3 py-1 font-semibold">
              {movie.Genre.name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
