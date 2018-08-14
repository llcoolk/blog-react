import React from "react";

const Card = ({ title, description, imageUrl }) => (
  <div className="card">
    <img
      className="card-img-top img-fluid"
      src={imageUrl}
      alt="Card image cap"
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default Card;
