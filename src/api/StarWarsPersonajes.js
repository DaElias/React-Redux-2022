import axios from "axios";

const getPersonajes = async (url = "") => {
  const datos = {
    list: [],
    next: "",
    previous: "",
    count: 0,
  };
  await axios
    .get(url)
    .then((res) => {
      datos.list = res.data.results;
      datos.next = res.data.next;
      datos.previous = res.data.previous;
      datos.count = res.data.count;
    })
    .catch((e) => {
      throw Error(e);
    });
  return datos;
};

export { getPersonajes };
