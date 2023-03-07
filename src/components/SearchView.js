import Hero from "./Hero";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const SearchView = ({ keyword }) => {
  const { data: searchResults } = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${keyword}&page=1&include_adult=false`);
  
  const title = `You are searching for ${keyword}`;

  // const resultsHtml = searchResults.map((obj, i) => {
  //   return <MovieCard movie={obj} key={i} />
  // })

  return (
    <>
      <Hero text={title} />
  
      {searchResults &&
        <div className="container">
          <div className="row">
            <MovieList searchResults={searchResults} />
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;
