import { useState } from "react";
import { TableRow, TableCell, withStyles, Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";

// dropdown menu
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// style
import makeStyles from "./style";

export default function Row({ customer, index, handleEdit, handleDelete }) {
  const classes = makeStyles();
  const StyledMenu = withStyles({
    paper: {
      backgroundColor: "#F4F6F8",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  // Menu utility
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // End of menu utility

  return (
    <>
      <TableRow className={`${classes.root} ${classes.tableHead}`}>
        <TableCell className={classes.tableCell} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          {customer.kode}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          {customer.nama}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          {customer.email}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          {/* <img
            // src={`http://localhost:5000/uploads/${artist.thumbnail}`}
            alt="thumbnail"
            width="64"
          /> */}
          {/* ACTIVE */}
          {/* {artist.thumbnail} */}
          {customer.status === 1 ? "ACTIVE" : "NOT ACTIVE"}
        </TableCell>
        <TableCell className={classes.tableCell} align="right">
          <CreateIcon style={{ cursor: "pointer" }} onClick={handleClick} />
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <Button
                style={{ color: "#000000" }}
                onClick={() => handleEdit(customer)}
              >
                Edit
              </Button>
            </MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>
              <Button
                style={{ color: "red" }}
                onClick={() => handleDelete(customer.id)}
              >
                Delete
              </Button>
            </MenuItem>
          </StyledMenu>
        </TableCell>
      </TableRow>
    </>
  );
}
