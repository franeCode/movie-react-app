import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import noImage from "./image-not-found.jpeg"
import Spinner from "./Spinner";
import useFetch from "./useFetch";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  const { isPending } = useFetch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ab166ff82684910ae3565621aea04d62&language=en-US`
    )
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
        // setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isPending) {
      return <div className="pos-spinner"><Spinner /></div>;
    }
    if (movieDetails) {
      // TODO: Deal with a possible missing image
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath ? posterPath : noImage}
                  alt="no-image"
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">Genre: {movieDetails.genre_ids}</p>
                <p className="lead">Release date: {movieDetails.release_date}</p>
                <p className="lead">Language: {movieDetails.original_language}</p>
                <button>Add to watchlist</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;