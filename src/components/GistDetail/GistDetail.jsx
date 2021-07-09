import React from "react";
import { useParams } from "react-router-dom";
import { fetchGistById } from "../../services/gists";

const GistDetail = () => {
  const {id} = useParams();
  const [gistDetail, setGistDetail] = React.useState({})
  const getGistDetail = async() => {
    const data = await fetchGistById(id);
    setGistDetail(data)
  }
  React.useEffect(() => {
    getGistDetail()
  }, [])
  console.log(gistDetail)
  return <div>gist detail</div>;
};
export default GistDetail;
