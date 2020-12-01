import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Api } from "../services/Api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import BaseHeader from "../components/BaseHeader";

const Projects = () => {
  document.title = "Label Baraque | Projets";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.body.style = "";
    async function fetchData() {
      try {
        const resApi = await Api.get("/projects");

        setProjects(resApi.data.filter((d) => d.pictures && d.pictures.length));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
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
          <div className="projects-list__project__img">
            <img src={project.pictures[0].url} alt={project.projectName} />
          </div>
          <h2 className="h3 graduated">
            {project.projectName}
            <span className="graduation graduation--animated"></span>
          </h2>
        </Link>
      );
    });
  };

  return (
    <>
      <BaseHeader />
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
            Contacte Label Baraque !
          </Link>
        )}
      </main>
    </>
  );
};

export default Projects;
