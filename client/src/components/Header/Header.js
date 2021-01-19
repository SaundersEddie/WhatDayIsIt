import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header () {
    return (
    <div>
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand><Nav.Link href="/">What Day Is It</Nav.Link></Navbar.Brand>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/usage">Usage</Nav.Link>
        </Navbar>
    </div>
    )
}
