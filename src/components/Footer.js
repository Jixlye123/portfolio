import { Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Col } from "react-bootstrap";
import logo1 from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo1} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jinuka-weerasinghe-537b26334"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/Jixlye123"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.youtube.com/@ByteSizedSL"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2025. All Rights Reserved Jinuka Weerasinghe</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}