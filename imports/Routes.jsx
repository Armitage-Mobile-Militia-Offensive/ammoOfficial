import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './ui/Home'
import Navy from './ui/Navy'
import Shipyard from './ui/Shipyard'
import About from './ui/About'

const Routes = () => {
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/navy" component={Navy}/>
            <Route path="/shipyard" component={Shipyard}/>
            <Route path="/about" component={About}/>
        </Switch>
    </main>
}

export default Routes