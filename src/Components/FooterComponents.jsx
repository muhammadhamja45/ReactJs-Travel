import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="border-top ">
                <Row className='my-5'>
                    <Col md={3}>
                        <h5>TOUR</h5>
                        <ul>
                            <li>Australia Special</li>
                            <li>Africa</li>
                            <li>America</li>
                            <li>Asia</li>
                            <li>Australia & New Zealand</li>
                            <li>China</li>
                            <li>Europe</li>
                            <li>Middle East</li>
                            <li>West Europe</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>PRODUCT</h5>
                        <ul>
                            <li>Package</li>
                            <li>Cruise</li>
                            <li>Car Hire</li>
                            <li>Visa</li>
                            <li>Passport</li>
                            <li>Insurance</li>
                            <li>Avia Education</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>INFORMATION</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Offers</li>
                            <li>Blog</li>
                            <li>Brochures</li>
                            <li>Terms & Conditions</li>
                            <li>F.A.Q</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>CONTACT US</h5>
                        <p>62-21 422 3838</p>
                        <p>62-21 422 3888</p>
                        <p>628118883818</p>
                        <p>aviaweb@avia-tour.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>© 2023 </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

