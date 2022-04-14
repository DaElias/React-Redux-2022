const SET_PERSONAJES = "SET_PERSONAJES";
const DELETE_PERONAJE = "DELETE_PERONAJE";
const GET_PERSONAJE = "GET_PERSONAJE";
const SET_PERSON = "SET_PERSON";
const EDIT_PERSON = "EDIT_PERSON"
const setPersonajes = (payload) => ({ type: SET_PERSONAJES, payload });
const deletePersonaje = (payload) => ({ type: DELETE_PERONAJE, payload });
const setPerson = (payload) => ({ type: SET_PERSON, payload });
const editPerson = (payload) => ({ type: EDIT_PERSON, payload });


export {
  SET_PERSONAJES,
  DELETE_PERONAJE,
  GET_PERSONAJE,
  SET_PERSON,
  EDIT_PERSON,
  setPersonajes,
  deletePersonaje,
  setPerson,
  editPerson,
};
