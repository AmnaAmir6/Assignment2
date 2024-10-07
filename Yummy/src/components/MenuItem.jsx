// components/MenuItem.js
import React from 'react';

function MenuItem({ imgSrc, title, description, price }) {
  return (
    <div className="col-lg-4 menu-item">
      <a href={imgSrc} className="glightbox">
        <img src={imgSrc} className="menu-img img-fluid" alt={title} style={{ height: "280px" }} />
      </a>
      <h4>{title}</h4>
      <p className="ingredients">{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default MenuItem;
