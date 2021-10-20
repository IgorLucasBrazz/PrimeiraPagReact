import React from "react";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from "react-bootstrap";

export default function Header(){
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" style={{backgroundColor: "pink"}}>
                <Container>
                <Navbar.Toggle className="issoaqui" aria-controls="navbarScroll" style={{backgroundColor: "white"}}/>
                    <Navbar.Brand className="Title-header" href="#" style={{ fontSize: '20px'}}>Museum</Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '200px'}} style={{alignItems: "center"}} navbarScroll>
                            <Nav.Link href="#">Concentration Camp</Nav.Link>
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">GitHub</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}