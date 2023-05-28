import { Card, Row, Col } from 'react-bootstrap';
import { whyPage } from '../data/index';

const WhyPage = () => {
    return (
        <div className="why-page-container">
            <Row>
                <Col lg={12} className="text-center mb-4">
                    <h2 className="">Mengapa Menggunakan Travel?</h2>
                </Col>
                {whyPage.map((item, index) => (
                    <Col lg={6} md={6} sm={12} key={index}>
                        <div className="card-wrapper">
                            <Card className="mb-3 custom-card">
                                <div className="card-content">
                                    <div className="image-content">
                                        {(index === 0 || index === 2) ? (
                                            <Card.Img src={item.image} alt={item.title} className="card-image-right" />
                                        ) : (
                                            <Card.Img src={item.image} alt={item.title} className="card-image-left" />
                                        )}
                                    </div>
                                    <div className="text-content">
                                        <Card.Body>
                                            <div className="">
                                                <div>
                                                    <Card.Title className='fw-bold'>{item.title}</Card.Title>
                                                    <Card.Text>{item.description}</Card.Text>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        {index % 2 !== 0 && index !== whyPage.length - 1 && (
                            <div className="line"></div>
                        )}
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default WhyPage;
