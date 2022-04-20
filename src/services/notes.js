import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const createNewNote = async (content) => {
  const note = { mensaje: content, state: false, id: new Date().getTime() };
  const respose = await axios.post(baseUrl, note);
  return respose.data;
};
