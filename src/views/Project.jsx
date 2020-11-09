import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Api } from "../services/Api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ComparisonSlider from "../components/ComparisonSlider";
import Slider from "../components/Slider";

const Project = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [showSlider, setShowSlider] = useState(false);
  const [focusSlide, setFocusSlide] = useState(1);

  const params = useParams();

  useEffect(() => {
    /* If user is coming from projects list */
    if (props.location.state && props.location.state.project) {
      document.title = `Label Baraque | ${props.location.state.project.projectName}`;
      document.querySelector(
        "body"
      ).style = `background-color: ${props.location.state.project.backgroundColor};`;
      setProject(props.location.state.project);
      setLoading(false);
      return;
    }

    /* Else, fetch the project */
    Api.get(`/projects/${params.id}`)
      .then(({ data }) => {
        document.title = `Label Baraque | ${data.projectName}`;
        document.body.style = `background-color: ${data.backgroundColor};`;
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [params, props]);

  return (
    <main className="project container">
      {(function () {
        if (loading) return <Loader />;
        if (error) return <Error errorContent="Error" />;
        if (!project) return <Error errorContent="Aucun projet" />;

        return (
          <>
            <section className="project__title">
              <h1 className="h1 uppercase graduated">
                {project.projectName}
                <span className="graduation"></span>
              </h1>
            </section>
            <section className="project__grid">
              <div className="project__grid__first pointer">
                <img
                  src={project.pictures[0].url}
                  alt="background"
                  onClick={() => {
                    setShowSlider(true);
                    setFocusSlide(0);
                  }}
                />
              </div>
              <div className="project__grid__hexa">
                <span>{project.backgroundColor}</span>
              </div>
              <div className="project__grid__before-after">
                <ComparisonSlider
                  imageOne={project.before.url}
                  imageTwo={project.after.url}
                />
              </div>
              {project.pictures.slice(1).map(function (el, index) {
                const c = ["project__grid__horizontal", "project__grid__vertical"];

                return (
                  <div
                    key={index}
                    className={`${c[Math.round(Math.random())]} pointer`}
                    onClick={() => {
                      setShowSlider(true);
                      setFocusSlide(index + 1);
                    }}
                  >
                    <img src={el.url} alt={el.name} />
                  </div>
                );
              })}
            </section>
            <p className="mb--30">
              Tu as aimé ce projet ? C'est à ton tour de te lance !
            </p>
            <Link to="/contact" className="button">
              Contacte Label Baraque
            </Link>
            {showSlider && (
              <Slider
                images={project.pictures}
                bgColor={project.backgroundColor}
                focus={focusSlide}
                onClose={() => {
                  setShowSlider(false);
                }}
              />
            )}
          </>
        );
      })()}
    </main>
  );
};

export default Project;
