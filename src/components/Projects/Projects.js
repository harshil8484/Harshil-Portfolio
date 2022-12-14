import classes from "./Projects.module.css";
import { projectsData } from "../../../public/data/projects-data";

const Projects = () => {
  const projectsList = projectsData.sort(
    (first, last) => first.order - last.order
  );
  return (
    <section id="projects" className={classes.projects}>
      <div className="project-list">
        <div className="heading-1">
          <h1 className="titles">
            <span>Projects</span>
            <span>💼</span>
          </h1>
        </div>
        {projectsData.map((project, index) => {
          return (
            <div className={`project-block`} key={index + "project"}>
              <div className="project-detail">
                <h1>{project.name}</h1>
                <a href={project.url} target="_blank">
                  <span>Visit the website</span>
                  <span className="bottom-border"></span>
                </a>
              </div>
              <span className="project-number">0{index + 1}</span>
              <div className="project-img">
                <img src={project.img} />
                <div className="project-card__left">
                  <h4 className="heading-4">{project.technology}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
