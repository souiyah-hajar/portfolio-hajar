import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fs from "../assets/img/fs.png";
import fstm from "../assets/img/fstm.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {
  // Données pour la section Education
  const education = [
    {
      title: "Master in Data Science and Engineering (M2)",
      description: "Faculty of Sciences Rabat",
      date: "2023 - Present",
      imgUrl: fs,
    },
    {
      title: "Bachelor, Computer Science, Network and Multimedia (IRM)",
      description: "Faculty of Sciences and Techniques Mohammedia",
      date: "2022 - 2023",
      imgUrl: fstm,
    },
    {
      title: "Diploma of Scientific and Technical University Studies (DEUST)",
      description: "Faculty of Sciences and Techniques Mohammedia",
      date: "2020 - 2022",
      imgUrl: fstm,
    },
  ];

  // Données pour la section Projects
  

  return (
    <>
      {/* Section Education */}
      <section className="project" id="Education">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Education</h2>
                    <Row>
                      {education.map((edu, index) => (
                        <ProjectCard key={index} {...edu} />
                      ))}
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Projects sous forme de Carousel */}

    </>
  );
};


