import axios from "axios";
import React, { useState } from "react";

const Blog = ({ blog }) => {
  const [info, setInfo] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const toggleInfo = () => {
    setInfo(!info);
    // console.log(likes);
  };

  const handleLike = async () => {
    try {
      const res = await axios.put(`/api/blogs/${blog.id}`, {
        likes: likes + 1,
      });
      setLikes(likes + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const MoreInfoJSX = () => {
    if (info) {
      return (
        <div>
          <div>
            {blog.title} by {blog.author}
            <button onClick={toggleInfo}> Less </button>
          </div>
          <div>{blog.url}</div>
          <div>
            {likes}
            <button onClick={handleLike}>Like</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {blog.title} by {blog.author}
          <button onClick={toggleInfo}> More </button>
        </div>
      );
    }
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    width: "25%",
    borderRadius: 5,
  };

  return <div style={blogStyle}>{MoreInfoJSX()}</div>;
};

export default Blog;
