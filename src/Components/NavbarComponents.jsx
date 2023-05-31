import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';

const NavbarComponents = () => {
    const [navbarBg, setNavbarBg] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 50) {
                setNavbarBg('scrolled');
            } else {
                setNavbarBg('');
            }
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
                setNavbarBg('responsive');
            } else {
                setIsMobile(false);
                setNavbarBg('');
            }
        };

        window.addEventListener('scroll', changeNavbarBg);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', changeNavbarBg);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Navbar bg={navbarBg} expand="lg" className={`fixed-top ${navbarBg}`}>
                <Container>
                    <Navbar.Brand href="#home" className="text-white fw-bold text-lg">
                        Travel.ink
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
                        <Form inline className={isMobile ? 'mt-3 mt-lg-0' : ''}>
                            <Row className="align-items-center mx-5">
                                <Col>
                                    <FormControl type="text" placeholder="Search Destination" className="mr-sm-2" />
                                </Col>
                                <Col xs="auto">
                                    <Button className="mt-2" variant="outline-light">Search</Button>
                                </Col>
                                {isMobile ? (
                                    <Col xs="auto" className=''>
                                        <Button className="mt-2 ml-2" variant="outline-light">Login/Signup</Button>
                                    </Col>
                                ) : null}
                            </Row>
                        </Form>
                        {!isMobile ? (
                            <Button className="mt-2 ml-2" variant="outline-light">Login/Signup</Button>
                        ) : null}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponents;
