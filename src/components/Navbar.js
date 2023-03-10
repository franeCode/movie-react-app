import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import image from "../assets/search-icon.svg";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory()
  const [toggle, setToggle] = useState(false);

  // const image = require('./search-icon.svg');

  const updateSearchText = (e) => {
    e.preventDefault();
    history.push('/search')
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/watchlist"
              >
                Watchlist
              </Link>
            </li>
          </ul>
          {/* TODO: add search icon and toggle search bar */}
          <div className="search-icon" onClick={() => setToggle(!toggle)}>
            <img src={image} alt="search-icon" />
          </div>
          {toggle && (
          <form className="d-flex">
            <input
              className="search-input form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            {/* <button onClick={updateSearchText} className="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </form>
          )}
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;