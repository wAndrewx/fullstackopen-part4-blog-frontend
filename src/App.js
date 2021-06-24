import React, { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import auth from "./services/auth";
import { Login } from "./components/Login";
import { CreateBlog } from "./components/CreateBlog";
const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const createRef = useRef();

  useEffect(() => {
    let isLocal = window.localStorage.getItem("token");
    const getBlog = async () => {
      const getBlog = await blogService.getAll();
      setBlogs(getBlog);
    };
    getBlog();
    if (isLocal) {
      setUsername(JSON.parse(isLocal).username);
    }
  }, []);

  // useEffect(() => {
  //   isLoggedIn();

  //   return () => {};
  // }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const login = await auth.login(username, password);
    setToken(login);
    localStorage.setItem("token", JSON.stringify(login));
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    setToken("");
    localStorage.clear();
  };

  const handleCreation = async (e) => {
    e.preventDefault();
    const getToken = JSON.parse(window.localStorage.getItem("token"));
    console.log(getToken);
    if (!title || !author || !url) {
      console.log("Missing values");
      return;
    }
    const blogObj = {
      title: title,
      author: author,
      url: url,
      userid: getToken.id,
    };
    try {
      const res = await blogService.createBlog(getToken, blogObj);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }; //axiospost

  // console.log(JSON.parse(localStorage.getItem("token")));
  const isLoggedIn = () => {
    if (!window.localStorage.getItem("token") && !token) {
      return (
        <div>
          <Login
            handleLogin={handleLogin}
            handleUsername={(e) => {
              setUsername(e);
            }}
            handlePassword={(e) => {
              setPassword(e);
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2>blogs</h2>
          <CreateBlog
            ref={createRef}
            handleTitle={(e) => {
              setTitle(e);
            }}
            handleAuthor={(e) => {
              setAuthor(e);
            }}
            handleURL={(e) => {
              setUrl(e);
            }}
            handleCreation={handleCreation}
          />
          <button
            onClick={() => {
              createRef.current.toggleVisibility();
            }}
          >
            View
          </button>
          <h3>{username + " is logged in"}</h3>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
          <button id="visibility" onClick={handleLogout}>
            Logout
          </button>
        </div>
      );
    }
  };
  return <div>{isLoggedIn()}</div>;
};

export default App;
