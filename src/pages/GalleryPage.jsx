import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';

import Gallery1 from "../assets/images/gallery/gallery-1.jpg";
import Gallery2 from "../assets/images/gallery/gallery-2.jpg";
import Gallery3 from "../assets/images/gallery/gallery-3.jpg";
import Gallery4 from "../assets/images/gallery/gallery-4.jpg";
import Gallery5 from "../assets/images/gallery/gallery-5.jpg";
import Gallery6 from "../assets/images/gallery/gallery-6.jpg";

const GalleryPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <Container>
            <h2 className="text-center my-5" data-aos="fade-up">Gallery</h2>
            <Row className="gallery-row">
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery1} alt="Gallery 1" className="img-fluid rounded" />
                </Col>
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery2} alt="Gallery 2" className="img-fluid rounded" />
                </Col>
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery3} alt="Gallery 3" className="img-fluid rounded" />
                </Col>
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery4} alt="Gallery 4" className="img-fluid rounded" />
                </Col>
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery5} alt="Gallery 5" className="img-fluid rounded" />
                </Col>
                <Col xs={6} md={4} className="gallery-col mb-4" data-aos="fade-up" data-aos-duration="1000">
                    <img src={Gallery6} alt="Gallery 6" className="img-fluid rounded" />
                </Col>
            </Row>
        </Container>
    );
}

export default GalleryPage;
