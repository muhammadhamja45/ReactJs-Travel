import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';

const NavbarComponents = () => {
    const [navbarBg, setNavbarBg] = useState('');

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 50) {
                setNavbarBg('scrolled');
            } else {
                setNavbarBg('');
            }
        };

        window.addEventListener('scroll', changeNavbarBg);

        return () => {
            window.removeEventListener('scroll', changeNavbarBg);
        };
    }, []);

    return (
        <div>
            <Navbar bg="" expand="lg" className={`fixed-top ${navbarBg}`}>
                <Container>
                    <Navbar.Brand href="#home" className="text-white">
                        Travel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {navLinks.map((link) => (
                                <Nav.Link as={NavLink} to={link.path} key={link.id} className="text-white">
                                    {link.text}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Form inline>
                            <Row className="align-items-center">
                                <Col>
                                    <FormControl type="text" placeholder="Search Destination" className="mr-sm-2" />
                                </Col>
                                <Col xs="auto">
                                    <Button className='mt-2' variant="outline-light">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponents;
