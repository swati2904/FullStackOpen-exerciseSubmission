import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newobj) => {
  const request = axios.post(baseUrl, newobj);
  return request.then((response) => response.data);
};

const update = (id, newobj) => {
  const request = axios.put(`${baseUrl}/${id}`, newobj);
  return request.then((response) => response.data);
};

const removePerson = (id, newobj) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  delete: removePerson,
};
