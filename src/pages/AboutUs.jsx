import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from "../assets/animate/call.jpg";
import about2 from "../assets/animate/team.jpg";
import about3 from "../assets/animate/team2.jpg";
import about4 from "../assets/animate/team3.jpg";

import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <Container>
            <h2 className="mb-4 text-center" data-aos="fade-up">About Us</h2>
            <Row className="mt-5">
                <Col md={6} className="order-2 order-md-1">
                    <Card className="mb-4 shadow" data-aos="fade-up">
                        <Card.Img variant="top" src={about1} className="img-fluid" style={{ height: '450px', width: '100%', objectFit: 'cover', border: 'none' }} />
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium consectetur ullamcorper. Integer
                                ultrices risus vel justo rhoncus placerat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="shadow" data-aos="fade-up">
                        <Card.Img variant="top" src={about2} className="img-fluid" style={{ height: '450px', width: '100%', objectFit: 'cover', border: 'none' }} />
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium consectetur ullamcorper. Integer
                                ultrices risus vel justo rhoncus placerat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="order-1 order-md-2">
                    <Card className="mb-4 shadow" data-aos="fade-up">
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium consectetur ullamcorper. Integer
                                ultrices risus vel justo rhoncus placerat.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={about3} className="img-fluid" style={{ height: '450px', width: '100%', objectFit: 'cover', border: 'none' }} />
                    </Card>
                    <Card className="shadow" data-aos="fade-up">
                        <Card.Body>
                            <Card.Title>Card 4</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium consectetur ullamcorper. Integer
                                ultrices risus vel justo rhoncus placerat.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src={about4} className="img-fluid" style={{ height: '450px', width: '100%', objectFit: 'cover', border: 'none' }} />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;
