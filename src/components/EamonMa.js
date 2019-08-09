import React, { Component } from 'react'
import Title from './Title';

export class EamonMa extends Component {
    componentDidMount() {
        console.log("yeet");
    }

    render() {
        return (
            <React.Fragment>
                <Title title="Eamon Ma" />
                <main>
                    <header>
                        <h1>Eamon Ma</h1>
                        <p>I am a grade 12 student at Handsworth Secondary School with an interest in computers, math, economics, and film. Awards had been obtained and hobbies had been developed.</p>
                    </header>
                    <a href="https://eamonma.com/blog">Blog</a>
                    <h2>Social</h2>
                    <ul>
                        <li><a href="https://linkedin.com/in/eamonma">Linkedin</a></li>
                        <li><a href="https://github.com/eamonma">Github</a></li>
                        <li><a href="https://instagram.com/eam.on">Instagram</a></li>
                        <li><a href="https://eam.im/mail">Mail</a></li>
                    </ul>
                    <h2>Projects</h2>
                    <ul>
                        <li><a href="https://eamonma.com/projects/permissions">Unix Permission Calculator</a></li>
                        <li><a href="https://commons.handsworth.ca">Handsworth Learning Commons</a></li>
                    </ul>
                </main>
                <footer>&copy; 2019 Eamon Ma</footer>
            </React.Fragment>
        )
    }
}

export default EamonMa
