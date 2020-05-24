import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Switch components to top
import ScrollTop from './ScrollTop'

//URLS
import URLS from './Urls'

/* LAZY COMPONENTS */
//LOGIN
const Login = lazy(() => import('../Pages/Login'))

//DASHBOARD
const Dashboard = lazy(() => import('../Pages/Dashboard'))

//QUOTES
const Quotes = lazy(() => import('../Pages/Quotes'))
const QuotesCreate = lazy(() => import('../Pages/Quotes/Views/Create'))
const QuotesEdit = lazy(() => import('../Pages/Quotes/Views/Edit'))

export default function (){

    return(
        <Switch>
            <ScrollTop>

                {/* LOGIN */}
                <Route exact path={URLS.Login} component={Login} />

                {/* DASHBOARD */}
                <Route exact path={URLS.Dashboard} component={Dashboard} />

                {/* QUOTES */}
                <Route exact path={URLS.Quotes} component={Quotes} />
                <Route exact path={URLS.QuotesCreate} component={QuotesCreate} />
                <Route exact path={`${URLS.QuotesEdit}/:id`} component={QuotesEdit} />
            
            </ScrollTop>
        </Switch>
    )
}