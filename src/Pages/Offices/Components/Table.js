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
                    <Link to={Urls.OfficesEdit + '/1'}>
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
                <caption className="ml-2">Lista de consultorios</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Agregado</th>
                        <th>Teléfono</th>
                        <th>Estado</th>
                        <th><MoreHorizIcon/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="align-middle" scope="row">1164</th>
                        <td className="align-middle">Darío Contreras</td>
                        <td className="align-middle">Calle Club Rotario, Santo Domingo Este</td>
                        <td className="align-middle">23/05/2020</td>
                        <td className="align-middle">809-255-5555</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-success">Activo</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}