// components/TabNav.js
import React from 'react';

function TabNav({ tabs }) {
  return (
    <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
      {tabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <a className={`nav-link ${tab.active ? 'active show' : ''}`} data-bs-toggle="tab" data-bs-target={tab.target}>
            <h4>{tab.label}</h4>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default TabNav;
