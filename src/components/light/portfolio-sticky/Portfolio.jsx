import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import portfolio from "./Unitech Digital Studio Portfolio.pdf"

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Empower Care",
      description: "Empowering You to Find Fulfilling Contract and Per Diem Opportunities​.",
      image: "/light/assets/imgs/works/1/mainempowercare.jpg",
      link: "/portfolio/empowercare",
      category: "Development"
    },
    {
      id: 2,
      title: "WeStackltd.com",
      description: "Enhancing your Business. Simplifying your Focus.",
      image: "/light/assets/imgs/works/1/westackmain.jpg",
      link: "/portfolio/westack",
      category: "Design & Development"
    },
    {
      id: 3,
      title: "United Estates",
      description: "We focus on quality development, using modern architecture that fits your style and budget.",
      image: "/light/assets/imgs/works/1/unitedestatesmain.jpg",
      link: "/portfolio/unitedestates",
      category: "Design & Development"
    },
    {
      id: 4,
      title: "Bare Beauty",
      description: "Embrace Your Natural Glow with Bare Beauty.",
      image: "/light/assets/imgs/works/1/barebeautymain.jpg",
      link: "/portfolio/barebeauty",
      category: "Development"
    },
    {
      id: 5,
      title: "Coretal",
      description: "Our expert team developed a solution that streamlines the entire hiring process.",
      image: "/light/assets/imgs/works/1/coretal.png",
      link: "/portfolio/coretal",
      category: "Development"
    },
    {
      id: 6,
      title: "ITGenics",
      description: "This project demonstrates our skill in creating custom digital solutions that highlight our clients' offerings.",
      image: "/light/assets/imgs/works/1/itgenics.png",
      link: "/portfolio/itgenics",
      category: "Development"
    },
    {
      id: 7,
      title: "Beast Mode Soccer",
      description: "This platform boosts player connectivity and offers training resources accessible anytime.",
      image: "/light/assets/imgs/works/1/beastmodesoccer.png",
      link: "/portfolio/beastmodesoccer",
      category: "Development"
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);
  const [loading, setLoading] = useState(false);

  const loadMoreProjects = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="work-sticky section-padding pt-60 sub-bg">
      <div className="container">
     
        <div className="row">
        <div  className = 'col-lg-12' style={{textAlign:"center"}}>
      <a href={portfolio} download='unitechportfolio.pdf' target='_blank' >
        <button style={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: 'fit-content', 
          padding: '6%', 
          whiteSpace: 'nowrap' ,

          cursor: 'pointer' 
        }} className="btn-form">
          Download Our Portfolio
          <i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
        </button>
      </a>
    </div>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <React.Fragment key={project.id}>
              {index % 2 === 0 ? (
                // Even index: Image first, Text second
                <>
                  <div className="col-lg-8 items">
                    <div className="img-container">
                      <img className="scroll-img" src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="col-lg-4 items">
                    <div className="cont">
                      <div className="sticky-item">
                        <h6 className="sub-title opacity-7 mb-10">{project.category}</h6>
                        <h5 className="mb-15">{project.title}</h5>
                        <p>{project.description}</p>
                        <Link to={project.link} className="rmore mt-30">
                          <span className="sub-title">View Project</span>
                          <img src="/light/assets/imgs/arrow-right.png" alt="" className="icon-img-20 ml-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Odd index: Text first, Image second
                <>
                  <div className="col-lg-4 items">
                    <div className="cont">
                      <div className="sticky-item">
                        <h6 className="sub-title opacity-7 mb-10">{project.category}</h6>
                        <h5 className="mb-15">{project.title}</h5>
                        <p>{project.description}</p>
                        <Link to={project.link} className="rmore mt-30">
                          <span className="sub-title">View Project</span>
                          <img src="/light/assets/imgs/arrow-right.png" alt="" className="icon-img-20 ml-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 items">
                    <div className="img-container">
                      <img className="scroll-img" src={project.image} alt={project.title} />
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="row">
            <div className="col-lg-12 text-center">
              <button className="btn btn-primary mt-30" onClick={loadMoreProjects}>
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}

export default Portfolio;
