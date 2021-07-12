import React from "react";
import { fetchGistByUsername } from "../../services/gists";
import GistItem from "../GistItem/GuistItem";

const Home = () => {
  const [gists, setGists] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const getPublicGists = async (e) => {
    e.preventDefault();
    const data = await fetchGistByUsername(inputValue);
    setGists(data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className="container mt-4 mb-4">
        
          <form className="d-flex mb-5">
            <label className="form-label">Search by user name</label>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={inputValue}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              onClick={getPublicGists}
              type="submit"
            >
              Search
            </button>
          </form>
        
      {gists.map((gist) => {
        return <GistItem gist={gist} />;
      })}
    </div>
  );
};

export default Home;
