import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post_id, title, description, imageUrl, onDelete }) => (
  <div className="card">
    <img
      className="card-img-top img-fluid"
      src={imageUrl}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={`blog/update/${post_id}`} className="btn btn-primary">
        Edit
      </Link>
      <button onClick={() => onDelete(post_id)} className="btn btn-danger ml-3">
        Delete
      </button>
    </div>
  </div>
);

export default Card;
