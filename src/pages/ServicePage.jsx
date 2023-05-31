import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Row, Col } from 'react-bootstrap';
import { services } from '../data/index';

const ServicePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="service-page-container">
            <h2 className="text-center mb-4 my-5" data-aos="fade-up">Service Lainnya</h2>
            <Row>
                {services.map((service) => (
                    <Col lg={3} md={6} key={service.id} data-aos="fade-up" data-aos-duration="1000">
                        <Card className="mb-3 custom-card">
                            <div className="image-container my-5">
                                <Card.Img
                                    variant="top"
                                    src={service.image}
                                    alt={service.title}
                                    className="center-image"
                                    style={{ maxWidth: '30%', height: 'auto' }}
                                />
                            </div>
                            <Card.Body className="text-center my-1">
                                <Card.Title className='fw-bold'>{service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ServicePage;