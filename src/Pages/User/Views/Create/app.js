import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Urls from '../../../../Routes/Urls'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';

export default function (){

    const [ dataSend, setDataSend ] = useState({})

    const handleChange = e =>{
        setDataSend({
            ...dataSend,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault()
        
        alert("Aun no me han dado funcionabilidad, Sorry :(")

        console.log(dataSend)

    }

    return(
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-start">
                        <div className="col-md-12">
                            <Tooltip title="Volver atras">
                                <Link 
                                    className="btn btn-app shadow border border-white"
                                    to={Urls.User}
                                ><ArrowBackIcon/> Usuario
                                </Link>
                            </Tooltip>
                        </div>
                </div>
            </div>

            <div className="container bg-white mt-5 py-3 shadow rounded-app">
                <h1 className="text-center text-muted">Nuevo usuario</h1>
                
                <hr/>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Nombre" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="nombre"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Apellido" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="apellido"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Usuario" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="usuario"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="E-mail" 
                                type="email"
                                required
                                variant="outlined" 
                                size="small"
                                name="email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Contraseña" 
                                type="password"
                                required
                                variant="outlined" 
                                size="small"
                                name="contraseña"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Confirmar contraseña" 
                                type="password"
                                required
                                variant="outlined" 
                                size="small"
                                name="confirmarContraseña"
                                onChange={handleChange}
                            />
                        </div>
                        

                    </div>
                    <div className="text-center">
                        <button className="btn btn-app btn-lg shadow">Guardar</button>
                    </div>
                </form>
                
            </div>

        </>
    )
}
