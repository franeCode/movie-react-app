import { Link } from 'react-router-dom';
import starImg from './star-icon.svg';
import noImage from './image-not-found.jpeg';
import { useState } from 'react';
import plusIcon from './plus-icon.svg';

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const detailUrl = `/movies/${movie.id}`;
    // // const defaultImg = require('assets/img/image-not-found.jpeg');
    // TODO: add top rated if vote is higher then 9

    return (
      <div className="col-lg-3 col-md-3 col-2 my-4">
        
        <div className="movie-card">
        <Link to={detailUrl}>
          <img src={posterUrl} className="card-img" alt={movie.original_title} />
          </Link>
          {/* <div className="card-body"> */}
            <h5 className="card-title">{movie.original_title}</h5>
            <div className='info-container'>
              <p className='card-info'>
                <img className='icon' src={starImg} alt="star-icon" />
                {movie.vote_average}/10
              </p>
              <button className='card-info card-btn'>
                <img className='icon' src={plusIcon} alt="plus-icon" />
                Watchlist</button>
            </div>
          </div>
        {/* </div> */}
        
      </div>
    )
  }

  export default MovieCard;