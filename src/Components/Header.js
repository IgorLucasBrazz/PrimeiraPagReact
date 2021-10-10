import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from "react-bootstrap";

export default function Header(){
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="Title-header" href="#" style={{ fontSize: '30px' }}>Concentration Camp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}