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

  const handleChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div>
        <form>
          <label>Search by user name</label>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={getPublicGists}>Search</button>
        </form>
      </div>
      { gists.map((gist) => {
        return <GistItem gist={gist}/>
      })}
    </div>
  );
};

export default Home;
