import React from "react";
import {
  Link,
} from "react-router-dom";

const GistItem = ({ gist }) => {
  return (
    <li>
      <Link to={`/gist-detail/${gist.id}`}>Gist id: {gist.id}</Link>
      <p>{gist.description}</p>
      <p>{gist.created_at}</p>
    </li>
  );
};
export default GistItem;
