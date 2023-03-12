import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Favorite from './components/Favorite';
import MovieList from './components/MovieList';

function App() {

  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie){
    setFavorites([...favorites, movie]);
  }
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        
        <Route path="/" exact>
          <SearchView keyword={searchText} addFavorite={addFavorite} />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/movies/:id" results={results} component={MovieView} />
        
        <Route path="/watchlist" >
        <MovieList searchResults={favorites} />
        </Route>
        <Route>
          <MovieList favorites={favorites} setFavorites={setFavorites} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
