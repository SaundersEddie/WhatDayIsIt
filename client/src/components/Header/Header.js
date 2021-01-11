import React from 'react'
import { Link } from 'react-router-dom';


export default function Header () {
    return (
        <header id="header">
            <Link classname="title" to="/">What Day Is It</Link>
            <Link className="about" to="/about">About</Link>
            <Link className="usage" to="/usage">Usage</Link>
        </header>
    )
}
