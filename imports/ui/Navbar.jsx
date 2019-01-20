import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'

export class Navbar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            about: ""
        }
    }
    componentWillMount(){
        console.log("Nabar will mount")
        
    }
    aboutTooltip(){
        switch(location.pathname){
            case "/about/diplomacy":
                return ": Diplomacy"
            case "/about/history":
                return ": History"
            case "/about/mission":
                return ": Mission"
            case "/about/ranks":
                return ": Ranks"
            case "/about/rules":
                return ": Rules"
            default:
                return ""
        }
    }
    render(){
        return(
            <nav style={{padding: '0px', marginBottom: '0px'}} className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <NavLink to="/" className="navbar-brand" style={{fontFamily: 'Orbitron'}}>Armitage Mobile Militia Offensive</NavLink>
                <span className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/navy">Navy</NavLink>
                    <NavLink className="nav-item nav-link" to="/shipyard">Shipyard</NavLink>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="aboutDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        About<span style={{color: '#F59B45'}}>{
                            this.aboutTooltip()
                        }</span>
                        </div>
                            <div className="dropdown-menu" aria-labelledby="aboutDropdown">
                                <Link className="dropdown-item" to="/about/diplomacy">Diplomacy</Link>
                                <NavLink className="dropdown-item" to="/about/history">History</NavLink>
                                <NavLink className="dropdown-item" to="/about/mission">Mission</NavLink>
                                <NavLink className="dropdown-item" to="/about/ranks">Ranks</NavLink>
                                <NavLink className="dropdown-item" to="/about/rules">Rules</NavLink>
                            </div>
                    </li>
                </span>
            </nav>
        )
    }
}

export default Navbar