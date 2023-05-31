import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Gallery1 from "../assets/animate/ss3.jpg";

const FeedbackForm = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lakukan validasi atau kirim data form ke server
        // Anda dapat mengambil nilai dari elemen form menggunakan ref atau mengirimkan nilai langsung ke API

        // Bersihkan nilai form field
        e.target.reset();
    };

    return (
        <Container className="feedback-container my-5" style={{ maxWidth: "1200px" }}>
            <Row>
                <Col sm={8} md={6} className="text-left feedback-form" data-aos="fade-up">
                    <h2>Kritik dan Saran</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Nama:</Form.Label>
                            <Form.Control type="text" size="lg" required />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" size="lg" required />
                        </Form.Group>
                        <Form.Group controlId="message">
                            <Form.Label>Pesan:</Form.Label>
                            <Form.Control as="textarea" rows={3} size="lg" required />
                        </Form.Group>
                        <div className="text-left my-3">
                            <Button variant="primary" type="submit">
                                Kirim
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col sm={4} md={6} className="text-center my-2" data-aos="fade-up">
                    <img src={Gallery1} alt="Gambar" className="img-fluid rounded" style={{ width: '600px', height: '500px' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default FeedbackForm;
