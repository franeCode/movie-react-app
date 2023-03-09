import Hero from "./Hero";
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import Spinner from "./Spinner";

const Home = () => {
  const { error, isPending, data: searchResults } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=ab166ff82684910ae3565621aea04d62`);

  return (
    <>
      <Hero text="Welcome to React 201" />
      {error && <div>{error}</div>}
      <div className="pos-spinner">
        {isPending && <Spinner />}
      </div>
      {/* TODO: make reusable text */}
      {/* <div>Discover</div>  */}
      {searchResults && 
      <MovieList searchResults={searchResults} />
      }
    </>
  );
};

export default Home;