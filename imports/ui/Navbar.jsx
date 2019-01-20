import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class Navbar extends Component{
    componentWillMount(){
        console.log("Nabar will mount")
    }
    render(){
        return(
            <nav style={{padding: '0px', marginBottom: '0px'}} className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand" style={{fontFamily: 'Orbitron'}}>Armitage Mobile Militia Offensive</NavLink>
                <span className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/navy">Navy</NavLink>
                    <NavLink className="nav-item nav-link" to="/shipyard">Shipyard</NavLink>
                    <NavLink className="nav-item nav-link" to="/about">About</NavLink>
                </span>
            </nav>
        )
    }
}

export default Navbar