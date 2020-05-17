import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Switch components to top
import ScrollTop from './ScrollTop'

//URLS
import URLS from './Urls'

/* LAZY COMPONENTS */
//LOGIN
const Login = lazy(() => import('../Pages/Login/index'))

//DASHBOARD
const Dashboard = lazy(() => import('../Pages/Dashboard/index'))

export default function (){

    return(
        <Switch>
            <ScrollTop>

                {/* LOGIN */}
                <Route exact path={URLS.Login} component={Login} />

                {/* DASHBOARD */}
                <Route exact path={URLS.Dashboard} component={Dashboard} />
            
            </ScrollTop>
        </Switch>
    )
}