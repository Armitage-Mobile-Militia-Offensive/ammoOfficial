import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './ui/Home'
import Navy from './ui/Navy'
import Shipyard from './ui/Shipyard'
import About from './ui/About'
import Diplomacy from './ui/about/Diplomacy'
import History from './ui/about/History'
import Mission from './ui/about/Mission'
import Ranks from './ui/about/Ranks'
import Rules from './ui/about/Rules'

const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/navy" component={Navy}/>
            <Route path="/shipyard" component={Shipyard}/>
            <Switch>
                <Route path="/about/mission" component={Mission}/>
                <Route path="/about/history" component={History}/>
                <Route path="/about/rules" component={Rules}/>
                <Route path="/about/ranks" component={Ranks}/>
                <Route path="/about/diplomacy" component={Diplomacy}/>
            </Switch>
        </Switch>
    </main>
)

export default Routes