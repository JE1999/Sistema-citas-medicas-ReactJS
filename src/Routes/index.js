import React, { lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

//Switch components to top
import ScrollTop from './ScrollTop'

//URLS
import URLS from './Urls'

/* LAZY COMPONENTS */
//Login
const Login = lazy(() => import('../Pages/Login'))

//Profile
const Profile = lazy(() => import('../Pages/Profile'))

//Dashboard
const Dashboard = lazy(() => import('../Pages/Dashboard'))

//Quotes
const Quotes = lazy(() => import('../Pages/Quotes'))
const QuotesCreate = lazy(() => import('../Pages/Quotes/Views/Create'))
const QuotesEdit = lazy(() => import('../Pages/Quotes/Views/Edit'))

export default function (){

    return(
        <Switch>
            <ScrollTop>

                {/* Login */}
                <Route exact path={URLS.Login} component={Login} />

                {/* Profile */}
                <Route exact path={URLS.Profile} component={Profile} />

                {/* Dashboard */}
                <Route exact path={URLS.Dashboard} component={Dashboard} />

                {/* Quotes */}
                <Route exact path={URLS.Quotes} component={Quotes} />
                <Route exact path={URLS.QuotesCreate} component={QuotesCreate} />
                <Route exact path={`${URLS.QuotesEdit}/:id`} component={QuotesEdit} />
            
            </ScrollTop>
        </Switch>
    )
}