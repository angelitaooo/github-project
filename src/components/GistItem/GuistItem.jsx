import React from "react";
import { Link } from "react-router-dom";

const GistItem = ({ gist }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          Gist id: 
          <Link to={`/gist-detail/${gist.id}`}>{gist.id}</Link>
        </div>
        <p><strong>Description:</strong> {gist.description}</p>
        <p><strong>Created at:</strong> {gist.created_at}</p>
      </div>
    </li>

  );
};
export default GistItem;
