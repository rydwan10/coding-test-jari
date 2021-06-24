import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PieChartIcon from "@material-ui/icons/PieChart";
import TimelineIcon from "@material-ui/icons/Timeline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import TuneIcon from "@material-ui/icons/Tune";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import jariIcon from "../assets/jari.png";

import Appbar from "./Appbar";
import FormModal from "./Utils/FormModal";
import Main from "./Main";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "transparent",
    color: "black",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRadius: "0 6px 6px 0",
    boxShadow: "10px 0px 40px -18px #888888",
  },
  // necessary for content to be below app bar
  toolbar: {
    marginTop: "1rem",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#F4F6F8",
    padding: theme.spacing(3),
    height: "100vh",
  },

  // sidebar
  greetingContainer: {
    width: "90%",
    height: "70px",
    border: "1px solid #F4F4F4",
    borderRadius: "12px",
    marginLeft: "12px",
    marginBottom: "10px",
    paddingLeft: "12px",
    paddingRight: "12px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  greetingDefaultContainer: {
    width: "100%",
    justifyContent: "center",
  },

  iconJari: {
    width: "100%",
    maxHeight: "100%",
  },

  iconFill: {
    fill: "#2586DF",
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormModal />
      <CssBaseline />
      <Appbar />
      <div className={classes.navbar}></div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <div className={classes.iconContainer}>
          <img className={classes.iconJari} src={jariIcon} alt="jari" />
        </div>
        <div className={classes.greetingDefaultContainer}>
          <div className={classes.greetingContainer}>
            <Typography>Team Jarvis</Typography>
            <Typography>Development</Typography>
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <PieChartIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TimelineIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Memory Journey" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Last Location" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Customer" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BorderColorIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Task" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <TuneIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Configuration" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon className={classes.iconFill} />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </Drawer>

      <Main />

      {/* Main was here... */}
    </div>
  );
}
