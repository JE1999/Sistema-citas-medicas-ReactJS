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

//Medical
const Medical = lazy(() => import('../Pages/Medical'))
const MedicalCreate = lazy(() => import('../Pages/Medical/Views/Create'))
const MedicalEdit = lazy(() => import('../Pages/Medical/Views/Edit'))

//Patients
const Patients = lazy(() => import('../Pages/Patients'))
const PatientsCreate = lazy(() => import('../Pages/Patients/Views/Create'))
const PatientsEdit = lazy(() => import('../Pages/Patients/Views/Edit'))

//Offices
const Offices = lazy(() => import('../Pages/Offices'))
const OfficesCreate = lazy(() => import('../Pages/Offices/Views/Create'))
const OfficesEdit = lazy(() => import('../Pages/Offices/Views/Edit'))

//Specialties
const Specialties = lazy(() => import('../Pages/Specialties'))
const SpecialtiesCreate = lazy(() => import('../Pages/Specialties/Views/Create'))
const SpecialtiesEdit = lazy(() => import('../Pages/Specialties/Views/Edit'))

//User
const User = lazy(() => import('../Pages/User'))
const UserCreate = lazy(() => import('../Pages/User/Views/Create'))
const UserEdit = lazy(() => import('../Pages/User/Views/Edit'))

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

                {/* Medical */}
                <Route exact path={URLS.Medical} component={Medical} />
                <Route exact path={URLS.MedicalCreate} component={MedicalCreate} />
                <Route exact path={`${URLS.MedicalEdit}/:id`} component={MedicalEdit} />

                {/* Patients */}
                <Route exact path='/Patiens' component={Patients} />
                <Route exact path='/Patiens/Create' component={PatientsCreate} />
                <Route exact path='/Patiens/Edit/:id' component={PatientsEdit} />

                {/* Offices */}
                <Route exact path={URLS.Offices} component={Offices} />
                <Route exact path={URLS.OfficesCreate} component={OfficesCreate} />
                <Route exact path={`${URLS.OfficesEdit}/:id`} component={OfficesEdit} />

                {/* Specialties */}
                <Route exact path={URLS.Specialties} component={Specialties} />
                <Route exact path={URLS.SpecialtiesCreate} component={SpecialtiesCreate} />
                <Route exact path={`${URLS.SpecialtiesEdit}/:id`} component={SpecialtiesEdit} />

                {/* User */}
                <Route exact path={URLS.User} component={User} />
                <Route exact path={URLS.UserCreate} component={UserCreate} />
                <Route exact path={`${URLS.UserEdit}/:id`} component={UserEdit} />
            
            </ScrollTop>
        </Switch>
    )
}