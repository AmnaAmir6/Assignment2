// components/MenuSection.js
import React from 'react';
import MenuItem from './MenuItem';

function MenuSection({ id, sectionTitle, items }) {
  return (
    <div className="tab-pane fade" id={id}>
      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>{sectionTitle}</h3>
      </div>
      <div className="row gy-5">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;
