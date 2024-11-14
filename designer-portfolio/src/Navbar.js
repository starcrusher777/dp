import React from 'react';
import { Navbar, Container, Nav, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavbarBrand href="#home">My Portfolio</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#works">Works</Nav.Link>
                        <Nav.Link href="#links">Links</Nav.Link>
                        <Nav.Link href="#contacts">Contacts</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;