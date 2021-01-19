import React from 'react'
import Header from '../../components/Header/Header';

export default function About() {
    return (
        <>
            <h1>About Page</h1>
            <hr/>
            <h3>Coding</h3>
            <p>This app was coded by Eddie Saunders</p>
            <br/>
            <h3>Technology</h3>
            <p>Axios, Express, JavaScript, MongoDB, React, React-Bootstrap</p>
            <br/>
            <h3>Github</h3>
            <a 
                href="https://github.com/SaundersEddie/WhatDayIsIt"
                target="_blank"
            >
                Github Repository 
            </a>
            <br/> <br/>
            <h3>Contact Me</h3>
            
        </>
    )
}
