import React, { useState } from 'react';
import TabNav from './TabNav';
import MenuSection from './MenuSection';

function Menu() {
  const [activeTab, setActiveTab] = useState('#menu-starters'); // Initial active tab

  const tabs = [
    { label: 'Starters', target: '#menu-starters' },
    { label: 'Breakfast', target: '#menu-breakfast' },
    { label: 'Lunch', target: '#menu-lunch' },
    { label: 'Dinner', target: '#menu-dinner' }
  ];

  const menuData = {
    starters: [
      { imgSrc: 'src/assets/img/menu/menu-item-1.png', title: 'Magnam Tiste', description: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
      { imgSrc: 'src/assets/img/menu/menu-item-2.png', title: 'Aut Luia', description: 'Lorem, deren, trataro, filede, nerada', price: '$14.95' },
      { imgSrc: 'src/assets/img/menu/menu-item-3.png', title: 'Est Eligendi', description: 'Lorem, deren, trataro, filede, nerada', price: '$8.95' },
    ],
    breakfast: [
      { imgSrc: 'src/assets/img/menu/menu-item-4.png', title: 'Eos Luibusdam', description: 'Lorem, deren, trataro, filede, nerada', price: '$12.95' },
      { imgSrc: 'src/assets/img/menu/menu-item-5.png', title: 'Laboriosam Direva', description: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
    ],
    lunch: [
      { imgSrc: 'src/assets/img/menu/menu-item-1.png', title: 'Magnam Tiste', description: 'Lorem, deren, trataro, filede, nerada', price: '$5.95' },
    ],
    dinner: [
      { imgSrc: 'src/assets/img/menu/menu-item-6.png', title: 'Laboriosam Direva', description: 'Lorem, deren, trataro, filede, nerada', price: '$9.95' },
    ]
  };

  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p>
          <span>Check Our</span> <span className="description-title">Yummy Menu</span>
        </p>
      </div>
      <div className="container">
        <TabNav 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabClick={setActiveTab} // Pass function to handle tab changes
        />
        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {activeTab === '#menu-starters' && (
            <MenuSection id="menu-starters" sectionTitle="Starters" items={menuData.starters} />
          )}
          {activeTab === '#menu-breakfast' && (
            <MenuSection id="menu-breakfast" sectionTitle="Breakfast" items={menuData.breakfast} />
          )}
          {activeTab === '#menu-lunch' && (
            <MenuSection id="menu-lunch" sectionTitle="Lunch" items={menuData.lunch} />
          )}
          {activeTab === '#menu-dinner' && (
            <MenuSection id="menu-dinner" sectionTitle="Dinner" items={menuData.dinner} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Menu;
