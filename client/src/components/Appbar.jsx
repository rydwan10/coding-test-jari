import AppBar from "@material-ui/core/AppBar";
import englandFlag from "../assets/english.png";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "transparent",
    color: "black",
  },
  toolbar: {
    marginTop: "1rem",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#F4F6F8",
    padding: theme.spacing(3),
    height: "100vh",
  },

  iconJari: {
    width: "100%",
    maxHeight: "100%",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    marginRight: "12px",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "1rem",
    paddingRight: "1rem",
  },
  topBarDivider: {
    width: "3px",
    height: "40px",
    backgroundColor: "#EEEEED",
    marginRight: "1rem",
  },
  imgFlag: {
    minWidth: "12px",
    height: "40px",
    marginRight: "3.4rem",
  },

  // Search box
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  buttonWithSearchContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  inputSearchCustomer: {
    width: "300px",
    padding: "4px 0 4px 0",
  },
}));

const Appbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar elevation={0} position="absolute" className={classes.appBar}>
        <div className={classes.topBar}>
          <img className={classes.imgFlag} src={englandFlag} alt="" />
          <div className={classes.topBarDivider}></div>
          <Avatar className={classes.orange}>A</Avatar>
          <Typography>Jhon Doe</Typography>
        </div>
      </AppBar>
    </div>
  );
};

export default Appbar;
