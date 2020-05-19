import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function (){

    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 m-2 shadow-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 m-2 shadow-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xl-3 m-2 shadow-app">
                        <div className="row d-flex align-items-center">
                            <div className="col-4 text-center"><EventNoteIcon className="text-app" fontSize="large"/></div>
                            <div className="col-8 text-center">
                                <h5 className="text-muted mb-0 mt-3">Some text</h5>
                                <hr/>
                                <h6>$123,456.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}