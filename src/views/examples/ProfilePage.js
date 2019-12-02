import React from "react";


// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import { Link } from "react-router-dom";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import MailForm from "components/MailForm";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <a href="/profile-page/#about-me">
                <Button className="btn-round" color="info" size="lg">
                  About Me
                </Button>
              </a>
              <a href="#skills">              
                <Button
                  className="btn-round"
                  color="info"
                  id="tooltip515203352"
                  size="lg"
                >
                  Skills
                </Button>
                </a>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
               View My Projects
              </UncontrolledTooltip>
              <a href="#portfolio">              
                <Button
                  className="btn-round"
                  color="info"
                  id="tooltip515203352"
                  size="lg"
                >
                  Portfolio
                </Button>
                </a>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
               View My Projects
              </UncontrolledTooltip>
             
              <a href="/resume.pdf" download="JoseRoblesResume.pdf">          
                <Button
                  className="btn-round"
                  color="info"
                  id="tooltip515203353"
                  size="lg"
                >
                  Download Resume
                </Button>
              </a>
              <UncontrolledTooltip delay={0} target="tooltip515203353">
               View My Projects
              </UncontrolledTooltip>
              
              <a href="#contact-me">
              <Button className="btn-round" color="info" size="lg">
                  Contact Me
              </Button>
              </a>
              
            </div>
            <h3 className="title" id="about-me">About me</h3>
            <h5 className="paragraph">
            My extensive experience in the technology field has helped many customers 
            successfully implement and manage their information systems. I have worked as a 
            systems engineer, database developer and administrator, ERP systems consultant 
            and data integration specialist for government and private sector customers. 
            Computer technology is my passion, and I always strive to stay up to date with 
            the latest developments in the industry.
            </h5>
            <h3 className="title" id="skills">Skills</h3>
              <div className="row justify-content-center">
                <div className="col-sm-4" align="center">
                  UML Application Architecture and Design 
                </div>
                <div className="col-sm-4" align="center">
                  Agile Software Development Methodologies (Scrum & XP)
                </div>
                <div className="col-sm-4">
                  Full-Stack Web Development on MERN Stack (MongoDB, Espress.JS, React.JS, Node.JS)
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-sm-4" align="center" >
                  Programming Languages : Java, C/C++, Javascript, PL/SQL, Unix shell scripting  (Bash, Ksh)
                </div>
                <div className="col-sm-4" align="center" >
                    Oracle Database and EBS Suite Product Specialist
                </div>
                <div className="col-sm-4" align="center" >
                    Oracle SOA Suite Service Development (BPEL)
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-sm-4" align="center" >
                    Unix/Linux Sysadmin and Application Development
                </div>
                <div className="col-sm-4" align="center" >
                    Excellent verbal and written communications skills.
                </div>
                <div className="col-sm-4" align="center" >
                    Fully Bilingual (English and Spanish)
                </div>
              </div>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center" id="portfolio">Portfolio</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    // className="justify-content-center nav nav-tabs"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons business_globe"></i>
                   
                      </NavLink>
                      <span className="mr-3">Links</span>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons design_app"></i>
                     
                      </NavLink>
                      GitHub
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <a href="https://www.mernbaby.com" alt="Delivery It Today App" >
                          <figcaption className="mt-0" align="center">
                            Deliver It Today!
                          </figcaption>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/delivery.jpg")}
                          ></img>
                        </a>
                        </Col>
                        <Col md="6">
                        <a href="https://j0serobles.github.io/Word-Guess-Game/" alt="Word Guess Game" >
                        <figcaption className="mt-0" align="center">
                            Word Guess Game
                          </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/wordguess.jpg")}
                        ></img>
                        </a>
                        </Col>

                      
                      <Col md="6">
                      <a href="https://j0serobles.github.io/TriviaGame/" alt="Baseball Trivia game" >
                        <figcaption className="mt-0" align="center">
                            Baseball Trivia Game
                        </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/baseball.jpg")}
                        ></img>
                        </a>
                        </Col>
                        <Col md="6">
                        <a href="https://j0serobles.github.io/SportsFanatic/" alt="Sport Fanatic" >
                        <figcaption className="mt-0" align="center">
                            Sports Fanatic
                          </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/sports.jpg")}
                        ></img>
                        </a>
                        </Col>
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <a href="https://github.com/j0serobles/finalproject" alt="Delivery It Today App" >
                          <figcaption className="mt-0" align="center">
                            Deliver It Today! (GitHub Repo)
                          </figcaption>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/delivery.jpg")}
                          ></img>
                        </a>
                        </Col>
                        <Col md="6">
                        <a href="https://github.com/j0serobles/Word-Guess-Game" alt="Word Guess Game" >
                        <figcaption className="mt-0" align="center">
                            Word Guess Game (GitHub Repo)
                          </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/wordguess.jpg")}
                        ></img>
                        </a>
                        </Col>

                      
                      <Col md="6">
                      <a href="https://github.com/j0serobles/TriviaGame" alt="Baseball Trivia game" >
                        <figcaption className="mt-0" align="center">
                            Baseball Trivia Game (GitHub Repo)
                        </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/baseball.jpg")}
                        ></img>
                        </a>
                        </Col>
                        <Col md="6">
                        <a href="https://github.com/j0serobles/SportsFanatic" alt="Sport Fanatic" >
                        <figcaption className="mt-0" align="center">
                            Sports Fanatic (GitHub Repo)
                          </figcaption>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/sports.jpg")}
                        ></img>
                        </a>
                        </Col>
                      
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
            <Row>
              <Col className="col-sm-6 offset-sm-3">
              <h4 className="title text-center" id="contact-me">Contact Me</h4>
                <MailForm></MailForm>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <DefaultFooter  />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
