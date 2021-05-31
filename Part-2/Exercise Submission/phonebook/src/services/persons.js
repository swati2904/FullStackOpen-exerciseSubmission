import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (newobj) => {
  const request = axios.post(baseUrl, newobj);
  return request.then((response) => response.data);
};

const update = (id, newobj) => {
  const request = axios.put(`${baseUrl}/${id}`, newobj);
  return request.then((response) => response.data);
};

export default { getAll, create, update };
