import React from 'react';
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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';

//Components
import MyAppBar from './Components/AppBar'

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
          
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText>
              Dashboard
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText>
              Example
            </ListItemText>
          </ListItem>

        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
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
     
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="col-12 p-0" style={{height: "500px", position: "absolute"}}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                  <path d="M-30.76,141.61 C-23.98,49.83 -1.41,87.33 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#ee8572"}}></path></svg></div>
            </div>
          </div>
        </div>

        <div className={classes.toolbar} />
        <div className="opcd px-3">
          {children}
        </div>

        <footer className="border-top bg-white mt-5">
          <div className="footer-copyright text-center py-3">
            <h6 className="m-0">© 2020 Copyright: <span className="text-app">Fulano</span></h6>
          </div>
        </footer>

      </main>
    </div>
  );
}
