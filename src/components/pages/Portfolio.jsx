import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import '../../styles/Portfolio.css'
import socialapiImg from '../../assets/proyects/socialapi.png';
import techblogImg from '../../assets/proyects/techblog.png';
import burguerbaseImg from '../../assets/proyects/burguerbase.png';
import ecommerceImg from '../../assets/proyects/ecommerce.png';
import notetakerImg from '../../assets/proyects/notetaker.png';

function Portfolio() {
  // This is your projects list
  const projects = [
    {
      title: "Social Api",
      description: "This project is a back-end application that uses Express.js and MongoDB to provide an API for a social networking app.",
      imageLink: socialapiImg,
      githubLink: "https://github.com/Drums180/Social_Api"
    },
    {
      title: "Tech Blog",
      description: "This is a CMS-style blog site that allows developers to publish articles, blog posts, and their thoughts and opinions.",
      imageLink: techblogImg,
      githubLink: "https://github.com/Drums180/tech_blog"
    },
    {
      title: "Burger Base",
      description: "Burger Base is a web-based application designed for restaurants to manage their inventory.",
      imageLink: burguerbaseImg,
      githubLink: "https://github.com/Drums180/Burguer_Base"
    },
    {
      title: "E-Commerce Back End",
      description: "This is an Express.js API for an E-Commerce website. The API uses Sequelize to connect to a MySQL database and provide functionality to manage categories, products, and tags.",
      imageLink: ecommerceImg,
      githubLink: "https://github.com/Drums180/E-Commerce_Back_End"
    },
    {
      title: "Note Taker",
      description: "Command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package",
      imageLink: notetakerImg,
      githubLink: "https://github.com/Drums180/Note_Taker"
    },
  ];

  return (
    <div className="container mt-5" style={{ marginBottom: '100px' }}>
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <div style={{ backgroundImage: `url(${project.imageLink})`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Github Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Portfolio;
