export default function Filter({movie}) {
  return (
    <>
      <span className="p-6 pb-8 font-bold">Filter: </span>
      {genre.map(() => {
        <button className="p-2 pt-1 rounded-full bg-gray-200 hover:bg-gray-400 font-semibold">
            {movie.genreId}
        </button>;
      })}
    </>
  );
}
