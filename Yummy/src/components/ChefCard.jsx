import React from "react";

function ChefCard({ image, name, role, description, socialLinks }) {
  return (
    <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-up">
      <div className="team-member">
        <div className="member-img">
          <img src={image} className="img-fluid" alt={name} />
          <div className="social">
            {socialLinks.map((link, index) => (
              <a href={link.url} key={index}>
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{role}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
