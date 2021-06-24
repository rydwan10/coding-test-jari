import { SET_ALL_CUSTOMERS, SET_EDITED_DATA, SET_MODAL } from "./constants";

export function setAllCustomer(payload) {
  return {
    type: SET_ALL_CUSTOMERS,
    payload,
  };
}

export function setEditedData(payload) {
  return {
    type: SET_EDITED_DATA,
    payload,
  };
}

export function setModal(payload) {
  return {
    type: SET_MODAL,
    payload,
  };
}
