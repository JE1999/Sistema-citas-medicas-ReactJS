import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function (){

    const [ see, setSee ] = useState(false)
    const seePassword = () =>{
        setSee(!see)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        alert("Aun no funciono")
    }

    return(
        <>
            <div className="container mt-5 p-4 rounded-app shadow bg-white">
                <h1 className="text-muted text-center">Mi perfil</h1>

                <hr/>

                <form 
                    onSubmit={handleSubmit}
                >
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nombre</label>
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                defaultValue="Skarlin"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Apellido</label>
                        <div className="col-sm-6">
                            <input
                                type="text" 
                                className="form-control form-control-sm" 
                                defaultValue="Vasquez Gónzalez"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Usuario</label>
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                defaultValue="Skarlin69"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Contraseña</label>
                        <div className="col-sm-6 d-flex">
                            <input
                                type={see ? "text" : "password"}
                                className="form-control form-control-sm"
                                defaultValue="la vaca lola tiene cabeza y tiene cola"
                                required
                            />
                            <IconButton size="small" onClick={seePassword} aria-label="Ver">
                                <VisibilityIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Perfil</label>
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                className="form-control form-control-sm"
                                defaultValue="Administrador"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Estado</label>
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                className="form-control form-control-sm"
                                defaultValue="Activo"
                                readOnly
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Correo</label>
                        <div className="col-sm-6">
                            <input 
                                type="email" 
                                className="form-control form-control-sm" 
                                defaultValue="Skarlin@gmail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Teléfono</label>
                        <div className="col-sm-6">
                            <input 
                                type="text" 
                                className="form-control form-control-sm" 
                                defaultValue="+1 (829) 977-4742"
                                required
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-app shadow btn-lg">Guardar</button>
                    </div>

                </form>

            </div>

        </>
    )
}