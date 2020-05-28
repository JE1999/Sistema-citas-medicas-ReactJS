import React from 'react';

//Components
// import Urls from '../../../Routes/Urls';

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
                    {/* <Link to={Urls.SpecialtiesEdit + '/1'}>
                        <MenuItem onClick={handleClose}>Editar</MenuItem>
                    </Link> */}
                    <MenuItem onClick={handleClose}>Borrar</MenuItem>
                </Menu>
            </div>
        )
    }

    return(
        <div className="table-responsive bg-white shadow rounded-app">
            <table className="table table-hover m-0">
                <caption className="ml-2">Lista de especialidad</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Especialidad</th>
                        <th><MoreHorizIcon/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="align-middle" scope="row">1164</th>
                        <td className="align-middle">Odontologia</td>
                        <td className="align-middle">{btnOpcions()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}