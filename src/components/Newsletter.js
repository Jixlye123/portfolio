import { useState, useEffect } from "react";
import { Alert, Col, Row } from "react-bootstrap";
export const Newsletter = ({status, message, onValidated}) => {

    const [email, setEmail] = useState("");

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail("");
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to my newsletter</h3>
                        <p>Get notified when I publish something new, right in your inbox.</p>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={status === "success" ? "" : status === "error" ? "" : email} type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}