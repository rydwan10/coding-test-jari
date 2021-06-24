import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "../../store/actions";

import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    color: "black",
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "80vw",
  },
}));
function FormModal() {
  const classes = useStyles();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();

  const [code, setCode] = useState("");

  const handleClose = () => {
    dispatch(setModal(false));
  };

  const handleSubmit = () => {};

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <div className={classes.paper}>
            <div>
              <h3>Add New Customer</h3>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                id="code"
                label="Code"
                variant="outlined"
                onChange={(e) => setCode(e.target.value)}
              />
              <TextField
                id="code"
                label="Code"
                variant="outlined"
                onChange={(e) => setCode(e.target.value)}
              />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default FormModal;
