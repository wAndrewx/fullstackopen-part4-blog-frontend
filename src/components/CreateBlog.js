import React, { useState, useImperativeHandle } from "react";

export const CreateBlog = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const isVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
    return visible;
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility }; // make sure you return it as an object
  });
  return (
    <div>
      <div style={isVisible}>
        <h2>Create a Blog</h2>
        <form onSubmit={props.handleCreation}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={(e) => {
              props.handleTitle(e.target.value);
            }}
          ></input>
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            onChange={(e) => {
              props.handleAuthor(e.target.value);
            }}
          ></input>
          <label htmlFor="url">URL</label>
          <input
            id="url"
            type="text"
            onChange={(e) => {
              props.handleURL(e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
});
