import { Col } from "react-bootstrap";
export const ProjectCards = ({ title, description, imgUrl, repoUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} className="project-card-img" alt="project"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </a>
            </div>
        </Col>
    )
}