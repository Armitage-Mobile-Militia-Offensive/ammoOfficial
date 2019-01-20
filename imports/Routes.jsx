import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './ui/Home'
import Navy from './ui/Navy'
import Shipyard from './ui/Shipyard'
import About from './ui/About'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/navy" component={Navy}/>
            <Route path="/shipyard" component={Shipyard}/>
            <Route component={About}>
                <Route path="/about/mission" component={Mission}/>
                <Route path="/about/history" component={History}/>
                <Route path="/about/rules" component={Rules}/>
                <Route path="/about/ranks" component={Ranks}/>
                <Route path="/about/diplomacy" component={Diplomacy}/>
            <Route/>
        </Switch>
    </main>
)

export default Routes