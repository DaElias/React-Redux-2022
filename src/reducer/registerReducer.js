import { ADD_REGISTER_DATA } from "../actions/type";

const initialState = {
  register: [],
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REGISTER_DATA:
      return { ...state, register: [...state.register, payload] };
    default:
      return { ...state };
  }
};

export default registerReducer;
