import { Card, Row, Col } from 'react-bootstrap';
import { whyPage } from '../data/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const WhyPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="why-page-container ">

            <Row className='justify-content-center'>
                <Col lg={12} className="text-center mb-4" data-aos="fade-down">
                    <h2>Mengapa Menggunakan Travel?</h2>
                </Col>
                {whyPage.map((item, index) => (
                    <Col lg={6} md={6} sm={12} key={index} data-aos="fade-down" data-aos-duration="1000">
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
                            <div className="line" data-aos="fade-down" data-aos-duration="1000"></div>
                        )}
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default WhyPage;
