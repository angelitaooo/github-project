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
    const getLocalStorage = JSON.parse(localStorage.getItem("githubProject"));

   const removeFavorite = Object.keys(getLocalStorage).find((key) => key === data);

   if (removeFavorite) {
    delete getLocalStorage[data];
   }

    console.log(getLocalStorage);
    const parseData = {...getLocalStorage, [data]: true };
    // const result = {[parseData]: true}
    localStorage.setItem("githubProject", JSON.stringify(parseData));
  };
  const saveFavorite = (file) => {
    console.log("fiol", file);
    setMemoryForm(file.raw_url);
    console.log(localStorage);
  };

  console.log(gistDetail);
  return (
    <div className="container mt-4 mb-4">
      <h1>Gist detail</h1>
      <img className="avatar" src={gistDetail?.owner?.avatar_url}></img>
      <h3>User name: {gistDetail?.owner?.login}</h3>
      <h3>Github URL:</h3>
      <a href={gistDetail?.owner?.html_url}>{gistDetail?.owner?.html_url}</a>

      <div className="mt-5">
        <h1>Files</h1>
        {files?.map((file) => {
          return (
            <div>
              <div>
                <span>{file?.filename}</span>
                {/* <button className="py-1 px-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={saveFavorite}>Add to favorites</button> */}
                <button className="btn btn-light" onClick={(e) => saveFavorite(file)}>
                <i className="fa fa-heart"></i>
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
