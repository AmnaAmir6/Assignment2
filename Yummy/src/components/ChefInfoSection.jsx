import React from "react";
import ChefCard from "./ChefCard";

function ChefsSection() {
  const chefs = [
    {
      image: "src/assets/img/chefs/chefs-1.jpg",
      name: "Walter White",
      role: "Master Chef",
      description:
        "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      socialLinks: [
        { url: "#", icon: "bi bi-twitter-x" },
        { url: "#", icon: "bi bi-facebook" },
        { url: "#", icon: "bi bi-instagram" },
        { url: "#", icon: "bi bi-linkedin" },
      ],
    },
    {
      image: "src/assets/img/chefs/chefs-2.jpg",
      name: "Sarah Jhonson",
      role: "Patissier",
      description:
        "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapiente.",
      socialLinks: [
        { url: "#", icon: "bi bi-twitter-x" },
        { url: "#", icon: "bi bi-facebook" },
        { url: "#", icon: "bi bi-instagram" },
        { url: "#", icon: "bi bi-linkedin" },
      ],
    },
    {
      image: "src/assets/img/chefs/chefs-3.jpg",
      name: "William Anderson",
      role: "Cook",
      description:
        "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
      socialLinks: [
        { url: "#", icon: "bi bi-twitter-x" },
        { url: "#", icon: "bi bi-facebook" },
        { url: "#", icon: "bi bi-instagram" },
        { url: "#", icon: "bi bi-linkedin" },
      ],
    },
  ];

  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Chefs</h2>
        <p>
          <span>Our</span> <span className="description-title">Professional Chefs</span>
        </p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {chefs.map((chef, index) => (
            <ChefCard key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChefsSection;
