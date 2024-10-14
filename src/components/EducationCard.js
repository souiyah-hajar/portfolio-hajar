import { Col } from "react-bootstrap";

export const EducationCard = ({ title, description, date, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="date">{date}</p> {/* Affiche la date */}
        </div>
      </div>
    </Col>
  );
};
