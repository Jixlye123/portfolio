import { Container, Tab } from "react-bootstrap";
import { Nav,Col, Row } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpg";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {
    const projects = [
        {
          title: "DigFinesSL",
          description: "A Full Stack Web Application, made as a solution for the digitalization of fines for the public sector",
          imgUrl: projImg1,
          repoUrl: "https://github.com/Jixlye123/RegistrationNext",
        },
        {
          title: "Mov++ - Movie recommendation system",
          description: "Movie recommendation + search system",
          imgUrl: projImg2,
          repoUrl: "https://github.com/Jixlye123/Randoli",
        },
        {
          title: "ex Bank System",
          description: "A secure and simple bank system, with seamless trasactions",
          imgUrl: projImg3,
          repoUrl: "https://github.com/Jixlye123/Bank-App",
        },
        {
          title: "LeadBot AI Chatbot",
          description: "A ai chatbot that built using chatgpt-j-64b API",
          imgUrl: projImg4,
          repoUrl: "https://github.com/Jixlye123/aiChat",
        },
        {
          title: "BookFinder System",
          description: "A Full Stack Web Application, made as a solution for the digitalization of books",
          imgUrl: projImg5,
          repoUrl: "https://github.com/Jixlye123/Randoli",
        },
        {
          title: "UEFA Championship Predictor - Using Python",
          description: "Simple machine learning prediction model",
          imgUrl: projImg6,
          repoUrl: "https://github.com/Jixlye123/uefaPredictor",
        },
      ];

      return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some of my projects</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCards
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.imgUrl}
                                            repoUrl={project.repoUrl}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Tab two content</Tab.Pane>
                            <Tab.Pane eventKey="third">Tab three content</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}