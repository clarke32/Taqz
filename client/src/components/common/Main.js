import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Home , Login, About, Response, Register, DashBoard, Not} from './'

function Main(props){
        return(
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/about' component={About}/>
                <Route path='/api/hello' component={Response}/>
                <Route path='/register' component={Register}/>
                <Route path='/usr/dashboard' component={DashBoard}/>
            </Switch>
        )
}

export {Main}