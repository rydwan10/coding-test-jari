import { SET_ALL_CUSTOMERS, SET_EDITED_DATA, SET_MODAL } from "./constants";

const initialState = {
  customers: [],

  isModalOpen: false,
  isLoading: true,
  editedData: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    case SET_EDITED_DATA:
      return {
        ...state,
        editedData: action.payload,
      };
    case SET_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      return state;
  }
}
