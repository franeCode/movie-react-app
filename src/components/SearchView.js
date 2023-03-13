import Hero from "./Hero";
import MovieList from "./MovieList";
import useFetch from "./useFetch";
import Home from "./Home";

const SearchView = ({ keyword, addFavorite }) => {
  const homeURL = 'https://api.themoviedb.org/3/discover/movie?api_key=ab166ff82684910ae3565621aea04d62';

  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${keyword}&page=1&include_adult=false`;

  let url  = keyword? searchURL : homeURL;
  const { data: searchResults } = useFetch(url);
  
  const title = `You are searching for ${keyword}`;

  return (
    <>
      <Hero text={title} />
      
      {searchResults &&
        <div className="container">
          <div className="row">
            <MovieList searchResults={searchResults} addFavorite={addFavorite} />
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;
