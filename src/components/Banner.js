import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import syh from "../assets/img/syh.jpeg";
import cv from "../assets/cv.pdf";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Data Scientist", "Data Engineer"]; // Déplacer ici

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text, loopNum, isDeleting]); // Supprimé toRotate ici

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm SOUIYAH HAJAR`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Data Scientist", "Data Engineer"]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I'm Souiyah Hajar, currently pursuing my second year of a Master's degree in Data Science and Engineering at Mohamed V University in Rabat.<br />
                    With a deep passion for data science, AI, and machine learning, I love transforming data into powerful insights.<br />
                    Beyond academics, I'm actively involved in community work. I believe in continuous growth, embracing positivity, and turning challenges into opportunities. Whether it's solving complex problems or spreading good energy, I’m all about making a meaningful impact and enjoying the journey! 🌟
                  </p>
                  <a href={cv}>Download my CV <ArrowRightCircle size={25} /></a>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={syh} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
