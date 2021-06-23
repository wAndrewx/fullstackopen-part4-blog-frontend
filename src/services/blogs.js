import axios from "axios";
const baseUrl = "/api/blogs";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createBlog = async (token, blogObj) => {
  const config = {
    headers: { Authorization: token.token },
  };
  console.log("test");

  try {
    const res = await axios.post(baseUrl, blogObj, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

const services = {
  getAll,
  createBlog,
};

export default services;
