import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header () {
    return (
    <div>
        <Navbar bg="light" expand="lg">
            <Col>
                <Navbar.Brand><Nav.Link href="/">What Day Is It</Nav.Link></Navbar.Brand>
            </Col>
            <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            
            <LinkContainer to="/usage">
                <Nav.Link>Use</Nav.Link>
            </LinkContainer>
        </Navbar>
    </div>
    )
}
