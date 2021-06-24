import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllCustomer, setModal } from "../store/actions";

import { InputBase, Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CustomerTable from "./CustomerTable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#F4F6F8",
    padding: theme.spacing(3),
    height: "100vh",
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
  addButton: {
    width: "128px",
    backgroundColor: "#2285DF",
    textTransform: "capitalize",
    marginRight: "12px",
    color: "white",
  },
  uploadButton: {
    width: "128px",
    backgroundColor: "#4CAF50",
    textTransform: "capitalize",
    color: "white",
  },
}));

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.customers);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/customer").then((res) => {
      console.log("🧇Response", res.data.data);
      dispatch(setAllCustomer(res.data.data));
      console.log("state", state);
    });
  }, []);

  const handleClickAdd = () => {
    dispatch(setModal(true));
  };

  const handleClickUpload = () => {};

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <div style={{ marginTop: "5rem" }}>
        <div style={{ fontSize: "24px" }}>Customer</div>
        <div className={classes.buttonWithSearchContainer}>
          <div>
            <Button
              variant="contained"
              className={classes.addButton}
              disableElevation
              onClick={() => handleClickAdd()}
            >
              Add
            </Button>
            <Button
              variant="contained"
              className={classes.uploadButton}
              disableElevation
              onClick={() => handleClickUpload()}
            >
              Upload
            </Button>
          </div>
          <div>
            <Paper component="form" className={classes.inputSearchCustomer}>
              <InputBase
                className={classes.input}
                placeholder="Search Customer"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Paper>
            {state.length === 0 ? (
              <h3>Loading...</h3>
            ) : (
              <CustomerTable customers={state}></CustomerTable>
            )}
          </Paper>
        </div>
      </div>
    </main>
  );
};

export default Main;
