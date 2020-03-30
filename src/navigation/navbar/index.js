// this is the top app bar. contains all navigation menu options
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import PollIcon from "@material-ui/icons/Poll";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NavigationIcon from "@material-ui/icons/Navigation";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import ContactsIcon from "@material-ui/icons/Contacts";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [appNameDisplay, setAppNameDisplay] = React.useState("block");

  const handleDrawerOpen = () => {
    if (window.innerWidth < 500) {
      setAppNameDisplay("none");
    }
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (window.innerWidth < 500) {
      setAppNameDisplay("block");
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography style={{ display: appNameDisplay }} variant="h5" noWrap>
            Spothole
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <IconButton aria-label="About Me" color="inherit">
              <a
                href="https://nirbhay.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContactsIcon />
              </a>
            </IconButton>
            <IconButton aria-label="GitHub" color="inherit">
              <a
                href="https://github.com/nirbhayph"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit">
              <a
                href="https://linkedin.com/in/nirbhaypherwani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </IconButton>
            <IconButton aria-label="Acknowledgements" color="inherit">
              <a
                href="https://github.com/nirbhayph/spothole"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LoyaltyIcon />
              </a>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/report">
            <ListItem onClick={handleDrawerClose} button key={"Report"}>
              <ListItemIcon>
                <AddLocationIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Report Pothole"} />
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem onClick={handleDrawerClose} button key={"Dashboard"}>
              <ListItemIcon>
                <PollIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"My Complaints"} />
            </ListItem>
          </Link>
          <Link to="/routing">
            <ListItem
              onClick={handleDrawerClose}
              button
              key={"Route Navigaton"}
            >
              <ListItemIcon>
                <NavigationIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Route Navigation"} />
            </ListItem>
          </Link>
          <Link to="/profile">
            <ListItem onClick={handleDrawerClose} button key={"Profile"}>
              <ListItemIcon>
                <AssignmentIndIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItem>
          </Link>
        </List>
        <Link to="/logout">
          <ListItem onClick={handleDrawerClose} button key={"Logout"}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </Link>
      </Drawer>
    </div>
  );
}
