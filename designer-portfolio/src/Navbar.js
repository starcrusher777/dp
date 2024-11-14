import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Styles/Navbar.css'

const MyNavbar = () => {
    return (
        <Navbar className="navbar" expand="lg" fixed="top">
            <Container className="container">
                <Navbar.Brand href="#home" className="navbar-brand-custom"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#works" className="nav-link-custom">Works</Nav.Link>
                        <Nav.Link href="#links" className="nav-link-custom">Links</Nav.Link>
                        <Nav.Link href="#contacts" className="nav-link-custom">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;