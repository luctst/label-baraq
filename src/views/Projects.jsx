import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiURL, Api } from "../services/Api";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Projects = () => {
  document.title = "Label Baraque | Projets";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Api.get("/projects")
      .then(({ data }) => {
        setProjects(data.filter((d) => d.pictures && d.pictures.length));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const renderProjects = () => {
    if (loading) return <Loader />;
    if (error) return <Error />;
    if (!projects.length) return <Error>Aucun project.</Error>;
    return projects.map((project) => {
      return (
        <Link
          to={{
            pathname: `/projets/${project.id}`,
            state: { project },
          }}
          className="projects-list__project"
          key={project.id}
        >
          <img src={`${apiURL}${project.pictures[0].url}`} alt={project.projectName} />
          <h2 className="h3 graduated">
            {project.projectName}
            <span className="graduation"></span>
          </h2>
        </Link>
      );
    });
  };

  return (
    <main className="projects container">
      <div className="projects__title">
        <h1 className="h1 uppercase graduated">
          Les réalisations
          <span className="graduation"></span>
        </h1>
      </div>
      <div className="projects-list">{renderProjects()}</div>
      {!loading && (
        <Link to="/contact" className="button">
          Contacte Label Baraque
        </Link>
      )}
    </main>
  );
};

export default Projects;
