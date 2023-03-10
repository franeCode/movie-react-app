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

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [favorite, setFavorite] = useState([]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="*">
          <NotFound />
        </Route>
        <Route>
          <MovieList favorite={favorite} favoriteMovies={Favorite} setFavorite={setFavorite} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
