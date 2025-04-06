import { Container, Tab } from "react-bootstrap";
import { Nav,Col, Row } from "react-bootstrap";
import certImg1 from "../assets/img/cert-img1.png";
import certImg2 from "../assets/img/cert-img2.png";
import certImg3 from "../assets/img/cert-img3.png";
import certImg4 from "../assets/img/cert-img4.png";
import certImg5 from "../assets/img/cert-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import { CertificateCards } from "./CertificateCards";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Certificates = () => {
    const certificates = [
        {
          title: "Microsoft C# Certification",
          description: "Achieved this by completing 62 Assigments and 1 Final mock quiz",
          imgUrl: certImg1,
        },
        {
          title: "Microsoft Mini Game Certification",
          description: "Achieved this by creating a simple mini game using c# and unity",
          imgUrl: certImg2,
        },
        {
          title: "FCC Front End Development Certification",
          description: "Achieved this by completing 5 projects & 46 challenges",
          imgUrl: certImg3,
        },
        {
          title: "FCC Back End Development Certification",
          description: "Achieved this by completing 6 projects & 57 challenges",
          imgUrl: certImg4,
        },
        {
          title: "Harvard CS50x Cerification",
          description: "A Full Stack Web Application, made as a solution for the digitalization of books",
          imgUrl: certImg5,
        },
        {
          title: "LeetCode Solves",
          description: "A passionate problem solver",
          imgUrl: projImg6,
        },
      ];

      return (
        <section className="project" id="certificates">
            <Container>
                <Row>
                    <Col>
                        <h2>Certifications & Achievements</h2>
                        <p>Here are some of my achievements</p>
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
                            <Row className="justify-content-center">
                                {
                                    certificates.map((certificate, index) => {
                                        return (
                                            <CertificateCards
                                            key={index}
                                            {...certificate}
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