import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
                        <Nav className="mx-auto">
                            {navLinks.map((link) => (
                                <div className="nav-link" key={link.id}>
                                    <NavLink
                                        className="text-white"
                                        to={link.path}
                                        activeClassName="active"
                                    >
                                        {link.text}
                                    </NavLink>
                                </div>
                            ))}
                        </Nav>
                        <div>
                            <button className="join-button">Join</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponents;
