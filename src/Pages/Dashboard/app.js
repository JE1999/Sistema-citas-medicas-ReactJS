import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote';

//Chart
import ChartOne from './Components/ChartOne'

export default function (){

    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">

                    <div className="col-12 col-md-5 col-lg-4 col-xl-3 m-2 mt-5 bg-white shadow rounded-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 col-xl-3 m-2 mt-5 bg-white shadow rounded-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 col-xl-3 m-2 mt-5 bg-white shadow rounded-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 m-2 mt-5 bg-white shadow rounded-app">
                        <ChartOne/>
                    </div>

                    <div className="col-3 m-2 mt-5">
                        <ul className="list-group shadow rounded-app">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Cras justo odio
                                <span className="badge badge-primary badge-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                                <span className="badge badge-primary badge-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Morbi leo risus
                                <span className="badge badge-primary badge-pill">1</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}