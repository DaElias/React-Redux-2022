import { ADD_TODOPERSONAJES, ADD_PERSONAJES } from "../actions/type";

const initialState = {
  personajes: [],
};

const StarWarsReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_PERSONAJES:
      return { ...state, personajes: [...state.personajes, payload] };
    case ADD_TODOPERSONAJES:
      return {
        ...state,
        personajes: payload,
      };
    default:
      return { ...state };
  }
};

export default StarWarsReducer;
