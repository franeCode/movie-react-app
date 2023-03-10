import MovieCard from "./MovieCard";


const MovieList = ({ searchResults }) => {

  const listResults = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })  

  return (
    <>
      {listResults &&
        <div className="container">
          <div className="row">
            {listResults}
          </div>
        </div>
      }
    </>
  );
};

export default MovieList;
