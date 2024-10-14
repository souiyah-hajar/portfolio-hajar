import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, date, imgUrl, projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="date">{date}</p> {/* Affiche la date */}
          
          {/* Affiche les boutons seulement si les liens sont fournis */}
          {(projectLink) && (
            <div className="project-links">
              {projectLink && <a href={projectLink} className="btn btn-primary">View Project</a>}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
