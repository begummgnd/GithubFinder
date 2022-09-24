import React, { Component } from 'react'
import { AiFillGithub } from 'react-icons/ai'
export class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-primary'>
                <div className="container">
                    <a href="#" className='navbar-brand'>
                        <AiFillGithub style={{ marginLeft: "1rem" }} />GitHub
                    </a>
                </div>
            </nav>
        )
    }
}
