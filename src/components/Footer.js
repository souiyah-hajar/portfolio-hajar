import { Container, Row, Col } from "react-bootstrap";
import hajar from "../assets/img/hajar.png";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import kaggle from "../assets/img/kaggle.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={hajar} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/souiyah-hajar"><img src={github} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/souiyah-hajar-896a65266/?originalSubdomain=ma"><img src={linkedin} alt="Icon" /></a>
              <a href="https://www.kaggle.com/hajarsouiyah"><img src={kaggle} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}