import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import hajar from '../assets/img/hajar.png';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';
import kaggle from '../assets/img/kaggle.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={hajar} alt="Logo"  style={{ 
    background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', 
    margin: '0', 
    padding: '0', 
    display: 'block' 
  }}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#Education" className={activeLink === 'Education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Education')}>Education</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/souiyah-hajar"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/souiyah-hajar-896a65266/?originalSubdomain=ma"><img src={linkedin} alt="" /></a>
                <a href="https://www.kaggle.com/hajarsouiyah"><img src={kaggle} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}