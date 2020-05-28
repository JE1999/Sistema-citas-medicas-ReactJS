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
                    <Link to={Urls.QuotesEdit + '/1'}>
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
                <caption className="ml-2">Lista de citas</caption>
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
                        <th className="align-middle" scope="row">1165</th>
                        <td className="align-middle">05/05/2020</td>
                        <td className="align-middle">11:25</td>
                        <td className="align-middle">Jose Candelario tres pastines</td>
                        <td className="align-middle">Diente de Oro</td>
                        <td className="align-middle">Clinica Coromina</td>
                        <td className="align-middle">
                            <h6 className="m-0">
                                <span className="badge badge-warning">Asignado</span>
                            </h6>
                        </td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>

                    <tr>
                        <th className="align-middle" scope="row">1166</th>
                        <td className="align-middle">21/05/2020</td>
                        <td className="align-middle">18:30</td>
                        <td className="align-middle">David Flores Guzman</td>
                        <td className="align-middle">Elizabeth Rosalía</td>
                        <td className="align-middle">Dario Contreras</td>
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