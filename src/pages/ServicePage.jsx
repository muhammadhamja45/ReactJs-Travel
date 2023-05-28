import { Card, Row, Col } from 'react-bootstrap';
import { services } from '../data/index';

const ServicePage = () => {
    return (
        <div className="service-page-container">
            <h2 className="text-center mb-4">Service Lainnya</h2>
            <Row>
                {services.map((service) => (
                    <Col lg={3} md={6} key={service.id}>
                        <Card className="mb-3 custom-card">
                            <div className="image-container">
                                <Card.Img
                                    variant="top"
                                    src={service.image}
                                    alt={service.title}
                                    className="center-image"
                                    style={{ maxWidth: '30%', height: 'auto' }}
                                />
                            </div>
                            <Card.Body className="text-center">
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
