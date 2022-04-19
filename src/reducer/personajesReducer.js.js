import {
  SET_PERSONAJES,
  DELETE_PERONAJE,
  SET_PERSON,
  EDIT_PERSON,
  EMPTY_LIST,
} from "../actions/type";

const initialState = {
  list: [],
};

const personajesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PERSONAJES:
      return { ...state, list: payload };
    case DELETE_PERONAJE:
      // console.log(new Date());
      return {
        ...state,
        list: state.list.filter((item) => payload !== item.id),
      };
    case SET_PERSON:
      return { ...state, list: [...state.list, payload] };
    case EDIT_PERSON:
      // payload = {id ,data: {name, air_date}}
      return {
        ...state,
        list: state.list.map((elemt) => {
          if (elemt.id === payload.id) {
            // const { name, air_date } = payload.data;
            // return { name, air_date };
            return payload.data;
          }
          return elemt;
        }),
      };
    case EMPTY_LIST:
      return { ...state, list: [] };

    default:
      return { ...state };
  }
};

export default personajesReducer;
