import Row from "./Row/Row";
import makeStyles from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

function CustomerTable({ handleEdit, handleDelete, customers }) {
  const classes = makeStyles();

  return (
    <div style={{ padding: "14px", paddingTop: "7px" }}>
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FCAE73",
            textTransform: "capitalize",
            color: "white",
          }}
          disableElevation
        >
          Download Template
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead className={classes.tableHeading}>
            <TableRow>
              <TableCell className={classes.tableCell} width={2}>
                No{" "}
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Code
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Email
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                Status
              </TableCell>
              <TableCell className={classes.tableCell} align="right">
                {" "}
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index) => (
              <Row
                key={customer.id}
                index={index}
                customer={customer}
                // handleDelete={handleDelete}
                // handleEdit={handleEdit}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustomerTable;
