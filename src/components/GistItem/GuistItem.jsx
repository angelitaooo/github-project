import React from "react";
import {
  Link,
} from "react-router-dom";

const GistItem = ({ gist }) => {
  return (
    <li>
      {/* <Link to={`/gist-detail/${gist.id}`}>{gist.name}</Link> */}
      <Link to={`/gist-detail/1`}>test</Link>
    </li>
  );
};
export default GistItem;
