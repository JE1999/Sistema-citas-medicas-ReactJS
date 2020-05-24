import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

//Components
import MyAppBar from './Components/AppBar'
// import ListCollapseReport from './Components/ListCollapseReport'
import Urls from '../../Routes/Urls';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100%)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
  },
}));

export default function MiniDrawer({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <MyAppBar/>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
      <div className={classes.toolbar}/>
        <List>
          
          <NavLink 
            to={Urls.Dashboard}
            activeClassName="active"
          >
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>
                Dashboard
              </ListItemText>
            </ListItem>
          </NavLink>
          
          <NavLink 
            to={Urls.Quotes}
            activeClassName="active"
          >
            <ListItem button>
              <ListItemIcon>
                <ListAltIcon/>
              </ListItemIcon>
              <ListItemText>
                Citas
              </ListItemText>
            </ListItem>
          </NavLink>

          <ListItem button>
            <ListItemIcon>
              <RecentActorsIcon/>
            </ListItemIcon>
            <ListItemText>
              Médicos
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GroupIcon/>
            </ListItemIcon>
            <ListItemText>
              Pacientes
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <LocalHospitalIcon/>
            </ListItemIcon>
            <ListItemText>
              Consultorios
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GroupWorkIcon/>
            </ListItemIcon>
            <ListItemText>
              Especialidades
            </ListItemText>
          </ListItem>

        </List>

        <Divider />

        <List>

          <ListItem button>
              <ListItemIcon>
                <SupervisedUserCircleIcon/>
              </ListItemIcon>
              <ListItemText>
                Usuarios
              </ListItemText>
            </ListItem>

          </List>

        <Divider/>

            {open 
                ?
                <Button
                  color="inherit"
                  aria-label="close drawer"
                  onClick={handleDrawerClose}
                  edge="start"
                >
                  <ChevronLeftIcon />
                </Button>
                :
                <Button
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                >
                  <ChevronRightIcon />
                </Button>
            }
      </Drawer>
      <main className={classes.content}>
    
        <div className="z-index-app" style={{position: "relative", width: "100%"}}>
          <div className="container-fluid p-0" style={{position: "absolute"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 320">
              <path fill="#ee8572" fill-opacity="1" d="M0,320L120,298.7C240,277,480,235,720,208C960,181,1200,171,1320,165.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
          </div>
        </div>

        <div className={classes.toolbar} />

        <div className="opcd px-3 mt-3">
          {children}
        </div>

        <footer className="border-top bg-white mt-5">
          <div className="footer-copyright text-center py-3">
            <h6 className="m-0">© 2020 Copyright: <span className="text-app">Skarlin</span></h6>
          </div>
        </footer>

      </main>
    </div>
  );
}
