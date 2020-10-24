import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { apiURL, Api } from "../services/Api";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Project = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);

  const params = useParams();

  useEffect(() => {
    /* If user is coming from projects list */
    if (props.location.state && props.location.state.project) {
      document.title = `Label Baraque | ${props.location.state.project.projectName}`;
      setProject(props.location.state.project);
      setLoading(false);
      return;
    }

    /* Else, fetch the project */
    Api.get(`/projects/${params.id}`)
      .then(({ data }) => {
        document.title = `Label Baraque | ${data.projectName}`;
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [params, props]);

  const renderProject = () => {
    if (loading) return <Loader />;
    if (error) return <Error />;
    if (!project) return <Error>Aucun project.</Error>;

    const images = project.pictures.map((image, index) => {
      return <img src={`${apiURL}${image.url}`} alt={project.projectName} key={index} />;
    });

    return (
      <>
        <div className="project__title">
          <h1 className="h1 uppercase graduated">
            {project.projectName}
            <span className="graduation"></span>
          </h1>
        </div>
        <div className="project__grid">{images}</div>
        <p className="mb--30">Tu as aimé ce projet ? C'est à ton tour de te lance !</p>
        <Link to="/contact" className="button">
          Contacte Label Baraque
        </Link>
      </>
    );
  };

  return <main className="project container">{renderProject()}</main>;
};

export default Project;
