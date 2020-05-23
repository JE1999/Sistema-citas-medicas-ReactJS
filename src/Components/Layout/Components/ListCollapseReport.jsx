import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

export default function (){

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return(

        <List>
            
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Reportes" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    
                    <ListItem button>
                        <ListItemIcon>
                            <RecentActorsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Médicos" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Pacientes" />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <LocalHospitalIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Consultorios" />
                    </ListItem>

                </List>
            </Collapse>

        </List>

    )
}