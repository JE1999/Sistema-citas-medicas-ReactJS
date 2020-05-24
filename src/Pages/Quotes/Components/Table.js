import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Urls from '../../../Routes/Urls';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
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
                <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    <MoreVertIcon/>
                </Button>
                <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={handleClose}><Link to={Urls.QuotesEdit + '/1'}>Editar</Link></MenuItem>
                    <MenuItem onClick={handleClose}>Borrar</MenuItem>
                </Menu>
            </div>
        )
    }

    return(
        <div className="table-responsive bg-white px-1 shadow rounded-app">
            <table class="table m-0">
                <caption>Lista de citas</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Paciente</th>
                        <th>Médico</th>
                        <th>Consultorio</th>
                        <th>Estado</th>
                        <th><MoreHorizIcon/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="align-middle" scope="row">1164</th>
                        <td className="align-middle">23/05/2020</td>
                        <td className="align-middle">09:45</td>
                        <td className="align-middle">Yohana Carolina Monsalve Castillo</td>
                        <td className="align-middle">Carlos Aguirre Salcedo</td>
                        <td className="align-middle">Central Juarez</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-success">Atendido</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>

                    <tr>
                        <th className="align-middle" scope="row">1164</th>
                        <td className="align-middle">23/05/2020</td>
                        <td className="align-middle">09:45</td>
                        <td className="align-middle">Yohana Carolina Monsalve Castillo</td>
                        <td className="align-middle">Carlos Aguirre Salcedo</td>
                        <td className="align-middle">Central Juarez</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-warning">Asignado</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}