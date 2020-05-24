import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Components
import Urls from '../../../Routes/Urls';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

//Logo
import LOGO from '../../../Images/logo.png'

//Modal Logout
import ModalLogout from './Logout'

const useStyles = makeStyles((theme) => ({
  appBar:{
      zIndex: 1300,
      background: '#ee8572',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    textTransform: 'none',
    fontSize: '17px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [ modal, setModal ] = useState(false)

  const handleModal = () =>{
    setModal(!modal)
  }

  return (
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={Urls.Dashboard}>
              <img width="75" src={LOGO} alt="Logo de la app" />
            </Link>
          </Typography>

          <div className="row">
            <Button 
              color="inherit"
              size="small"
              className={classes.button}
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon/>}
            >
              <span className="status"></span>Skarlin V.
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Link to={Urls.Profile}>
                  <MenuItem onClick={handleClose}>Perfil</MenuItem>
                </Link>
                <MenuItem onClick={handleModal}>
                  Cerrar sesión
                  {modal && <ModalLogout/>}
                </MenuItem>
            </Menu>
        </div>

        </Toolbar>
      </AppBar>
  );
}
