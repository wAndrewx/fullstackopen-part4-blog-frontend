import axios from "axios";

const login = async (username, password) => {
  try {
    const loginObj = { username: username, password: password };
    const res = await axios.post("/api/login", loginObj);
    return res.data;
  } catch (error) {
    return error;
  }
};

const auth = {
  login,
};

export default auth;
