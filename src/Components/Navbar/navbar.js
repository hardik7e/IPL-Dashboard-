import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider'; 
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import ListItemText from '@material-ui/core/ListItemText';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { ListItemIcon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import FiberNewIcon from '@material-ui/icons/FiberNew';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Navbar() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
        <Link to="/" style={{textDecoration:"none",color:"black"}}><ListItem button key={"Match Details"}>
            <ListItemIcon><SportsCricketIcon/></ListItemIcon>
            <ListItemText>Match Details</ListItemText>
          </ListItem></Link>
          <Link to="/updates" style={{textDecoration:"none",color:"black"}}><ListItem button key={"Players Details"}>
           <ListItemIcon ><AccessibilityIcon/></ListItemIcon>
           <ListItemText>Players Details</ListItemText>
         </ListItem></Link>
        </List>
        <Divider />
        <List>
          <Link to="/updates" style={{textDecoration:"none",color:"black"}}><ListItem button key="Upcoming Features">
            <ListItemIcon><FiberNewIcon/></ListItemIcon>
            <ListItemText>Upcoming Features</ListItemText>
          </ListItem></Link>
        </List>
      </Drawer>
      </div>
    )
}

export default Navbar
