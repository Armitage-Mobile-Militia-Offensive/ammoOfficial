import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class Navbar extends Component{
    componentWillMount(){
        console.log("Nabar will mount")
    }
    render(){
        return(
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand" style={{fontFamily: 'Orbitron'}}>Armitage Mobile Militia Offensive</NavLink>
                <ul className="navbar-nav">
                    <li><NavLink to="/navy">Navy</NavLink></li>
                    <li><NavLink to="/shipyard">Shipyard</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar