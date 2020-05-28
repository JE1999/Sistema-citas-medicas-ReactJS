import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Urls from '../../../Routes/Urls';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function () {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const btnOpcions = () =>{
        return(
            <div>
                <IconButton className="shadow-sm border" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <Link to={Urls.MedicalEdit + '/1'}>
                        <MenuItem onClick={handleClose}>Editar</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Borrar</MenuItem>
                </Menu>
            </div>
        )
    }

    return(
        <div className="table-responsive bg-white shadow rounded-app">
            <table className="table table-hover m-0">
                <caption className="ml-2">Lista de médicos</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre completo</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>E-mail</th>
                        <th>Especialidad</th>
                        <th>Estado</th>
                        <th><MoreHorizIcon/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="align-middle" scope="row">1164</th>
                        <td className="align-middle">Carlos Aguirre Salcedo</td>
                        <td className="align-middle">809-255-5555</td>
                        <td className="align-middle">Los minas, #8, detras del colmadon Juan</td>
                        <td className="align-middle">Carlos@gmail.com</td>
                        <td className="align-middle">Ginecologia</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-success">Activo</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>

                    <tr>
                        <th className="align-middle" scope="row">1165</th>
                        <td className="align-middle">Diana de la Vega</td>
                        <td className="align-middle">809-255-5555</td>
                        <td className="align-middle">Residencial los girasoles, c/3 #3</td>
                        <td className="align-middle">Diana@gmail.com</td>
                        <td className="align-middle">Gastroenterologa</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-success">Activo</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>

                    <tr>
                        <th className="align-middle" scope="row">1166</th>
                        <td className="align-middle">Juana Cigarra</td>
                        <td className="align-middle">809-255-5555</td>
                        <td className="align-middle">El capotillo, calle principal #4 c/3</td>
                        <td className="align-middle">Juana@gmail.com</td>
                        <td className="align-middle">Odontologa</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-danger">Inactivo</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}