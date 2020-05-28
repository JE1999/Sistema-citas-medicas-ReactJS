import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Urls from '../../../../Routes/Urls'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
                                    to={Urls.Patiens}
                                ><ArrowBackIcon/> paciente
                                </Link>
                            </Tooltip>
                        </div>
                </div>
            </div>

            <div className="container bg-white mt-5 py-3 shadow rounded-app">
                <h1 className="text-center text-muted">Editar paciente</h1>
                
                <hr/>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-row">

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Nombres" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="nombres"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Apellidos" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="apellidos"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Fecha de nacimiento" 
                                type="date"
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined" 
                                size="small"
                                name="fechaNacimiento"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group col-md-12 col-lg-6">
                            <TextField
                                fullWidth 
                                label="Teléfono" 
                                type="text"
                                required
                                variant="outlined" 
                                size="small"
                                name="telefono"
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
                            <FormControl 
                                fullWidth 
                                size="small" 
                                required 
                                variant="outlined"
                            >
                                <InputLabel id="demo-simple-select-outlined-label">Genero</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Genero"
                                    name="genero"
                                    onChange={handleChange}
                                    defaultValue="Sin identificar"
                                >
                                    <MenuItem value="Sin identificar">Sin identificar</MenuItem>
                                    <MenuItem value="Masculino">Masculino</MenuItem>
                                    <MenuItem value="Femenino">Femenino</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="form-group col-md-12">
                            <TextField
                                fullWidth 
                                label="Dirección" 
                                type="text"
                                multiline
                                rows={2}
                                required
                                variant="outlined" 
                                size="small"
                                name="direccion"
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
