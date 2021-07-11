import React from "react";
import { useParams } from "react-router-dom";
import { fetchGistById } from "../../services/gists";
import "./styles.css";

const GistDetail = () => {
  const { id } = useParams();
  const [gistDetail, setGistDetail] = React.useState({});
  const getGistDetail = async () => {
    const data = await fetchGistById(id);
    setGistDetail(data);
  };
  React.useEffect(() => {
    getGistDetail();
  }, []);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  const files = isEmpty(gistDetail) ? null : Object.values(gistDetail?.files);

  const setMemoryForm = (data) => {

    const getLocalStorage = JSON.parse(localStorage.getItem('githubProject'));
    // if (getLocalStorage[data]) {
    //   console.log('delete key')
    // }
    
    const parseData =  {[data]: true};
    console.log(parseData);
    // const result = {[parseData]: true}
    localStorage.setItem('githubProject', JSON.stringify(parseData));
  }
  const saveFavorite = (file) => {
    console.log('fiol', file);
    setMemoryForm(file.raw_url);
    console.log(localStorage)
  };


  console.log(gistDetail);
  return (
    <div>
      <h1>Gist detail</h1>
      <img
        className="h-10 w-10 rounded-full"
        src={gistDetail?.owner?.avatar_url}
      ></img>
      <h3>User name: {gistDetail?.owner?.login}</h3>
      <h3>Github URL:</h3>
      <a href={gistDetail?.owner?.html_url}>{gistDetail?.owner?.html_url}</a>

      <div>
        <h1>Files</h1>
        {files?.map((file) => {
          return (
            <div>
              <div>
                <span>{file?.filename}</span>
                {/* <button className="py-1 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={saveFavorite}>Add to favorites</button> */}
                <button onClick={(e) => saveFavorite(file)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <pre className="content-wrapper">
                <code>{file?.content}</code>
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default GistDetail;
