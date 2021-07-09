import React from "react";
import { fetchGistByUsername } from "../../services/gists";
import GistItem from "../GistItem/GuistItem";

const Home = () => {
  const [gists, setGists] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const getPublicGists = async username => {
    const data = await fetchGistByUsername(username);
    setGists(data);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  
  return (
    <div>
      <div>
        <form>
          <label>Search by user name</label>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={() => getPublicGists(inputValue)}>Search</button>
        </form>
      </div>
      <GistItem />
    </div>
  );
};

export default Home;
