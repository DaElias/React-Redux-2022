/** Typos de asiganciones */
const SET_PERSONAJES = "SET_PERSONAJES";
const DELETE_PERONAJE = "DELETE_PERONAJE";
const GET_PERSONAJE = "GET_PERSONAJE";
const SET_PERSON = "SET_PERSON";
const EDIT_PERSON = "EDIT_PERSON";
const EMPTY_LIST = "EMPTY_LIST";
const ADD_REGISTER_DATA = "ADD_REGISTER_DATA";
/** Typos de funciones */
const setPersonajes = (payload) => ({ type: SET_PERSONAJES, payload });
const deletePersonaje = (payload) => ({ type: DELETE_PERONAJE, payload });
const setPerson = (payload) => ({ type: SET_PERSON, payload });
const editPerson = (payload) => ({ type: EDIT_PERSON, payload });
const emptyList = () => ({ type: EMPTY_LIST });
const addRegisterData = (payload) => ({ type: ADD_REGISTER_DATA, payload });

export {
  SET_PERSONAJES,
  DELETE_PERONAJE,
  GET_PERSONAJE,
  SET_PERSON,
  EDIT_PERSON,
  EMPTY_LIST,
  ADD_REGISTER_DATA,
  setPersonajes,
  deletePersonaje,
  setPerson,
  editPerson,
  emptyList,
  addRegisterData,
};
