import React from 'react';

function TabNav({ tabs, activeTab, onTabClick }) {
  return (
    <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
      {tabs.map((tab, index) => (
        <li className="nav-item" key={index}>
          <button
            className={`nav-link ${activeTab === tab.target ? 'active show' : ''}`}
            onClick={() => onTabClick(tab.target)}
            data-bs-toggle="tab"
            data-bs-target={tab.target}
          >
            <h4>{tab.label}</h4>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TabNav;
