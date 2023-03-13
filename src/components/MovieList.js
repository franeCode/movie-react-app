import MovieCard from "./MovieCard";


const MovieList = ({ searchResults, addFavorite}) => {

  

  const listResults = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} addFavorite={addFavorite} />
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
